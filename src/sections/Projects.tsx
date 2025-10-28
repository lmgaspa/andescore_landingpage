// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Projects.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { projects } from "../data/projects";

function parseDescriptionWithLinks(desc: string) {
  const urlRegex = /(www\.\S+|https?:\/\/\S+)/g;
  const parts = desc.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      const url = part.startsWith('http') ? part : `https://${part}`;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="pt-2 block text-blue-600 hover:text-blue-800 underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function Projects() {
  return (
    <section id="projects" className="mt-4">
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
              className="rounded-2xl border-ty border-slate-200 bg-white p-5 hover:bg-blue-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm">{parseDescriptionWithLinks(p.desc)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-white border-ty border-slate-200 hover:bg-yellow-400 hover:shadow-sm transition rounded-full px-2 py-1"
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
