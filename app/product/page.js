export const metadata = {
  title: "Product | Gridwise",
  description: "Platform capabilities and architecture."
};

export default function ProductPage() {
  return (
    <section className="section container">
      <div className="pill">Product</div>
      <h1 className="section-title">AI-native orchestration built for real-world operations.</h1>
      <p className="section-lead">
        Gridwise connects digital twins, predictive intelligence, and
        multi-agent control to optimise enterprise energy performance while
        delivering system-level flexibility.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Signal Intelligence</h3>
          <p>
            Ingests operational data, price signals, weather forecasts, and
            renewable availability proxies to anticipate conditions and
            coordinate assets in advance.
          </p>
        </div>
        <div className="card">
          <h3>Asset Orchestration</h3>
          <p>
            Coordinates HVAC, refrigeration, storage, EV charging, and critical
            process loads with constraint-aware decisioning.
          </p>
        </div>
        <div className="card">
          <h3>System Coordination</h3>
          <p>
            Aggregates flexibility across portfolios to support demand response,
            reduce peak demand, and strengthen grid reliability.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="split">
          <div>
            <h2 className="section-title">Designed for high-renewable grids.</h2>
            <p className="section-lead">
              Gridwise is purpose-built for renewable-dominant systems where
              supply variability needs intelligent, demand-side coordination.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Multi-Objective Optimisation</h3>
                <p>
                  Balances cost, carbon, reliability, and operational
                  productivity in a single optimisation engine.
                </p>
              </div>
              <div className="card">
                <h3>Explainable Decisioning</h3>
                <p>
                  Generates executive-ready explanations, audit trails, and
                  scenario comparisons for CFO and operations teams.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pill">Core Outcomes</div>
            <ul style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
              <li>8–15% enterprise energy cost reduction</li>
              <li>10–20% peak demand reduction</li>
              <li>Improved asset utilisation and maintenance planning</li>
              <li>Aggregated flexibility for system support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
