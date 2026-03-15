import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="eyebrow">AI-Native Operational Intelligence</div>
        <h1>Operational intelligence for energy-intensive industries.</h1>
        <p>
          gridwise helps industrial facilities align energy-intensive operations
          with electricity market conditions and renewable generation, reducing
          energy costs while supporting a more efficient power system.
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
      </section>

      <section className="section container">
        <div className="pill">The System Challenge</div>
        <h2 className="section-title">Dynamic grids require dynamic operations.</h2>
        <p className="section-lead">
          Electricity systems are becoming increasingly dynamic as renewable
          generation grows. Price volatility, grid congestion and extreme
          weather events are creating new operational challenges for industrial
          facilities and grid operators. Many processes contain flexibility that
          is rarely coordinated with electricity system conditions.
        </p>
      </section>

      <section className="section container">
        <div className="split">
          <div>
            <div className="pill">What gridwise Does</div>
            <h2 className="section-title">Connect industrial operations to system conditions.</h2>
            <p className="section-lead">
              gridwise provides an AI-native operational intelligence platform
              that continuously evaluates electricity prices, renewable
              generation patterns and grid conditions to identify opportunities
              to optimise when and how energy-intensive processes operate.
            </p>
            <p className="section-lead" style={{ marginBottom: 0 }}>
              By coordinating decisions across equipment and processes,
              facilities can shift flexible demand away from peak periods while
              respecting production throughput, quality and operational safety
              constraints.
            </p>
          </div>
          <div className="card">
            <div className="pill">How It Works</div>
            <ul style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
              <li>Distributed intelligent agents monitor equipment behaviour</li>
              <li>System conditions and market signals are evaluated continuously</li>
              <li>Site-level decisions are coordinated across energy assets</li>
              <li>Actions stay bounded by operational and quality constraints</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="pill">Industrial Impact</div>
        <h2 className="section-title">Pilot opportunities we consistently target.</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>10-25% Flexible Demand Potential</h3>
            <p>
              Identify and coordinate latent flexibility across process loads
              and thermal systems.
            </p>
          </div>
          <div className="card">
            <h3>Peak Price Exposure Reduction</h3>
            <p>
              Shift energy-intensive operations away from high-price windows
              where constraints permit.
            </p>
          </div>
          <div className="card">
            <h3>Renewable Alignment</h3>
            <p>
              Improve operational alignment with renewable availability and
              existing grid capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="pill">Industries We Serve</div>
        <h2 className="section-title">Energy-intensive operations with schedulable flexibility.</h2>
        <div className="grid grid-3">
          <div className="card">
            <h3>Manufacturing</h3>
            <p>Paper and pulp mills, steel production, heavy industrial processing.</p>
          </div>
          <div className="card">
            <h3>Food and Dairy Processing</h3>
            <p>Batch production systems and thermal processing operations.</p>
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
            <p>Smart charging orchestration for controlled fleet demand.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div>
            <div className="pill">Pilot Programme</div>
            <h2 className="section-title">Explore the gridwise Pilot Programme.</h2>
            <p className="section-lead">
              Early partner facilities work with gridwise to identify
              operational flexibility and quantify optimisation opportunities.
            </p>
            <Link className="button-primary" href="/poc">
              View our POC
            </Link>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <strong>Phase 1 - Operational Assessment</strong>
              <span>Understand processes and operational constraints.</span>
            </div>
            <div className="timeline-item">
              <strong>Phase 2 - Facility Modelling</strong>
              <span>Build an operational model of energy assets and processes.</span>
            </div>
            <div className="timeline-item">
              <strong>Phase 3 - Optimisation Scenarios</strong>
              <span>Evaluate scheduling strategies under market conditions.</span>
            </div>
            <div className="timeline-item">
              <strong>Phase 4 - Pilot Results</strong>
              <span>Deliver quantified insights for cost and flexibility outcomes.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div>
            <div className="pill">Energy System Value</div>
            <h2 className="section-title">Why this matters for the power system.</h2>
            <p className="section-lead">
              Industrial energy users represent one of the largest sources of
              flexible demand. By enabling facilities to respond intelligently to
              grid conditions, gridwise helps reduce peak demand pressure,
              improve use of existing infrastructure, support renewable
              integration and reduce reliance on emergency generation.
            </p>
          </div>
          <div className="card">
            <h3>Work with gridwise</h3>
            <p>
              Industrial facilities interested in exploring demand flexibility
              can participate in the pilot programme.
            </p>
            <div className="hero-actions" style={{ marginTop: "16px" }}>
              <a className="button-primary" href="mailto:contact@gridwise.nz?subject=Run%20a%20Pilot">
                Run a Pilot
              </a>
              <a href="mailto:contact@gridwise.nz">contact@gridwise.nz</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
