export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">

          <p className="font-semibold uppercase tracking-wide text-orange-500">
            OUR WORK
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Solar installations we've completed
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Take a look at some of the rooftop solar installations
            completed by Adhiraj Urja Solar across Pune and
            Pimpri-Chinchwad.
          </p>

        </div>

        {/* Gallery Placeholder */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-white shadow-sm">
            <div className="text-center">
              <div className="text-5xl">☀️</div>

              <p className="mt-4 font-semibold text-gray-900">
                Installation Photo
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Your project photo will appear here
              </p>
            </div>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-white shadow-sm">
            <div className="text-center">
              <div className="text-5xl">🏠</div>

              <p className="mt-4 font-semibold text-gray-900">
                Residential Installation
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Your project photo will appear here
              </p>
            </div>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-white shadow-sm">
            <div className="text-center">
              <div className="text-5xl">🏢</div>

              <p className="mt-4 font-semibold text-gray-900">
                Commercial Installation
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Your project photo will appear here
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}