// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/layout/Navbar.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 py-2 z-30 bg-chrome-gradient text-white border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <img
          src="/AndesCore.jpg"
          alt="AndesCore"
          className="w-14 h-14 rounded-2xl"
        />
        <ul className="hidden md:flex items-center gap-8 text-lx font-medium">
          <li>
            <a href="#projects" className="hover:text-yellow-400 hover:shadow-sm transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400 hover:shadow-sm transition">
              Services
            </a>
          </li>
          <li>
            <a href="#stack" className="hover:text-yellow-400 hover:shadow-sm transition">
              Stack
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 hover:shadow-sm transition">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-blue-500 hover:shadow-sm transition"
        >
          Talk to us <ArrowRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
