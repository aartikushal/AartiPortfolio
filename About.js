const STRENGTHS = [
  {
    tag: "01",
    title: "Agentic system design",
    detail: "Multi-agent workflows and orchestration graphs (LangGraph, MCP) that replace brittle, rule-based automation."
  },
  {
    tag: "02",
    title: "RAG architecture",
    detail: "Retrieval pipelines over structured ERP data — vector stores, embeddings, and grounded Q&A with LangChain + Ollama."
  },
  {
    tag: "03",
    title: "Oracle Fusion ERP",
    detail: "15 years inside Finance, HCM, and SCM — OIC integrations, BI Publisher, PL/SQL, and the operational reality models must respect."
  },
  {
    tag: "04",
    title: "Production LLM delivery",
    detail: "FastAPI microservices, Dockerized deployment, and fault-tolerant orchestration shipped into live enterprise environments."
  }
];

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-28">
        <SectionEyebrow index="02" label="about" />

        <div className="grid md:grid-cols-12 gap-12 mt-10">
          <div className="md:col-span-6">
            <h2 className="font-mono text-2xl md:text-3xl text-ink leading-snug">
              Enterprise depth, applied to models that reason.
            </h2>
            <div className="mt-6 space-y-5 text-ink-muted leading-relaxed">
              <p>
                Aarti spent the first twelve years of her career inside the machinery of
                Oracle Fusion ERP — Finance, HCM, and Supply Chain — closing books, tuning
                PL/SQL, and building the integrations that keep enterprise data flowing
                without drama.
              </p>
              <p>
                Since 2023, that operational fluency has become the foundation for a second
                specialty: designing generative and agentic AI systems that sit on top of
                that same ERP backbone. Retrieval pipelines that answer finance questions in
                plain language. Agent graphs that replace static workflow rules with
                context-aware decisions. Containerized services that ship the way enterprise
                software actually needs to ship — reliably, auditable, and at scale.
              </p>
              <p>
                The throughline across both halves of her career is the same: reduce the gap
                between what a system can do and what a person actually has to do by hand.
              </p>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-sm overflow-hidden">
              {STRENGTHS.map((s) => (
                <div key={s.tag} className="bg-panel p-6 hover:bg-panel-raised transition-colors">
                  <span className="font-mono text-[11px] text-amber-dim">{s.tag}</span>
                  <h3 className="font-mono text-sm text-ink mt-2 mb-2">{s.title}</h3>
                  <p className="text-[13px] text-ink-dim leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ index, label }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-void bg-amber px-1.5 py-0.5 rounded-sm">{index}</span>
      <span className="font-mono text-[11px] text-ink-dim uppercase tracking-widest">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
