// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Projects.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
          Delivered projects
        </h2>
        <p className="mt-2 text-slate-600">
          Over 20 solutions shipped, from MVP to enterprise.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-sm transition p-5"
            >
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white border border-slate-200 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
