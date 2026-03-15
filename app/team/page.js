export const metadata = {
  title: "Team | gridwise",
  description: "Founder and advisor credibility."
};

export default function TeamPage() {
  return (
    <section className="section container">
      <div className="pill">Team</div>
      <h1 className="section-title">Built by AI and operational intelligence practitioners.</h1>
      <p className="section-lead">
        gridwise is focused on helping industrial facilities operate more
        intelligently within renewable electricity systems.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Anshuman Banerjee</h3>
          <p>Founder</p>
          <p>
            Technology and AI leader with experience building enterprise AI
            platforms and operational intelligence systems. gridwise was founded
            to explore how industrial facilities can operate more intelligently
            within renewable electricity systems.
          </p>
        </div>
        <div className="card">
          <h3>Michael Witbrock</h3>
          <p>Advisor</p>
          <p>
            Professor of Artificial Intelligence at the University of Auckland.
          </p>
        </div>
        <div className="card">
          <h3>Engagement Focus</h3>
          <p>
            Industrial pilot deployment, operational modelling and utility
            coordination for demand-side flexibility outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
