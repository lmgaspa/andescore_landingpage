// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/ui/CookieBanner.tsx
// ──────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

/**
 * CookieBanner Component
 * 
 * Simple informational banner about cookie usage (LGPD/GDPR compliance)
 */
export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Check if user has already seen the banner
    const cookieSeen = localStorage.getItem("cookieSeen");
    
    if (cookieSeen) {
      setShowBanner(false);
    } else {
      // Hide banner after 10 seconds
      setTimeout(() => {
        setShowBanner(false);
        localStorage.setItem("cookieSeen", "true");
      }, 10000);
    }
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 p-4 bg-slate-900 text-white border-t border-white/10 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm md:text-base text-center">
          We use cookies to improve your experience and analytics in accordance with the laws{" "}
          <span className="font-semibold">(LGPD/BR)</span> and <span className="font-semibold">(GDPR/EU)</span>.
        </p>
      </div>
    </div>
  );
}
