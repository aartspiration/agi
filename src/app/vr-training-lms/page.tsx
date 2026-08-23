import Link from "next/link";

export const metadata = {
  title: "VR Training & LMS · Case Study · Agrippina Artemchuk",
  description:
    "Designing VR training and an LMS for field engineers: research, two personas, role-based flows, and a six-month pilot that cut training-organisation cost 15%.",
};

const meta = [
  { k: "What I owned", v: "Product design, end to end" },
  { k: "Research", v: "Quantitative & qualitative research, data analysis" },
  { k: "Users", v: "HR & L&D HR managers, engineers on site" },
  { k: "Result", v: "Cost of organising training down 15%, 6-month pilot" },
];

const methods = [
  { tag: "Qualitative", h: "11 interviews", d: "5 HR managers and 6 engineers, to hear how training fits their day and what frustrated them about it." },
  { tag: "Quantitative", h: "Behavioural data", d: "Completion, compliance and time-on-task, to see where training lapsed and how people actually did it." },
];

const personas = [
  { src: "/vr-lms/persona-hr.webp", alt: "Persona card—Anna, HR manager. Mental model: Oversight. She wants to see who is enrolled, progressing and passed at a glance, so nothing lapses into a fine." },
  { src: "/vr-lms/persona-engineer.webp", alt: "Persona card—Alexander, field engineer. Mental model: Readiness. He wants less paperwork and more hands-on practice, with one clear next step and its deadline." },
];

const pains = [
  {
    h: "Manager pains",
    items: [
      "No single view of who was at risk of missing a deadline, so problems surfaced too late.",
      "Hours lost to manual chasing: cross-checking lists, sending reminders one by one.",
      "No easy way to prove compliance when it was asked for.",
    ],
  },
  {
    h: "Engineer pains",
    items: [
      "Never sure what was actually required of them right now versus later.",
      "Training felt like an open-ended interruption with no clear end.",
      "Getting nudged about things they’d already done, which eroded any trust in the system.",
    ],
  },
];

const flows = [
  {
    src: "/vr-lms/flow-hr.jpg",
    alt: "HR manager happy path: open dashboard, see overdue, send a reminder; and open trainings list, enroll a new user, send training info",
    cap: "HR manager · spot risk, then act. The overview surfaces who is overdue, and enrolling a new user is a short, clear path.",
  },
  {
    src: "/vr-lms/flow-engineer.jpg",
    alt: "Field engineer happy path: open dashboard, choose a training, confirm the date; and open dashboard, choose a booked session, get session information",
    cap: "Engineer · what’s next, then done. Pick a training and confirm a date, or open a booked session to get its details.",
  },
];

const shots2021 = [
  {
    src: "/vr-lms/2021-hr-dashboard.webp",
    alt: "The 2021 HR manager dashboard: a Recent activity table with status chips (completed, passed, assigned, not passed, overdue, issued) and inline Send-reminder actions, above an Upcoming VR sessions schedule with seats and status.",
    cap: "2021: the HR manager’s dashboard. Recent activity reads at a glance—overdue and not-passed surface with the one action that clears them—and the week’s VR sessions and seat counts sit right below.",
  },
  {
    src: "/vr-lms/2021-catalogue.webp",
    alt: "The 2021 course catalogue: cards for each safety course showing delivery mode (VR drill, desktop, web), number assigned and completion progress, with Open and Add-users actions.",
    cap: "2021: the course catalogue. Every course shows its delivery mode, how many are assigned and how far along, with Open and Add users a click away.",
  },
  {
    src: "/vr-lms/2021-billing.webp",
    alt: "The 2021 billing screen: a Subscriptions tab listing owned ready-made VR courses with seat counts and an Owned badge, and a collapsible Courses-available-to-purchase section.",
    cap: "2021: billing and subscriptions, kept deliberately plain. What the company owns, how many seats, and what’s included read in one pass, with more courses to buy one tap away.",
  },
  {
    src: "/vr-lms/2021-engineer-dashboard.webp",
    alt: "The 2021 engineer dashboard: a Training list with per-course progress, due dates and Continue buttons, a Booked-sessions panel with a confirmed VR drill, and an Exams panel showing pass and not-passed results.",
    cap: "2021: the engineer’s dashboard. What to do next, when it’s due, and one button per course—with booked VR sessions and exam results in the same glance.",
  },
];

const aiBullets = [
  { h: "Research, sped up.", t: "AI helped me run a quick competitive and heuristic pass over other admin and LMS tools, and cluster the findings, so I spent the time deciding rather than gathering." },
  { h: "Layout exploration.", t: "I used AI to generate dense-dashboard layout variations quickly, then chose and refined the direction. It made the wide, cheap part of the work faster." },
  { h: "Design-system structure.", t: "AI helped scaffold the token and component taxonomy, colour, spacing, type, and panel states, which I then judged, corrected, and finalised into the system the new screens run on." },
];

const shots2026 = [
  {
    src: "/vr-lms/2026-hr-dashboard.jpg",
    alt: "The 2026 redesigned HR manager dashboard with cohort completion, exam pass rate, at-risk learners and VR sessions",
    cap: "2026: the HR manager dashboard, redesigned. The four numbers that predict a safety gap lead the page, with actions one click away.",
  },
  {
    src: "/vr-lms/2026-billing.jpg",
    alt: "The 2026 redesigned billing console with an overdue banner, summary cards and a status-coded invoice table",
    cap: "2026: billing, rebuilt around consequence. An overdue balance is a banner that says what it blocks, not a row you have to notice.",
  },
  {
    src: "/vr-lms/2026-catalogue.jpg",
    alt: "The 2026 redesigned course catalogue with card and table views, progress states and scheduling actions",
    cap: "2026: the catalogue now shows who is assigned, how far along, and status, with card and table views for different jobs.",
  },
  {
    src: "/vr-lms/2026-engineer-dashboard.jpg",
    alt: "The 2026 learner dashboard leading with a do-this-next card, a deadline and a continue button",
    cap: "2026: the engineer’s view, distilled to one next action, one deadline, one button.",
  },
];

const stats = [
  { num: "20%", lbl: "less time engineers spent completing training" },
  { num: "18%", lbl: "less time HR managers spent analysing training" },
  { num: "15%", lbl: "lower cost of organising training" },
];

const insights = [
  { h: "Start with the people, not the features", b: "Both users took the training seriously; it was the process around it that got in their way. Interviewing them turned that friction into the brief, and the design came straight out of what they found hard." },
  { h: "Design each role around its first question", b: "The HR manager asks who is behind; the engineer asks what’s next. Two users, two starting points, two flows. One shared view would have served neither well." },
  { h: "Let people practise, not just read", b: "The engineers’ biggest ask was to rehearse before the real thing, not memorise paper for a one-time session. Moving critical training into VR is what made it both safer to learn and easier to keep current." },
];

// shared bits
const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 text-[13px] font-medium uppercase tracking-[0.05em] text-accent">{children}</p>
);
const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-8 text-[clamp(24px,3vw,30px)] font-semibold leading-[1.2] tracking-[-0.01em]">{children}</h2>
);
const Measure = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-[720px] space-y-[18px] text-lg leading-[1.62] text-ink-2 [&_b]:font-semibold [&_b]:text-ink [&_strong]:font-semibold [&_strong]:text-ink ${className}`}>
    {children}
  </div>
);
const Callout = ({ children }: { children: React.ReactNode }) => (
  <div className="my-6 max-w-[720px] rounded-r-xl border-l-[3px] border-accent bg-accent/[0.06] px-6 py-5">
    <p className="text-[17px] leading-relaxed text-ink">{children}</p>
  </div>
);
const Bullets = ({ items }: { items: React.ReactNode[] }) => (
  <ul className="mt-[18px] max-w-[720px]">
    {items.map((it, i) => (
      <li
        key={i}
        className="relative mb-3 pl-[22px] text-[17px] leading-[1.55] text-ink-2 before:absolute before:left-[2px] before:top-[11px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
      >
        {it}
      </li>
    ))}
  </ul>
);

function Shot({ src, alt, cap, soft = false }: { src: string; alt: string; cap?: React.ReactNode; soft?: boolean }) {
  return (
    <figure className="mt-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`block h-auto w-full rounded-[14px] border ${soft ? "border-hairline" : "border-hairline-strong shadow-[0_24px_60px_rgba(0,0,0,0.4)]"}`}
      />
      {cap ? <figcaption className="mt-3.5 text-sm leading-[1.5] text-ink-3">{cap}</figcaption> : null}
    </figure>
  );
}

export default function VrTrainingLms() {
  return (
    <div className="font-sans">
      {/* nav */}
      <nav className="sticky top-0 z-20 border-b border-hairline bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-6">
          <Link href="/" className="font-semibold tracking-[-0.01em]">Agrippina Artemchuk</Link>
          <div className="hidden items-center gap-8 mob:flex">
            <Link href="/#work" className="text-[15px] text-ink-2 hover:text-ink">Work</Link>
            <Link href="/#about" className="text-[15px] text-ink-2 hover:text-ink">About</Link>
            <Link href="/#skills" className="text-[15px] text-ink-2 hover:text-ink">Skills</Link>
            <a href="https://www.linkedin.com/in/agrippinaartemchuk" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-hairline-strong px-4 py-2 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:bg-accent/[0.06]">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="pb-10 pt-14 mob:pb-14 mob:pt-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <Link href="/#work" className="mb-6 inline-block text-[15px] font-medium text-ink-2 transition-colors hover:text-accent">← All work</Link>
          <p className="mb-[18px] text-[13px] font-medium uppercase tracking-[0.06em] text-accent">Case Study 03 · VR Training &amp; LMS</p>
          <h1 className="mb-6 text-[clamp(40px,7vw,68px)] font-semibold leading-[1.04] tracking-[-0.025em]">
            Training high-stakes work in VR
          </h1>
          <p className="max-w-[60ch] text-[clamp(19px,2.4vw,22px)] leading-[1.5] text-ink-2">
            A pilot project rebuilding the training process, moving it to an LMS with immersive VR training that lets
            field engineers rehearse dangerous procedures before doing them for real. It serves two users: HR managers
            who lead the organisation of the training process, and engineers who guard their focus for dangerous jobs.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 border-y border-hairline py-6 mob:grid-cols-4 mob:gap-6">
            {meta.map((m) => (
              <div key={m.k}>
                <div className="mb-2 text-xs font-medium uppercase tracking-[0.05em] text-ink-3">{m.k}</div>
                <div className="text-[15px] leading-[1.4] text-ink">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* my role */}
        <section className="pt-14">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>My role</Label>
            <H2>What I led</H2>
            <Measure>
              <p>I owned the product design from research to handoff. I led the move from a paper-based training process to an LMS, and the introduction of immersive VR so engineers could rehearse dangerous procedures before doing them for real.</p>
              <p>Working from the company’s existing brand book, I built a dedicated design system on top of it, so the LMS, the admin console and the VR flows all shared one consistent set of components and tokens. I designed to <b>WCAG AA</b>, checking colour contrast, focus states and legible type, so a platform whose whole job is clarity stayed readable for everyone.</p>
            </Measure>
          </div>
        </section>

        {/* problem */}
        <section className="py-14">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>The problem</Label>
            <H2>Critical training, delivered in the most inconvenient way</H2>
            <Measure>
              <p>Engineers can’t work on an industrial site until their safety training is current, so the platform that manages that training, courses, exams, VR drills, certificates, sits directly between a person and a dangerous job. Getting it right matters. The problem was that it was still run the old way: heavy on paperwork, and hard to keep on top of. Around the training itself, HR managers also manage the licenses and seats that keep it running, so that had to live in the platform too.</p>
              <p>Field training did happen, but only as a group session run once per topic, so an engineer got a single shot at it and a lot of material to learn by heart beforehand. The challenge wasn’t the features. It was that the training was critical but inconvenient for everyone it touched. HR managers led the whole process while buried in it, and needed to see who was behind without hunting through lists. Engineers took it seriously but faced stacks of paper to memorise before a one-time session, with no way to practise or repeat it. The rebuild had to keep the training just as rigorous while making it easier to run, and letting engineers rehearse before the real thing. So before designing a single screen, I went and talked to both sides.</p>
            </Measure>
          </div>
        </section>

        {/* research */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>Research</Label>
            <H2>Eleven interviews, two very different users</H2>
            <Measure>
              <p>I interviewed 5 HR and L&amp;D HR managers and 6 engineers myself. I wanted the same thing from both: what does your day actually look like, where does this training fit into it, and what frustrated them about it. The answers split so cleanly along role lines that two personas wrote themselves.</p>
            </Measure>

            <div className="mt-7 grid grid-cols-1 gap-4 mob:grid-cols-2">
              {methods.map((m) => (
                <div key={m.h} className="relative overflow-hidden rounded-[14px] border border-hairline bg-surface p-[22px] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]">
                  <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[.06em] text-accent">{m.tag}</span>
                  <p className="mb-2 text-lg font-semibold text-ink">{m.h}</p>
                  <p className="text-sm leading-[1.55] text-ink-2">{m.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-5">
              {personas.map((p) => (
                <figure key={p.src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} loading="lazy" className="block h-auto w-full rounded-[14px] border border-hairline" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* pains & needs */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>What I heard</Label>
            <H2>The pains behind the resistance</H2>
            <div className="mt-6 grid grid-cols-1 gap-5 mob:grid-cols-2">
              {pains.map((col) => (
                <div key={col.h}>
                  <h4 className="mb-3.5 text-[13px] font-semibold uppercase tracking-[.04em] text-accent">{col.h}</h4>
                  <Bullets items={col.items} />
                </div>
              ))}
            </div>
            <Callout>
              The insight that shaped everything: both users were resisting the same thing, a system that made them do
              the work of finding information. The HR manager had to hunt for who was behind. The engineer had to figure
              out what was required. Neither should have had to. The platform should surface it.
            </Callout>
          </div>
        </section>

        {/* solution + flows */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>The solution</Label>
            <H2>One platform, built around each user’s first question</H2>
            <Measure>
              <p>The two users open the platform needing different things, so I gave each their own starting point. The HR manager lands on “who is behind,” the overview needed to keep the process on track, with every existing training laid out clearly and enrolling reduced to a couple of clicks. The engineer lands on “what do I do next,” the single step that gets them ready without wading through everything else. And instead of memorising paper for a one-time session, the engineer can now rehearse the procedure in VR and repeat it until it sticks, which was their biggest ask. Each side is arranged behind that one question, and each has its own flow.</p>
            </Measure>

            {flows.map((f) => (
              <Shot key={f.src} src={f.src} alt={f.alt} cap={f.cap} soft />
            ))}

            <Shot
              src="/vr-lms/vr-drill.webp"
              alt="VR safety-training UI draft: an in-headset drill showing one safety rule (keep harness fastened), an I-Understand and Repeat control, a 2 of 6 progress bar, a time-remaining timer, and diegetic labels pointing at the emergency exit and seat harness."
              cap={<>VR rehearsal · an early draft of the in-headset drill. One safety rule at a time, simple prompts, and a <em className="italic">Repeat</em> so the engineer can practise until it sticks.</>}
            />
          </div>
        </section>

        {/* original screens */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>The original, 2021</Label>
            <H2>What I shipped</H2>
            <Measure>
              <p>The first version put the research into practice: a clean, role-aware platform that moved training off paper and into one place. HR managers got a clear view of courses and could handle billing and seats without the clutter of the old internal tools, and engineers got a straightforward path through what they had to complete. It was a solid, legible product that made a heavy, paper-bound process far easier to run.</p>
            </Measure>

            {shots2021.map((s) => (
              <Shot key={s.src} src={s.src} alt={s.alt} cap={s.cap} />
            ))}
          </div>
        </section>

        {/* bonus: AI redesign */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>Bonus · 2026 redesign</Label>
            <H2>Revisiting it with AI in the loop</H2>
            <Measure>
              <p>Years later I came back to the same product to push it further, and used AI to move faster through the parts that usually slow a redesign down. The goal was a denser, more functional interface that surfaced even more of what each user needed, without losing the legibility of the original.</p>
            </Measure>

            <Bullets
              items={aiBullets.map((b) => (
                <span key={b.h}>
                  <strong className="font-semibold text-ink">{b.h}</strong> {b.t}
                </span>
              ))}
            />

            <Callout>
              The split that kept it honest: AI did the fast first pass, gathering, generating, scaffolding. The
              judgement, the information hierarchy, and the final calls stayed mine. That’s what made a redesign of this
              size possible in the time I had.
            </Callout>

            {shots2026.map((s) => (
              <Shot key={s.src} src={s.src} alt={s.alt} cap={s.cap} />
            ))}
          </div>
        </section>

        {/* outcome */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>Pilot results</Label>
            <H2>Measured against safety, not engagement</H2>
            <Measure>
              <p>The platform ran as a six-month pilot. The numbers that matter aren’t logins, they’re how much time and cost the design gave back to the people using it.</p>
            </Measure>

            <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
              {stats.map((s) => (
                <div key={s.num} className="relative overflow-hidden rounded-[14px] border border-hairline bg-surface p-6 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.18),transparent)]">
                  <div className="text-[42px] font-semibold leading-none tracking-[-0.02em] text-accent">{s.num}</div>
                  <div className="mt-2.5 text-sm leading-[1.4] text-ink-2">{s.lbl}</div>
                </div>
              ))}
            </div>

            <Callout>
              Everything the research pointed to, surfacing progress for the HR manager and the next step for the
              engineer, was aimed at getting the right training to the right person with less effort on both sides. The
              time and cost savings came from the same place: both users stopped hunting for information the system
              should have shown them.
            </Callout>
          </div>
        </section>

        {/* insight */}
        <section className="border-t border-hairline py-14 mob:py-24">
          <div className="mx-auto max-w-[1080px] px-6">
            <Label>What I took from it</Label>
            <H2>Three things I design by now</H2>
            <div className="mt-2 grid grid-cols-1 gap-7 mob:grid-cols-3 mob:gap-8">
              {insights.map((ins, i) => (
                <div key={ins.h} className="flex flex-col gap-3.5 border-t-2 border-accent pt-5">
                  <span className="text-xs font-medium tabular-nums tracking-[.08em] text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="mb-2.5 text-lg font-semibold leading-[1.3] text-ink">{ins.h}</p>
                    <p className="text-[15px] leading-[1.6] text-ink-2">{ins.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline py-12">
        <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-4 px-6">
          <Link href="/#work" className="border-b border-accent pb-0.5 text-base font-medium text-ink">← Back to all work</Link>
          <span className="text-sm text-ink-3">Agrippina Artemchuk · © 2026</span>
        </div>
      </footer>
    </div>
  );
}
