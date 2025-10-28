// ──────────────────────────────────────────────────────────────────────────────
// File: src/utils/analytics.ts
// ──────────────────────────────────────────────────────────────────────────────

// Get Google Analytics ID from environment variable
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initializeAnalytics() {
  if (typeof window === 'undefined') return;

  const consent = localStorage.getItem('cookieConsent');
  
  if (consent === 'accepted') {
    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);

    // Make gtag globally available
    (window as any).gtag = gtag;

    console.log('Analytics initialized');
  } else {
    console.log('Analytics not initialized - user did not accept cookies');
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined') return;
  const consent = localStorage.getItem('cookieConsent');
  
  if (consent === 'accepted' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;
  const consent = localStorage.getItem('cookieConsent');
  
  if (consent === 'accepted' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}

