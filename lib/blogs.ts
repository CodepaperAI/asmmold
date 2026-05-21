export type BlogMeta = {
  seoTitle?: string;
  seoDescription?: string;
  focusKeyword?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTags?: string[];
};

export type Blog = {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  status?: string;
  publishDate?: string;
  publishTime?: string;
  featuredImage?: string;
  categories?: string[];
  tags?: string[];
  seoScore?: number;
  createdAt?: string;
  updatedAt?: string;
  authorName?: string | null;
  authorUrl?: string | null;
  freshness?: {
    lastUpdatedAt?: string;
    ageDays?: number;
    needsRefresh?: boolean;
    freshnessThresholdDays?: number;
  };
  meta?: BlogMeta;
  customFields?: {
    readingTime?: string;
    rating?: number;
    [key: string]: unknown;
  };
};

type BlogListPayload = {
  success: boolean;
  data?: {
    blogs?: Blog[];
    pagination?: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
  error?: string;
};

type BlogDetailPayload = {
  success: boolean;
  data?: {
    blog?: Blog;
  };
  error?: string;
};

export type BlogListResult = {
  blogs: Blog[];
  usedFallback: boolean;
};

export const ASM_SITE_URL = "https://asmmoldremoval.ca";
export const FALLBACK_IMAGE =
  "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/service-worker-cleaning-furniture-AM6WLLZ.jpg/:/rs=w:1200,m";

export const BRAND_ASSETS = {
  headerLogo:
    "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/logo.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:229,h:143,cg:true",
  hero:
    "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/service-worker-cleaning-furniture-AM6WLLZ.jpg/:/rs=w:1920,m",
  certificate:
    "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/Logo.png/:/rs=h:107,cg:true,m/qt=q:100/ll",
  guarantee:
    "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/guararantee.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:200,h:180,cg:true",
  rating:
    "https://img1.wsimg.com/isteam/ip/7a0254d7-0f5c-4f8b-90e0-5bb867c85659/5-star-rating-google.png/:/rs=w:115,h:115,cg:true,m/cr=w:115,h:115"
};

export const fallbackBlogs: Blog[] = [
  {
    title: "Mold Mitigation Services: Inspection Steps to Find Problems Early",
    slug: "mold-mitigation-services",
    excerpt:
      "Mold mitigation services prevent growth by controlling moisture and airflow. Learn how our Scarborough team documents, treats, and verifies prevention across Ontario.",
    content:
      "<p>Mold mitigation services reduce risk by controlling moisture, improving ventilation, and documenting conditions before mold spreads.</p><h2>What ASM Checks First</h2><p>Our team focuses on source moisture, airflow, containment needs, and safe prevention steps for Ontario homes and commercial spaces.</p>",
    publishDate: "2026-05-21",
    featuredImage:
      "https://res.cloudinary.com/dmboo1nu1/image/upload/v1779329239/ai-images/xjjpla4tfqmvuyb1gz3p.png",
    categories: ["Mold", "Remediation Guides"],
    tags: ["mold mitigation services", "mold damage", "Scarborough Toronto"],
    seoScore: 100,
    authorName: "Asmmoldremoval",
    customFields: { readingTime: "18 min read" },
    meta: {
      seoTitle: "Mold Mitigation Services Ontario",
      seoDescription:
        "Mold mitigation services from ASM Mold Removal Inc. help Ontario properties control moisture and prevent mold growth."
    }
  },
  {
    title: "Attic Mold Removal: Protect Your Home in 2026",
    slug: "attic-mold-removal-service",
    excerpt:
      "Attic mold removal service in Ontario with same-day inspections, HEPA containment, EPA-approved treatments, and a Mold Remediation Warranty Certificate.",
    content:
      "<p>Attic mold often starts with roof leaks, blocked soffits, warm air bypasses, or poor ventilation.</p><h2>How Attic Remediation Works</h2><p>ASM isolates the work area, uses HEPA filtration, treats affected sheathing, and verifies the attic before completion.</p>",
    publishDate: "2026-05-20",
    featuredImage:
      "https://res.cloudinary.com/dmboo1nu1/image/upload/v1779243311/ai-images/aypsd9dilbwbm8wvpabz.png",
    categories: ["Mold", "Home Services"],
    tags: ["attic mold removal service", "mold remediation Ontario", "Scarborough"],
    seoScore: 100,
    authorName: "Asmmoldremoval",
    customFields: { readingTime: "18 min read" },
    meta: {
      seoTitle: "Attic Mold Removal Service Ontario",
      seoDescription:
        "Same-day attic mold removal guidance from ASM Mold Removal Inc. for Ontario homeowners."
    }
  },
  {
    title: "Mold Inspection & Testing Scarborough: Safe, Fast Results",
    slug: "mold-inspection-testing-scarborough",
    excerpt:
      "Discover why professional mold inspection and testing matters in Scarborough. Learn benefits, steps, and how ASM Mold Removal Inc. protects your home.",
    content:
      "<p>Professional mold inspection finds visible growth, hidden moisture, and indoor air quality risks before they become larger problems.</p><h2>What Testing Can Confirm</h2><p>Air and surface sampling can help identify elevated spore conditions and guide targeted remediation.</p>",
    publishDate: "2026-05-19",
    featuredImage: "",
    categories: ["Mold Inspection", "Indoor Air Quality"],
    tags: ["mold testing", "home health", "attic mold", "basement moisture", "Scarborough ON"],
    seoScore: 75,
    authorName: "Asmmoldremoval",
    customFields: { readingTime: "5 min read" },
    meta: {
      seoTitle: "Mold Inspection & Testing Scarborough",
      seoDescription:
        "Certified mold inspection and testing guidance for Scarborough homes from ASM Mold Removal Inc."
    }
  }
];

const DEFAULT_UPLIFT_BLOGS_URL = "https://api.upliftai.co/api/public/v1/blogs";

function token() {
  return process.env.UPLIFT_TOKEN?.trim();
}

function listUrl() {
  return process.env.UPLIFT_API_URL?.trim() || DEFAULT_UPLIFT_BLOGS_URL;
}

function detailUrl(slug: string) {
  const baseUrl = listUrl().replace(/\/blogs\/?$/, "/blog");
  return `${baseUrl}/${encodeURIComponent(slug)}`;
}

function sortBlogs(blogs: Blog[]) {
  return [...blogs].sort((a, b) => {
    const aTime = new Date(`${a.publishDate || a.updatedAt || a.createdAt || ""}T12:00:00`).getTime();
    const bTime = new Date(`${b.publishDate || b.updatedAt || b.createdAt || ""}T12:00:00`).getTime();
    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
  });
}

export async function getBlogs(): Promise<BlogListResult> {
  const upliftToken = token();

  if (!upliftToken) {
    return { blogs: sortBlogs(fallbackBlogs), usedFallback: true };
  }

  try {
    const response = await fetch(`${listUrl()}?status=PUBLISH&limit=100`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${upliftToken}`
      },
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      throw new Error(`Uplift returned ${response.status}`);
    }

    const payload = (await response.json()) as BlogListPayload;
    const blogs = payload.data?.blogs || [];

    if (!payload.success || blogs.length === 0) {
      throw new Error(payload.error || "No published blogs found");
    }

    return { blogs: sortBlogs(blogs), usedFallback: false };
  } catch {
    return { blogs: sortBlogs(fallbackBlogs), usedFallback: true };
  }
}

export async function getBlog(slug: string): Promise<Blog | null> {
  const upliftToken = token();

  if (upliftToken) {
    try {
      const response = await fetch(detailUrl(slug), {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${upliftToken}`
        },
        next: { revalidate: 300 }
      });

      if (response.ok) {
        const payload = (await response.json()) as BlogDetailPayload;
        if (payload.success && payload.data?.blog) return payload.data.blog;
      }
    } catch {
      // Fall back to cached summaries below.
    }
  }

  return fallbackBlogs.find((blog) => blog.slug === slug) || null;
}

export function postImage(blog: Blog) {
  return blog.featuredImage || FALLBACK_IMAGE;
}

export function categoryText(blog: Blog) {
  return blog.categories?.length ? blog.categories.join(" / ") : "Mold Guide";
}

export function readingTime(blog: Blog) {
  return blog.customFields?.readingTime || "Guide";
}

export function plainExcerpt(blog: Blog) {
  if (blog.excerpt) return blog.excerpt;
  return "Practical mold inspection, mitigation, and remediation guidance from ASM Mold Removal Inc.";
}

export function formatDate(value?: string) {
  if (!value) return "Recently updated";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
}
