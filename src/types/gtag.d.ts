// ──────────────────────────────────────────────────────────────────────────────
// File: src/types/gtag.d.ts
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Type declarations for Google Analytics 4 (gtag.js)
 * These declarations extend the Window interface to include GA4 globals
 */

interface Window {
  dataLayer: any[];
  gtag: (command: string, ...args: any[]) => void;
  _analyticsLoaded?: boolean;
}

