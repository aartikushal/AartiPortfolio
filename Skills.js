import { SectionEyebrow } from "./About";

const GROUPS = [
  {
    label: "Generative AI & LLMs",
    items: ["LLMs", "Transformers", "GPT models", "Gemini", "LLaMA", "Mistral", "DeepSeek", "Gemma", "Prompt engineering"]
  },
  {
    label: "Agentic systems",
    items: ["Multi-agent systems", "LangGraph", "MCP (Model Context Protocol)", "n8n orchestration", "Chatbots"]
  },
  {
    label: "Retrieval & RAG",
    items: ["Retrieval-Augmented Generation", "Vector databases", "Embeddings", "Semantic search", "LangChain", "Ollama"]
  },
  {
    label: "Engineering & infra",
    items: ["Python", "SQL / PL-SQL", "FastAPI", "Docker", "AWS", "OCR"]
  },
  {
    label: "Oracle Fusion ERP",
    items: ["Finance (AP/AR/GL)", "HCM", "SCM", "OIC", "OTBI", "BI Publisher"]
  },
  {
    label: "Languages",
    items: ["English — C2", "Hindi — C2", "Marathi — C2"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-28">
        <SectionEyebrow index="05" label="skills" />
        <h2 className="font-mono text-2xl md:text-3xl text-ink leading-snug mt-10 max-w-2xl">
          The stack, grouped the way it actually gets used.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-sm overflow-hidden">
          {GROUPS.map((g) => (
            <div key={g.label} className="bg-panel p-6 hover:bg-panel-raised transition-colors">
              <h3 className="font-mono text-[12px] text-amber uppercase tracking-wider mb-4">
                {g.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[12px] text-ink-muted border border-line-bright rounded-sm px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <CertBadge
            title="Oracle Fusion AI Agent Studio Foundations Associate"
            issuer="Oracle"
          />
          <CertBadge
            title="Oracle AI in Fusion Cloud Supply Chain & Manufacturing"
            issuer="Oracle"
          />
        </div>
      </div>
    </section>
  );
}

function CertBadge({ title, issuer }) {
  return (
    <div className="flex items-center gap-3 border border-line-bright rounded-sm px-4 py-3 bg-panel">
      <span className="w-2 h-2 rounded-full bg-cyan node-dot shrink-0" />
      <div>
        <p className="font-mono text-[12px] text-ink leading-snug">{title}</p>
        <p className="font-mono text-[11px] text-ink-dim mt-0.5">{issuer}</p>
      </div>
    </div>
  );
}
