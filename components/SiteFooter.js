import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="logo">
            Grid<span>wise</span>
          </div>
          <p>
            AI-native orchestration and digital twin platform for distributed
            industrial and infrastructure energy systems.
          </p>
        </div>
        <div>
          <div className="tag">Navigate</div>
          <div className="grid" style={{ marginTop: "12px" }}>
            <Link href="/product">Product</Link>
            <Link href="/poc">POC</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <div className="tag">Contact</div>
          <p style={{ marginTop: "12px" }}>Auckland, New Zealand</p>
          <a href="mailto:contact@Gridwise.com">contact@Gridwise.com</a>
        </div>
      </div>
      <div className="container" style={{ marginTop: "24px", fontSize: "12px" }}>
        © 2026 Gridwise. All rights reserved.
      </div>
    </footer>
  );
}
