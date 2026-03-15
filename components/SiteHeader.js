import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav">
        <Link className="logo" href="/">
          grid<span>wise</span>
        </Link>
        <nav className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/utilities">Utilities</Link>
          <Link href="/poc">POC</Link>
          <Link href="/team">Team</Link>
        </nav>
        <a className="cta" href="mailto:contact@gridwise.nz?subject=Run%20a%20Pilot">
          Run a Pilot
        </a>
      </div>
    </header>
  );
}
