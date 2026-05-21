import { BRAND_ASSETS } from "@/lib/blogs";

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="ASM trust signals">
      <div className="trust-item">
        <img src={BRAND_ASSETS.certificate} alt="Certified CMR Mold Remediation" width={82} height={82} />
        <span>Certified remediation guidance</span>
      </div>
      <div className="trust-item">
        <img src={BRAND_ASSETS.guarantee} alt="ASM service guarantee" width={86} height={76} />
        <span>Warranty certificate after completed remediation</span>
      </div>
      <div className="trust-item">
        <img src={BRAND_ASSETS.rating} alt="Google five star rating" width={82} height={82} />
        <span>Local, documented project experience</span>
      </div>
    </section>
  );
}
