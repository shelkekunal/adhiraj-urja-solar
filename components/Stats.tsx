export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 md:grid-cols-4">
        <div className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            5+
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Years of Experience
          </p>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            100+
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Installations
          </p>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            2,000+
          </p>
          <p className="mt-2 text-sm text-gray-500">
            kW Installed
          </p>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            Pune
          </p>
          <p className="mt-2 text-sm text-gray-500">
            & Pimpri-Chinchwad
          </p>
        </div>
      </div>
    </section>
  );
}