"use client";

import {
  ArrowRight,
  Building2,
  Cable,
  Cpu,
  Layers3,
  PanelTop,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import Link from "next/link";

const panels = ["Waaree", "Adani", "Premier"];
const inverters = ["Growatt", "Polycab"];

export default function FlexibleComponents() {
  return (
    <section
      id="components"
      className="relative isolate overflow-hidden bg-[#f7f6f1] py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Gold glow */}
        <div className="absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full bg-[#c6922e]/[0.06] blur-[130px]" />

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
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#c6922e]" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#61745f]">
              Quality Components
            </span>

            <span className="h-px w-10 bg-[#c6922e]" />
          </div>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17201b] sm:text-5xl lg:text-6xl">
            Quality components.
            <span className="block text-[#61745f]">
              The choice is yours.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#17201b]/60 sm:text-lg">
            Every solar installation is different. We help you select
            suitable panels, inverters and other system components based on
            your requirements.
          </p>
        </div>

        {/* Component Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:mt-20 lg:grid-cols-3">
          {/* Solar Panels */}
          <ComponentCard
            number="01"
            title="Solar Panels"
            description="We commonly work with brands such as:"
            icon={<SunMedium className="h-6 w-6" strokeWidth={1.5} />}
            variant="gold"
          >
            <BrandList brands={panels} variant="gold" />
          </ComponentCard>

          {/* Inverters */}
          <ComponentCard
            number="02"
            title="Inverters"
            description="We commonly work with brands such as:"
            icon={<Cpu className="h-6 w-6" strokeWidth={1.5} />}
            variant="green"
          >
            <BrandList brands={inverters} variant="green" />
          </ComponentCard>

          {/* More Components */}
          <ComponentCard
            number="03"
            title="More Than Panels & Inverters"
            description="A complete solar system includes several important components."
            icon={<Layers3 className="h-6 w-6" strokeWidth={1.5} />}
            variant="dark"
          >
            <div className="grid grid-cols-2 gap-2">
              <MiniItem
                icon={<PanelTop className="h-4 w-4" />}
                label="Structure"
              />

              <MiniItem
                icon={<ShieldCheck className="h-4 w-4" />}
                label="Protection"
              />

              <MiniItem
                icon={<Cable className="h-4 w-4" />}
                label="Cabling"
              />

              <MiniItem
                icon={<Building2 className="h-4 w-4" />}
                label="Other Components"
              />
            </div>
          </ComponentCard>
        </div>

        {/* Supporting Information */}
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#17201b]/[0.08] bg-white/70 p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c6922e]/10 text-[#c6922e]">
                <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#17201b]">
                  Suitable components for your system
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#17201b]/50">
                  Component selection depends on your roof, electricity
                  requirements and the type of solar system you choose.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#17201b]/[0.08] bg-white/70 p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#61745f]/10 text-[#61745f]">
                <Cpu className="h-5 w-5" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#17201b]">
                  Have a preferred brand?
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#17201b]/50">
                  Tell us which brand you prefer and we can discuss suitable
                  options for your installation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-[#17201b] shadow-[0_25px_70px_rgba(23,32,27,0.14)]">
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
            aria-hidden="true"
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
                  Choose With Confidence
                </span>
              </div>

              <h3 className="max-w-2xl text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                Not sure which components are right for your system?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/45">
                Share your electricity requirements and we can discuss
                suitable solar system options with you.
              </p>
            </div>

            <Link
              href="/quotation"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#c6922e] px-6 py-3.5 text-sm font-semibold text-[#17201b] transition-colors duration-300 hover:bg-[#d6ae62] sm:w-fit"
            >
              <span>Get Your Quotation</span>

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c6922e]/30">
            <div className="h-full w-1/3 bg-[#c6922e]" />
          </div>
        </div>

        {/* Bottom Detail */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#17201b]/10" />

          <p className="shrink-0 text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#17201b]/30 sm:text-[10px] sm:tracking-[0.2em]">
            Panels · Inverters · Structure · Protection · Cabling
          </p>

          <span className="h-px flex-1 bg-[#17201b]/10" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Component Card
========================================================= */

function ComponentCard({
  number,
  title,
  description,
  icon,
  variant,
  children,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  variant: "gold" | "green" | "dark";
  children: React.ReactNode;
}) {
  const isGold = variant === "gold";
  const isGreen = variant === "green";
  const isDark = variant === "dark";

  return (
    <div
      className={`group relative min-h-[370px] overflow-hidden rounded-[2rem] border p-7 sm:p-8 ${
        isGold
          ? "border-[#c6922e]/25 bg-gradient-to-br from-[#fffdf7] via-[#fffaf0] to-[#f7f1df] shadow-[0_18px_55px_rgba(198,146,46,0.09)]"
          : isGreen
            ? "border-[#61745f]/25 bg-gradient-to-br from-[#fbfdf9] via-[#f3f7f1] to-[#e9f0e7] shadow-[0_18px_55px_rgba(97,116,95,0.09)]"
            : "border-[#17201b]/10 bg-[#17201b] shadow-[0_18px_55px_rgba(23,32,27,0.12)]"
      }`}
    >
      {/* Top Accent */}
      <div
        className={`absolute left-0 right-0 top-0 h-[2px] ${
          isGold
            ? "bg-[#c6922e]"
            : isGreen
              ? "bg-[#61745f]"
              : "bg-[#c6922e]"
        }`}
      />

      {/* Ambient Card Glow */}
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl ${
          isGold
            ? "bg-[#c6922e]/10"
            : isGreen
              ? "bg-[#61745f]/10"
              : "bg-[#c6922e]/10"
        }`}
      />

      <div className="relative flex h-full flex-col">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
              isGold
                ? "border-[#c6922e]/25 bg-[#c6922e]/10 text-[#b27d20]"
                : isGreen
                  ? "border-[#61745f]/25 bg-[#61745f]/10 text-[#526650]"
                  : "border-[#d6ae62]/20 bg-[#d6ae62]/10 text-[#d6ae62]"
            }`}
          >
            {icon}
          </div>

          <span
            className={`text-xs font-bold tracking-[0.18em] ${
              isDark
                ? "text-white/25"
                : isGold
                  ? "text-[#b27d20]/50"
                  : "text-[#526650]/50"
            }`}
          >
            {number}
          </span>
        </div>

        {/* Heading */}
        <h3
          className={`mt-8 text-xl font-semibold tracking-[-0.025em] ${
            isDark ? "text-white" : "text-[#17201b]"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`mt-3 text-sm leading-6 ${
            isDark ? "text-white/50" : "text-[#17201b]/55"
          }`}
        >
          {description}
        </p>

        {/* Content */}
        <div className="mt-6">{children}</div>

        {/* Bottom */}
        <div
          className={`mt-auto border-t pt-6 ${
            isDark ? "border-white/10" : "border-[#17201b]/[0.07]"
          }`}
        >
          <p
            className={`text-xs leading-5 ${
              isDark ? "text-white/35" : "text-[#17201b]/40"
            }`}
          >
            {isGold
              ? "Panel options can be discussed based on your requirements."
              : isGreen
                ? "Inverter options can be discussed based on your system."
                : "We help identify the other components required for the installation."}
          </p>
        </div>

        {/* Background Number */}
        <span
          className={`pointer-events-none absolute -bottom-12 -right-4 select-none text-[9rem] font-semibold leading-none tracking-[-0.08em] ${
            isDark ? "text-white/[0.025]" : "text-[#17201b]/[0.025]"
          }`}
          aria-hidden="true"
        >
          {number}
        </span>

        {/* Bottom accent */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] w-16 ${
            isDark ? "bg-[#c6922e]" : isGold ? "bg-[#c6922e]" : "bg-[#61745f]"
          }`}
        />
      </div>
    </div>
  );
}

/* =========================================================
   Brand List
========================================================= */

function BrandList({
  brands,
  variant,
}: {
  brands: string[];
  variant: "gold" | "green";
}) {
  const isGold = variant === "gold";

  return (
    <div className="flex flex-wrap gap-2">
      {brands.map((brand) => (
        <span
          key={brand}
          className={`rounded-full border bg-white/70 px-3.5 py-1.5 text-sm font-medium ${
            isGold
              ? "border-[#c6922e]/20 text-[#8d651f]"
              : "border-[#61745f]/20 text-[#4f624d]"
          }`}
        >
          {brand}
        </span>
      ))}
    </div>
  );
}

/* =========================================================
   Mini Component
========================================================= */

function MiniItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3">
      <span className="text-[#d6ae62]">{icon}</span>

      <span className="text-xs font-medium text-white/55">{label}</span>
    </div>
  );
}