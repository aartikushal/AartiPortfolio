"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber node-dot animate-pulse-node" />
          AP<span className="text-ink-dim">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-ink-muted">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-1 transition-colors hover:text-ink"
              >
                <span className="text-amber-dim mr-1">0{i + 1}</span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[12px] border border-line-bright px-3 py-1.5 rounded-sm text-ink-muted hover:text-void hover:bg-cyan hover:border-cyan transition-colors"
        >
          get in touch
        </a>
      </nav>
    </header>
  );
}
