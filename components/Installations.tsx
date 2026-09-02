import Image from "next/image";

const installations = [
  {
    image: "/installations/installation-01.jpeg",
    title: "Residential Solar Installation",
    location: "Completed Project",
  },
  {
    image: "/installations/installation-02.jpeg",
    title: "Rooftop Solar Installation",
    location: "Completed Project",
  },
  {
    image: "/installations/installation-03.jpeg",
    title: "Residential Solar Installation",
    location: "Completed Project",
  },
  {
    image: "/installations/installation-04.jpeg",
    title: "Solar Panel Installation",
    location: "Completed Project",
  },
  {
    image: "/installations/installation-05.jpeg",
    title: "Rooftop Solar Project",
    location: "Completed Project",
  },
];

export default function Installations() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f5] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-green-700">
            Our Installations
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
            Real projects.
            <br />
            <span className="text-gray-500">
              Real installations.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600">
            A look at some of the solar installations completed by our team
            for homes and businesses.
          </p>
        </div>

        {/* FEATURED GALLERY */}
        <div className="grid gap-5 md:grid-cols-12">

          {/* =========================
              LARGE FEATURED IMAGE
          ========================== */}
          <div className="group relative h-[420px] overflow-hidden rounded-3xl md:col-span-7 md:h-[560px]">

            <Image
              src={installations[0].image}
              alt={installations[0].title}
              fill
              priority
              className="object-cover object-top transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-7 text-white md:p-8">

              <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                Featured Installation
              </p>

              <h3 className="text-2xl font-semibold md:text-3xl">
                {installations[0].title}
              </h3>

              <p className="mt-2 text-sm text-white/80">
                {installations[0].location}
              </p>

            </div>
          </div>


          {/* =========================
              RIGHT SIDE IMAGES
          ========================== */}
          <div className="grid gap-5 md:col-span-5">

            {/* Image 02 */}
            <div className="group relative h-[270px] overflow-hidden rounded-3xl">

              <Image
                src={installations[1].image}
                alt={installations[1].title}
                fill
                className="object-cover object-center transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium">
                  {installations[1].title}
                </p>

                <p className="mt-1 text-xs text-white/70">
                  {installations[1].location}
                </p>
              </div>

            </div>


            {/* Image 03 */}
            <div className="group relative h-[270px] overflow-hidden rounded-3xl">

              <Image
                src={installations[2].image}
                alt={installations[2].title}
                fill
                className="object-cover object-centre transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <p className="text-sm font-medium">
                  {installations[2].title}
                </p>

                <p className="mt-1 text-xs text-white/70">
                  {installations[2].location}
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* =========================
            BOTTOM ROW
        ========================== */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {/* IMAGE 04 */}
          <div className="group relative h-[280px] overflow-hidden rounded-3xl">

            <Image
              src={installations[3].image}
              alt={installations[3].title}
              fill
              className="object-cover object-center transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">

              <p className="text-sm font-medium">
                {installations[3].title}
              </p>

              <p className="mt-1 text-xs text-white/70">
                {installations[3].location}
              </p>

            </div>
          </div>


          {/* IMAGE 05 */}
          <div className="group relative h-[280px] overflow-hidden rounded-3xl">

            <Image
              src={installations[4].image}
              alt={installations[4].title}
              fill
              className="object-cover object-center transition duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">

              <p className="text-sm font-medium">
                {installations[4].title}
              </p>

              <p className="mt-1 text-xs text-white/70">
                {installations[4].location}
              </p>

            </div>
          </div>


          {/* =========================
              VIDEO
          ========================== */}
          <div className="group relative h-[280px] overflow-hidden rounded-3xl">

            <video
              src="/installations/installation-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Play icon */}
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-110">

              <svg
                className="ml-0.5 h-5 w-5 text-gray-900"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>

            </div>

            {/* Video text */}
            <div className="absolute bottom-0 left-0 p-6 text-white">

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                See Our Work
              </p>

              <p className="mt-2 text-sm font-medium">
                Installation in Action
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}