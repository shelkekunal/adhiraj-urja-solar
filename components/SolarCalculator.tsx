export default function Stats() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        <div className="border-b border-gray-100 px-6 py-9 sm:px-8 lg:border-b-0 lg:border-r">
          <p className="text-3xl font-semibold tracking-tight text-gray-950">
            5+
          </p>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Years of experience
          </p>
        </div>

        <div className="border-b border-gray-100 px-6 py-9 sm:px-8 lg:border-b-0 lg:border-r">
          <p className="text-3xl font-semibold tracking-tight text-gray-950">
            200+
          </p>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Solar installations
          </p>
        </div>

        <div className="border-r-0 px-6 py-9 sm:px-8 lg:border-r">
          <p className="text-3xl font-semibold tracking-tight text-gray-950">
            Govt.
          </p>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Authorized vendor
          </p>
        </div>

        <div className="px-6 py-9 sm:px-8">
          <p className="text-3xl font-semibold tracking-tight text-gray-950">
            Pune
          </p>

          <p className="mt-2 text-sm font-medium text-gray-500">
            & PCMC service area
          </p>
        </div>

      </div>
    </section>
  );
}