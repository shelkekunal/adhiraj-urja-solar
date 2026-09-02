const stats = [
  {
    value: "200+",
    label: "Installations",
    description: "Homes & businesses",
  },
  {
    value: "1000+ MW",
    label: "Installed Capacity",
    description: "Solar power delivered",
  },
  {
    value: "90%",
    label: "Electricity Savings",
    description: "Potential reduction",
  },
  {
    value: "25",
    label: "Year Warranty",
    description: "Long-term service",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#17201b] py-20 md:py-24">
      {/* Ambient solar glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c6922e]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#61745f]/15 blur-[120px]" />

      {/* Technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section intro */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#c6922e]" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6ae62]">
                Built on Experience
              </p>
            </div>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Solar solutions backed by
              <span className="text-[#d6ae62]"> real numbers.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55">
            From residential rooftops to commercial installations, our focus
            is on dependable solar systems and long-term customer support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative min-h-[220px] p-7 transition-all duration-500 hover:bg-white/[0.07] md:p-9 ${
                index !== stats.length - 1
                  ? "border-b border-white/10 sm:border-r lg:border-b-0"
                  : ""
              } ${
                index === 1
                  ? "sm:border-b-0"
                  : ""
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#c6922e]/10 blur-3xl" />
              </div>

              {/* Number */}
              <div className="relative">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-white transition-transform duration-500 group-hover:-translate-y-1 md:text-5xl">
                  {stat.value}
                  {index === 3 && (
                    <span className="ml-1 text-2xl text-[#d6ae62]">Years</span>
                  )}
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#d6ae62]">
                  {stat.label}
                </p>

                <p className="mt-2 text-sm text-white/45">
                  {stat.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6922e] transition-all duration-500 group-hover:w-16" />

              {/* Number indicator */}
              <div className="absolute right-7 top-7 text-[11px] font-medium text-white/20 md:right-9 md:top-9">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6922e] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6922e]" />
            </span>

            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Designed for long-term energy independence /
            </p>

             <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
              Installed From Authorized Government Venodr
            </p>

          </div>

          <div className="h-px flex-1 bg-white/10 sm:mx-8" />

          <p className="text-xs text-white/35">
            Residential · Commercial · Rooftop Solar
          </p>
        </div>
      </div>
    </section>
  );
}
