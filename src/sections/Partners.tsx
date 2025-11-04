// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Partners.tsx
// ──────────────────────────────────────────────────────────────────────────────

export function Partners() {
  return (
    <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Partners
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Occult Astro 77
          </h3>
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src="/occult77.jpg"
              alt="Occult Astro 77"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Digital Rad
          </h3>
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src="/digital.webp"
              alt="Digital Rad"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Sócio Estatística
          </h3>
          <div className="w-full h-64 rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src="/socio.webp"
              alt="Sócio Estatística"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

