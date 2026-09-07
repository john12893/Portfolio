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
  { src: "./assets/cad/impeller-cutaway.jpg", title: "Sectioned Funnel Component", note: "A cutaway view showing the shape inside" },
  { src: "./assets/cad/rotor-housing.jpg", title: "Wheel Rim", note: "A life-sized car wheel rim model" },
  { src: "./assets/cad/mounting-bracket.jpg", title: "Mounting Bracket", note: "A practical bracket with several mounting options" },
  { src: "./assets/cad/mechanical-housing.jpg", title: "Mounted Double Bearing Unit", note: "An assembly using fasteners and two bearings" },
  { src: "./assets/cad/turbine-wheel.jpg", title: "Radial Turbine", note: "A chance to practice repeated blades and curved surfaces" },
  { src: "./assets/cad/kinetic-sculpture.jpg", title: "Pyramid Gyroscope", note: "A study of gears, balance, and rotation" },
];  

const skills = [
  { index: "01", title: "Machine learning", text: "I am learning how to plan fair experiments, work with imbalanced data, compare model architectures, and explain the results clearly." },
  { index: "02", title: "Mechanical design", text: "I use Siemens NX to practice part modeling, assemblies, linkages, materials, and making renders that clearly show how a design works." },
  { index: "03", title: "Web development", text: "I like turning an idea into a working website, then improving the layout and wording until it is easy for someone else to use." },
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
        <div className="hero-kicker"><span className="status-dot" />Second-year student · Engineering portfolio</div>
        <div className="hero-grid">
          <h1>I learn by building, from <em>AI experiments</em> to <em>rover parts.</em></h1>
          <div className="hero-aside">
            <p>I&apos;m Eric Li, a second-year college student interested in mechanical engineering, robotics, machine learning, and web development. This is where I keep the projects I am most excited about.</p>
            <a className="text-link" href="#work">See my projects <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-rule"><span>Research</span><span>Robotics</span><span>CAD</span><span>Product</span></div>
      </section>

      <section className="work-section shell" id="work">
        <div className="section-heading"><p>Projects I&apos;ve worked on</p><span>Research, team builds, CAD practice, and a web project</span></div>

        <article className="project project-orvanthis">
          <div className="project-number">01</div>
          <div className="orvanthis-visual">
            <img className="orvanthis-stars" src="./assets/orvanthis/orvanthis-starfield.png" alt="" />
            <div className="orvanthis-screen">
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /></div>
              <img src="./assets/orvanthis/orvanthis-logo-transparent.png" alt="Orvanthis logo" />
              <p>A market research website</p>
            </div>
          </div>
          <div className="project-copy">
            <div className="project-label"><Cpu size={17} aria-hidden="true" /> Web project</div>
            <h2>Orvanthis</h2>
            <p className="project-lead">I worked on a full-stack market research website that helps people organize stock information and keep track of companies they want to research.</p>
            <p>This was one of my first chances to think about a website as a complete product. I worked with the public pages, user accounts, saved and monitored stocks, subscription screens, and an AI research tool.</p>
            <div className="tag-row" aria-label="Technologies and focus areas"><span>Next.js</span><span>Product UX</span><span>Web Design</span><span>AI research tools</span></div>
            <a className="project-link" href="https://eric-portoflio-projects.com/" target="_blank" rel="noreferrer">Visit the live product <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </article>

        <article className="project project-research" id="research">
          <div className="project-number">02</div>
          <div className="paper-visual"><img src="./assets/research/paper-cover.png" alt="First page of Eric Li's paper comparing Mamba and self-attention models" /></div>
          <div className="project-copy">
            <div className="project-label"><FileText size={17} aria-hidden="true" /> AI research</div>
            <h2>Mamba vs. Transformer under data imbalance</h2>
            <p className="project-lead">I wanted to find out how two computer vision models handle datasets on imbalanced medical datasets.</p>
            <div className="research-stats">
              <div><strong>2</strong><span>CIFAR datasets evaluated</span></div>
              <div><strong>5</strong><span>imbalanced MEDMNIST datasets evaluated</span></div>
            </div>
            <p>I trained Vision Mamba and Vision Transformer models on CIFAR and medical image datasets. Mamba did better than the baseline Transformer in every CIFAR imbalance setting and most of the medical datasets. The Transformer got much closer after I used stronger image augmentations.</p>
            <a className="project-link" href="./assets/research/mamba-vs-transformers.pdf" target="_blank" rel="noreferrer">Read my four-page paper <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </article>

        <article className="project project-rover">
          <div className="project-number">03</div>
          <div className="rover-gallery">
            <figure className="rover-main"><img src="./assets/rover/rover-full.png" alt="Full CAD model of the ASME robotics rover with six wheels" /></figure>
            <figure><img src="./assets/rover/rover-electronics.png" alt="ASME rover electronics and internal components" /></figure>
            <figure><img src="./assets/rover/rover-linkage.png" alt="Close-up CAD view of a rover linkage assembly" /></figure>
            <figure><img src="./assets/rover/rover-suspension.png" alt="Rover suspension linkage" /></figure>
          </div>
          <div className="project-copy">
            <div className="project-label"><Orbit size={17} aria-hidden="true" /> Robotics</div>
            <h2>ASME robotics rover</h2>
            <p className="project-lead">This six-wheel rover project gave me experience looking at how a complete robot comes together instead of focusing on just one part.</p>
            <p>The CAD views show the full rover, the electronics, and two of the linkage ideas. I especially liked seeing how the frame, wheel supports, pivots, and electronics all had to fit into the same space.</p>
            <div className="tag-row"><span>System integration</span><span>Mechanical linkages</span><span>CAD assembly</span></div>
          </div>
        </article>

        <article className="cad-project">
          <div className="cad-intro">
            <div><span className="project-number inline">04</span><div className="project-label"><Layers3 size={17} aria-hidden="true" /> Siemens NX</div></div>
            <div><h2>Siemens NX models</h2><p>These are some of the individual parts and smaller assemblies I have modeled while learning Siemens NX. Each one helped me practice a different tool or design problem.</p></div>
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
        <div className="section-heading light"><p>What I&apos;m learning</p><span>Skills I am building through these projects</span></div>
        <div className="capability-grid">
          {skills.map((skill) => <article key={skill.index}><span>{skill.index}</span><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="about-mark" aria-hidden="true"><span>EL</span></div>
        <div className="about-copy">
          <p className="eyebrow">About</p>
          <h2>I&apos;m still exploring what kind of engineer I want to become.</h2>
          <p>That is why I like trying projects in several areas. Research teaches me how to test an idea, CAD teaches me how to think in three dimensions, robotics shows me how different systems connect, and web development lets me share what I build with other people.</p>
          <a className="text-link dark-link" href="#top">Back to top <ArrowDown className="rotate" size={17} aria-hidden="true" /></a>
        </div>
      </section>

      <footer className="site-footer shell">
        <div><strong>Eric Li</strong><span>Second-year student · Engineering portfolio</span></div>
        <a href="#work">My projects <MoveRight size={17} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
