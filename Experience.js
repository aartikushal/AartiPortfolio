import { SectionEyebrow } from "./About";

const ROLES = [
  {
    period: "01/2023 — Present",
    title: "Senior Generative AI & Agentic AI Engineer",
    org: "Oracle India",
    location: "Mumbai",
    current: true,
    bullets: [
      "Architected agentic automation pipelines (n8n) across ERP workflows, cutting repetitive task volume by ~60%",
      "Built RAG-based knowledge systems (LangChain + Ollama) for grounded, conversational ERP data retrieval",
      "Designed FastAPI microservices connecting Oracle Fusion Finance/SCM to AI-driven applications",
      "Shipped LLaMA-based conversational assistants for real-time reporting and user support",
      "Optimized SQL and BI Publisher reporting, reducing execution time by up to 80%",
      "Led and mentored a cross-functional engineering team delivering production AI systems"
    ]
  },
  {
    period: "07/2017 — 11/2022",
    title: "Technology Lead",
    org: "Infosys",
    location: "Pune",
    bullets: [
      "Delivered 20+ Oracle Fusion Cloud integrations across Finance, HCM, and Supply Chain via OIC and REST APIs",
      "Automated invoice approval workflows, cutting approval cycle time by 30%",
      "Built HDL error-tracking dashboards that reduced issue-resolution time by 50%",
      "Led client workshops translating business requirements into scalable technical architecture"
    ]
  },
  {
    period: "05/2015 — 06/2017",
    title: "Senior Consultant",
    org: "TrueGlobal",
    location: "Pune",
    bullets: [
      "Owned production support for Oracle R12 financial modules (AP, AR, GL) against strict SLAs",
      "Delivered a custom order management module spanning the full quote-to-order cycle"
    ]
  },
  {
    period: "2009 — 2015",
    title: "Technical Lead → ERP Application Developer",
    org: "IGATE · Arrow Electronics",
    location: "Mumbai / Pune",
    bullets: [
      "Automated AP/AR/GL backfeed interfaces via ODI, improving financial data accuracy",
      "Migrated supplier and financial data for European ERP operations, building conversion automation that cut onboarding time by 25%"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-28">
        <SectionEyebrow index="04" label="experience" />
        <h2 className="font-mono text-2xl md:text-3xl text-ink leading-snug mt-10 max-w-2xl">
          Fifteen years, one thread: make systems do more of the work.
        </h2>

        <div className="mt-14 relative">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <div className="space-y-12">
            {ROLES.map((r) => (
              <div key={r.title + r.period} className="relative pl-8 md:pl-10">
                <span
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-void ${
                    r.current ? "bg-amber animate-pulse-node" : "bg-ink-dim"
                  }`}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-mono text-base md:text-lg text-ink">
                    {r.title} <span className="text-ink-dim">·</span>{" "}
                    <span className="text-cyan">{r.org}</span>
                  </h3>
                  <span className="font-mono text-[12px] text-ink-dim whitespace-nowrap">
                    {r.period}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-ink-dim mt-0.5">{r.location}</p>
                <ul className="mt-4 space-y-2 max-w-2xl">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[14px] text-ink-muted leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-amber-dim shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
