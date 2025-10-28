// ──────────────────────────────────────────────────────────────────────────────
// File: src/utils/analytics.ts
// ──────────────────────────────────────────────────────────────────────────────

// Get Google Analytics ID from environment variable
// 
// IMPORTANT: For local development, create a .env.local file in the project root
// containing: VITE_GA_MEASUREMENT_ID=G-92K5L8KQF7
// 
// For production on Vercel, this is managed via:
// Vercel Dashboard → Project Settings → Environment Variables
// DO NOT commit .env.production to git!
//
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Global flag to track if analytics has been loaded
declare global {
  interface Window {
    _analyticsLoaded?: boolean;
  }
}

/**
 * Checks if Google Analytics has been successfully loaded
 * @returns true if analytics script has been injected and initialized
 */
export function hasAnalyticsLoaded(): boolean {
  if (typeof window === 'undefined') return false;
  return window._analyticsLoaded === true;
}

/**
 * Initialize Google Analytics 4 (GA4)
 * 
 * This function:
 * 1. Exits early if running on server-side (SSR)
 * 2. Exits early if GA_MEASUREMENT_ID is missing
 * 3. Prevents duplicate script injection
 * 4. Injects the GA4 script dynamically
 * 5. Initializes dataLayer and gtag
 * 
 * Note: This function should ONLY be called after user consents to cookies
 * (LGPD/GDPR compliance requirement)
 */
export function initializeAnalytics() {
  // Exit if running on server
  if (typeof window === 'undefined') {
    console.log('[Analytics] Skipping initialization (server-side)');
    return;
  }

  // Exit if GA_MEASUREMENT_ID is missing (undefined or empty string)
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '') {
    console.warn('[Analytics] VITE_GA_MEASUREMENT_ID is not set. Check your .env.local or Vercel environment variables.');
    return;
  }

  // Exit if already loaded
  if (hasAnalyticsLoaded()) {
    console.log('[Analytics] Already initialized, skipping');
    return;
  }

  try {
    // Check if script tag already exists to prevent duplication
    const existingScript = document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`);
    if (existingScript) {
      console.log('[Analytics] Script already exists in DOM');
      window._analyticsLoaded = true;
      return;
    }

    // Inject GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    
    script.onload = () => {
      console.log('[Analytics] Script loaded successfully');
      // Initialize dataLayer and gtag after script loads
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || ((...args: any[]) => {
        window.dataLayer.push(args);
      });
      
      // Configure GA4
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);
      
      // Mark as loaded
      window._analyticsLoaded = true;
      console.log('[Analytics] Initialized successfully');
    };

    script.onerror = () => {
      console.error('[Analytics] Failed to load GA4 script');
    };

    document.head.appendChild(script);

  } catch (error) {
    console.error('[Analytics] Error during initialization:', error);
  }
}

/**
 * Track a custom event in Google Analytics
 * @param action - The event action (e.g., 'click', 'download')
 * @param category - The event category (e.g., 'button', 'video')
 * @param label - Optional label for the event
 * @param value - Optional numeric value
 */
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window === 'undefined') return;
  
  const consent = localStorage.getItem('cookieConsent');
  
  if (consent === 'accepted' && hasAnalyticsLoaded() && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Track a page view in Google Analytics
 * @param path - The page path to track
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined') return;
  
  const consent = localStorage.getItem('cookieConsent');
  
  if (consent === 'accepted' && hasAnalyticsLoaded() && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}

