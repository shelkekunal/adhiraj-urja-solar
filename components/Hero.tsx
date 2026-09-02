import Link from "next/link";

export default function Hero() {
  return (
    <section className="premium-paper relative isolate overflow-hidden">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[600px] w-[600px] rounded-full bg-[#c6922e]/10 blur-[120px] premium-pulse" />

      <div className="pointer-events-none absolute -bottom-60 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#61745f]/10 blur-[120px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,32,27,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,32,27,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-14">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="premium-reveal">
            {/* Government credibility badge */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#17201b]/10 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#17201b] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6922e] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6922e]" />
              </span>

              MNRE Approved · Authorized Government Vendor
            </div>

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c6922e]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#61745f]">
                Solar Energy · Pune & PCMC
              </p>
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#17201b] sm:text-6xl lg:text-[72px]">
              Power your home
              <br />

              <span className="relative inline-block text-[#c6922e]">
                with clean solar energy.

                <span className="absolute -bottom-2 left-0 h-[2px] w-20 bg-[#c6922e]/70 lg:w-28" />
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-[#17201b]/65 md:text-lg md:leading-8">
              Turn sunlight into long-term savings with professionally
              designed solar systems for homes, shops and businesses across
              Pune and Maharashtra.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quotation"
                className="group premium-shimmer relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#17201b] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(23,32,27,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,32,27,0.24)]"
              >
                See Your Solar Requirement

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <a
                href="https://wa.me/917507564542"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#17201b]/15 bg-white/60 px-7 py-4 text-sm font-semibold text-[#17201b] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#61745f]/40 hover:bg-white"
              >
                WhatsApp Us

                <span className="text-[#61745f] transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-[#17201b]/10 pt-7 sm:grid-cols-3">
              <TrustItem
                title="Authorized"
                description="Government Vendor"
              />

              <TrustItem
                title="Professional"
                description="Installation"
              />

              <TrustItem
                title="Long-Term"
                description="Support"
              />
            </div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative premium-reveal delay-200">

            {/* Main technical panel */}
            <div className="premium-shimmer relative min-h-[540px] overflow-hidden rounded-[2rem] bg-[#17201b] shadow-[0_35px_80px_rgba(23,32,27,0.18)]">

              {/* Internal green glow */}
              <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#61745f]/20 blur-[100px]" />

              {/* Internal gold glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c6922e]/20 blur-[90px]" />

              {/* Internal grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Top branding */}
              <div className="relative z-10 flex items-center justify-between p-7 md:p-9">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6ae62]">
                    Adhiraj Urja Solar
                  </p>

                  <p className="mt-2 text-sm text-white/45">
                    Solar made simple.
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#c6922e] premium-pulse" />
                </div>
              </div>

              {/* Solar visualization */}
              <div className="absolute left-1/2 top-[43%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-72 md:w-72">

                {/* Outer orbit */}
                <div className="absolute inset-0 rounded-full border border-[#d6ae62]/15" />

                {/* Middle orbit */}
                <div className="absolute inset-8 rounded-full border border-[#d6ae62]/10" />

                {/* Inner orbit */}
                <div className="absolute inset-16 rounded-full border border-[#61745f]/10" />

                {/* Solar core */}
                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#c6922e]/10 shadow-[0_0_100px_rgba(198,146,46,0.25)]">
                  <div className="absolute h-16 w-16 rounded-full bg-[#c6922e]/20 blur-md" />

                  <div className="relative h-9 w-9 rounded-full bg-[#d6ae62] shadow-[0_0_30px_rgba(214,174,98,0.6)] premium-pulse" />
                </div>

                {/* Orbit points */}
                <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#d6ae62] shadow-[0_0_15px_rgba(214,174,98,0.7)] premium-pulse" />

                <div className="absolute bottom-7 right-8 h-2 w-2 rounded-full bg-[#61745f] premium-pulse" />

                <div className="absolute bottom-16 left-4 h-2 w-2 rounded-full bg-[#d6ae62] premium-pulse" />
              </div>

              {/* Center message */}
              <div className="absolute left-0 right-0 top-[44%] z-10 px-8 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/35">
                  Clean Energy
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Generate your own
                  <br />

                  <span className="text-[#d6ae62]">
                    clean energy.
                  </span>
                </p>
              </div>

              {/* Bottom categories */}
              <div className="absolute bottom-8 left-7 right-7 z-10 grid grid-cols-3 gap-2 md:bottom-9 md:left-9 md:right-9">
                {["Homes", "Shops", "Businesses"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d6ae62]/30 hover:bg-white/[0.07]"
                  >
                    <p className="text-xs font-medium text-white/55">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                FLOATING QUOTATION CARD
            ================================================= */}


            <div className="premium-float absolute -bottom-4 left-4 z-20 w-[210px] rounded-2xl border border-[#17201b]/10 bg-[#faf9f5]/95 p-5 shadow-[0_20px_50px_rgba(23,32,27,0.16)] backdrop-blur-xl md:-left-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#61745f]">
                  Solar Planning
                </p>

                <span className="h-2 w-2 rounded-full bg-[#c6922e] premium-pulse" />
              </div>

              <p className="text-sm font-semibold text-[#17201b]">
                Know what your roof needs.
              </p>

              <p className="mt-2 text-xs leading-5 text-[#17201b]/50">
                Get a requirement-based solar recommendation.
              </p>

              <Link
                href="/quotation"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#17201b] transition-colors hover:text-[#c6922e]"
              >
                Get started
                <span>→</span>
              </Link>
            </div>

            {/* =================================================
                SERVICE AREA
            ================================================= */}

            <div className="absolute -right-3 top-12 z-20 rounded-2xl border border-white/10 bg-[#17201b]/95 px-5 py-4 text-white shadow-[0_20px_50px_rgba(23,32,27,0.18)] backdrop-blur-xl md:-right-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
                Service Area
              </p>

              <p className="mt-1 text-sm font-semibold text-[#d6ae62]">
                Pune · PCMC
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SCROLL INDICATOR
        ===================================================== */}

        <div className="mt-12 hidden items-center gap-4 lg:flex">
          <div className="h-px w-16 bg-[#17201b]/15" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17201b]/35">
            Scroll to explore
          </p>

          <div className="h-8 w-px bg-[#17201b]/15" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group">
      <div className="mb-2 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c6922e] transition-transform duration-300 group-hover:scale-150" />

        <p className="text-xs font-semibold text-[#17201b]">
          {title}
        </p>
      </div>

      <p className="pl-3.5 text-[11px] text-[#17201b]/45">
        {description}
      </p>
    </div>
  );
}
