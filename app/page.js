import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="eyebrow">Energy Intelligence for Renewable Grids</div>
        <h1>
          Gridwise is an AI-native orchestration and digital twin platform for
          distributed industrial and infrastructure energy systems.
        </h1>
        <p>
          We help enterprises lower energy costs and reduce peak demand while
          enabling system-level flexibility and resilience in renewable-dominant
          grids like New Zealand.
        </p>
        <div className="hero-actions">
          <Link className="button-primary" href="/product">
            Explore the Platform
          </Link>
          <Link className="button-secondary" href="/poc">
            View the POC
          </Link>
        </div>
        <div className="grid grid-3">
          <div className="card">
            <div className="pill">Enterprise</div>
            <h3>Energy Productivity</h3>
            <p>
              Digital twins and AI agents identify wasted energy, improve asset
              utilisation, and deliver measurable operating savings.
            </p>
          </div>
          <div className="card">
            <div className="pill">System</div>
            <h3>Flexibility at Scale</h3>
            <p>
              Orchestrated flexibility across distributed assets reduces peak
              demand and supports renewable variability.
            </p>
          </div>
          <div className="card">
            <div className="pill">Trust</div>
            <h3>Ready for Pilot</h3>
            <p>
              Built for deployment in 6–9 months with NZ-aligned data inputs,
              validation pathways, and export scalability.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div>
            <div className="pill">What We Do</div>
            <h2 className="section-title">A single platform, three layers.</h2>
            <p className="section-lead">
              Gridwise brings together digital twins, multi-agent orchestration,
              and portfolio-level coordination to optimise energy performance at
              both site and grid level.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Digital Twin Layer</h3>
                <p>
                  Continuously learning models of energy assets, loads, and
                  operational constraints for real-time simulation.
                </p>
              </div>
              <div className="card">
                <h3>Multi-Agent Orchestration</h3>
                <p>
                  Specialised agents forecast load, interpret price and grid
                  signals, and optimise decisions across assets.
                </p>
              </div>
              <div className="card">
                <h3>Portfolio Coordination</h3>
                <p>
                  Aggregated flexibility across sites enables demand response,
                  VPP participation, and system-level resilience.
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ background: "#0e1514", color: "#f6f5f1" }}>
            <div className="pill" style={{ background: "rgba(242,182,75,0.2)", color: "#f2b64b" }}>
              Why Now
            </div>
            <h3 style={{ fontSize: "24px", margin: "16px 0" }}>
              Renewable grids need intelligent demand-side coordination.
            </h3>
            <p>
              New Zealand already runs a renewable-dominant grid. The next
              frontier is flexible demand, distributed assets, and AI-led
              orchestration that keeps costs low and reliability high.
            </p>
            <Link className="button-secondary" href="/contact" style={{ marginTop: "24px" }}>
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
