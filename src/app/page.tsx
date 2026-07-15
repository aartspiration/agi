import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <div className="wrap nav-row">
          <span className="wordmark">Agrippina Artemchuk</span>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="nav-cta">Get in touch</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <span className="status anim">
              <span className="dot"></span> Available for new roles
            </span>
            <h1 className="anim">
              Hi, I&apos;m <span className="name">Agrippina</span>, a Product Designer.
            </h1>
            <p className="lead anim">
              I make complex systems people can trust and act on, clear enough to
              make the right decision even when things are confusing or stressful.
            </p>
            <div className="cta-row anim">
              <a href="mailto:agi.art@yahoo.com" className="btn">
                Get in touch
              </a>
              <a href="#work" className="text-link">
                View work →
              </a>
            </div>
          </div>
          <div className="hero-photo anim">
            <Image
              src="/agi.jpeg"
              alt="Agrippina Artemchuk"
              width={360}
              height={360}
              priority
            />
          </div>
        </div>
      </header>

      <section className="section" id="work">
        <div className="wrap">
          <p className="label">Selected Work</p>
          <h2 className="section-title">Recent projects</h2>
          <div className="grid">
            <a href="/case-1-liberty-harbor" className="card card-link">
              <div className="thumb thumb-lh"></div>
              <h3>Liberty Harbor</h3>
              <p>
                A base-building feature for millions of players, with no design
                system and nothing to build on. 61% of the player base engaged
                with it.
              </p>
              <div className="tags">
                <span className="tag">0 to 1</span>
                <span className="tag">UX Research</span>
                <span className="tag">Design Systems</span>
              </div>
            </a>
            <article className="card card-soon" aria-disabled="true">
              <div className="thumb"></div>
              <span className="soon-badge">Coming soon</span>
              <h3>New case study</h3>
              <p>A deeper look at the work is on its way.</p>
              <div className="tags">
                <span className="tag">UX</span>
                <span className="tag">Live-service</span>
              </div>
            </article>
            <article className="card card-soon" aria-disabled="true">
              <div className="thumb"></div>
              <span className="soon-badge">Coming soon</span>
              <h3>New case study</h3>
              <p>A deeper look at the work is on its way.</p>
              <div className="tags">
                <span className="tag">Design system</span>
              </div>
            </article>
            <article className="card card-soon" aria-disabled="true">
              <div className="thumb"></div>
              <span className="soon-badge">Coming soon</span>
              <h3>New case study</h3>
              <p>A deeper look at the work is on its way.</p>
              <div className="tags">
                <span className="tag">Research</span>
                <span className="tag">VR</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="wrap">
          <p className="label">About</p>
          <h2 className="section-title">Two very different worlds</h2>
          <p>
            I&apos;m a Senior Product Designer with more than six years of
            experience, split across two very different worlds. The first was
            enterprise B2B: VR and AR solutions, ERP and HR systems for people
            who live in software all day, where a small design choice either{" "}
            <strong>saves someone time or quietly costs them an hour.</strong>
          </p>
          <p>
            Now I design for <strong>World of Warships</strong>, one of the
            largest live-service games in the world. The challenge flips here:
            not a handful of expert users, but millions of players making fast
            decisions mid-match.
          </p>
          <p>
            Currently open to roles where I can lead that work, turning
            complicated systems into things people actually enjoy using.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="wrap">
          <p className="label">Skills &amp; Expertise</p>
          <h2 className="section-title">What I bring</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-head">
                <span className="skill-icon">◆</span>
                <h4>Strategy &amp; Research</h4>
              </div>
              <div className="chips">
                <span className="chip">Product strategy</span>
                <span className="chip">User research</span>
                <span className="chip">Usability testing</span>
                <span className="chip">Data &amp; BI analytics</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-head">
                <span className="skill-icon">✦</span>
                <h4>Craft</h4>
              </div>
              <div className="chips">
                <span className="chip">Interaction design</span>
                <span className="chip">Prototyping</span>
                <span className="chip">Design systems</span>
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-head">
                <span className="skill-icon">▲</span>
                <h4>Tools &amp; AI</h4>
              </div>
              <div className="chips">
                <span className="chip">Figma</span>
                <span className="chip">Illustrator</span>
                <span className="chip">Photoshop</span>
                <span className="chip">After Effects</span>
                <span className="chip">Miro</span>
                <span className="chip">Tableau</span>
                <span className="chip">AI-assisted design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="wrap">
          <p className="label">Contact</p>
          <h2 className="section-title">Currently open to new roles.</h2>
          <div className="contact-grid">
            <a href="mailto:agi.art@yahoo.com" className="contact-card">
              <span className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <span className="contact-meta">
                <span className="contact-key">Email</span>
                <span className="contact-val">agi.art@yahoo.com</span>
              </span>
              <span className="contact-arrow">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/agrippinaartemchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <span className="contact-meta">
                <span className="contact-key">LinkedIn</span>
                <span className="contact-val">in/agrippinaartemchuk</span>
              </span>
              <span className="contact-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-row">
          <span>Agrippina Artemchuk</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}