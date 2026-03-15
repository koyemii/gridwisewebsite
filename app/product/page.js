export const metadata = {
  title: "Product | gridwise",
  description: "AI-native operational intelligence platform for industrial energy optimisation."
};

export default function ProductPage() {
  return (
    <section className="section container">
      <div className="pill">Product</div>
      <h1 className="section-title">AI-native operational intelligence for industrial energy demand.</h1>
      <p className="section-lead">
        gridwise connects facility operations with electricity system
        conditions, identifying when and how energy-intensive processes can be
        coordinated to improve economic and system outcomes.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Condition Awareness</h3>
          <p>
            Continuously evaluates electricity prices, renewable generation
            patterns and grid conditions.
          </p>
        </div>
        <div className="card">
          <h3>Operational Coordination</h3>
          <p>
            Coordinates operational decisions across energy-intensive equipment
            and process steps.
          </p>
        </div>
        <div className="card">
          <h3>Constraint Respect</h3>
          <p>
            All optimisation is bounded by production throughput, product
            quality and operational safety constraints.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="split">
          <div>
            <h2 className="section-title">Typical optimisation actions</h2>
            <div className="grid">
              <div className="card">
                <h3>Process scheduling</h3>
                <p>Delay or reschedule eligible batch processes.</p>
              </div>
              <div className="card">
                <h3>Dynamic process modulation</h3>
                <p>Modulate motors and pumps where process limits allow.</p>
              </div>
              <div className="card">
                <h3>Thermal pre-conditioning</h3>
                <p>Pre-cool refrigeration or pre-heat thermal systems ahead of peak periods.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pill">Published Metrics</div>
            <ul style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
              <li>10-25% operational demand flexibility potential</li>
              <li>Reduced exposure to peak electricity prices</li>
              <li>Improved alignment with renewable generation</li>
              <li>Improved grid capacity utilisation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
