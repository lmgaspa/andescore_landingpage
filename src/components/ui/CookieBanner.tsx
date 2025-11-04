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
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    if (!cookieConsent) {
      // First visit - show banner
      setShowBanner(true);
    } else {
      // User already made a choice - don't show banner
      setShowBanner(false);
    }
  }, []);

  const handleClose = () => {
    setShowBanner(false);
  };

  const handleAccept = () => {
    // Save acceptance in localStorage
    localStorage.setItem("cookieConsent", "accepted");
    handleClose();
    console.log('[Analytics] Cookie consent accepted, tracking enabled');
  };

  const handleReject = () => {
    // Save rejection in localStorage
    localStorage.setItem("cookieConsent", "rejected");
    handleClose();
    console.log('[Analytics] Cookie consent rejected');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-20 left-0 right-0 z-50 p-4 bg-slate-900 text-white border-t border-white/10 shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-center md:text-left">
            We use cookies to improve your experience and analytics in accordance with the laws{" "}
            <span className="font-semibold">(LGPD/BR)</span> and <span className="font-semibold">(GDPR/EU)</span>. 
            You can accept or reject them.
          </p>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium bg-slate-700 hover:bg-slate-600 rounded-lg transition"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 rounded-lg transition"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
