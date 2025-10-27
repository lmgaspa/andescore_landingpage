// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Contact.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h2 className="text-xl md:text-2xl font-semibold">Contact us</h2>
        <p className="mt-2 text-slate-600">
          Send an email with a brief description of what you want to build.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="mailto:andescoresoftware@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 hover:bg-blue-600 hover:shadow-sm transition"
          >
            <Mail className="w-4 h-4" /> andescoresoftware@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
