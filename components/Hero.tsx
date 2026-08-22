export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        
        {/* Left Content */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
            ☀️ Rooftop Solar Solutions in Pune
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Turn Your Roof Into
            <span className="block text-orange-500">
              Clean Energy.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Reduce your electricity costs with professionally designed
            rooftop solar solutions for homes and businesses across
            Pune, Maharashtra.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-7 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">
              Get Free Quote
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:bg-gray-100">
              Book Free Site Visit
            </button>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
            <span>✓ Professional Installation</span>
            <span>✓ Quality Components</span>
            <span>✓ After-Sales Support</span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl">
            <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              <div className="px-8 text-center text-white">
                <div className="text-7xl">☀️</div>

                <p className="mt-5 text-2xl font-semibold">
                  Solar Energy
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  Clean power from your rooftop
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-medium text-gray-500">
                Your rooftop
              </p>

              <p className="mt-1 text-lg font-bold text-gray-900">
                Your power plant ☀️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}