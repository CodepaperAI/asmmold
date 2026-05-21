"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Blog } from "@/lib/blogs";
import { categoryText, formatDate, postImage, readingTime } from "@/lib/blogs";

type BlogExplorerProps = {
  blogs: Blog[];
  usedFallback: boolean;
};

function FeaturedPost({ blog }: { blog?: Blog }) {
  if (!blog) return null;

  return (
    <article className="featured-card">
      <div className="featured-content">
        <div className="post-meta">
          <span>{formatDate(blog.publishDate)}</span>
          <span>{readingTime(blog)}</span>
          <span>{categoryText(blog)}</span>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <Link className="read-link" href={`/${blog.slug}`}>
          Read guide
        </Link>
      </div>
      <img src={postImage(blog)} alt={blog.title} loading="eager" decoding="async" />
    </article>
  );
}

function PostCard({ blog }: { blog: Blog }) {
  return (
    <Link className="post-card" href={`/${blog.slug}`}>
      <div className="post-card-media">
        <img src={postImage(blog)} alt={blog.title} loading="eager" decoding="async" />
      </div>
      <div className="post-card-body">
        <div className="category-line">{categoryText(blog)}</div>
        <h3>{blog.title}</h3>
        <p>{blog.excerpt}</p>
        <div className="post-card-footer">
          <span>{formatDate(blog.publishDate)}</span>
          <span>{readingTime(blog)}</span>
        </div>
      </div>
    </Link>
  );
}

export function BlogExplorer({ blogs, usedFallback }: BlogExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(() => {
    const allCategories = new Set(["All"]);
    blogs.forEach((blog) => {
      blog.categories?.forEach((category) => allCategories.add(category));
    });
    return [...allCategories];
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || Boolean(blog.categories?.includes(selectedCategory));
      const haystack = [
        blog.title,
        blog.excerpt,
        blog.meta?.focusKeyword,
        ...(blog.categories || []),
        ...(blog.tags || [])
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!term || haystack.includes(term));
    });
  }, [blogs, searchTerm, selectedCategory]);

  const [featured, ...rest] = filteredBlogs;

  return (
    <section className="blog-section" aria-labelledby="blog-feed-title">
      <div className="section-intro">
        <p className="eyebrow">Latest posts</p>
        <h2 id="blog-feed-title">Mold prevention starts with knowing what to look for.</h2>
        <p>
          Browse field-tested articles on attics, basements, crawl spaces, air quality, and
          evidence-backed remediation planning.
        </p>
      </div>

      <div className="feed-toolbar" id="blog-feed">
        <label className="search-box" htmlFor="search-input">
          <span>Search</span>
          <input
            id="search-input"
            type="search"
            placeholder="Search mold topics"
            autoComplete="off"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>

        <div className="filter-group" aria-label="Article categories">
          {categories.map((category) => (
            <button
              className="filter-chip"
              type="button"
              key={category}
              aria-pressed={category === selectedCategory}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {usedFallback ? (
        <div className="status-banner is-error" role="status">
          Showing cached ASM guide summaries. Set <code>UPLIFT_TOKEN</code> in the deployment
          environment to load live posts.
        </div>
      ) : null}

      <section className="featured-post" aria-label="Featured blog post">
        <FeaturedPost blog={featured} />
      </section>

      <section className="blog-grid" aria-label="Blog posts">
        {rest.length > 0 ? (
          rest.map((blog) => <PostCard key={blog.slug} blog={blog} />)
        ) : (
          <div className="empty-state">
            <strong>No matching guides yet.</strong>
            <p>Try a broader search or switch the category filter back to All.</p>
          </div>
        )}
      </section>
    </section>
  );
}
