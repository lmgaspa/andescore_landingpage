// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/ui/CookieBanner.tsx
// ──────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { initializeAnalytics } from "../../utils/analytics";

interface CookieBannerProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

/**
 * CookieBanner Component
 * 
 * Displays a GDPR/LGPD compliant cookie consent banner.
 * 
 * Features:
 * - Shows automatically on first visit (no cookieConsent in localStorage)
 * - Can be reopened via CookiePreferencesButton
 * - Initializes Google Analytics only if user accepts
 * - Stores consent in localStorage for persistence
 * - Complies with LGPD (Brazil) and GDPR (EU) requirements
 * 
 * @param forceOpen - If true, force the banner to show (for reopening preferences)
 * @param onClose - Callback when banner is closed (for external state management)
 */
export function CookieBanner({ forceOpen = false, onClose }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    if (forceOpen) {
      // Force open the banner when reopening preferences
      setShowBanner(true);
    } else if (!cookieConsent) {
      // First visit - show banner
      setShowBanner(true);
    } else if (cookieConsent === 'accepted') {
      // User previously accepted - initialize analytics
      setShowBanner(false);
      initializeAnalytics();
    } else {
      // User previously rejected - don't show banner or analytics
      setShowBanner(false);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setShowBanner(false);
    if (onClose) {
      onClose();
    }
  };

  const handleAccept = () => {
    // Save acceptance in localStorage
    localStorage.setItem("cookieConsent", "accepted");
    
    // Close banner
    handleClose();
    
    // Initialize Google Analytics with user's consent
    initializeAnalytics();
  };

  const handleReject = () => {
    // Save rejection in localStorage
    localStorage.setItem("cookieConsent", "rejected");
    
    // Close banner
    handleClose();
    
    // DO NOT initialize analytics - user rejected tracking
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900 text-white border-t border-white/10 shadow-lg animate-in slide-in-from-bottom duration-300">
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
