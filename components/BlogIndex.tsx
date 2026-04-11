'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';

type Post = { slug: string; title: string; description: string; category: string };
type Category = { name: string; subtitle?: string; posts: { slug: string; title: string; description: string }[] };

function postHref(slug: string) {
  if (slug.startsWith('/')) return slug;
  return `/blog/${slug}`;
}

export default function BlogIndex({ categories }: { categories: Category[] }) {
  const [query, setQuery] = useState('');

  const allPosts: Post[] = useMemo(
    () => categories.flatMap((cat) => cat.posts.map((p) => ({ ...p, category: cat.name }))),
    [categories]
  );

  const fuse = useMemo(
    () => new Fuse(allPosts, { keys: ['title', 'description'], threshold: 0.35 }),
    [allPosts]
  );

  const results = query.trim() ? fuse.search(query).map((r) => r.item) : null;

  return (
    <>
      <div className="mb-10">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search all guides and articles..."
          className="w-full px-5 py-3 text-base border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
        />
      </div>

      {results !== null ? (
        results.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {results.map((post) => (
              <Link key={post.slug} href={postHref(post.slug)} className="block bg-white bg-opacity-90 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded">{post.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-1 hover:text-slate-600 transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 mb-14">
            <p className="text-lg text-gray-500">No results found for &quot;{query}&quot;</p>
            <p className="text-sm text-gray-400 mt-2">Try a different search term or browse by category below.</p>
            <button onClick={() => setQuery('')} className="mt-4 text-slate-600 hover:text-slate-800 font-medium text-sm">Clear search</button>
          </div>
        )
      ) : (
        categories.map((cat) => (
          <section key={cat.name} className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">{cat.name}</h2>
            {cat.subtitle && <p className="text-sm text-gray-500 mb-6">{cat.subtitle}</p>}
            <div className="grid md:grid-cols-2 gap-4">
              {cat.posts.map((post) => (
                <Link key={post.slug} href={postHref(post.slug)} className="block bg-white bg-opacity-90 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-slate-600 transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </>
  );
}
