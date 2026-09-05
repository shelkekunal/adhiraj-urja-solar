"use client";

import {
  ArrowRight,
  Building2,
  House,
  Layers3,
  PanelTop,
  ShieldCheck,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Residential Solar",
    description:
      "Rooftop solar systems designed for homes to help reduce monthly electricity bills and generate clean energy from your own roof.",
    detail: "For homes & rooftops",
    icon: House,
  },
  {
    number: "02",
    title: "Commercial Solar",
    description:
      "Solar solutions for shops, offices and businesses looking to reduce operating costs and generate renewable energy.",
    detail: "For shops & businesses",
    icon: Building2,
  },
  {
    number: "03",
    title: "On-Grid Solar",
    description:
      "Connect your solar system with the electricity grid and use solar generation to reduce your dependence on grid electricity.",
    detail: "Grid-connected systems",
    icon: PanelTop,
  },
  {
    number: "04",
    title: "Off-Grid Solar",
    description:
      "Independent solar systems designed for locations where backup power or reduced dependence on the electricity grid is important.",
    detail: "Independent solar systems",
    icon: Layers3,
  },
  {
    number: "05",
    title: "Installation & Support",
    description:
      "Professional installation with ongoing support and maintenance to help keep your solar system performing reliably.",
    detail: "Support beyond installation",
    icon: ShieldCheck,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

export default function SolarSolutions() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f7f6f1] py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -left-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#c6922e]/[0.06] blur-[130px]" />

        <div className="absolute -bottom-56 -right-48 h-[550px] w-[550px] rounded-full bg-[#61745f]/[0.08] blur-[130px]" />

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
        {/* Header */}
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
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c6922e]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#61745f]">
              Our Solar Solutions
            </span>

            <span className="h-px w-10 bg-[#c6922e]" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17201b] sm:text-5xl lg:text-6xl">
            Solar solutions
            <span className="block text-[#61745f]">
              built around your needs.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#17201b]/60 sm:text-lg">
            From homes and shops to larger commercial properties, we design
            and install solar systems based on your electricity requirements.
          </p>
        </motion.div>

        {/* Solutions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.number}
                variants={cardVariants}
                className="group relative"
              >
                <div className="relative min-h-[365px] overflow-hidden rounded-[2rem] border border-[#17201b]/[0.08] bg-white/80 p-7 shadow-[0_12px_40px_rgba(23,32,27,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#c6922e]/30 hover:shadow-[0_25px_65px_rgba(23,32,27,0.10)] sm:p-8"
                >
                  {/* Top accent */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-[#c6922e]/20">
                    <div className="h-full w-0 bg-[#c6922e] transition-all duration-700 group-hover:w-full" />
                  </div>

                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#c6922e]/0 blur-3xl transition-all duration-700 group-hover:bg-[#c6922e]/10"
                    aria-hidden="true"
                  />

                  <div className="relative flex h-full flex-col">
                    {/* Number + arrow */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em] text-[#17201b]/30 transition-colors duration-300 group-hover:text-[#c6922e]">
                        {solution.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17201b]/[0.08] text-[#17201b]/35 transition-all duration-300 group-hover:border-[#c6922e]/40 group-hover:bg-[#c6922e] group-hover:text-[#17201b]">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#17201b]/10 bg-[#f7f6f1] text-[#c6922e] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#c6922e]/30 group-hover:bg-[#c6922e]/10">
                      <Icon
                        className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#17201b] transition-transform duration-500 group-hover:translate-x-1">
                        {solution.title}
                      </h3>

                      <p className="mt-4 text-sm leading-6 text-[#17201b]/55">
                        {solution.description}
                      </p>
                    </div>

                    {/* Bottom detail */}
                    <div className="mt-auto pt-7">
                      <div className="border-t border-[#17201b]/[0.07] pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#61745f]/10 text-[#61745f]">
                            <ShieldCheck
                              className="h-4 w-4"
                              strokeWidth={1.7}
                            />
                          </div>

                          <span className="text-[11px] font-medium text-[#17201b]/45">
                            {solution.detail}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Background number */}
                    <span
                      className="pointer-events-none absolute -bottom-12 -right-4 select-none text-[9rem] font-semibold leading-none tracking-[-0.08em] text-[#17201b]/[0.025] transition-all duration-700 group-hover:text-[#c6922e]/[0.07]"
                      aria-hidden="true"
                    >
                      {solution.number}
                    </span>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c6922e] transition-all duration-500 group-hover:w-16" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#17201b] shadow-[0_25px_70px_rgba(23,32,27,0.14)]"
        >
          {/* CTA glows */}
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#c6922e]/10 blur-[90px]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-[#61745f]/15 blur-[90px]"
            aria-hidden="true"
          />

          {/* CTA grid */}
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
                  Find Your System
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Not sure which solar system is right for you?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                Get an estimate based on your electricity usage and understand
                what system may suit your requirements.
              </p>
            </div>

            <Link
              href="/quotation"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c6922e] px-6 py-3.5 text-sm font-semibold text-[#17201b] shadow-[0_8px_25px_rgba(198,146,46,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d6ae62] hover:shadow-[0_12px_32px_rgba(198,146,46,0.25)] sm:w-fit"
            >
              <span>Get Your Quotation</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c6922e]/30">
            <div className="h-full w-1/3 bg-[#c6922e]" />
          </div>
        </motion.div>

        {/* Bottom detail */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#17201b]/10" />

          <p className="shrink-0 text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#17201b]/30 sm:text-[10px] sm:tracking-[0.2em]">
            Residential · Commercial · On-Grid · Off-Grid
          </p>

          <span className="h-px flex-1 bg-[#17201b]/10" />
        </div>
      </div>
    </section>
  );
}