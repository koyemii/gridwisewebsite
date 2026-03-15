import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            grid<span>wise</span>
          </div>
          <p>
            AI-native operational intelligence for energy-intensive industries.
          </p>
        </div>
        <div>
          <div className="tag">Navigate</div>
          <div className="grid" style={{ marginTop: "12px" }}>
            <Link href="/product">Product</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/utilities">Utilities</Link>
            <Link href="/poc">POC</Link>
            <Link href="/team">Team</Link>
          </div>
        </div>
        <div>
          <div className="tag">Contact</div>
          <p style={{ marginTop: "12px" }}>Auckland, New Zealand</p>
          <a href="mailto:contact@gridwise.nz">contact@gridwise.nz</a>
        </div>
      </div>
      <div className="container" style={{ marginTop: "24px", fontSize: "12px" }}>
        Pilot outcomes are based on modelling and scenario analysis. Results
        depend on facility-specific operational constraints, tariff structures
        and electricity market conditions.
      </div>
      <div className="container" style={{ marginTop: "12px", fontSize: "12px" }}>
        © 2026 gridwise. All rights reserved.
      </div>
    </footer>
  );
}
