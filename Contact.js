import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "./About";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 md:py-32">
        <SectionEyebrow index="06" label="contact" />

        <div className="grid md:grid-cols-12 gap-12 mt-10">
          <div className="md:col-span-7">
            <h2 className="font-mono text-3xl md:text-4xl text-ink leading-tight">
              Building an agentic system,
              <br />
              or need someone who's already <span className="text-amber">closed the books</span>{" "}
              and shipped the model?
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed max-w-lg">
              Open to conversations on enterprise AI, agentic architecture, and next-generation
              Oracle Fusion innovation — whether that's a role, a collaboration, or just
              comparing notes.
            </p>

            <a
              href="mailto:aartikushalpotdar@gmail.com"
              className="mt-9 inline-flex items-center gap-2 bg-amber text-void font-mono text-sm font-medium px-5 py-3 rounded-sm hover:bg-ink transition-colors"
            >
              Email Aarti
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="md:col-span-5">
            <div className="border border-line rounded-sm p-6 bg-panel space-y-5">
              <ContactRow icon={Mail} label="Email" value="aartikushalpotdar@gmail.com" href="mailto:aartikushalpotdar@gmail.com" />
              <ContactRow icon={Phone} label="Phone" value="+91 93210 21182" href="tel:+919321021182" />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="/in/aarti-potdar-agenticai"
                href="https://www.linkedin.com/in/aarti-potdar-agenticai/"
              />
              <ContactRow icon={MapPin} label="Location" value="Mumbai, India" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-9 h-9 rounded-sm border border-line-bright flex items-center justify-center text-cyan group-hover:border-cyan transition-colors shrink-0">
        <Icon size={16} />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[11px] text-ink-dim">{label}</p>
        <p className="font-mono text-[13px] text-ink truncate group-hover:text-amber transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  );
}
