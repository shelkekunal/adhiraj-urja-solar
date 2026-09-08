"use client";

import {
  ArrowRight,
  BadgeCheck,
  HardHat,
  Home,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Site Assessment",
    description:
      "We understand your electricity needs and assess your roof to determine a suitable solar solution.",
    detail: "Understand your needs",
    icon: Home,
  },
  {
    number: "02",
    title: "System Design",
    description:
      "We recommend suitable products and design the mounting structure according to your roof and requirements.",
    detail: "Plan your solar system",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our team installs the solar system and the roof-specific structure with attention to the installation process.",
    detail: "Install with precision",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Support & Assistance",
    description:
      "We assist with subsidy and net-metering processes and continue to provide maintenance and warranty support.",
    detail: "Support beyond installation",
    icon: ShieldCheck,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-[#f7f6f1] py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Gold glow */}

        <div className="absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#c6922e]/[0.07] blur-[130px]" />

        {/* Green glow */}

        <div className="absolute -bottom-56 -left-48 h-[550px] w-[550px] rounded-full bg-[#61745f]/[0.08] blur-[130px]" />

        {/* Technical grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,32,27,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(23,32,27,0.8) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================================================
            CENTERED HEADER
            MATCHES WHY CHOOSE US
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
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
              How It Works
            </span>

            <span className="h-px w-10 bg-[#c6922e]" />
          </div>

          {/* MAIN HEADING */}

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17201b] sm:text-5xl lg:text-6xl">
            Solar made simple.
            <span className="block text-[#61745f]">
              From roof to clean energy.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#17201b]/60 sm:text-lg">
            A simple, structured process designed to take you from your initial
            requirements to installation and ongoing support.
          </p>
        </motion.div>

        {/* =========================================================
            PROCESS CARDS
        ========================================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative mt-16 sm:mt-20"
        >

          {/* Desktop connecting line */}

          <div
            className="pointer-events-none absolute left-[9%] right-[9%] top-8 hidden lg:block"
            aria-hidden="true"
          >
            <div className="h-px bg-[#17201b]/10" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.3,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 h-px w-full origin-left bg-[#c6922e]/50"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={cardVariants}
                  className="group relative"
                >

                  {/* =================================================
                      NUMBER
                  ================================================= */}

                  <div className="relative z-20 flex h-16 w-16 items-center justify-center rounded-full border border-[#17201b]/10 bg-[#f7f6f1] shadow-[0_6px_24px_rgba(23,32,27,0.06)] transition-all duration-500 group-hover:border-[#c6922e]/50 group-hover:bg-[#17201b] group-hover:shadow-[0_12px_35px_rgba(23,32,27,0.15)]">

                    <span className="text-xs font-bold tracking-[0.08em] text-[#17201b] transition-colors duration-500 group-hover:text-[#d6ae62]">
                      {step.number}
                    </span>

                    <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent transition-all duration-500 group-hover:scale-125 group-hover:border-[#c6922e]/20" />

                  </div>

                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-[2rem] border border-[#17201b]/[0.08] bg-white/80 p-7 shadow-[0_12px_40px_rgba(23,32,27,0.05)] backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#c6922e]/30 group-hover:shadow-[0_25px_65px_rgba(23,32,27,0.10)] sm:p-8">

                    {/* Top accent */}

                    <div className="absolute left-0 right-0 top-0 h-px bg-[#c6922e]/20">
                      <div className="h-full w-0 bg-[#c6922e] transition-all duration-700 group-hover:w-full" />
                    </div>

                    {/* Ambient glow */}

                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c6922e]/0 blur-3xl transition-all duration-700 group-hover:bg-[#c6922e]/10"
                      aria-hidden="true"
                    />

                    <div className="relative flex h-full flex-col">

                      {/* =================================================
                          ICON + STEP
                      ================================================= */}

                      <div className="flex items-start justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#17201b]/10 bg-[#f7f6f1] text-[#c6922e] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c6922e]/30 group-hover:bg-[#c6922e]/10">

                          <Icon
                            className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                            strokeWidth={1.5}
                          />

                        </div>

                        <span className="rounded-full border border-[#17201b]/[0.08] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#17201b]/30">
                          Step {step.number}
                        </span>

                      </div>

                      {/* =================================================
                          TITLE
                      ================================================= */}

                      <div className="mt-9">

                        <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#17201b] transition-transform duration-500 group-hover:translate-x-1">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-[#17201b]/55">
                          {step.description}
                        </p>

                      </div>

                      {/* =================================================
                          DETAIL
                      ================================================= */}

                      <div className="mt-auto pt-8">

                        <div className="border-t border-[#17201b]/[0.07] pt-5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#61745f]/10 text-[#61745f]">
                              <BadgeCheck
                                className="h-4 w-4"
                                strokeWidth={1.7}
                              />
                            </div>

                            <span className="text-[11px] font-medium text-[#17201b]/45">
                              {step.detail}
                            </span>

                          </div>

                        </div>

                      </div>

                      {/* =================================================
                          BACKGROUND NUMBER
                      ================================================= */}

                      <span
                        className="pointer-events-none absolute -bottom-12 -right-4 select-none text-[9rem] font-semibold leading-none tracking-[-0.08em] text-[#17201b]/[0.025] transition-all duration-700 group-hover:text-[#c6922e]/[0.07]"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>

                      {/* Bottom accent */}

                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6922e] transition-all duration-500 group-hover:w-16" />

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#17201b] shadow-[0_25px_70px_rgba(23,32,27,0.14)]"
        >

          {/* Glow */}

          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#c6922e]/10 blur-[90px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#61745f]/15 blur-[90px]"
            aria-hidden="true"
          />

          {/* Grid */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-12">

            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c6922e]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d6ae62]">
                  Ready to Start?
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Have questions about your solar requirements?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                Get an estimated system size, savings and cost based on your
                electricity usage.
              </p>

            </div>

            <a
              href="/quotation"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c6922e] px-6 py-3.5 text-sm font-semibold text-[#17201b] shadow-[0_8px_25px_rgba(198,146,46,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ae62] hover:shadow-[0_12px_32px_rgba(198,146,46,0.25)] sm:w-fit"
            >
              <span>Get Your Solar Estimate</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>

          {/* Bottom gold line */}

          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c6922e]/30">
            <div className="h-full w-1/3 bg-[#c6922e]" />
          </div>

        </motion.div>

        {/* Bottom detail */}

        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#17201b]/10" />

          <p className="shrink-0 text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#17201b]/30 sm:text-[10px] sm:tracking-[0.2em]">
            Simple process · Professional execution
          </p>

          <span className="h-px flex-1 bg-[#17201b]/10" />
        </div>

      </div>
    </section>
  );
}