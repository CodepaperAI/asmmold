import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceBand } from "@/components/ServiceBand";
import {
  categoryText,
  formatDate,
  getBlog,
  getBlogs,
  plainExcerpt,
  postImage,
  readingTime
} from "@/lib/blogs";
import { cleanBlogHtml } from "@/lib/html";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  const { blogs } = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Guide Not Found"
    };
  }

  const title = blog.meta?.seoTitle || blog.title;
  const description = blog.meta?.seoDescription || plainExcerpt(blog);
  const image = postImage(blog);

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title: blog.meta?.ogTitle || title,
      description: blog.meta?.ogDescription || description,
      images: [image],
      publishedTime: blog.publishDate,
      modifiedTime: blog.updatedAt,
      authors: blog.authorName ? [blog.authorName] : undefined,
      section: blog.categories?.[0],
      tags: blog.tags
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    }
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  const articleHtml = cleanBlogHtml(blog.content || "");

  return (
    <>
      <article className="article-view">
        <Link className="back-link" href="/#blog-feed">
          Back to all guides
        </Link>
        <header className="article-hero">
          <div className="post-meta article-meta">
            <span>{formatDate(blog.publishDate)}</span>
            <span>{readingTime(blog)}</span>
            <span>{categoryText(blog)}</span>
          </div>
          <h1>{blog.title}</h1>
          <p>{plainExcerpt(blog)}</p>
          <img className="article-cover" src={postImage(blog)} alt={blog.title} loading="eager" decoding="async" />
        </header>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{
            __html:
              articleHtml ||
              `<p>${plainExcerpt(blog)}</p><p>The full guide could not be loaded yet. Please check the Uplift token configuration.</p>`
          }}
        />
      </article>
      <ServiceBand />
    </>
  );
}
