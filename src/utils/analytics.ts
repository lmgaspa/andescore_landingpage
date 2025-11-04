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
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-92K5L8KQF7';

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
 * Check if user has consented to cookies
 * @returns true if user has explicitly accepted cookies
 */
export function hasUserConsented(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('cookieConsent') === 'accepted';
}

/**
 * Initialize Google Analytics 4 (GA4)
 * 
 * This function:
 * 1. Checks if user has consented to cookies (LGPD/GDPR requirement)
 * 2. Exits early if running on server-side (SSR)
 * 3. Exits early if GA_MEASUREMENT_ID is missing
 * 4. Prevents duplicate script injection
 * 5. Injects the GA4 script dynamically
 * 6. Initializes dataLayer and gtag
 * 
 * IMPORTANT: This function should ONLY be called after user explicitly accepts cookies
 * (LGPD/GDPR compliance requirement - collecting data without consent is illegal)
 */
export function initializeAnalytics() {
  // Exit if running on server
  if (typeof window === 'undefined') {
    console.log('[Analytics] Skipping initialization (server-side)');
    return;
  }

  // CRITICAL: Check consent BEFORE initializing (LGPD/GDPR compliance)
  if (!hasUserConsented()) {
    console.warn('[Analytics] ⚠️ User has not consented to cookies. Analytics will not initialize.');
    console.warn('[Analytics] This is required for LGPD (Brazil) and GDPR (EU) compliance.');
    return;
  }

  // Debug: Log the GA_MEASUREMENT_ID value
  console.log('[Analytics] GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID);
  
  // Exit if GA_MEASUREMENT_ID is missing (undefined or empty string)
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID.trim() === '') {
    console.error('[Analytics] ❌ VITE_GA_MEASUREMENT_ID is not set or empty!');
    console.error('[Analytics] Current import.meta.env.VITE_GA_MEASUREMENT_ID:', import.meta.env.VITE_GA_MEASUREMENT_ID);
    console.error('[Analytics] ALL env vars:', import.meta.env);
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
      
      // Configure GA4 with consent mode
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        // Explicitly set consent as granted (user already accepted)
        anonymize_ip: false,
      });
      
      // Mark as loaded
      window._analyticsLoaded = true;
      console.log('[Analytics] ✅ Initialized successfully with user consent');
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

