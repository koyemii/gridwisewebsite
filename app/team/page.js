export const metadata = {
  title: "Team | gridwise",
  description: "Combining industrial systems thinking, product engineering, and advanced AI research."
};

export default function TeamPage() {
  return (
    <section className="section container">
      <div className="pill">Team</div>
      <h1 className="section-title">Team</h1>
      <p className="section-lead">
        Combining industrial systems thinking, product engineering, and advanced AI research.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Anshuman Banerjee - Founder</h3>
          <p>
            Anshuman Banerjee is the founder of <strong>gridwise</strong> and a technology and AI leader
            focused on applying operational intelligence to complex industrial systems. He previously
            led AI and Data initiatives at Spark New Zealand, building enterprise capabilities in
            advanced analytics and machine learning. Anshuman holds a Bachelor&apos;s degree in Industrial
            Engineering from Indian Institute of Technology Roorkee and an MBA from Indian School of
            Business.
          </p>
          <p style={{ marginTop: "12px" }}>
            LinkedIn: <a href="https://www.linkedin.com/in/anshumanbanerjee/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/anshumanbanerjee/</a>
          </p>
        </div>

        <div className="card">
          <h3>Neelava Sengupta - Product &amp; Technology</h3>
          <p>
            Neelava Sengupta is a technology leader specialising in AI platforms, cloud systems, and
            data-driven product engineering. He previously led AI and Data Product Engineering
            initiatives at Spark New Zealand, where he helped scale enterprise AI capabilities and build
            production-grade data platforms. Neel holds a PhD in Computer and Information Sciences from
            Auckland University of Technology and focuses on translating advanced AI systems into
            scalable digital products.
          </p>
          <p style={{ marginTop: "12px" }}>
            LinkedIn: <a href="https://www.linkedin.com/in/neel-sengupta/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/neel-sengupta/</a>
          </p>
        </div>

        <div className="card">
          <h3>Michael Witbrock - Scientific Advisor</h3>
          <p>
            Michael Witbrock is Director of the Strong AI Lab at University of Auckland and a Professor
            of Computer Science. His research focuses on building AI systems that combine machine
            learning, knowledge representation, and reasoning. He previously held senior research roles
            at IBM Research and Cycorp and earned his PhD in Computer Science from Carnegie Mellon
            University.
          </p>
          <p style={{ marginTop: "12px" }}>
            LinkedIn: <a href="https://www.linkedin.com/in/witbrock/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/witbrock/</a>
          </p>
        </div>
      </div>
    </section>
  );
}
