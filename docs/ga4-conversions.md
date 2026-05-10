# GA4 Conversion Event Tracking

Measurement ID: G-S3GRCTG9CF
Implemented: May 2026

## Events

### 1. view_listing_detail
- **Fires:** When a user loads an individual listing page at /funeral-homes/[state]/[city]/[slug]
- **Trigger:** useEffect on mount in ListingTracker component
- **File:** components/ListingTracker.tsx
- **Parameters:**
  - listing_name (string): business name
  - listing_state (string): 2-letter state code
  - listing_city (string): city name
  - listing_provider_type (string): full_service, direct_cremation, cemetery, combination, or pet_cremation

### 2. click_listing_website
- **Fires:** When a user clicks "Visit Website" on a listing detail page
- **Trigger:** onClick on WebsiteLink component
- **File:** components/ListingTracker.tsx (WebsiteLink), used in app/funeral-homes/[state]/[city]/[slug]/page.tsx
- **Parameters:** same as view_listing_detail

### 3. click_listing_phone
- **Fires:** When a user clicks "Call [phone]" button on a listing detail page
- **Trigger:** onClick on PhoneLink component
- **File:** components/ListingTracker.tsx (PhoneLink), used in app/funeral-homes/[state]/[city]/[slug]/page.tsx
- **Parameters:** same as view_listing_detail

### 4. submit_contact_form
- **Fires:** After a contact form submission returns HTTP 200
- **Trigger locations:**
  - Sidebar contact form: inline JS in submitContact() function (app/funeral-homes/[state]/[city]/[slug]/page.tsx line ~663)
  - Inline lead form: React handler in components/InlineLeadForm.tsx
- **Parameters:**
  - listing_name, listing_state, listing_city, listing_provider_type (same as above)
  - form_message_length (number): character count of the message field
  - form_preference (string): "call", "text", "email", or "inline_form"

## Sample Event Payload
```json
{
  "event": "click_listing_website",
  "listing_name": "Singing Hills Funeral Home",
  "listing_state": "TX",
  "listing_city": "Dallas",
  "listing_provider_type": "full_service"
}
```

## Files Modified
- lib/analytics.ts (new): helper functions for all 4 events
- components/ListingTracker.tsx (new): client components for view tracking, website link, phone link
- components/InlineLeadForm.tsx (modified): added submit_contact_form event on success
- app/funeral-homes/[state]/[city]/[slug]/page.tsx (modified): wired ListingTracker, WebsiteLink, PhoneLink, and inline JS gtag call

## Mark as Conversions in GA4 (Manual Step)

After the first events fire (allow 1 to 24 hours), do this in the GA4 UI:

1. Go to GA4 at analytics.google.com
2. Select the funeralhomedirectories.com property
3. Navigate to Admin > Events (or Configure > Events)
4. Wait for these 4 events to appear in the list
5. Toggle "Mark as conversion" for:
   - click_listing_website (buyer intent)
   - click_listing_phone (buyer intent)
   - submit_contact_form (buyer intent)
   - view_listing_detail (engagement signal, optional as conversion)
6. The first 3 are the primary buyer-intent signals for sales reporting
