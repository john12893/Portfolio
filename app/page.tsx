import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  FileText,
  Layers3,
  MoveRight,
  Orbit,
} from "lucide-react";

const cadWork = [
  { src: "/assets/cad/impeller-cutaway.jpg", title: "Sectioned flow component", note: "Cutaway geometry and internal form" },
  { src: "/assets/cad/rotor-housing.jpg", title: "Rotor housing", note: "Reflective material and radial geometry" },
  { src: "/assets/cad/mounting-bracket.jpg", title: "Mounting bracket", note: "Functional features and softened transitions" },
  { src: "/assets/cad/mechanical-housing.jpg", title: "Mechanical housing", note: "Multi-part fit and fastening strategy" },
  { src: "/assets/cad/turbine-wheel.jpg", title: "Radial turbine study", note: "Repeated blades and swept surfaces" },
  { src: "/assets/cad/kinetic-sculpture.jpg", title: "Kinetic mechanism", note: "Gearing, balance, and presentation render" },
];

const skills = [
  { index: "01", title: "Machine learning research", text: "Controlled experiments, long-tailed data, Vision Transformers, state-space models, medical image classification, and technical writing." },
  { index: "02", title: "Mechanical design", text: "Siemens NX modeling, assemblies, mechanical linkages, part geometry, materials, and presentation-ready rendering." },
  { index: "03", title: "Product engineering", text: "Full-stack interfaces, product flows, research tools, data-backed workspaces, and translating complex systems into clear user experiences." },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">Skip to selected work</a>

      <header className="site-header shell">
        <a className="monogram" href="#top" aria-label="Eric Li, home">EL<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-link" href="#research">Research <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span className="status-dot" />Engineering + AI portfolio</div>
        <div className="hero-grid">
          <h1>I build systems that move between <em>code</em> and <em>hardware.</em></h1>
          <div className="hero-aside">
            <p>I&apos;m Eric Li, a builder and researcher working across machine learning, robotics, mechanical design, and digital products.</p>
            <a className="text-link" href="#work">Explore selected work <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-rule"><span>Research</span><span>Robotics</span><span>CAD</span><span>Product</span></div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><p>Selected work</p><span>Four disciplines, one engineering practice</span></div>

        <article className="project project-orvanthis">
          <div className="project-number">01</div>
          <div className="orvanthis-visual">
            <img className="orvanthis-stars" src="/assets/orvanthis/orvanthis-starfield.png" alt="" />
            <div className="orvanthis-screen">
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /></div>
              <img src="/assets/orvanthis/orvanthis-logo.png" alt="Orvanthis logo" />
              <p>Source-backed market intelligence</p>
            </div>
          </div>
          <div className="project-copy">
            <div className="project-label"><Cpu size={17} aria-hidden="true" /> Product engineering</div>
            <h2>Orvanthis</h2>
            <p className="project-lead">A full-stack market research product designed to help investors organize evidence, track changing signals, and make uncertainty visible.</p>
            <p>The build combines a narrative public site with an authenticated workspace, research tools, saved and monitored stocks, plan flows, and a source-conscious AI analyst experience.</p>
            <div className="tag-row" aria-label="Technologies and focus areas"><span>Next.js</span><span>Product UX</span><span>Cloudflare</span><span>AI research tools</span></div>
            <a className="project-link" href="https://orvanthis-market-intelligence.fencer22.chatgpt.site" target="_blank" rel="noreferrer">Visit the live product <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </article>

        <article className="project project-research" id="research">
          <div className="project-number">02</div>
          <div className="paper-visual"><img src="/assets/research/paper-cover.png" alt="First page of Eric Li's paper comparing Mamba and self-attention models" /></div>
          <div className="project-copy">
            <div className="project-label"><FileText size={17} aria-hidden="true" /> AI research</div>
            <h2>Mamba vs. self-attention under data imbalance</h2>
            <p className="project-lead">An experimental comparison of compact Vision Mamba and Vision Transformer models across long-tailed general and medical image classification datasets.</p>
            <div className="research-stats">
              <div><strong>7</strong><span>datasets evaluated</span></div>
              <div><strong>3</strong><span>imbalance levels on CIFAR</span></div>
              <div><strong>300</strong><span>training epochs per run</span></div>
            </div>
            <p>Vision Mamba outperformed the baseline Transformer across every CIFAR imbalance setting and most selected MedMNIST datasets. Stronger augmentation substantially narrowed the gap for the Transformer, highlighting training strategy as a key variable.</p>
            <a className="project-link" href="/assets/research/mamba-vs-transformers.pdf" target="_blank" rel="noreferrer">Read the four-page paper <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </article>

        <article className="project project-rover">
          <div className="project-number">03</div>
          <div className="rover-gallery">
            <figure className="rover-main"><img src="/assets/rover/rover-full.png" alt="Full CAD model of the ASME robotics rover with six wheels" /></figure>
            <figure><img src="/assets/rover/rover-electronics.png" alt="ASME rover electronics enclosure and internal components" /></figure>
            <figure><img src="/assets/rover/rover-linkage.png" alt="Close-up CAD view of a rover linkage assembly" /></figure>
            <figure><img src="/assets/rover/rover-suspension.png" alt="Articulated rover suspension linkage" /></figure>
          </div>
          <div className="project-copy">
            <div className="project-label"><Orbit size={17} aria-hidden="true" /> Robotics</div>
            <h2>ASME robotics rover</h2>
            <p className="project-lead">A six-wheel rover platform integrating a compact structural frame, articulated wheel supports, a central mechanism, and packaged electronics.</p>
            <p>The CAD views document both system-level packaging and the smaller mechanical decisions that make the rover work: pivot geometry, linkages, accessible electronics, and modular framing.</p>
            <div className="tag-row"><span>System integration</span><span>Mechanical linkages</span><span>CAD assembly</span></div>
          </div>
        </article>

        <article className="cad-project">
          <div className="cad-intro">
            <div><span className="project-number inline">04</span><div className="project-label"><Layers3 size={17} aria-hidden="true" /> Siemens NX</div></div>
            <div><h2>Selected mechanical design studies</h2><p>A selection of individual part, surface, material, and mechanism studies. Each rendering explores a different modeling problem, from functional brackets to repeated radial geometry.</p></div>
          </div>
          <div className="cad-grid">
            {cadWork.map((item, index) => (
              <figure key={item.src}>
                <div className="cad-image-wrap"><img src={item.src} alt={item.title} /><span>{String(index + 1).padStart(2, "0")}</span></div>
                <figcaption><strong>{item.title}</strong><span>{item.note}</span></figcaption>
              </figure>
            ))}
          </div>
        </article>
      </section>

      <section className="capabilities shell" id="capabilities">
        <div className="section-heading light"><p>Capabilities</p><span>How I approach a problem</span></div>
        <div className="capability-grid">
          {skills.map((skill) => <article key={skill.index}><span>{skill.index}</span><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-mark" aria-hidden="true"><span>EL</span></div>
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>Engineering is strongest when the disciplines connect.</h2>
          <p>My work lives at the intersection of physical systems and computation. I enjoy moving from a question to a testable experiment, from a sketch to an assembly, and from a complex idea to a product people can use.</p>
          <a className="text-link dark-link" href="#top">Back to top <ArrowDown className="rotate" size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer shell">
        <div><strong>Eric Li</strong><span>Engineering + AI portfolio</span></div>
        <a href="#work">Selected work <MoveRight size={17} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
