import { NextResponse } from "next/server";
import { getBlogs } from "@/lib/blogs";

export const revalidate = 300;

export async function GET() {
  const result = await getBlogs();
  return NextResponse.json({ success: true, data: result });
}
