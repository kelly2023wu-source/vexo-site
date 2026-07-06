const services = [
  "Market Validation",
  "Commercialization Strategy",
  "Go to Market Planning",
  "Strategic Partnerships",
  "Cross border Expansion",
  "Executive Representation",
  "Ecosystem Development",
  "Competitive & Benchmarking Analysis"
];

const audiences = [
  "Deep Tech Startups",
  "Consumer Brands",
  "Research & Innovation Teams",
  "Investors & Accelerators",
  "Global SMEs entering Asia"
];

const engagements = [
  {
    client: "BWI",
    detail: "APAC ecosystem development for satellite enabled water intelligence"
  },
  {
    client: "Global Commutech",
    detail:
      "International commercialization and strategic partnership development for photonics components and optical communication subsystems"
  },
  {
    client: "Consumer Brands",
    detail:
      "Overseas market entry exploration for lifestyle and pet product categories"
  }
];

function Mark({ index }: { index: number }) {
  const variants = [
    "rounded-full",
    "rotate-45",
    "rounded-[2px]",
    "rounded-full border-[10px] border-[var(--foreground)] bg-transparent"
  ];

  return (
    <span
      aria-hidden="true"
      className={`block h-9 w-9 bg-[var(--accent)] ${variants[index % variants.length]}`}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(248,250,248,0.88)] backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-xl font-black tracking-[0.16em]">
            VEXO
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-[var(--muted)] md:flex">
            <a className="transition hover:text-[var(--foreground)]" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-[var(--foreground)]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[var(--foreground)]" href="#work">
              Work
            </a>
          </div>
          <a
            href="mailto:hello@vexo.global"
            className="border border-[var(--foreground)] px-4 py-2 text-sm font-semibold transition hover:bg-[var(--foreground)] hover:text-white"
          >
            Contact
          </a>
        </nav>
      </header>

      <section id="top" className="grid-field relative px-5 pt-32 sm:px-8 lg:pt-36">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl">
            <p className="mb-7 inline-flex border border-[var(--line)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent-dark)]">
              Commercialization Studio
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] tracking-normal sm:text-7xl lg:text-[6.8rem]">
              Helping Frontier Technologies Scale Across Borders
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              We help technology companies and innovative brands validate markets,
              build strategic partnerships, and turn innovation into commercial
              traction across Asia and beyond.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@vexo.global"
                className="inline-flex min-h-12 items-center justify-center bg-[var(--foreground)] px-7 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[var(--accent-dark)]"
              >
                Start a Conversation
              </a>
              <span className="text-sm font-semibold text-[var(--muted)]">
                Strategy. Validation. Partnerships. Execution.
              </span>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[590px]" aria-hidden="true">
            <div className="absolute right-0 top-0 h-32 w-32 border-[18px] border-[var(--foreground)]" />
            <div className="absolute left-8 top-20 h-44 w-44 bg-[var(--accent)]" />
            <div className="absolute bottom-16 right-12 h-64 w-64 border border-[var(--line)] bg-white" />
            <div className="absolute bottom-40 right-28 h-24 w-24 rounded-full bg-[var(--foreground)]" />
            <div className="absolute bottom-5 left-0 grid w-full max-w-md grid-cols-3 border border-[var(--line)] bg-[rgba(255,255,255,0.86)] backdrop-blur">
              {["Market", "Partner", "Revenue"].map((item, index) => (
                <div key={item} className="border-r border-[var(--line)] p-5 last:border-r-0">
                  <span className="mb-8 block text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.12em]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-[var(--line)] bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <SectionLabel>Approach</SectionLabel>
            <h2 className="max-w-lg text-4xl font-black leading-tight sm:text-5xl">
              Commercialization, built as an operating system.
            </h2>
          </div>
          <p className="max-w-3xl text-2xl leading-snug text-[var(--foreground)] sm:text-3xl">
            Commercialization is not just strategy. It is a system of decisions,
            validated assumptions, and execution frameworks. VEXO works alongside
            teams to define the right market, the right partners, and the right
            path from innovation to revenue.
          </p>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="text-4xl font-black sm:text-5xl">From signal to scale.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[var(--muted)]">
              Focused modules for teams entering complex markets, validating
              demand, and building commercial momentum.
            </p>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article key={service} className="min-h-48 border-b border-r border-[var(--line)] bg-white p-6">
                <Mark index={index} />
                <h3 className="mt-10 max-w-52 text-xl font-black leading-tight">
                  {service}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--foreground)] px-5 py-24 text-white sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
              Who We Work With
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Built for teams crossing categories, borders, and adoption curves.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <div key={audience} className="border border-white/16 p-6">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">
                  0{index + 1}
                </span>
                <p className="mt-8 text-xl font-bold">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-[var(--line)] bg-white px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Selected Engagements</SectionLabel>
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {engagements.map((engagement) => (
              <article
                key={engagement.client}
                className="grid gap-5 py-8 md:grid-cols-[0.32fr_0.68fr] md:py-10"
              >
                <h3 className="text-2xl font-black">{engagement.client}</h3>
                <p className="max-w-3xl text-xl leading-8 text-[var(--muted)]">
                  {engagement.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="max-w-3xl text-5xl font-black leading-none sm:text-7xl">
              Results Start with the Right Market.
            </h2>
          </div>
          <div>
            <p className="mb-8 text-xl leading-8 text-[var(--muted)]">
              If you are exploring a new market, partner ecosystem, or
              commercialization pathway, VEXO can help you define where to start
              and how to move.
            </p>
            <a
              href="mailto:hello@vexo.global"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--accent)] px-7 text-sm font-black uppercase tracking-[0.12em] text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
            >
              hello@vexo.global
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-semibold text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[var(--foreground)]">VEXO</span>
          <span>Commercialization studio for frontier markets.</span>
        </div>
      </footer>
    </main>
  );
}
