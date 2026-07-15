import { SectionEyebrow } from "./About";

const PROJECTS = [
  {
    id: "01",
    name: "ERP Knowledge Copilot",
    type: "RAG · Retrieval-Augmented Generation",
    summary:
      "A retrieval layer over Oracle Fusion Finance, HCM, and SCM data that answers questions in plain language instead of requiring a report or a query. Built to make ERP knowledge searchable the way documentation should have been all along.",
    outcomes: [
      "Cut manual document lookup and report review time by roughly 40%",
      "Grounded answers in live ERP extracts to keep hallucination risk low",
      "Shipped as a containerized service alongside existing Oracle workflows"
    ],
    stack: ["LangChain", "Ollama", "FastAPI", "Vector DB", "Docker"]
  },
  {
    id: "02",
    name: "Agentic ERP Automation Pipeline",
    type: "Multi-agent orchestration",
    summary:
      "Event-driven agent workflows that took over the repetitive, rule-based steps inside finance and HR operations — approvals, backfeeds, and reconciliation triggers that previously needed a person to notice and act.",
    outcomes: [
      "Removed roughly 60% of manual task volume across targeted ERP workflows",
      "Reusable orchestration and fault-handling patterns cut rework by 25%",
      "Reduced integration effort between Fusion Finance/SCM and external systems by 35%"
    ],
    stack: ["n8n", "FastAPI", "Oracle Integration Cloud", "REST APIs"]
  },
  {
    id: "03",
    name: "LLaMA Conversational ERP Assistant",
    type: "Applied LLM · conversational interface",
    summary:
      "A LLaMA-based assistant wired directly into Oracle ERP so finance and HR teams can ask for reports and status updates conversationally, instead of navigating menus or waiting on a ticket queue.",
    outcomes: [
      "Gave non-technical staff self-service access to routine reporting",
      "Reduced first-line support load for repeatable, low-complexity requests",
      "Deployed as a Dockerized microservice with OIC-based data access"
    ],
    stack: ["LLaMA", "FastAPI", "Docker", "Oracle OIC"]
  }
];

export default function Projects() {
  return (
    <section id="work" className="border-b border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-28">
        <SectionEyebrow index="03" label="featured work" />
        <h2 className="font-mono text-2xl md:text-3xl text-ink leading-snug mt-10 max-w-2xl">
          Three systems where legacy ERP met a language model.
        </h2>

        <div className="mt-12 space-y-6">
          {PROJECTS.map((p) => (
            <article
              key={p.id}
              className="group border border-line rounded-sm p-7 md:p-9 hover:border-amber-dim transition-colors bg-panel/60"
            >
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="font-mono text-[11px] text-amber-dim">{p.id}</span>
                  <h3 className="font-mono text-xl text-ink mt-2 group-hover:text-amber transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-mono text-[12px] text-cyan mt-2">{p.type}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[11px] text-ink-muted border border-line-bright rounded-sm px-2 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p className="text-ink-muted leading-relaxed">{p.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-[14px] text-ink">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
