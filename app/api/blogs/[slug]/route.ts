import { NextResponse } from "next/server";
import { getBlog } from "@/lib/blogs";

export const revalidate = 300;

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const blog = await getBlog(slug);

  if (!blog) {
    return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: { blog } });
}
