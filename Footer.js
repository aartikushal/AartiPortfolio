export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-ink-dim">
        <p>© {new Date().getFullYear()} Aarti Potdar. Built with Next.js &amp; Tailwind CSS.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
          status: open to new opportunities
        </p>
      </div>
    </footer>
  );
}
