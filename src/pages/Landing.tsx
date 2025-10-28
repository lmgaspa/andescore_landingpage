// ──────────────────────────────────────────────────────────────────────────────
// File: src/pages/Landing.tsx (composition root)
// ──────────────────────────────────────────────────────────────────────────────
import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Stack } from "../sections/Stack";
import { CTA } from "../sections/CTA";
import { Contact } from "../sections/Contact";
import { Footer } from "../components/layout/Footer";
import { CookieBanner } from "../components/ui/CookieBanner";
import { CookiePreferencesButton } from "../components/ui/CookiePreferencesButton";

export default function LandingPage() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleOpenCookiePreferences = () => {
    setShowCookieBanner(true);
  };

  const handleCloseCookieBanner = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Stack />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner forceOpen={showCookieBanner} onClose={handleCloseCookieBanner} />
      <CookiePreferencesButton onOpenBanner={handleOpenCookiePreferences} />
    </div>
  );
}
