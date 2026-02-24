export const metadata = {
  title: "Team | Gridwise",
  description: "Leadership and mission."
};

export default function TeamPage() {
  return (
    <section className="section container">
      <div className="pill">Team</div>
      <h1 className="section-title">Built by operators with AI and infrastructure depth.</h1>
      <p className="section-lead">
        Gridwise is led by a team focused on real-world deployment, system-level
        impact, and scalable AI infrastructure.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Anshuman Banerjee</h3>
          <p>Founder & CEO</p>
          <p>
            AI and data executive with experience in large-scale infrastructure
            systems and commercial deployment.
          </p>
        </div>
        <div className="card">
          <h3>Advisory Partners</h3>
          <p>
            A growing bench of energy, grid, and industrial operations advisors
            supporting pilot delivery and market expansion.
          </p>
        </div>
        <div className="card">
          <h3>Technical Team</h3>
          <p>
            Multi-disciplinary engineers focused on digital twins, optimisation,
            and multi-agent orchestration.
          </p>
        </div>
      </div>
    </section>
  );
}
