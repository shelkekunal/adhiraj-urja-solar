import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5]">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-[-180px] h-[400px] w-[400px] rounded-full bg-orange-100/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className="relative z-10">

          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-700">
              Solar Experts · Pune & PCMC
            </span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-[72px]">

            Your roof can do

            <span className="block text-orange-500">
              more than cover you.
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Turn sunlight into long-term savings with professionally
            designed solar systems for homes, shops and businesses
            across Pune and PCMC.
          </p>

          {/* CTA buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/quotation"
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-gray-200 transition duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-orange-200"
            >
              Get Your Solar Quotation

              <span className="ml-2 text-base">
                →
              </span>
            </Link>

            <a
              href="https://wa.me/917507564542"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-gray-800 transition duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
            >
              Talk on WhatsApp
            </a>

          </div>

          {/* Trust indicators */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">

            <span className="flex items-center gap-2">
              <span className="font-bold text-orange-500">
                ✓
              </span>

              Government Authorized Vendor
            </span>

            <span className="flex items-center gap-2">
              <span className="font-bold text-orange-500">
                ✓
              </span>

              Free Installation
            </span>

            <span className="flex items-center gap-2">
              <span className="font-bold text-orange-500">
                ✓
              </span>

              Long-Term Support
            </span>

          </div>

        </div>

        {/* =====================================================
            RIGHT VISUAL
        ====================================================== */}
        <div className="relative">

          {/* Main visual container */}
          <div className="relative overflow-hidden rounded-[32px] bg-gray-950 p-2 shadow-2xl shadow-gray-300/50">

            {/* Visual panel */}
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-[26px] bg-gradient-to-br from-gray-800 via-gray-900 to-black">

              {/* Decorative solar grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Subtle orange glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between p-7 text-white">

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
                      Adhiraj Urja Solar
                    </p>

                    <p className="mt-2 text-sm text-gray-300">
                      Clean energy. Built for your roof.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur">
                    <span className="text-xl">
                      ☀
                    </span>
                  </div>

                </div>

                {/* Center message */}
                <div>

                  <p className="text-sm font-medium tracking-wide text-gray-400">
                    SOLAR MADE SIMPLE
                  </p>

                  <p className="mt-2 max-w-sm text-4xl font-semibold leading-tight tracking-tight">
                    Generate your own

                    <span className="text-orange-400">
                      {" "}clean energy.
                    </span>
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                Floating quotation card
            ================================================== */}
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/50 bg-white p-5 shadow-2xl">

              <div className="flex items-center justify-between gap-4">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Start your solar journey
                  </p>

                  <p className="mt-1 text-base font-bold text-gray-950">
                    Get an estimated quotation
                  </p>
                </div>

                <Link
                  href="/quotation"
                  aria-label="Get your solar quotation"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition duration-200 hover:bg-orange-600"
                >
                  →
                </Link>

              </div>

            </div>

          </div>

          {/* Service area badge */}
          <div className="absolute -left-5 top-16 hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:block">

            <p className="text-xs font-medium text-gray-500">
              Service Area
            </p>

            <p className="mt-1 text-sm font-bold text-gray-950">
              Pune + PCMC
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}