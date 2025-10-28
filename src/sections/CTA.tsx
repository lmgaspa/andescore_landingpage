// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/CTA.tsx
// ──────────────────────────────────────────────────────────────────────────────
export function CTA() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-yellow-50 text-slate-900 rounded-2xl my-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to start?</h2>
          <p className="mt-2 text-slate-600 max-w-xl">
            Tell us your idea and receive a lean scope with timelines, costs and
            a plan for continuous evolution.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 text-white px-5 py-3 hover:bg-blue-600 hover:shadow-md transition"
          >
            Request proposal
          </a>
          <a
            href="#projects"
            className="rounded-2xl border-ty border-slate-300 bg-white text-slate-900 px-5 py-3 hover:bg-yellow-400 hover:shadow-md transition"
          >
            See case studies
          </a>
        </div>
      </div>
    </section>
  );
}
