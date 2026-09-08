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
return ( <section
   id="how-it-works"
   className="relative overflow-hidden bg-[#f3f0e8] py-24 md:py-28"
 >
{/* Ambient background */} <div className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-[#c6922e]/10 blur-[130px]" />

```
  <div className="pointer-events-none absolute -bottom-56 -left-48 h-[550px] w-[550px] rounded-full bg-[#61745f]/10 blur-[130px]" />

  {/* Technical grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(23,32,27,0.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(23,32,27,0.8) 1px, transparent 1px)
      `,
      backgroundSize: "56px 56px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-16 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">

      <div className="premium-reveal">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-[#c6922e]" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6824]">
            How It Works
          </p>
        </div>

        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17201b] md:text-6xl">
          From your roof
          <br />
          <span className="text-[#17201b]/30">
            to solar power.
          </span>
        </h2>
      </div>

      <p className="premium-reveal delay-200 max-w-xl text-sm leading-7 text-[#17201b]/55 md:text-base">
        A simple process designed to take you from your initial
        requirements to installation and ongoing support.
      </p>
    </div>

    {/* Process */}
    <div className="relative">

      {/* Desktop connecting line */}
      <div className="pointer-events-none absolute left-[7%] right-[7%] top-7 hidden lg:block">
        <div className="h-px bg-[#17201b]/10" />

        <div className="premium-shimmer absolute left-0 top-0 h-px w-full bg-[#c6922e]/50" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`group premium-reveal relative ${
              index === 0
                ? ""
                : index === 1
                ? "delay-100"
                : index === 2
                ? "delay-200"
                : "delay-300"
            }`}
          >

            {/* Number */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#17201b]/10 bg-[#f3f0e8] text-xs font-bold tracking-[0.08em] text-[#17201b] shadow-[0_4px_18px_rgba(23,32,27,0.05)] transition-all duration-500 group-hover:border-[#c6922e]/50 group-hover:bg-[#17201b] group-hover:text-[#d6ae62] group-hover:shadow-[0_8px_28px_rgba(23,32,27,0.16)]">

              {step.number}

              <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent transition-all duration-500 group-hover:scale-125 group-hover:border-[#c6922e]/20" />
            </div>

            {/* Card */}
            <div className="premium-card relative mt-6 min-h-[285px] overflow-hidden rounded-3xl border border-[#17201b]/[0.08] bg-[#faf9f5] p-7 shadow-[0_8px_30px_rgba(23,32,27,0.04)] md:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#c6922e]/0 blur-3xl transition-all duration-700 group-hover:bg-[#c6922e]/10" />

              <div className="relative flex h-full flex-col">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#17201b]/30">
                    Step {step.number}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#17201b]/[0.08] text-sm text-[#17201b]/30 transition-all duration-300 group-hover:border-[#c6922e]/30 group-hover:bg-[#c6922e] group-hover:text-[#17201b]">
                    →
                  </span>

                </div>

                {/* Content */}
                <div className="mt-auto pt-12">

                  <h3 className="max-w-xs text-xl font-semibold tracking-[-0.025em] text-[#17201b] transition-transform duration-500 group-hover:translate-x-1">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#17201b]/50">
                    {step.description}
                  </p>

                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6922e] transition-all duration-500 group-hover:w-14" />

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="premium-reveal delay-300 relative mt-10 overflow-hidden rounded-3xl bg-[#17201b] shadow-[0_20px_60px_rgba(23,32,27,0.12)]">

      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#c6922e]/10 blur-[90px]" />

      <div className="relative flex flex-col gap-7 p-7 md:flex-row md:items-center md:justify-between md:p-9">

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#c6922e]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6ae62]">
              Ready to Start?
            </p>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Have questions about your solar requirements?
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
            Get an estimated system size, savings and cost based on your
            electricity usage.
          </p>
        </div>

        <a
          href="/quotation"
          className="group relative inline-flex w-fit shrink-0 items-center gap-3 overflow-hidden rounded-full bg-[#c6922e] px-6 py-3.5 text-sm font-semibold text-[#17201b] shadow-[0_8px_25px_rgba(198,146,46,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ae62] hover:shadow-[0_12px_32px_rgba(198,146,46,0.25)]"
        >
          <span className="relative z-10">
            Get Your Solar Estimate
          </span>

          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </div>

    {/* Bottom detail */}
    <div className="mt-8 flex items-center gap-3">

      <span className="h-px flex-1 bg-[#17201b]/10" />

      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#17201b]/30">
        Simple process · Professional execution
      </p>

      <span className="h-px flex-1 bg-[#17201b]/10" />

    </div>

  </div>
</section>


);
}
