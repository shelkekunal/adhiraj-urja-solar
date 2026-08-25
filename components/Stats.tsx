export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

        <div className="border-r border-gray-100 px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            5+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Years Experience
          </p>
        </div>

        <div className="px-6 py-10 text-center md:border-r md:border-gray-100">
          <p className="text-3xl font-bold text-gray-950">
            200+
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Solar Installations
          </p>
        </div>

        <div className="border-r border-gray-100 px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            Authorized
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Government Vendor
          </p>
        </div>

        <div className="px-6 py-10 text-center">
          <p className="text-3xl font-bold text-gray-950">
            Pune
          </p>

          <p className="mt-2 text-sm text-gray-500">
            & PCMC Service Area
          </p>
        </div>

      </div>
    </section>
  );
}