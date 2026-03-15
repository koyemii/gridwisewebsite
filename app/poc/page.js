export const metadata = {
  title: "POC | gridwise",
  description: "Pilot programme and proof-of-concept validation pathway."
};

export default function PocPage() {
  return (
    <section className="section container">
      <div className="pill">POC</div>
      <h1 className="section-title">Pilot programme for industrial operational flexibility.</h1>
      <p className="section-lead">
        Early partner facilities work with <strong>gridwise</strong> to identify operational
        flexibility and quantify potential energy optimisation opportunities.
      </p>

      <div className="timeline">
        <div className="timeline-item">
          <strong>Phase 1 - Operational Assessment</strong>
          <span>Understand energy-intensive processes and operational constraints.</span>
        </div>
        <div className="timeline-item">
          <strong>Phase 2 - Facility Modelling</strong>
          <span>Build an operational model of energy assets and process interactions.</span>
        </div>
        <div className="timeline-item">
          <strong>Phase 3 - Optimisation Scenarios</strong>
          <span>Evaluate scheduling strategies under varying market and grid conditions.</span>
        </div>
        <div className="timeline-item">
          <strong>Phase 4 - Pilot Results</strong>
          <span>Deliver quantified outputs for cost, flexibility and grid support outcomes.</span>
        </div>
      </div>

      <div className="section">
        <div className="grid grid-3">
          <div className="card">
            <h3>Cost Optimisation Insight</h3>
            <p>Quantified opportunities to reduce exposure to peak electricity prices.</p>
          </div>
          <div className="card">
            <h3>Operational Flexibility Insight</h3>
            <p>Estimated demand flexibility potential under facility-specific constraints.</p>
          </div>
          <div className="card">
            <h3>Grid Support Insight</h3>
            <p>Potential contributions to peak reduction and infrastructure utilisation.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <a className="button-primary" href="mailto:contact@gridwise.nz?subject=Run%20a%20Pilot">
          Run a Pilot
        </a>
      </div>
    </section>
  );
}
