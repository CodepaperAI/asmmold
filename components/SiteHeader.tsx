import Link from "next/link";
import { ASM_SITE_URL, BRAND_ASSETS } from "@/lib/blogs";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Site header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand-lockup" href="/" aria-label="ASM Mold Removal blog home">
          <img src={BRAND_ASSETS.headerLogo} alt="ASM Mold Removal Inc." width={96} height={60} />
          <span>
            <strong>ASM Mold Removal</strong>
            <small>Learning Centre</small>
          </span>
        </Link>

        <div className="nav-links" aria-label="ASM links">
          <a href={`${ASM_SITE_URL}/`}>Home</a>
          <a href={`${ASM_SITE_URL}/about`}>About</a>
          <a href={`${ASM_SITE_URL}/contact`}>Contact</a>
        </div>

        <a className="call-button" href="tel:+16474510493">
          <span aria-hidden="true">Call</span>
          <strong>647-451-0493</strong>
        </a>
      </nav>
    </header>
  );
}
