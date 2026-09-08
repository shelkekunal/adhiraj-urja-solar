"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

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

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   INSTALLATIONS
========================================================= */

export default function Installations() {
  return (
    <section
      id="installations"
      className="premium-paper relative scroll-mt-24 overflow-hidden py-24 lg:py-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -right-48 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-[#c6922e]/[0.055] blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#61745f]/[0.06] blur-[120px]" />

      {/* Technical grid */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,32,27,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,32,27,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={itemVariants}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c6922e]" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#61745f]">
              Our Installations
            </p>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17201b] md:text-5xl lg:text-[56px]">
            Real projects.
            <br />

            <span className="text-[#17201b]/40">
              Real installations.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#17201b]/60 md:text-lg md:leading-8">
            A look at some of the solar installations completed by our team
            for homes and businesses.
          </p>
        </motion.div>

        {/* =================================================
            FEATURED GALLERY
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-12"
        >

          {/* =================================================
              LARGE FEATURED IMAGE
          ================================================= */}

          <motion.div
            variants={itemVariants}
            className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-[#17201b]/10 bg-[#17201b] shadow-[0_25px_70px_rgba(23,32,27,0.10)] md:col-span-7 md:h-[560px]"
          >
            <Image
              src={installations[0].image}
              alt={installations[0].title}
              fill
              priority
              className="object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.045]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#17201b]/80 via-[#17201b]/10 to-transparent" />

            {/* Gold hover line */}

            <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#c6922e] transition-transform duration-500 group-hover:scale-x-100" />

            {/* Featured badge */}

            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-[#17201b]/70 px-4 py-2 backdrop-blur-md md:left-7 md:top-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6ae62]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                  Featured Installation
                </p>
              </div>
            </div>

            {/* Content */}

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d6ae62]">
                {installations[0].location}
              </p>

              <h3 className="max-w-xl text-2xl font-semibold tracking-tight md:text-3xl">
                {installations[0].title}
              </h3>

              <div className="mt-5 h-px w-12 bg-[#d6ae62]/70 transition-all duration-500 group-hover:w-20" />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE IMAGES
          ================================================= */}

          <div className="grid gap-5 md:col-span-5">

            <InstallationCard
              installation={installations[1]}
              variants={itemVariants}
            />

            <InstallationCard
              installation={installations[2]}
              variants={itemVariants}
            />

          </div>
        </motion.div>

        {/* =================================================
            BOTTOM ROW
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={containerVariants}
          className="mt-5 grid gap-5 md:grid-cols-3"
        >

          {/* IMAGE 04 */}

          <InstallationCard
            installation={installations[3]}
            variants={itemVariants}
            height="h-[280px]"
          />

          {/* IMAGE 05 */}

          <InstallationCard
            installation={installations[4]}
            variants={itemVariants}
            height="h-[280px]"
          />

          {/* =================================================
              VIDEO
          ================================================= */}

          <InstallationVideo />

        </motion.div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-[#17201b]/15" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17201b]/35">
            Solar installations by Adhiraj Urja
          </p>

          <div className="h-px flex-1 bg-[#17201b]/10" />
        </motion.div>

      </div>
    </section>
  );
}

/* =========================================================
   REUSABLE INSTALLATION CARD
========================================================= */

function InstallationCard({
  installation,
  variants,
  height = "h-[270px]",
}: {
  installation: {
    image: string;
    title: string;
    location: string;
  };

  variants: Variants;

  height?: string;
}) {
  return (
    <motion.div
      variants={variants}
      className={`group relative ${height} overflow-hidden rounded-[2rem] border border-[#17201b]/10 bg-[#17201b] shadow-[0_20px_55px_rgba(23,32,27,0.08)]`}
    >
      <Image
        src={installation.image}
        alt={installation.title}
        fill
        className="object-cover object-center transition duration-1000 ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 768px) 100vw, 42vw"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#17201b]/75 via-[#17201b]/5 to-transparent" />

      {/* Gold hover line */}

      <div className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#c6922e] transition-transform duration-500 group-hover:scale-x-100" />

      {/* Content */}

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d6ae62]">
          {installation.location}
        </p>

        <p className="mt-2 text-sm font-semibold">
          {installation.title}
        </p>

        <div className="mt-3 h-px w-7 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-[#d6ae62]" />
      </div>
    </motion.div>
  );
}

/* =========================================================
   VIDEO CARD
========================================================= */

function InstallationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group relative h-[280px] overflow-hidden rounded-[2rem] border border-[#17201b]/10 bg-[#17201b] shadow-[0_20px_55px_rgba(23,32,27,0.08)]"
    >
      {/* =================================================
          VIDEO
      ================================================= */}

      <video
        ref={videoRef}
        src="/installations/installation-video.mp4"
        muted
        loop
        playsInline
        onClick={toggleVideo}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="h-full w-full cursor-pointer object-cover transition duration-1000 ease-out group-hover:scale-[1.045]"
      />

      {/* =================================================
          OVERLAY
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17201b]/85 via-[#17201b]/10 to-transparent" />

      {/* Gold hover line */}

      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 bg-[#c6922e] transition-transform duration-500 group-hover:scale-x-100" />

      {/* =================================================
          CUSTOM PLAY / PAUSE BUTTON
      ================================================= */}

      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? "Pause installation video" : "Play installation video"}
        className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.2)] backdrop-blur-sm transition-all duration-500 ${
          isPlaying
            ? "pointer-events-none scale-90 opacity-0"
            : "scale-100 opacity-100 group-hover:scale-110 group-hover:bg-white"
        }`}
      >
        {isPlaying ? (
          <svg
            className="h-5 w-5 text-[#17201b]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg
            className="ml-0.5 h-5 w-5 text-[#17201b]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* =================================================
          VIDEO TEXT
      ================================================= */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 text-white">

        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d6ae62]">
          See Our Work
        </p>

        <p className="mt-2 text-sm font-semibold text-white">
          Installation in Action
        </p>

      </div>
    </motion.div>
  );
}