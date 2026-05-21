import { BlogExplorer } from "@/components/BlogExplorer";
import { Hero } from "@/components/Hero";
import { ServiceBand } from "@/components/ServiceBand";
import { TrustStrip } from "@/components/TrustStrip";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 300;

export default async function HomePage() {
  const { blogs, usedFallback } = await getBlogs();

  return (
    <>
      <Hero />
      <TrustStrip />
      <BlogExplorer blogs={blogs} usedFallback={usedFallback} />
      <ServiceBand />
    </>
  );
}
