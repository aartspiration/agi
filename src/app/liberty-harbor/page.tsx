export const metadata = {
  title: "Liberty Harbor · Case Study · Agrippina Artemchuk",
};

const meta = [
  { k: "Role", v: <>Lead UI/UX Designer,<br />full UI ownership</> },
  { k: "Timeline", v: <>5-month build ·<br />2 months design &amp; research</> },
  { k: "Team", v: "Cross-functional team of 40 across design, engineering, product, art, analytics, sound, and narrative" },
  { k: "Scope", v: "0→1 · first wireframe to production handoff" },
];

const constraints = [
  { h: "No design system.", t: "The main game's component library was off limits, and blur effects weren't technically possible. I built everything from scratch." },
  { h: "The 3D scene never goes away.", t: "The harbour stays visible at all times, so full-screen modals were out. Every interaction had to live in a panel on top of it." },
  { h: "Some choices can't be undone.", t: "A wrong upgrade can cost premium currency, which turns a design mistake into a real cost for the player." },
  { h: "Five months, two of them mine.", t: "Design and research had two months, inside a five-month build, across a team of forty." },
];

const typeScale = [
  { spec: "24 / 600", sample: "Panel title", style: { fontSize: "24px", fontWeight: 600, letterSpacing: "-.01em" } },
  { spec: "18 / 600", sample: "Header", style: { fontSize: "18px", fontWeight: 600 } },
  { spec: "16 / 500", sample: "Subheader", style: { fontSize: "16px", fontWeight: 500 } },
  { spec: "14 / 400", sample: "Body: requirements, rewards, descriptions", style: { fontSize: "14px", color: "var(--color-ink-2)" } },
];

const spacing = [4, 8, 12, 16, 24, 32, 48];

const hypotheses = [
  { zone: "Lobby", items: [
    { s: "ok", t: "Understand how to navigate between areas" },
    { s: "no", t: "Understand each area without opening it" },
    { s: "no", t: "Notice and use the top menu" },
    { s: "no", t: "Understand the status indicators" },
  ]},
  { zone: "Naval Command", items: [
    { s: "part", t: "Tell available from locked" },
    { s: "no", t: "Understand how to upgrade" },
    { s: "part", t: "Understand the mission counter" },
  ]},
  { zone: "Fuel Terminal", items: [
    { s: "no", t: "Find the Overcharge area" },
    { s: "no", t: "Understand how overcharging works" },
  ]},
  { zone: "Military Port", items: [
    { s: "ok", t: "Understand expedition requirements" },
    { s: "ok", t: "Understand how to assemble an expedition" },
    { s: "no", t: "Notice the Fleet Power bar" },
    { s: "no", t: "Notice the Assemble all button" },
  ]},
];

const statusMap = {
  ok: { dot: "bg-accent", label: "Supported", labelColor: "text-tag-text", txt: "text-ink" },
  part: { dot: "bg-[#EAB308]", label: "Partial", labelColor: "text-[#FCD34D]", txt: "text-ink-2" },
  no: { dot: "bg-[#F87171]", label: "Not supported", labelColor: "text-[#FCA5A5]", txt: "text-ink-2" },
} as const;

const fixes = [
  { found: "Players missed the Rules icon entirely. It looked secondary.", did: "Replaced it with an onboarding flow. Rather than dumping the rules on players up front, it highlights one moment at a time. The first expedition is a guided one: you click, you assemble it, and you have learned the mechanic by using it." },
  { found: "Players couldn't find the Overcharge zone. They overlooked it in the menu.", did: "Surfaced it directly in the onboarding, so players are shown where it is instead of expected to find it." },
  { found: "Players didn't notice the Fleet Power bar, and didn't know what it meant when they did.", did: "Explained in onboarding, at the point where it matters: while assembling that first expedition." },
  { found: "Players missed the \u201cAssemble all\u201d button.", did: "Highlighted in onboarding as part of the guided flow." },
  { found: "Players didn't understand the upgrade system. They didn't notice the button, and didn't know what unlocked what.", did: "Made the upgrade path more visible, and built the flow so players have to use it once. After that, they know it exists." },
];

const stats = [
  { n: "61%", l: "of players visited the base at least once" },
  { n: "83%", l: "who reached Expeditions successfully sent ships" },
  { n: "71%", l: "said the rewards were clear and took little effort" },
  { n: "51%", l: "came back and sent five or more expeditions" },
];

const insights = [
  { h: "Let people learn by doing", b: "One guided pass through the real task teaches more than any amount of explanation. Wherever the first action decides whether someone comes back, build the first action, not the manual." },
  { h: "Borrow the mental model people already have", b: "Familiar patterns work instantly. New ones ask someone to learn something at the exact moment they are trying to act. Consistency is a design decision, not a compromise." },
  { h: "Show the cost at the decision", b: "When a choice is expensive and can't be undone, the price belongs in front of the person making it. That holds whether they are upgrading a ship or moving money." },
];

const colorPrimary = [
  { fill: "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)),#262D38", b: "default", code: "#000000 50%" },
  { fill: "linear-gradient(rgba(0,0,0,.40),rgba(0,0,0,.40)),#262D38", b: "subtle", code: "#000000 40%" },
  { fill: "linear-gradient(rgba(0,0,0,.30),rgba(0,0,0,.30)),#262D38", b: "faint", code: "#000000 30%" },
];
const colorProgress = [
  { fill: "linear-gradient(rgba(41,82,112,.40),rgba(41,82,112,.40)),#262D38", b: "default", code: "#295270 40%" },
  { fill: "linear-gradient(rgba(41,82,112,.30),rgba(41,82,112,.30)),#262D38", b: "subtle", code: "#295270 30%" },
  { fill: "linear-gradient(rgba(41,82,112,.10),rgba(41,82,112,.10)),#262D38", b: "faint", code: "#295270 10%" },
];

// shared bits
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.05em] text-accent">{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-[clamp(24px,3vw,30px)] font-semibold leading-tight tracking-[-0.01em]">{children}</h2>
);
const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-3.5 mt-10 text-xl font-semibold leading-snug">{children}</h3>
);
const Measure = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-[720px] space-y-[18px] text-lg leading-[1.62] text-ink-2 [&_strong]:font-semibold [&_strong]:text-ink ${className}`}>
    {children}
  </div>
);

function ColorTab({ path, chips, }: { path: string; chips: { fill: string; b: string; code: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xs tabular-nums text-ink-3">{path}</p>
      <div className="flex gap-3.5">
        {chips.map((c) => (
          <div key={c.b} className="flex-1">
            <div className="mb-2.5 h-[76px] rounded-md border border-hairline" style={{ background: c.fill }} />
            <b className="mb-[3px] block text-[13px] font-medium text-ink">{c.b}</b>
            <code className="text-[10px] tabular-nums tracking-[-.02em] text-ink-3">{c.code}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LibertyHarbor() {
  const totals = { supported: 4, partial: 2, unsupported: 8, written: 14 };

  return (
    <div className="font-sans">
      {/* nav */}
      <nav className="sticky top-0 z-20 border-b border-hairline bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6">
          <a href="/" className="font-semibold tracking-[-0.01em]">Agrippina Artemchuk</a>
          <div className="hidden items-center gap-8 mob:flex">
            <a href="/#work" className="text-[15px] text-ink-2 hover:text-ink">Work</a>
            <a href="/#about" className="text-[15px] text-ink-2 hover:text-ink">About</a>
            <a href="/#skills" className="text-[15px] text-ink-2 hover:text-ink">Skills</a>
            <a href="mailto:agi.art@yahoo.com" className="rounded-lg border border-hairline-strong px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent/[0.06]">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="pb-14 pt-24 mob:pt-24">
        <div className="mx-auto max-w-[1120px] px-6">
          <a href="/#work" className="mb-6 inline-block text-[15px] font-medium text-ink-2 transition-colors hover:text-accent">← All work</a>
          <p className="mb-[18px] text-[13px] font-medium uppercase tracking-[0.06em] text-accent">Case Study 01 · World of Warships</p>
          <h1 className="mb-6 text-[clamp(40px,7vw,68px)] font-semibold leading-[1.04] tracking-[-0.025em]">
            Liberty{" "}
            <span className="bg-[linear-gradient(100deg,var(--color-accent),var(--color-accent-2))] bg-clip-text text-transparent">Harbor</span>
          </h1>
          <p className="max-w-[60ch] text-[clamp(19px,2.4vw,22px)] leading-[1.5] text-ink-2">
            Four interconnected systems, zero design precedent, and users<br />who needed to feel engaged, not
            paralysed by choice and unclarity.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-y border-hairline py-6 mob:grid-cols-4">
            {meta.map((m) => (
              <div key={m.k}>
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.05em] text-ink-3">{m.k}</div>
                <div className="text-[15px] leading-snug text-ink">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* hero video */}
        <section className="pt-0">
          <div className="mx-auto max-w-[1120px] px-6">
            <figure>
              <div className="relative h-0 overflow-hidden rounded-2xl border border-hairline-strong bg-surface pb-[56.25%] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <iframe
                  src="https://www.youtube.com/embed/wKNJyuijOSw?start=57&rel=0"
                  title="World of Warships: Liberty Harbor interface in use"
                  className="absolute left-0 top-0 h-full w-full border-0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3.5 text-sm leading-relaxed text-ink-3">
                Official <em>World of Warships</em> trailer, cued to the Liberty Harbor interface. The overlay panel
                system, combat missions selection, expedition dispatch flow, and progress screen shown here are the
                systems covered in this case study.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* brief */}
        <section className="pt-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>The brief</Label>
            <H2>Nothing to build on</H2>
            <Measure>
              <p>Liberty Harbor is a base you build inside World of Warships. Five areas, each doing a different job, all feeding one progress bar. Fill the bar and you win a ship.</p>
              <p>There was no earlier version to improve. Nothing in the game worked like it. So the shape of it was mine to decide, and I had four hard limits to work inside.</p>
            </Measure>
            <ul className="mb-4 mt-[18px] max-w-[720px] space-y-3">
              {constraints.map((c) => (
                <li key={c.h} className="relative pl-[22px] text-[17px] leading-[1.55] text-ink-2 before:absolute before:left-0.5 before:top-[11px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                  <strong className="text-ink">{c.h}</strong> {c.t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* tokens */}
        <section className="py-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>Building the system</Label>
            <H2>Tokens before screens</H2>
            <Measure>
              <p>With no library to borrow from, the first thing I built wasn&apos;t a screen. It was the set of rules everything else would follow: colour, type, spacing, and every state a panel could be in.</p>
              <p>The states mattered more than usual here. Because a wrong upgrade could cost real currency, I mapped locked, active, completed and error before any of it reached a developer, and made sure the cost of a choice was visible at the moment you make it, not buried in a dialog you might click past.</p>
            </Measure>

            <div className="mt-9">
              {/* colour */}
              <div className="mb-10 border-b border-hairline pb-10">
                <div className="mb-6 flex items-baseline gap-4 border-b border-hairline-strong pb-3.5">
                  <span className="text-xs font-medium tabular-nums tracking-[.08em] text-accent">01</span>
                  <span className="flex-1 text-[17px] font-semibold tracking-[-.01em]">Colour</span>
                </div>
                <p className="mb-6 border-l-2 border-hairline-strong pl-3.5 text-xs tabular-nums text-ink-3">
                  base surface <b className="font-medium text-ink-2">#262D38</b> · all tab tokens composite over it
                </p>
                <div className="grid grid-cols-1 gap-10 mob:grid-cols-2">
                  <ColorTab path="tab / primary" chips={colorPrimary} />
                  <ColorTab path="tab / action in progress" chips={colorProgress} />
                </div>
                <p className="mt-6 max-w-[62ch] border-l-2 border-accent pl-3.5 text-sm leading-relaxed text-accent">
                  With blur unavailable, I used separate hues rather than opacity alone, so panel states stay legible against the moving 3D scene.
                </p>
              </div>

              {/* type */}
              <div className="mb-10 border-b border-hairline pb-10">
                <div className="mb-6 flex items-baseline gap-4 border-b border-hairline-strong pb-3.5">
                  <span className="text-xs font-medium tabular-nums tracking-[.08em] text-accent">02</span>
                  <span className="flex-1 text-[17px] font-semibold tracking-[-.01em]">Type</span>
                  <span className="text-xs tabular-nums text-ink-3">4 steps</span>
                </div>
                <div className="flex flex-col">
                  {typeScale.map((t) => (
                    <div key={t.spec} className="flex items-baseline gap-7 border-b border-hairline py-3.5 last:border-b-0">
                      <code className="min-w-[64px] text-[11px] tabular-nums text-ink-3">{t.spec}</code>
                      <span style={t.style}>{t.sample}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* spacing */}
              <div>
                <div className="mb-6 flex items-baseline gap-4 border-b border-hairline-strong pb-3.5">
                  <span className="text-xs font-medium tabular-nums tracking-[.08em] text-accent">03</span>
                  <span className="flex-1 text-[17px] font-semibold tracking-[-.01em]">Spacing</span>
                  <span className="text-xs tabular-nums text-ink-3">4pt ramp</span>
                </div>
                <div className="flex flex-wrap items-end gap-x-[30px] gap-y-4">
                  {spacing.map((s) => (
                    <div key={s} className="text-center">
                      <i className="mx-auto mb-2.5 block rounded-sm bg-accent" style={{ width: s, height: s }} />
                      <code className="text-[11px] tabular-nums text-ink-3">{s}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-3.5 text-sm leading-relaxed text-ink-3">
              Scoped token layer built from scratch, since the main game&apos;s design system was unavailable.
            </p>
          </div>
        </section>

        {/* research */}
        <section className="py-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>Process · Research</Label>
            <H2>I tested the prototype, and most of it failed</H2>
            <Measure>
              <p>There was no data to start from. No previous version of this feature, nothing internal to benchmark against. So I did two things: I looked at games that had already solved my exact problems, and then I tested my own prototype with real players before we built it.</p>
            </Measure>

            <H3>Looking at games with the same problems</H3>
            <Measure>
              <p><strong>Frostpunk</strong> and <strong>IXION</strong> are both base-builders with a persistent world view, multiple connected systems, and choices you can&apos;t take back. Exactly my situation. Three things I took from them:</p>
            </Measure>
            <ul className="mb-4 mt-[18px] max-w-[720px] space-y-3">
              {[
                "Keep the world visible. Both use overlay panels instead of full-screen modals, so you never lose your sense of place.",
                "Make locked things obviously locked, and show what unlocks them.",
                "Show the cost before the click, not after.",
              ].map((t) => (
                <li key={t} className="relative pl-[22px] text-[17px] leading-[1.55] text-ink-2 before:absolute before:left-0.5 before:top-[11px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">{t}</li>
              ))}
            </ul>

            <H3>Then I tested it</H3>
            <Measure>
              <p>I ran a moderated UX test on the prototype with 5-6 experienced players. Before the sessions I wrote out what I expected players to understand on each screen, so the results could be scored rather than argued about.</p>
            </Measure>

            {/* hypothesis stats */}
            <div className="mt-9">
              <div className="mb-2 grid grid-cols-2 gap-6 border-b border-hairline-strong pb-9 mob:grid-cols-4">
                {[
                  { fig: totals.written, cap: "Hypotheses written before testing", color: "text-ink" },
                  { fig: totals.supported, cap: "Supported", color: "text-[#5EEAD4]" },
                  { fig: totals.partial, cap: "Partially supported", color: "text-[#FCD34D]" },
                  { fig: totals.unsupported, cap: "Not supported", color: "text-[#FCA5A5]" },
                ].map((h) => (
                  <div key={h.cap} className="flex flex-col gap-1.5">
                    <span className={`text-5xl font-semibold leading-none tabular-nums tracking-[-.03em] ${h.color}`}>{h.fig}</span>
                    <span className="text-[13px] leading-tight text-ink-3">{h.cap}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                {hypotheses.map((zone) => (
                  <div key={zone.zone} className="contents">
                    <p className="mb-1.5 mt-[30px] text-xs font-semibold uppercase tracking-[0.09em] text-ink-3 first:mt-[22px]">{zone.zone}</p>
                    {zone.items.map((it, i) => {
                      const st = statusMap[it.s as keyof typeof statusMap];
                      return (
                        <div key={i} className="grid grid-cols-[auto_1fr_auto] items-center gap-3.5 border-b border-hairline py-3.5 mob:grid-cols-[auto_1fr_auto]">
                          <span className={`h-[7px] w-[7px] flex-shrink-0 rounded-full ${st.dot}`} />
                          <span className={`text-base leading-snug ${st.txt}`}>{it.t}</span>
                          <span className={`whitespace-nowrap text-right text-xs font-medium uppercase tracking-[.04em] ${st.labelColor}`}>{st.label}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <H3>What I learned from it</H3>
            <Measure>
              <p>The pattern was hard to miss. Anything players already knew from the main game, they understood straight away. Expedition requirements, assembling an expedition, reading ship tiers: all supported, because they had seen those patterns before.</p>
              <p>Anything new failed. Overcharge, Fleet Power, the mission counter, the status icons. Players didn&apos;t just find them difficult, they often didn&apos;t see them at all.</p>
            </Measure>
            <div className="my-6 max-w-[720px] rounded-r-xl border-l-[3px] border-accent bg-accent/[0.06] px-6 py-5">
              <p className="text-[17px] text-ink">This is what changed my approach. The problem was never that the interactions were too complex. It was that new concepts had no way in. So instead of simplifying the deep mechanics, I focused on making things recognisable, and on teaching through doing rather than through text that nobody reads.</p>
            </div>
          </div>
        </section>

        {/* what I changed */}
        <section className="py-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>Process · What I changed</Label>
            <H2>Almost everything led to one fix</H2>
            <Measure>
              <p>Looking at the failed hypotheses together, they were all the same problem wearing different clothes. Players weren&apos;t confused by the mechanics. They just never learned them, because nothing taught them, and the things that were supposed to teach them were text nobody read.</p>
              <p>So instead of patching six separate elements, I built an onboarding flow that walks players through the important moments by making them do the thing, not read about it.</p>
            </Measure>

            <div className="mt-9">
              {fixes.map((f, i) => (
                <div key={i} className="grid grid-cols-1 gap-6 py-[26px] mob:grid-cols-[auto_1fr]">
                  <span className="pt-1 text-xs font-medium tabular-nums tracking-[.06em] text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="mb-3.5 border-l-2 border-[#F87171]/50 pl-3.5 text-base leading-[1.55] text-ink-3">{f.found}</p>
                    <p className="border-l-2 border-accent pl-3.5 text-base leading-[1.6] text-ink">{f.did}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-6 max-w-[720px] rounded-r-xl border-l-[3px] border-accent bg-accent/[0.06] px-6 py-5">
              <p className="text-[17px] text-ink">The principle underneath all of it: information is not learning. Players had been given the information. They still didn&apos;t know how the feature worked. What changed things was letting them learn by doing one small version of the real task.</p>
            </div>

            <div className="mb-2 mt-12 grid grid-cols-1 items-center gap-10 mob:grid-cols-[1.3fr_1fr]">
              <div className="overflow-hidden rounded-2xl border border-hairline-strong bg-[#0d1c30] shadow-[0_30px_70px_rgba(0,0,0,0.45)]">
                <div className="flex items-center gap-[7px] border-b border-hairline bg-white/[0.03] px-3.5 py-[11px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                  <span className="h-2.5 w-2.5 rounded-full bg-hairline-strong" />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/liberty-upgrade-panel.jpg" alt="Fuel Terminal area boost panel: a locked Military Port states it unlocks at Fuel Terminal Level 3, with the two expeditions it would grant shown alongside" className="block h-auto w-full" />
              </div>
              <div className="self-center">
                <p className="mb-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent">In the product</p>
                <div className="space-y-3.5 text-base leading-relaxed text-ink-2">
                  <p>Upgrade path: the Fuel Terminal area boost. The locked Military Port states exactly what unlocks it, and the panel shows what you get for it.</p>
                  <p>Cost and reward sit together at the moment of the decision — not buried in a dialog you might click past.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* outcome */}
        <section className="py-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>After release</Label>
            <H2>What the players actually did</H2>
            <Measure>
              <p>Once the feature was live, I worked with the UX research and BI teams on a post-release analysis. This is the part I care most about, because it told me which of my decisions were right and which weren&apos;t.</p>
            </Measure>

            <H3>What worked</H3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
              {stats.map((s) => (
                <div key={s.l} className="relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]">
                  <div className="text-[42px] font-semibold leading-none tracking-[-0.02em] text-accent">{s.n}</div>
                  <div className="mt-2.5 text-sm leading-tight text-ink-2">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 items-stretch gap-11 mob:grid-cols-[1fr_400px]">
              <div className="space-y-6 text-lg leading-[1.62] text-ink-2">
                <p>Expeditions were the best received part of the whole feature, scoring 4.0 out of 5 for both &quot;I understood the rewards&quot; and &quot;the requirements were clear.&quot;</p>
                <p>That&apos;s the mechanic players learned by doing rather than reading, and the one that reused patterns they already knew from the main game. It confirmed what my UX test had already told me.</p>
              </div>
              <figure className="flex flex-col rounded-2xl border border-hairline bg-surface p-4">
                <div className="mb-3.5 flex items-center gap-3">
                  <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-tag-fill text-sm font-bold text-accent">r/</div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-semibold text-ink">r/WorldOfWarships</span>
                    <span className="text-xs text-ink-3">Community reaction</span>
                  </div>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/liberty-outcome-shot.jpg" alt="A cat watching the Liberty Harbor screen, from a post on r/WorldOfWarships" className="block min-h-0 w-full flex-1 rounded-[10px] object-cover" />
              </figure>
            </div>
          </div>
        </section>

        {/* insights */}
        <section className="py-24">
          <div className="mx-auto max-w-[1120px] px-6">
            <Label>What I took from it</Label>
            <H2>Three things I design by now</H2>
            <div className="grid grid-cols-1 gap-8 mob:grid-cols-3">
              {insights.map((ins, i) => (
                <div key={ins.h} className="flex flex-col gap-3.5 border-t-2 border-accent pt-5">
                  <span className="text-xs font-medium tabular-nums tracking-[.08em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="mb-2.5 text-lg font-semibold leading-snug text-ink">{ins.h}</p>
                    <p className="text-[15px] leading-relaxed text-ink-2">{ins.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline py-12">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6">
          <a href="/#work" className="border-b border-accent pb-0.5 text-base font-medium text-ink">← Back to all work</a>
          <span className="text-sm text-ink-3">Agrippina Artemchuk · © 2026</span>
        </div>
      </footer>
    </div>
  );
}