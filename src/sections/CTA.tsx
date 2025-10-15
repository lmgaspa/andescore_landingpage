// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/CTA.tsx
// ──────────────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="bg-slate-900 text-white">
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
            className="rounded-2xl bg-white text-slate-900 px-5 py-3 hover:bg-blue-500"
          >
            Request proposal
          </a>
          <a
            href="#projects"
            className="rounded-2xl border border-white/30 px-5 py-3 hover:bg-white/10"
          >
            See case studies
          </a>
        </div>
      </div>
    </section>
  );
}
