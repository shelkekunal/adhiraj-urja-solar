import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

        {/* Left Content */}
        <div>

          <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
            ☀️ Solar Solutions for Pune & PCMC
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Turn Your Roof Into
            <span className="block text-orange-500">
              Clean Energy.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Save on electricity bills with reliable solar systems
            designed and installed for homes, shops and businesses
            across Pune and PCMC.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/quotation"
              className="rounded-full bg-orange-500 px-7 py-4 text-center font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600"
            >
              Get Your Quotation →
            </Link>

            <a
              href="https://wa.me/917507564542"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 bg-white px-7 py-4 text-center font-semibold text-gray-800 transition hover:bg-gray-100"
            >
              WhatsApp Us
            </a>

          </div>

          {/* Trust Points */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">

            <div>
              <p className="text-2xl font-bold text-gray-950">
                5+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-950">
                200+
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Installations
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-gray-950">
                Govt.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Authorized Vendor
              </p>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="relative">

          <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">

            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-orange-100 via-white to-gray-100">

              <div className="px-8 text-center">

                <div className="text-7xl">
                  ☀️
                </div>

                <p className="mt-5 text-2xl font-bold text-gray-950">
                  Solar Made Simple
                </p>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-600">
                  Residential and commercial solar solutions,
                  with on-grid and off-grid options.
                </p>

              </div>

            </div>

            {/* Floating Trust Card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white p-5 shadow-xl">

              <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                Why Adhiraj Urja Solar?
              </p>

              <p className="mt-2 text-lg font-bold text-gray-950">
                Genuine products. Transparent service.
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Free installation with long-term service support.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}