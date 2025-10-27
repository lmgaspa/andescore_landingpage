// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/layout/Navbar.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { ArrowRight } from "lucide-react";

function scrollToId(id: string) {
  const el = document.querySelector(id) as HTMLElement | null;
  if (!el) return;
  // Offset for the sticky header (tune if your header height changes)
  const OFFSET = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  // Update URL hash without causing a jump
  history.replaceState(null, "", id);
}

export function Navbar() {
  return (
    <header className="sticky top-0 py-2 z-30 bg-chrome-gradient text-white border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <img
          src="/AndesCore.jpg"
          alt="AndesCore"
          className="w-14 h-14 rounded-2xl"
        />

        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#projects");
              }}
              className="hover:text-yellow-400 hover:shadow-sm transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#services");
              }}
              className="hover:text-yellow-400 hover:shadow-sm transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#stack"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#stack");
              }}
              className="hover:text-yellow-400 hover:shadow-sm transition"
            >
              Stack
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("#contact");
              }}
              className="hover:text-yellow-400 hover:shadow-sm transition"
            >
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("#contact");
          }}
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-blue-500 hover:shadow-sm transition"
        >
          Talk to us <ArrowRight className="w-4 h-4" />
        </a>
      </nav>
    </header>
  );
}
