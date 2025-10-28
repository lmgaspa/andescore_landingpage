// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/ui/CookiePreferencesButton.tsx
// ──────────────────────────────────────────────────────────────────────────────

import { useState } from "react";

interface CookiePreferencesButtonProps {
  onOpenBanner: () => void;
}

/**
 * CookiePreferencesButton Component
 * 
 * A discrete button fixed to the bottom-right corner that allows users
 * to reopen the cookie consent banner at any time.
 * 
 * This button:
 * - Is always visible (even after consent decision)
 * - Does NOT initialize analytics on its own
 * - Only triggers the consent banner to reopen
 * - Complies with LGPD/GDPR requirements for consent management
 */
export function CookiePreferencesButton({ onOpenBanner }: CookiePreferencesButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (typeof window === 'undefined') return null;

  return (
    <button
      onClick={onOpenBanner}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm rounded-lg shadow-lg transition-all duration-200 border border-slate-600"
      aria-label="Gerenciar preferências de privacidade"
      title="Gerenciar preferências de privacidade"
    >
      <span className="text-lg">🍪</span>
      <span className={`transition-all duration-200 ${isHovered ? 'max-w-60 opacity-100' : 'max-w-0 opacity-0 overflow-hidden'}`}>
        Preferências de Privacidade
      </span>
    </button>
  );
}

