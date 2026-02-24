export const metadata = {
  title: "Contact | Gridwise",
  description: "Start a pilot or request a briefing."
};

export default function ContactPage() {
  return (
    <section className="section container">
      <div className="pill">Contact</div>
      <h1 className="section-title">Let’s design a pilot.</h1>
      <p className="section-lead">
        We are actively engaging with enterprise operators, grid stakeholders,
        and public agencies. Share your objectives and we will follow up with a
        tailored pilot roadmap.
      </p>

      <div className="split">
        <form className="form">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Work email" />
          <input type="text" name="org" placeholder="Organisation" />
          <textarea name="message" placeholder="Tell us about your energy objectives." />
          <button className="button-primary" type="submit">
            Submit
          </button>
        </form>
        <div className="card">
          <div className="pill">Direct</div>
          <p style={{ marginTop: "16px" }}>Auckland, New Zealand</p>
          <p>contact@Gridwise.com</p>
          <div style={{ marginTop: "24px" }}>
            <div className="tag">Focus Areas</div>
            <ul style={{ marginTop: "12px", display: "grid", gap: "10px" }}>
              <li>Industrial & infrastructure energy orchestration</li>
              <li>Digital twin modelling and validation</li>
              <li>Demand response readiness and flexibility aggregation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
