import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <section className="min-h-screen bg-white">


        <div className="mx-auto flex max-w-7xl flex-col items-center px-8 py-24 text-center">
          <p className="mb-4 font-semibold text-orange-500">
            CLEAN ENERGY. SMARTER FUTURE. ☀️
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Power Your Home With Solar Energy
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Reduce your electricity bills with reliable rooftop solar
            solutions designed and installed by Adhiraj Urja Solar.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Get Free Quote
            </button>

            <button className="rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-800 hover:bg-gray-100">
              Book Free Site Visit
            </button>
          </div>

          <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-gray-900">50+</p>
              <p className="mt-2 text-sm text-gray-500">
                Installations
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">2+ MW</p>
              <p className="mt-2 text-sm text-gray-500">
                Solar Installed
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">5+</p>
              <p className="mt-2 text-sm text-gray-500">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-gray-900">4.8★</p>
              <p className="mt-2 text-sm text-gray-500">
                Customer Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="bg-gray-50 px-8 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold text-orange-500">
            OUR SERVICES
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Solar solutions for every need
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">
                Residential Solar
              </h3>
              <p className="mt-3 text-gray-600">
                Rooftop solar systems designed for homes and
                individual properties.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">
                Commercial Solar
              </h3>
              <p className="mt-3 text-gray-600">
                Reduce operating costs with solar solutions for
                shops, offices and businesses.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold">
                Solar Maintenance
              </h3>
              <p className="mt-3 text-gray-600">
                Reliable maintenance and support to keep your
                solar system performing efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}