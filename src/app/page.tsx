import Image from "next/image";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

const comingSoon = [
  { title: "New case", desc: "The case on creating a virtual reality training app interface for a major oil company.", tags: ["UX", "Live-service"] },
];

const skills = [
  {
    icon: "◆",
    title: "Strategy & Research",
    chips: ["Product strategy", "User research", "Usability testing", "Data & BI analytics"],
  },
  {
    icon: "✦",
    title: "Craft",
    chips: ["Interaction design", "Prototyping", "Design systems"],
  },
  {
    icon: "▲",
    title: "Tools & AI",
    chips: ["Figma", "Tableau", "AI-assisted design"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-tag-fill px-2.5 py-[5px] text-xs font-medium text-tag-text">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.05em] text-ink-3">
      {children}
    </p>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mb-8 text-[clamp(24px,3vw,28px)] font-semibold leading-tight tracking-[-0.01em] ${className}`}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      {/* nav */}
      <nav className="sticky top-0 z-20 border-b border-hairline bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
          <span className="font-semibold tracking-[-0.01em]">Agrippina Artemchuk</span>
          <div className="hidden items-center gap-8 mob:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-[15px] text-ink-2 transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/agrippinaartemchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-hairline-strong px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent/[0.06]"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="py-24">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-8 px-6 mob:grid-cols-[1fr_auto] mob:gap-14">
          <div className="text-center mob:text-left">
            <span className="anim mb-7 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.03] px-3.5 py-[7px] text-[13px] text-ink-2">
              <span className="pulse-dot h-[7px] w-[7px] rounded-full bg-online" /> Available for new roles
            </span>
            <h1 className="anim mx-auto mb-5 max-w-[18ch] text-[clamp(36px,6vw,56px)] font-semibold leading-[1.08] tracking-[-0.02em] mob:mx-0">
              Hi, I&apos;m{" "}
              <span className="bg-[linear-gradient(100deg,var(--color-accent),var(--color-accent-2))] bg-clip-text text-transparent">
                Agrippina
              </span>
              ,<span className="block">a Product Designer.</span>
            </h1>
            <p className="anim mx-auto mb-8 max-w-[54ch] text-xl leading-[1.45] text-ink-2 mob:mx-0">
              I make complex systems people can trust and act on, clear enough to make the right decision even
              when things are confusing or stressful.
            </p>
            <div className="anim flex flex-wrap items-center justify-center gap-5 mob:justify-start">
              <a
                href="https://www.linkedin.com/in/agrippinaartemchuk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[10px] bg-ink px-[22px] py-[13px] text-[15px] font-semibold text-bg transition-all duration-200 hover:-translate-y-px hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                Get in touch
              </a>
              <a
                href="/Agrippina-Artemchuk-CV.pdf"
                download
                className="border-b border-hairline-strong pb-0.5 text-base font-medium text-ink-2 transition-colors hover:border-accent hover:text-accent"
              >
                Download CV ↓
              </a>
            </div>
          </div>
          <div className="anim order-first mx-auto mob:order-none mob:mx-0">
            <Image
              src="/agi.jpeg"
              alt="Agrippina Artemchuk"
              width={360}
              height={360}
              priority
              className="h-[200px] w-[200px] rounded-full border border-hairline-strong object-cover shadow-[0_24px_60px_rgba(0,0,0,0.4)] mob:h-[340px] mob:w-[340px]"
            />
          </div>
        </div>
      </header>

      {/* about */}
      <section id="about" className="border-t border-hairline py-14 mob:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <Label>About</Label>
          <SectionTitle>Two very different worlds</SectionTitle>
          <div className="grid grid-cols-1 gap-12 mob:grid-cols-[1fr_auto] mob:gap-16">
            <div className="flex flex-col gap-8">
              <div className="max-w-[62ch] space-y-5 text-lg leading-[1.6] text-ink-2 [&_strong]:font-medium [&_strong]:text-ink">
                <p>
                  I&apos;m a Senior Product Designer with more than six years of experience, split across two very
                  different worlds. The first was enterprise B2B: VR and AR solutions, LMS and HR systems for people who
                  live in software all day, where a small design choice either{" "}
                  <strong>saves someone time or quietly costs them an hour.</strong>
                </p>
                <p>
                  Now I design for <strong>World of Warships</strong>, one of the largest live-service games in the
                  world. The challenge flips here: not a handful of expert users, but millions of players making fast
                  decisions mid-match.
                </p>
                <p>
                  Currently open to roles where I can lead that work, turning complicated systems into things people
                  actually enjoy using.
                </p>
              </div>

              <a
                href="/Agrippina-Artemchuk-CV.pdf"
                download
                className="group flex max-w-[62ch] items-center gap-4 rounded-2xl border border-accent/40 bg-accent/[0.08] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.12]"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-accent text-bg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="M7 10l5 5 5-5" />
                    <path d="M12 15V3" />
                  </svg>
                </span>
                <span className="flex min-w-0 flex-col gap-[3px]">
                  <span className="text-[15px] font-semibold text-ink">Download CV</span>
                  <span className="text-xs text-ink-3">PDF · full experience &amp; work</span>
                </span>
                <span className="ml-auto text-lg text-accent transition-transform duration-200 group-hover:translate-y-[2px]">
                  ↓
                </span>
              </a>
            </div>

            <div className="flex flex-col items-stretch gap-3 mob:w-[300px]">
              <div className="rounded-2xl border border-hairline bg-surface p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-tag-fill text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">Enterprise B2B</p>
                    <p className="text-xs text-ink-3">Then</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-2">
                  VR/AR, LMS &amp; HR systems. A handful of expert users, living in the software all day.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 py-0.5 text-ink-3">
                <span className="h-px w-8 bg-hairline-strong" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
                <span className="h-px w-8 bg-hairline-strong" />
              </div>

              <div className="rounded-2xl border border-hairline bg-surface p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-[11px] bg-tag-fill text-accent">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6" y1="12" x2="10" y2="12" />
                      <line x1="8" y1="10" x2="8" y2="14" />
                      <line x1="15" y1="11" x2="15.01" y2="11" />
                      <line x1="18" y1="13" x2="18.01" y2="13" />
                      <path d="M17.32 5H6.68a4 4 0 0 0-3.98 3.6l-1.2 10A2.5 2.5 0 0 0 3.98 21.4a3 3 0 0 0 2.4-1.2L8 18h8l1.62 2.2a3 3 0 0 0 2.4 1.2 2.5 2.5 0 0 0 2.48-2.8l-1.2-10A4 4 0 0 0 17.32 5Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">Live-service game</p>
                    <p className="text-xs text-accent">Now</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-ink-2">
                  World of Warships. Millions of players making fast decisions mid-match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* work */}
      <section id="work" className="border-t border-hairline py-14 mob:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <Label>Selected Work</Label>
          <SectionTitle>Recent projects</SectionTitle>
          <div className="grid grid-cols-1 gap-6 mob:grid-cols-2">
            <a
              href="/liberty-harbor"
              className="group relative block rounded-2xl border border-hairline bg-surface p-5 transition-all duration-200 before:absolute before:inset-x-0 before:top-0 before:h-px before:rounded-t-2xl before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="mb-4 aspect-video overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#295270,#12243B_55%,#1a3a5c)]">
                <Image
                  src="/liberty-harbor.png"
                  alt="Liberty Harbor interface in World of Warships"
                  width={640}
                  height={360}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Liberty Harbor</h3>
              <p className="mb-4 text-[15px] text-ink-2">
                The base-building feature for millions of players, with no design system and nothing to build on.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>0 to 1</Tag>
                <Tag>UX Research</Tag>
                <Tag>Design Systems</Tag>
              </div>
            </a>

            {comingSoon.map((c, i) => (
              <article
                key={i}
                aria-disabled="true"
                className="relative cursor-not-allowed rounded-2xl border border-hairline bg-surface p-5"
              >
                <div className="mb-4 grid aspect-video place-items-center rounded-[10px] border border-hairline bg-[linear-gradient(135deg,#1a3a5c,#0e2138_60%,#13314f)]">
                  <span className="text-[15px] font-semibold uppercase tracking-[0.14em] text-ink-3">Coming soon</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-ink-2">{c.title}</h3>
                <p className="mb-4 text-[15px] text-ink-3">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-hairline bg-white/[0.03] px-2.5 py-[5px] text-xs font-medium text-ink-3"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* skills */}
      <section id="skills" className="border-t border-hairline py-14 mob:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <Label>Skills &amp; Expertise</Label>
          <SectionTitle>What I bring</SectionTitle>
          <div className="grid grid-cols-1 gap-5 mob:grid-cols-3">
            {skills.map((s) => (
              <div key={s.title} className="rounded-2xl border border-hairline bg-surface p-6">
                <div className="mb-[18px] flex items-center gap-2.5 border-b border-hairline pb-4">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-tag-fill text-[13px] text-accent">
                    {s.icon}
                  </span>
                  <h4 className="text-[15px] font-semibold text-ink">{s.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-hairline bg-white/[0.04] px-[13px] py-[7px] text-sm font-medium text-ink-2"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="border-t border-hairline py-14 mob:py-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <Label>Contact</Label>
          <SectionTitle className="max-w-[20ch]">Currently open to new roles.</SectionTitle>
          <div className="mt-8 grid max-w-[720px] grid-cols-1 gap-4 mob:grid-cols-2">
            <a
              href="mailto:agi.art@yahoo.com"
              className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.05]"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-tag-fill text-accent">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <span className="flex min-w-0 flex-col gap-[3px]">
                <span className="text-xs font-medium uppercase tracking-[0.06em] text-ink-3">Email</span>
                <span className="truncate text-base font-medium text-ink">agi.art@yahoo.com</span>
              </span>
              <span className="ml-auto text-lg text-ink-3 transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-accent">
                →
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/agrippinaartemchuk"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent/[0.05]"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-[11px] bg-tag-fill text-lg font-semibold text-accent">
                in
              </span>
              <span className="flex min-w-0 flex-col gap-[3px]">
                <span className="text-xs font-medium uppercase tracking-[0.06em] text-ink-3">LinkedIn</span>
                <span className="truncate text-base font-medium text-ink">in/agrippinaartemchuk</span>
              </span>
              <span className="ml-auto text-lg text-ink-3 transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-accent">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t border-hairline py-8">
        <div className="mx-auto flex max-w-[1120px] flex-wrap justify-between gap-2 px-6 text-sm text-ink-3">
          <span>Agrippina Artemchuk</span>
          <span>© 2026</span>
        </div>
      </footer>
    </>
  );
}