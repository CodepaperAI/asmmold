import { ASM_SITE_URL } from "@/lib/blogs";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>ASM Mold Removal Inc.</strong>
        <span>Attic, basement, crawl space, commercial, and black mold remediation.</span>
      </div>
      <nav aria-label="Footer navigation">
        <a href={`${ASM_SITE_URL}/`}>Main Website</a>
        <a href={`${ASM_SITE_URL}/contact`}>Book Online</a>
        <a href="mailto:info@asmmoldremoval.ca">Email</a>
      </nav>
    </footer>
  );
}
