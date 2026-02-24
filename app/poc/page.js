export const metadata = {
  title: "POC | Gridwise",
  description: "Proof-of-concept program and validation pathway."
};

export default function PocPage() {
  return (
    <section className="section container">
      <div className="pill">Proof of Concept</div>
      <h1 className="section-title">Enterprise + System impact in a 6–9 month pilot.</h1>
      <p className="section-lead">
        The Gridwise POC demonstrates real-world orchestration outcomes using
        public New Zealand datasets and a synthetic archetype site digital twin.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Archetype Site</h3>
          <p>
            Infrastructure energy hub model with flexible cooling, backup
            batteries, and dispatchable loads.
          </p>
        </div>
        <div className="card">
          <h3>System Signals</h3>
          <p>
            Overlay price data, temperature, and renewable availability proxies
            to simulate grid variability and response.
          </p>
        </div>
        <div className="card">
          <h3>Multi-Agent Control</h3>
          <p>
            AI agents coordinate load shifting, battery dispatch, and asset
            scheduling to minimise cost and peak demand.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="split">
          <div>
            <h2 className="section-title">POC roadmap</h2>
            <div className="timeline">
              <div className="timeline-item">
                <strong>Weeks 1–2</strong>
                <span>Data ingestion and baseline digital twin build.</span>
              </div>
              <div className="timeline-item">
                <strong>Weeks 3–4</strong>
                <span>Multi-agent orchestration logic + scenario engine.</span>
              </div>
              <div className="timeline-item">
                <strong>Weeks 5–6</strong>
                <span>Portfolio aggregation and system impact dashboard.</span>
              </div>
              <div className="timeline-item">
                <strong>Weeks 7–8</strong>
                <span>Executive reporting, pilot readiness, and validation plan.</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pill">Target Outcomes</div>
            <ul style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
              <li>Quantified enterprise ROI and peak reduction</li>
              <li>Aggregated MW flexibility potential per 100 sites</li>
              <li>Demand response readiness and pricing sensitivity</li>
              <li>Evidence-based pilot deployment pathway</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
