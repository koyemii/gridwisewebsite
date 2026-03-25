export const metadata = {
  title: "Team | gridwise",
  description: "Combining industrial systems thinking, AI product engineering, and advanced research to build operational intelligence for modern energy systems."
};

export default function TeamPage() {
  return (
    <section className="section container">
      <div className="pill">Team</div>
      <h1 className="section-title">Team</h1>
      <p className="section-lead">
        Combining industrial systems thinking, AI product engineering, and advanced research to build operational intelligence for modern energy systems.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Anshuman Banerjee - Founder</h3>
          <p>
            Anshuman Banerjee is the founder of <strong>gridwise</strong> and a technology and AI leader focused on applying operational intelligence to large-scale industrial and infrastructure systems. His work centres on improving how complex operations respond to dynamic conditions, particularly in energy-intensive environments.
          </p>
          <p style={{ marginTop: "12px" }}>
            He previously led AI and Data initiatives at Spark New Zealand, where he built and scaled enterprise platforms for advanced analytics, machine learning, and decisioning systems used in real-world operations.
          </p>
          <p style={{ marginTop: "12px" }}>
            Anshuman holds a Bachelor&apos;s degree in Industrial Engineering from Indian Institute of Technology Roorkee and an MBA from Indian School of Business, combining engineering systems thinking with business strategy.
          </p>
          <p style={{ marginTop: "12px" }}>
            LinkedIn: <a href="https://www.linkedin.com/in/anshumanbanerjee/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/anshumanbanerjee/</a>
          </p>
        </div>

        <div className="card">
          <h3>Michael Witbrock - Scientific Advisor</h3>
          <p>
            Michael Witbrock is Director of the Strong AI Lab (SAIL) and the Natural, Artificial, and Organisational Intelligence Institute at University of Auckland, where he leads research in advanced AI systems combining learning and reasoning. He has held senior research roles at IBM Research and Cycorp, working on large-scale intelligent systems. Michael holds a PhD in Computer Science from Carnegie Mellon University and actively contributes to national AI initiatives in New Zealand.
          </p>
          <p style={{ marginTop: "12px" }}>
            LinkedIn: <a href="https://www.linkedin.com/in/witbrock/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/witbrock/</a>
          </p>
          <p style={{ marginTop: "12px" }}>
            Wikipedia: <a href="https://en.wikipedia.org/wiki/Michael_Witbrock" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Michael_Witbrock</a>
          </p>
        </div>
      </div>
    </section>
  );
}
