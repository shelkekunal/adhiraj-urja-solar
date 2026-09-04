const reasons = [
  {
    number: "01",
    title: "Transparent & Trustworthy",
    description:
      "Clear guidance and straightforward recommendations from assessment to installation.",
  },
  {
    number: "02",
    title: "Roof-Specific Design",
    description:
      "We design the solar structure according to your roof instead of using a one-size-fits-all approach.",
  },
  {
    number: "03",
    title: "Authorized Government Vendor",
    description:
      "As an authorized government vendor, we follow the required process for your solar installation.",
  },
  {
    number: "04",
    title: "Your Priorities Matter",
    description:
      "Tell us what matters most to you, and we help select suitable products and solutions around your priorities.",
  },
  {
    number: "05",
    title: "Subsidy & Net-Metering Support",
    description:
      "We assist customers with the subsidy and net-metering process as part of their solar journey.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end after installation. We provide maintenance and warranty support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
              Why Adhiraj Urja
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
              Solar installation
              <br />
              <span className="text-gray-400">
                without the confusion.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-gray-600 md:justify-self-end">
            From understanding your requirements to designing the right
            structure and supporting you after installation, we focus on
            making the solar journey simple and transparent.
          </p>

        </div>

        {/* Reasons */}
        <div className="grid border-t border-gray-200 md:grid-cols-2 lg:grid-cols-3">

          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="group border-b border-gray-200 p-8 transition duration-300 hover:bg-[#f7f8f5] lg:p-10"
            >

              {/* Number */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-400">
                  {reason.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-400 transition duration-300 group-hover:border-green-700 group-hover:bg-green-700 group-hover:text-white">
                  →
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {reason.description}
              </p>

            </div>
          ))}

        </div>

        {/* Financing highlight */}
        <div className="mt-5 overflow-hidden rounded-3xl bg-[#172018] px-8 py-10 text-white md:px-10 md:py-12">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                Financing Assistance
              </p>

              <h3 className="text-2xl font-semibold md:text-3xl">
                Exploring solar financing?
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/65">
                We provide loan assessment assistance to help customers
                understand their financing options.
              </p>
            </div>

            <div className="shrink-0">
              <div className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/80">
                Residential + Commercial
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}