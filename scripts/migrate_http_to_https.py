#!/usr/bin/env python3
"""
Migration script: convert http:// website URLs to https:// in the funeral_homes table.
Supports --dry-run flag for safe preview before live execution.
Idempotent. Safe to run multiple times.

Usage:
    python3 scripts/migrate_http_to_https.py --dry-run   # preview only, no DB writes
    python3 scripts/migrate_http_to_https.py             # live mode, updates DB
"""

import os
import sys
import csv
import time
import argparse
import concurrent.futures
import requests
from datetime import date
from pathlib import Path

# Load env from .env.local
env_path = Path(__file__).parent.parent / '.env.local'
if env_path.exists():
    with open(env_path) as f:
        for line in f:
            if '=' in line and not line.startswith('#'):
                key, val = line.strip().split('=', 1)
                os.environ.setdefault(key, val.strip('"'))

SUPABASE_URL = "https://yyvbsclpblhanyncnmgc.supabase.co"
SUPABASE_KEY = os.environ.get('SUPABASE_SERVICE_ROLE_KEY', '')

if not SUPABASE_KEY:
    print("ERROR: SUPABASE_SERVICE_ROLE_KEY not found in environment or .env.local")
    sys.exit(1)

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal",
}


def test_https(url):
    """Test if https:// version of a URL responds with 2xx/3xx."""
    https_url = url.replace('http://', 'https://', 1)
    try:
        resp = requests.head(https_url, timeout=5, allow_redirects=True)
        if 200 <= resp.status_code < 400:
            return https_url
    except (requests.RequestException, requests.Timeout, Exception):
        pass
    return None


def fetch_http_urls():
    """Fetch all funeral home records with http:// website URLs."""
    all_records = []
    offset = 0
    while True:
        resp = requests.get(
            f"{SUPABASE_URL}/rest/v1/funeral_homes",
            headers=HEADERS,
            params={
                "select": "id,business_name,city,state,website",
                "website": "like.http://*",
                "offset": str(offset),
                "limit": "1000",
            }
        )
        if resp.status_code != 200:
            print(f"ERROR fetching records: HTTP {resp.status_code} {resp.text[:200]}")
            sys.exit(1)
        batch = resp.json()
        if not batch:
            break
        all_records.extend(batch)
        if len(batch) < 1000:
            break
        offset += 1000
    return all_records


def update_record(record_id, new_url):
    """Update a single record's website field in the database."""
    resp = requests.patch(
        f"{SUPABASE_URL}/rest/v1/funeral_homes",
        headers=HEADERS,
        params={"id": f"eq.{record_id}"},
        json={"website": new_url}
    )
    return resp.status_code in (200, 204)


def main():
    parser = argparse.ArgumentParser(description="Migrate http:// URLs to https:// in funeral_homes table")
    parser.add_argument('--dry-run', action='store_true', help='Preview changes without writing to database')
    args = parser.parse_args()

    dry_run = args.dry_run

    print("=" * 60)
    if dry_run:
        print("DRY RUN MODE: no database changes will be made")
    else:
        print("LIVE MODE: database will be updated")
    print("=" * 60)
    print()

    print("Fetching funeral homes with http:// website URLs...")
    records = fetch_http_urls()
    total = len(records)
    print(f"Found {total} records with http:// URLs\n")

    if total == 0:
        print("Nothing to migrate. All URLs are already https:// or empty.")
        return

    migrated = []
    kept_http = []
    errors = 0

    def process_record(record):
        url = record.get('website', '')
        if not url or not url.startswith('http://'):
            return ('skip', record, None)
        https_url = test_https(url)
        if https_url:
            return ('migrate', record, https_url)
        else:
            return ('keep', record, url)

    print(f"Testing https:// equivalents (max 8 concurrent workers)...")
    start = time.time()

    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(process_record, r): r for r in records}
        for i, future in enumerate(concurrent.futures.as_completed(futures), 1):
            result = future.result()
            results.append(result)
            if i % 100 == 0:
                elapsed = time.time() - start
                print(f"  Processed {i}/{total} ({elapsed:.0f}s elapsed)")

    print(f"\nTesting complete ({time.time() - start:.0f}s total).")

    # Separate results
    for action, record, url in results:
        if action == 'migrate':
            migrated.append((record, url))
        elif action == 'keep':
            kept_http.append(record)

    if dry_run:
        # Write preview CSV
        csv_path = Path(__file__).parent / f"migration_preview_{date.today().isoformat()}.csv"
        with open(csv_path, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['id', 'business_name', 'city', 'state', 'old_url', 'new_url'])
            for record, new_url in migrated:
                writer.writerow([
                    record['id'],
                    record.get('business_name', ''),
                    record.get('city', ''),
                    record.get('state', ''),
                    record.get('website', ''),
                    new_url,
                ])
        print(f"\nPreview CSV written to: {csv_path}")
        print(f"\nSample entries (first 10):")
        for record, new_url in migrated[:10]:
            print(f"  WOULD UPDATE: id={record['id'][:8]}... {record.get('website','')} -> {new_url}")
    else:
        # Apply updates
        print(f"\nApplying {len(migrated)} database updates...")
        update_success = 0
        update_fail = 0
        for i, (record, new_url) in enumerate(migrated, 1):
            if update_record(record['id'], new_url):
                update_success += 1
            else:
                update_fail += 1
                errors += 1
            if i % 100 == 0:
                print(f"  Updated {i}/{len(migrated)}")
        migrated_count = update_success

    print(f"\n{'=' * 60}")
    print(f"MIGRATION {'PREVIEW' if dry_run else 'COMPLETE'}")
    print(f"Mode: {'DRY RUN' if dry_run else 'LIVE'}")
    print(f"{'=' * 60}")
    print(f"Total URLs processed: {total}")
    if dry_run:
        print(f"Would migrate to https://: {len(migrated)}")
    else:
        print(f"Successfully migrated to https://: {migrated_count}")
    print(f"Kept as http:// (https:// version failed): {len(kept_http)}")
    print(f"Errors / update failures: {errors}")


if __name__ == "__main__":
    main()
