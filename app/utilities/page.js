export const metadata = {
  title: "Utilities | gridwise",
  description: "Grid value from industrial demand-side intelligence and flexibility coordination."
};

export default function UtilitiesPage() {
  return (
    <section className="section container">
      <div className="pill">Utilities</div>
      <h1 className="section-title">Demand-side intelligence for utility and grid outcomes.</h1>
      <p className="section-lead">
        Utilities and grid operators need reliable demand flexibility to support
        renewable integration, manage peak stress and improve utilisation of
        existing infrastructure.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Peak Pressure Reduction</h3>
          <p>Coordinate flexible industrial demand away from high-stress periods.</p>
        </div>
        <div className="card">
          <h3>Renewable Integration Support</h3>
          <p>Improve alignment of industrial operations with renewable generation patterns.</p>
        </div>
        <div className="card">
          <h3>Grid Capacity Utilisation</h3>
          <p>Improve utilisation of existing network and connection capacity.</p>
        </div>
      </div>

      <div className="section">
        <div className="split">
          <div>
            <h2 className="section-title">System-level value creation</h2>
            <div className="grid">
              <div className="card">
                <h3>Demand flexibility activation</h3>
                <p>Enable industrial demand to respond to grid conditions in a structured way.</p>
              </div>
              <div className="card">
                <h3>Reduced emergency dependence</h3>
                <p>Lower reliance on emergency generation during stressed intervals.</p>
              </div>
              <div className="card">
                <h3>Resilience under variability</h3>
                <p>Improve system resilience in weather-driven and high-variability conditions.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="pill">Who We Work With</div>
            <ul style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
              <li>Distribution network operators</li>
              <li>Retailers and market participants</li>
              <li>System planners and policy agencies</li>
              <li>Large industrial customer portfolios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
