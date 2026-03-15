export const metadata = {
  title: "Industries | gridwise",
  description: "Industrial sectors where operational demand flexibility can be coordinated."
};

export default function IndustriesPage() {
  return (
    <section className="section container">
      <div className="pill">Industries</div>
      <h1 className="section-title">Built for sectors where flexibility can be operationalised.</h1>
      <p className="section-lead">
        <strong>gridwise</strong> focuses on industries where operational flexibility can be
        coordinated without disrupting production outcomes.
      </p>

      <div className="grid grid-3">
        <div className="card">
          <h3>Manufacturing</h3>
          <p>Paper and pulp mills, steel production and heavy industrial processing.</p>
        </div>
        <div className="card">
          <h3>Food and Dairy Processing</h3>
          <p>Batch production systems and thermal process operations.</p>
        </div>
        <div className="card">
          <h3>Data Centres</h3>
          <p>Cooling optimisation and energy-aware workload coordination.</p>
        </div>
        <div className="card">
          <h3>Large Energy Consumers</h3>
          <p>Airports, ports and logistics hubs.</p>
        </div>
        <div className="card">
          <h3>Water and Wastewater Utilities</h3>
          <p>Pump scheduling and storage-based demand flexibility.</p>
        </div>
        <div className="card">
          <h3>EV Fleet Depots</h3>
          <p>Smart charging orchestration and charging window optimisation.</p>
        </div>
      </div>

      <div className="section">
        <div className="card">
          <div className="pill">Engagement Model</div>
          <p style={{ marginTop: "16px" }}>
            Engagement starts with an operational assessment, followed by
            facility modelling and optimisation scenario analysis to identify
            where flexibility can be unlocked with minimal production impact.
          </p>
        </div>
      </div>
    </section>
  );
}
