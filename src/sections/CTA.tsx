// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/CTA.tsx
// ──────────────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="bg-chrome-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Ready to start?</h2>
          <p className="mt-2 text-slate-300 max-w-xl">
            Tell us your idea and receive a lean scope with timelines, costs and
            a plan for continuous evolution.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href="#contact"
            className="rounded-2xl bg-white text-slate-900 px-5 py-3 hover:bg-yellow-400 hover:shadow-sm transition"
          >
            Request proposal
          </a>
          <a
            href="#projects"
            className="rounded-2xl border-ty border-white/30 bg-slate-900 px-5 py-3 hover:bg-blue-600 hover:shadow-sm transition"
          >
            See case studies
          </a>
        </div>
      </div>
    </section>
  );
}
