"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck,
  Headphones,
  Home,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Transparent & Trustworthy",
    description:
      "Clear guidance and straightforward recommendations from assessment to installation.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Roof-Specific Design",
    description:
      "We design the solar structure according to your roof instead of using a one-size-fits-all approach.",
    icon: Home,
  },
  {
    number: "03",
    title: "Authorized Government Vendor",
    description:
      "As an authorized government vendor, we follow the required process for your solar installation.",
    icon: BadgeCheck,
  },
  {
    number: "04",
    title: "Your Priorities Matter",
    description:
      "Tell us what matters most to you, and we help select suitable products and solutions around your priorities.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Subsidy & Net-Metering Support",
    description:
      "We assist customers with the subsidy and net-metering process as part of their solar journey.",
    icon: FileCheck,
  },
  {
    number: "06",
    title: "After-Sales Support",
    description:
      "Our relationship doesn't end after installation. We provide maintenance and warranty support.",
    icon: Headphones,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
    return (
      <section
        id="why-choose-us"
        className="relative isolate overflow-hidden ..."
      >
  
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Gold glow */}
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#c6922e]/[0.07] blur-3xl" />

        {/* Green glow */}
        <div className="absolute -right-32 top-[35%] h-[500px] w-[500px] rounded-full bg-[#61745f]/[0.08] blur-3xl" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#17201b 1px, transparent 1px), linear-gradient(90deg, #17201b 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c6922e]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#61745f]">
              Why Choose Us
            </span>

            <span className="h-px w-10 bg-[#c6922e]" />
          </div>

          {/* Heading */}

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#17201b] sm:text-5xl lg:text-6xl">
            Solar done with
            <span className="block text-[#61745f]">
              clarity & confidence.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#17201b]/60 sm:text-lg">
            From understanding your requirements to designing, installing and
            supporting your solar system, we focus on making the entire process
            simple and transparent.
          </p>
        </motion.div>

        {/* =========================================================
            REASONS GRID
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                variants={cardVariants}
                className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-[#17201b]/10 bg-white/80 p-7 shadow-[0_20px_60px_rgba(23,32,27,0.06)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#c6922e]/30 hover:shadow-[0_30px_80px_rgba(23,32,27,0.10)] sm:p-8"
              >
                {/* =====================================================
                    HOVER AMBIENT GLOW
                ===================================================== */}

                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c6922e]/[0.08] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden="true"
                />

                {/* =====================================================
                    TOP GOLD LINE
                ===================================================== */}

                <div className="absolute left-0 right-0 top-0 h-px bg-[#c6922e]/20">
                  <div className="h-full w-0 bg-[#c6922e] transition-all duration-700 group-hover:w-full" />
                </div>

                {/* =====================================================
                    NUMBER + ICON + ARROW
                ===================================================== */}

                <div className="relative mb-12 flex items-start justify-between">
                  <div>
                    {/* Number */}

                    <span className="text-xs font-medium tracking-[0.18em] text-[#17201b]/35 transition-colors duration-300 group-hover:text-[#c6922e]">
                      {reason.number}
                    </span>

                    {/* Icon */}

                    <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#17201b]/10 bg-[#f7f6f1] text-[#c6922e] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c6922e]/30 group-hover:bg-[#c6922e]/10">
                      <Icon
                        strokeWidth={1.5}
                        className="h-5 w-5 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Arrow */}

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#17201b]/10 text-[#17201b]/30 transition-all duration-300 group-hover:border-[#c6922e] group-hover:bg-[#c6922e] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}

                <div className="relative">
                  <h3 className="max-w-[270px] text-xl font-semibold tracking-[-0.025em] text-[#17201b] transition-colors duration-300 group-hover:text-[#17201b]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-[300px] text-sm leading-6 text-[#17201b]/55">
                    {reason.description}
                  </p>
                </div>

                {/* =====================================================
                    LARGE BACKGROUND NUMBER
                ===================================================== */}

                <span
                  className="pointer-events-none absolute -bottom-8 -right-3 select-none text-[8rem] font-semibold leading-none tracking-[-0.08em] text-[#17201b]/[0.025] transition-all duration-700 group-hover:text-[#c6922e]/[0.07]"
                  aria-hidden="true"
                >
                  {reason.number}
                </span>

                {/* =====================================================
                    BOTTOM ACCENT
                ===================================================== */}

                <div className="absolute bottom-7 left-7 right-7 h-px bg-[#17201b]/[0.07] sm:left-8 sm:right-8">
                  <div className="h-full w-8 bg-[#c6922e] transition-all duration-700 group-hover:w-20" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =========================================================
            FINANCING HIGHLIGHT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#17201b] shadow-[0_30px_80px_rgba(23,32,27,0.16)]"
        >
          {/* Ambient glow */}

          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#c6922e]/10 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#61745f]/20 blur-3xl"
            aria-hidden="true"
          />

          {/* Technical grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            {/* Left */}

            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c6922e]" />

                <span className="text-xs font-medium uppercase tracking-[0.22em] text-[#d6ae62]">
                  Financing Assistance
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Exploring solar financing?
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
                We can help you understand available financing options and
                guide you through the process of choosing a solar solution
                that fits your requirements.
              </p>
            </div>

            {/* Right Badge */}

            <div className="flex lg:justify-end">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#c6922e]" />

                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  Residential + Commercial
                </span>
              </div>
            </div>
          </div>

          {/* Bottom gold line */}

          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c6922e]/30">
            <div className="h-full w-1/3 bg-[#c6922e]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}