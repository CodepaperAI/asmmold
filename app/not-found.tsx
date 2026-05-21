import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">Guide not found</p>
      <h1>This ASM guide may have moved or is not published yet.</h1>
      <Link className="primary-action" href="/#blog-feed">
        Back to guides
      </Link>
    </section>
  );
}
