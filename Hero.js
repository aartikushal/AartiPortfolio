import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-blueprint border-b border-line">
      <div className="absolute inset-0 bg-gradient-to-b from-void/0 via-void/0 to-void pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-36 pb-20 md:pt-44 md:pb-28 relative">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7 animate-rise">
            <p className="font-mono text-[13px] text-amber tracking-widest uppercase mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-amber" />
              Senior Generative AI &amp; Agentic AI Engineer
            </p>
            <h1 className="font-mono font-medium text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-glow-amber">
              Aarti Potdar
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-muted leading-relaxed">
              I turn fifteen years of enterprise ERP depth into AI systems that reason —
              retrieval pipelines, multi-agent orchestration, and LLM microservices that
              give Oracle Fusion a language model's judgment without losing an accountant's rigor.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-amber text-void font-mono text-sm font-medium px-5 py-3 rounded-sm hover:bg-ink transition-colors"
              >
                View the work
                <ArrowDownRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/aarti-potdar-agenticai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line-bright text-ink font-mono text-sm px-5 py-3 rounded-sm hover:border-cyan hover:text-cyan transition-colors"
              >
                Connect on LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 max-w-md gap-6 font-mono">
              <div>
                <dt className="text-2xl text-ink">15+</dt>
                <dd className="text-[12px] text-ink-dim mt-1">yrs enterprise tech</dd>
              </div>
              <div>
                <dt className="text-2xl text-ink">3+</dt>
                <dd className="text-[12px] text-ink-dim mt-1">yrs applied GenAI</dd>
              </div>
              <div>
                <dt className="text-2xl text-ink">6</dt>
                <dd className="text-[12px] text-ink-dim mt-1">production AI systems shipped</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-5">
            <PipelineTrace />
          </div>
        </div>
      </div>
    </section>
  );
}

export function PipelineTrace({ compact = false }) {
  const nodes = [
    { x: 20, label: "ERP_DATA", sub: "Fusion / OIC" },
    { x: 165, label: "RETRIEVAL", sub: "RAG · vectors" },
    { x: 310, label: "REASONING", sub: "agent graph" },
    { x: 455, label: "ACTION", sub: "workflow" }
  ];

  return (
    <div className={`border border-line bg-panel/60 rounded-sm p-5 ${compact ? "" : "backdrop-blur-sm"}`}>
      <p className="font-mono text-[11px] text-ink-dim mb-4 tracking-wider">// live_trace — agentic_pipeline.log</p>
      <svg viewBox="0 0 495 130" className="w-full h-auto" role="img" aria-label="Agentic pipeline: ERP data to retrieval to reasoning to action">
        <line x1="20" y1="45" x2="475" y2="45"
          stroke="#232939" strokeWidth="2" />
        <line x1="20" y1="45" x2="475" y2="45"
          stroke="#E8A33D" strokeWidth="2"
          strokeDasharray="1000" strokeDashoffset="1000"
          className="animate-trace" />
        {nodes.map((n, i) => (
          <g key={n.label}>
            <circle
              cx={n.x + 5} cy="45" r="6"
              className={i === 2 ? "text-cyan node-dot animate-pulse-node" : "text-amber node-dot"}
              fill="currentColor"
            />
            <text x={n.x} y="78" className="fill-ink" fontFamily="var(--font-mono)" fontSize="11" fontWeight="500">
              {n.label}
            </text>
            <text x={n.x} y="95" className="fill-ink-dim" fontFamily="var(--font-mono)" fontSize="9">
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 pt-4 border-t border-line flex items-center justify-between font-mono text-[11px] text-ink-dim">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-blink" />
          orchestration: langgraph
        </span>
        <span>latency: p95 optimized</span>
      </div>
    </div>
  );
}
