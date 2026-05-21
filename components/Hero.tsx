export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Ontario same-day response</p>
          <h1 id="hero-title">ASM Mold Removal Learning Centre</h1>
          <p className="hero-lede">
            Practical mold inspection, mitigation, and remediation guides written for Ontario
            homeowners, real estate teams, and facility managers.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="primary-action" href="#blog-feed">
              Explore Guides
            </a>
            <a className="secondary-action" href="https://asmmoldremoval.ca/contact">
              Book Inspection
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Service credentials">
          <div>
            <span className="proof-number">24-48h</span>
            <span className="proof-label">critical moisture window</span>
          </div>
          <div>
            <span className="proof-number">HEPA</span>
            <span className="proof-label">containment focused cleanup</span>
          </div>
          <div>
            <span className="proof-number">All ON</span>
            <span className="proof-label">service across Ontario</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
