export const metadata = {
  title: "Contact | gridwise",
  description: "Run a pilot or request a briefing."
};

export default function ContactPage() {
  return (
    <section className="section container">
      <div className="pill">Contact</div>
      <h1 className="section-title">Run a pilot or request a briefing.</h1>
      <p className="section-lead">
        Reach the gridwise team to discuss industrial flexibility opportunities,
        pilot scope and utility coordination pathways.
      </p>
      <div className="hero-actions">
        <a className="button-primary" href="mailto:contact@gridwise.nz?subject=Run%20a%20Pilot">
          Run a Pilot
        </a>
        <a
          className="button-secondary"
          href="mailto:contact@gridwise.nz?subject=Request%20a%20Briefing"
        >
          Request a Briefing
        </a>
      </div>
      <div className="card" style={{ marginTop: "24px" }}>
        <p>Auckland, New Zealand</p>
        <a href="mailto:contact@gridwise.nz">contact@gridwise.nz</a>
      </div>
    </section>
  );
}
