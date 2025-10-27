// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/layout/Footer.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-chrome-gradient text-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-lx text-center md:text-left">
            <p className="hover:text-yellow-400 hover:shadow-sm transition">
              © {new Date().getFullYear()} AndesCore
            </p>
            <p className="mt-1 hover:text-yellow-400 hover:shadow-sm transition">
              Contact:{" "}
              <a
                href="mailto:andescoresoftware@gmail.com"
                className="underline"
              >
                andescoresoftware@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-yellow-400 hover:shadow-sm transition"
              href="https://wa.me/5571994105740"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <SiWhatsapp className="w-5 h-5" />
            </a>
            <a
              className="hover:text-yellow-400 hover:shadow-sm transition"
              href="https://github.com/lmgaspa"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              className="hover:text-yellow-400 hover:shadow-sm transition"
              href="https://www.linkedin.com/in/luiz-gasparetto-tech/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
