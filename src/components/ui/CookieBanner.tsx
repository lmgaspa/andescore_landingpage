// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/ui/CookieBanner.tsx
// ──────────────────────────────────────────────────────────────────────────────
import { useState, useEffect } from "react";
import { initializeAnalytics } from "../../utils/analytics";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    } else if (cookieConsent === 'accepted') {
      // Initialize analytics if user previously accepted
      initializeAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    // Initialize analytics when user accepts
    initializeAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    // Analytics should not be initialized if rejected
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900 text-white border-t border-white/10 shadow-lg">
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

