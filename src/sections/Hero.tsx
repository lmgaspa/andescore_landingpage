// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Hero.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const bullets = [
    "Tailored architecture",
    "Managed AWS infrastructure",
    "Payments (Pix/Card)",
    "Support and continuous evolution",
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Build your <span className="text-slate-700">website</span>,{" "}
            <span className="text-slate-700">e‑commerce</span>,{" "}
            <span className="text-slate-700">SaaS</span> and more with us.
          </motion.h1>
          <p className="mt-5 text-slate-600 max-w-xl">
            From idea to cloud deploy with observability, security and
            performance. We handle backend, frontend, mobile, CI/CD and
            infrastructure.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {bullets.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 bg-white border-ty border-slate-200 text-slate-700 px-3 py-1.5 rounded-full hover:bg-yellow-400 hover:shadow-sm transition"
              >
                <CheckCircle2 className="w-4 h-4" /> {t}
              </span>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            <a
              href="#contact"
              className="rounded-2xl px-5 py-3 bg-slate-900 border-ty text-white hover:bg-blue-600 hover:shadow-sm transition"
            >
              Request a quote
            </a>
            <a
              href="#projects"
              className="rounded-2xl px-5 py-3 bg-white border-ty border-slate-300 text-slate-800 hover:bg-yellow-400 hover:shadow-sm transition"
            >
              View projects
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-white border border-slate-200 shadow-sm grid place-items-center overflow-hidden">
            <img
              src="/AndesCore.jpg"
              alt="AndesCore"
              className="w-full h-full object-contain object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
