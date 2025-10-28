// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Services.tsx
// ──────────────────────────────────────────────────────────────────────────────

type Service = { title: string; desc: string };
const SERVICES: Service[] = [
  {
    title: "Web & E‑commerce",
    desc: "Next.js/React, SEO, checkout, integrations (Pix/Card/Webhook).",
  },
  {
    title: "APIs & SaaS",
    desc: "Node/Nest/Spring/Django/FastApi APIResful and SaaS.",
  },
  {
    title: "Mobile",
    desc: "React Native/Flutter projects.",
  },
  {
    title: "Cloud & DevOps",
    desc: "AWS, Docker, Kubernetes, G4 (Google Analytics, monitoring and costs.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl my-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        Services
      </h2>
      <p className="mt-8 max-w-3xl text-slate-600">
        We build modern digital products: scalable APIs, fast front‑ends, mobile
        apps, and cloud infrastructure with CI/CD.
      </p>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-white border-ty border-slate-200 rounded-2xl p-6 shadow-sm hover:bg-yellow-400 hover:shadow-sm transition"
          >
            <h3 className="font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
