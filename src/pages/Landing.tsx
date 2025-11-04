// ──────────────────────────────────────────────────────────────────────────────
// File: src/pages/Landing.tsx (composition root)
// ──────────────────────────────────────────────────────────────────────────────
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../sections/Hero";
import { Services } from "../sections/Services";
import { Projects } from "../sections/Projects";
import { Stack } from "../sections/Stack";
import { Partners } from "../sections/Partners";
import { CTA } from "../sections/CTA";
import { Contact } from "../sections/Contact";
import { Footer } from "../components/layout/Footer";
import { CookieBanner } from "../components/ui/CookieBanner";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Stack />
      <Partners />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
}
