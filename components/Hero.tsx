import Link from "next/link";

export default function Hero() {
return ( <section className="premium-paper relative overflow-hidden">
{/* =====================================================
AMBIENT BACKGROUND LIGHT
====================================================== */}

```
  <div className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[#c6922e]/10 blur-[110px]" />

  <div className="pointer-events-none absolute -bottom-56 -left-48 h-[520px] w-[520px] rounded-full bg-[#61745f]/10 blur-[110px]" />

  {/* Subtle technical grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#17201b 1px, transparent 1px), linear-gradient(90deg, #17201b 1px, transparent 1px)",
      backgroundSize: "56px 56px",
    }}
  />

  <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">

    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}

    <div className="relative z-10">

      {/* Eyebrow */}
      <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#17201b]/10 bg-[#faf9f5]/80 px-4 py-2.5 shadow-[0_4px_20px_rgba(23,32,27,0.04)] backdrop-blur">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6922e] opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c6922e]" />
        </span>

        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#435047]">
          Solar Energy • Pune & PCMC
        </span>
      </div>

      {/* Main heading */}
      <h1 className="max-w-4xl text-[48px] font-semibold leading-[0.98] tracking-[-0.045em] text-[#17201b] sm:text-[62px] lg:text-[76px]">

        Your roof can do

        <span className="relative mt-2 block text-[#b98224]">
          more than cover you.

          {/* Small decorative underline */}
          <span className="absolute -bottom-3 left-1 h-[3px] w-20 rounded-full bg-[#c6922e]/50" />
        </span>
      </h1>

      {/* Description */}
      <p className="mt-9 max-w-xl text-[17px] leading-8 text-[#59635d] sm:text-lg">
        Turn sunlight into long-term savings with professionally
        designed solar systems for homes, shops and businesses
        across Pune and PCMC.
      </p>

      {/* CTA buttons */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        {/* Primary CTA */}
        <Link
          href="/quotation"
          className="group inline-flex items-center justify-center rounded-full bg-[#17201b] px-7 py-4 text-sm font-bold text-[#faf9f5] shadow-[0_12px_30px_rgba(23,32,27,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#243329] hover:shadow-[0_16px_35px_rgba(23,32,27,0.22)]"
        >
          Get Your Solar Quotation

          <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/917507564542"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#17201b]/15 bg-[#faf9f5]/70 px-7 py-4 text-sm font-bold text-[#29342d] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#61745f]/40 hover:bg-[#faf9f5] hover:shadow-[0_10px_25px_rgba(23,32,27,0.08)]"
        >
          <span className="mr-2 text-[#61745f]">●</span>
          Talk on WhatsApp
        </a>
      </div>

      {/* Trust indicators */}
      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#59635d]">

        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#61745f]/10 text-xs font-bold text-[#61745f]">
            ✓
          </span>
          Government Authorized Vendor
        </span>

        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#61745f]/10 text-xs font-bold text-[#61745f]">
            ✓
          </span>
          Free Installation
        </span>

        <span className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#61745f]/10 text-xs font-bold text-[#61745f]">
            ✓
          </span>
          Long-Term Support
        </span>

      </div>
    </div>

    {/* =====================================================
        RIGHT VISUAL
    ====================================================== */}

    <div className="relative z-10">

      {/* Outer frame */}
      <div className="relative overflow-hidden rounded-[34px] border border-[#17201b]/10 bg-[#17201b] p-2 shadow-[0_30px_80px_rgba(23,32,27,0.18)]">

        {/* Inner visual */}
        <div className="relative aspect-[4/4.6] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#344239] via-[#1d2922] to-[#101612]">

          {/* Technical grid */}
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Gold sunlight */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-[#c6922e]/20 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-[#61745f]/20 blur-[90px]" />

          {/* Visual content */}
          <div className="relative flex h-full flex-col justify-between p-7 sm:p-8">

            {/* Top brand */}
            <div className="flex items-start justify-between">

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d6ae62]">
                  Adhiraj Urja Solar
                </p>

                <p className="mt-2 max-w-[220px] text-sm leading-6 text-white/55">
                  Clean energy. Built for your roof.
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <span className="text-lg text-[#d6ae62]">
                  ☀
                </span>
              </div>

            </div>

            {/* Center statement */}
            <div className="max-w-md">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c6922e]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                  Solar Made Simple
                </p>
              </div>

              <p className="text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[44px]">
                Generate your own

                <span className="block text-[#d6ae62]">
                  clean energy.
                </span>
              </p>
            </div>

            {/* Bottom visual data */}
            <div className="flex items-end justify-between border-t border-white/10 pt-5">

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Designed for
                </p>

                <p className="mt-1 text-sm font-medium text-white/80">
                  Homes • Shops • Businesses
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                  Coverage
                </p>

                <p className="mt-1 text-sm font-medium text-[#d6ae62]">
                  Pune + PCMC
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* =================================================
            FLOATING QUOTATION CARD
        ================================================== */}

        <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-[#17201b]/10 bg-[#faf9f5]/95 p-5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] backdrop-blur">

          <div className="flex items-center justify-between gap-4">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a918b]">
                Start your solar journey
              </p>

              <p className="mt-1.5 text-sm font-bold text-[#17201b] sm:text-base">
                Get an estimated quotation
              </p>
            </div>

            <Link
              href="/quotation"
              aria-label="Get your solar quotation"
              className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c6922e] text-[#17201b] shadow-lg shadow-[#c6922e]/20 transition-all duration-300 hover:scale-105 hover:bg-[#d6ae62]"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* =================================================
          SERVICE AREA BADGE
      ================================================== */}

      <div className="absolute -left-5 top-16 hidden rounded-2xl border border-[#17201b]/10 bg-[#faf9f5]/95 px-5 py-4 shadow-[0_15px_35px_rgba(23,32,27,0.10)] backdrop-blur sm:block">

        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8a918b]">
          Service Area
        </p>

        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#61745f]" />

          <p className="text-sm font-bold text-[#17201b]">
            Pune + PCMC
          </p>
        </div>

      </div>

      {/* Small decorative gold mark */}
      <div className="absolute -bottom-5 -right-5 hidden h-16 w-16 rounded-2xl border border-[#c6922e]/20 bg-[#c6922e]/10 sm:block" />

    </div>
  </div>
</section>


);
}
