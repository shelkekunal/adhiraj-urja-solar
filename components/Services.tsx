const steps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "We understand your electricity needs and assess your roof to determine a suitable solar solution.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "We recommend suitable products and design the mounting structure according to your roof and requirements.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our team installs the solar system and the roof-specific structure with attention to the installation process.",
  },
  {
    number: "04",
    title: "Support & Assistance",
    description:
      "We assist with subsidy and net-metering processes and continue to provide maintenance and warranty support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            How It Works
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            From your roof
            <br />
            <span className="text-gray-400">to solar power.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            A simple process designed to take you from your initial
            requirements to installation and ongoing support.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => (
              <div key={step.number} className="relative">

                {/* Number */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-[#f7f8f5] text-sm font-semibold text-gray-900">
                  {step.number}
                </div>

                {/* Content */}
                <div className="mt-8">

                  <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col gap-5 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            Have questions about your solar requirements?
          </p>

          <a
            href="/quotation"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-green-700"
          >
            Get Your Solar Estimate
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  );
}