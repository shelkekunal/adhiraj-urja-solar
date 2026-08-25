import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SolarCalculator from "@/components/SolarCalculator";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Stats />

      <SolarCalculator />

      {/* =========================================================
          SOLAR SOLUTIONS
      ========================================================= */}
      <section
        id="services"
        className="bg-gray-50 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-wide text-orange-500">
              OUR SOLAR SOLUTIONS
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Solar solutions built for your needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              From homes and shops to larger commercial properties,
              we design and install solar systems based on your
              electricity requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* Residential */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🏠
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Residential Solar
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Rooftop solar systems designed for homes to help
                reduce monthly electricity bills and generate clean
                energy from your own roof.
              </p>
            </div>

            {/* Commercial */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🏢
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Commercial Solar
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Solar solutions for shops, offices and businesses
                looking to reduce operating costs and generate
                reliable renewable energy.
              </p>
            </div>

            {/* On Grid */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                ☀️
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                On-Grid Solar
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Connect your solar system with the electricity grid
                and use solar generation to reduce your dependence
                on grid electricity.
              </p>
            </div>

            {/* Off Grid */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🔋
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Off-Grid Solar
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Independent solar systems designed for locations
                where reliable backup power or reduced dependence
                on the electricity grid is important.
              </p>
            </div>

            {/* Installation */}
            <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                🛠️
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Installation & Support
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Professional installation with ongoing support and
                maintenance to help keep your solar system performing
                reliably after installation.
              </p>
            </div>

          </div>

          {/* Quotation CTA */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gray-950 px-8 py-8 text-white md:flex-row md:px-10">

            <div>
              <h3 className="text-2xl font-bold">
                Not sure which solar system is right for you?
              </h3>

              <p className="mt-2 text-gray-300">
                Get an estimated system size, savings and cost based
                on your electricity usage.
              </p>
            </div>

            <a
              href="/quotation"
              className="whitespace-nowrap rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Your Quotation →
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section
        id="about"
        className="bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-wide text-orange-500">
              WHY ADHIRAJ URJA SOLAR
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Solar you can trust
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We focus on transparent recommendations, quality
              installation and dependable support from the first
              conversation to long after your solar system is installed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Government Vendor */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                🏛️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Authorized Government Vendor
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We are an authorized government vendor providing
                solar solutions with proper documentation and
                established processes.
              </p>
            </div>

            {/* Customer Choice */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                🤝
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Customer Choice
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We help you choose suitable panels, inverters and
                other components based on your requirements. Already
                have a preferred brand? Tell us and we can discuss
                suitable options.
              </p>
            </div>

            {/* Free Installation */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                🛠️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Free Installation
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Professional installation is included as part of
                our solar solution, helping you get your system
                properly installed and ready to operate.
              </p>
            </div>

            {/* Long Term Support */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                🛡️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Long-Term Support
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Our relationship does not end after installation.
                We provide after-sales support and maintenance,
                with approximately 5 years of maintenance coverage.
              </p>
            </div>

            {/* Loan Assistance */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                💳
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Loan Assistance
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We help customers understand available solar
                financing and loan options and guide them through
                the process where applicable.
              </p>
            </div>

            {/* Transparent Quotation */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                📋
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Transparent Quotation
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Get a clear estimate of your recommended system,
                expected generation, savings, cost, subsidy and
                estimated payback.
              </p>
            </div>

            {/* Complete Solution */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                ⚡
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Complete Solar Solution
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                From system selection and component guidance to
                installation and after-sales support, we help you
                through the complete solar journey.
              </p>
            </div>

            {/* Honest Service */}
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
              <div className="text-3xl">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-950">
                Honest & Transparent Service
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We believe in straightforward communication, genuine
                guidance and helping customers make informed decisions
                about their solar investment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FLEXIBLE COMPONENTS
      ========================================================= */}
      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <div>

              <p className="font-semibold uppercase tracking-wide text-orange-500">
                QUALITY COMPONENTS
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Flexible options. The choice is yours.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Every solar installation is different. We help you
                select suitable panels, inverters and other system
                components based on your requirements.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                Already have a specific brand in mind? Let us know.
                We can discuss suitable options for your system.
              </p>

              <a
                href="/quotation"
                className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Get Your Quotation →
              </a>

            </div>

            {/* Right */}
            <div className="grid gap-6 sm:grid-cols-2">

              {/* Panels */}
              <div className="rounded-3xl bg-white p-8 shadow-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                  ☀️
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  Solar Panels
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  We commonly work with brands such as:
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    Waaree
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    Adani
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    Premier
                  </span>
                </div>

                <p className="mt-4 text-xs leading-5 text-gray-500">
                  Other suitable brands can also be discussed based
                  on your requirements.
                </p>

              </div>

              {/* Inverters */}
              <div className="rounded-3xl bg-white p-8 shadow-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                  ⚡
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-950">
                  Inverters
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  We commonly work with brands such as:
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    Growatt
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-700">
                    Polycab
                  </span>
                </div>

                <p className="mt-4 text-xs leading-5 text-gray-500">
                  Other suitable brands can also be discussed based
                  on your requirements.
                </p>

              </div>

              {/* Complete System */}
              <div className="rounded-3xl bg-white p-8 shadow-sm sm:col-span-2">

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-2xl">
                    🔧
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-950">
                      More Than Panels & Inverters
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      A solar system includes several important
                      components. We help you select suitable
                      mounting structures, protection equipment,
                      cabling and other system components required
                      for a reliable installation.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="font-semibold uppercase tracking-wide text-orange-500">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Your solar journey, made simple
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              From your first quotation to installation and support,
              we guide you through the process.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Step 1 */}
            <div className="relative rounded-3xl bg-gray-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                1
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Get Your Quotation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Enter your electricity usage and get an estimated
                solar system size, savings, cost, subsidy and
                payback period.
              </p>

            </div>

            {/* Step 2 */}
            <div className="relative rounded-3xl bg-gray-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                2
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Site Assessment
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We understand your property, electricity
                requirements and rooftop conditions before finalizing
                the system.
              </p>

            </div>

            {/* Step 3 */}
            <div className="relative rounded-3xl bg-gray-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                3
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Installation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Our team handles the installation and setup of your
                solar system.
              </p>

            </div>

            {/* Step 4 */}
            <div className="relative rounded-3xl bg-gray-50 p-7">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                4
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Support After Installation
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                We remain available for support and maintenance after
                your solar system is installed.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================= */}
      <section
        id="contact"
        className="bg-gray-950 px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl text-center">

          <p className="font-semibold uppercase tracking-wide text-orange-400">
            READY TO GO SOLAR?
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's find the right solar system for you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Get a quick estimate based on your electricity usage,
            or talk directly with our team about your requirements.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="/quotation"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Get Your Quotation
            </a>

            <a
              href="tel:7507564542"
              className="rounded-full border border-gray-700 px-8 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Call 7507564542
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-400">
            WhatsApp: 9766614955
          </p>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-gray-800 bg-gray-950 px-6 py-10 text-gray-400 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="font-bold text-white">
              Adhiraj Urja Solar
            </p>

            <p className="mt-1 text-sm">
              Rooftop solar solutions in Pune & Pimpri-Chinchwad
            </p>
          </div>

          <div className="flex flex-wrap gap-5 text-sm">

            <a
              href="#services"
              className="transition hover:text-white"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About Us
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="/quotation"
              className="transition hover:text-orange-400"
            >
              Get Quotation
            </a>

          </div>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-gray-800 pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Adhiraj Urja Solar. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
