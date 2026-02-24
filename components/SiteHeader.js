import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/">
          Grid<span>wise</span>
        </Link>
        <nav className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/poc">POC</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="cta" href="/contact">
          Start a Pilot
        </Link>
      </div>
    </header>
  );
}
