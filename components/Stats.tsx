export default function Stats() {
  const stats = [
    {
      value: "5+",
      label: "Years of experience",
    },
    {
      value: "200+",
      label: "Solar installations",
    },
    {
      value: "Govt.",
      label: "Authorized vendor",
    },
    {
      value: "Pune",
      label: "& PCMC service area",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`
              group px-6 py-8 text-center
              transition-colors duration-200
              hover:bg-gray-50
              sm:px-8 sm:py-10
              ${index < 3 ? "lg:border-r lg:border-gray-200" : ""}
              ${index === 0 ? "border-r border-gray-200" : ""}
              ${index === 2 ? "border-r border-gray-200" : ""}
            `}
          >
            <p className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              {stat.value}
            </p>

            <p className="mx-auto mt-2 max-w-[150px] text-sm leading-5 text-gray-500">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}