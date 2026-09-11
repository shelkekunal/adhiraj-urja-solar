"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type CustomerType = "residential" | "commercial";

type QuotationResult = {
  monthlyUnits: number;
  recommendedSystem: number;
  estimatedGeneration: number;
  estimatedSavings: number;
  subsidy: number;
  estimatedCost: number;
  systemType: "on_grid" | "off_grid";
  customerType: CustomerType;
};

const steps = [
  {
    number: 1,
    label: "Property",
  },
  {
    number: 2,
    label: "Details",
  },
  {
    number: 3,
    label: "Energy",
  },
  {
    number: 4,
    label: "System",
  },
];

export default function QuotationPage() {
  const [step, setStep] = useState(1);

  const [customerType, setCustomerType] =
    useState<CustomerType>("residential");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pinCode, setPinCode] = useState("");

  const [monthlyBill, setMonthlyBill] = useState("");
  const [monthlyUnits, setMonthlyUnits] = useState("");

  const [systemType, setSystemType] =
    useState<"on_grid" | "off_grid">("on_grid");

  const [quotation, setQuotation] =
    useState<QuotationResult | null>(null);

  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  /*
   * BILL → UNITS
   * Existing calculation logic preserved.
   */
  function handleBillChange(value: string) {
    const cleanValue = value.replace(/\D/g, "");

    setMonthlyBill(cleanValue);

    if (cleanValue) {
      const bill = Number(cleanValue);

      if (bill > 0) {
        const calculatedUnits = Math.ceil(bill / 12);
        setMonthlyUnits(String(calculatedUnits));
      } else {
        setMonthlyUnits("");
      }
    } else {
      setMonthlyUnits("");
    }
  }

  /*
   * UNITS → BILL
   * Existing calculation logic preserved.
   */
  function handleUnitsChange(value: string) {
    const cleanValue = value.replace(/\D/g, "");

    setMonthlyUnits(cleanValue);

    if (cleanValue) {
      const units = Number(cleanValue);

      if (units > 0) {
        const calculatedBill = Math.ceil(units * 12);
        setMonthlyBill(String(calculatedBill));
      } else {
        setMonthlyBill("");
      }
    } else {
      setMonthlyBill("");
    }
  }

  function validateCurrentStep() {
    setError("");

    if (step === 1) {
      return true;
    }

    if (step === 2) {
      if (!name.trim()) {
        setError("Please enter your name.");
        return false;
      }

      if (!/^[6-9]\d{9}$/.test(phone)) {
        setError("Please enter a valid 10-digit mobile number.");
        return false;
      }

      if (!/^[1-9]\d{5}$/.test(pinCode)) {
        setError("Please enter a valid 6-digit PIN code.");
        return false;
      }

      return true;
    }

    if (step === 3) {
      const bill = Number(monthlyBill);
      const units = Number(monthlyUnits);

      if ((!monthlyBill || bill <= 0) && (!monthlyUnits || units <= 0)) {
        setError("Please enter your monthly electricity bill or units.");
        return false;
      }

      return true;
    }

    return true;
  }

  function nextStep() {
    if (!validateCurrentStep()) return;

    setError("");

    if (step < 4) {
      setStep((current) => current + 1);
    }
  }

  function previousStep() {
    setError("");

    if (step > 1) {
      setStep((current) => current - 1);
    }
  }

  async function calculateQuotation() {
  if (!validateCurrentStep()) return;

  setError("");
  setIsSaving(true);

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        pinCode,
        monthlyBill: monthlyBill
          ? Number(monthlyBill)
          : null,
        monthlyUnits: monthlyUnits
          ? Number(monthlyUnits)
          : null,
        customerType,
        systemType,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(
        data.error ||
          "We couldn't save your quotation. Please try again."
      );
      return;
    }

    if (!data.quotation) {
      setError(
        "We couldn't prepare your quotation. Please try again."
      );
      return;
    }

    setQuotation(data.quotation);
  } catch (error) {
    console.error("QUOTATION REQUEST ERROR:", error);

    setError(
      "We couldn't save your quotation. Please try again."
    );
  } finally {
    setIsSaving(false);
  }
}

  function resetQuotation() {
    setStep(1);

    setCustomerType("residential");

    setName("");
    setPhone("");
    setPinCode("");

    setMonthlyBill("");
    setMonthlyUnits("");

    setSystemType("on_grid");

    setQuotation(null);
    setError("");
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(value);
  }

  /*
   * ---------------------------------------------------------
   * RESULT SCREEN
   * ---------------------------------------------------------
   */

  if (quotation) {
    const payback =
      quotation.estimatedSavings > 0
        ? quotation.estimatedCost /
          quotation.estimatedSavings
        : 0;

    return (
      <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17201b]">

        {/* Background atmosphere */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#c6922e]/10 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#61745f]/10 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#17201b 1px, transparent 1px), linear-gradient(90deg, #17201b 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">

          {/* Header */}
          <div className="mb-10 flex items-center justify-between">

            <Link
              href="/"
              className="group flex items-center"
            >
              <div className="relative h-11 w-40 sm:h-12 sm:w-44">
                <Image
                  src="/adhiraj-urja-solar-logo.png"
                  alt="Adhiraj Urja Solar"
                  fill
                  sizes="176px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <span className="rounded-full border border-[#17201b]/10 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur">
              Solar Assessment
            </span>
          </div>

          {/* Result Hero */}
          <section className="relative overflow-hidden rounded-[2rem] bg-[#17201b] p-7 text-white shadow-2xl sm:p-12">

            <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full border border-[#d5a94b]/20" />

            <div className="absolute right-[-55px] top-[-55px] h-[210px] w-[210px] rounded-full border border-[#d5a94b]/20" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[#d5a94b]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#d5a94b]" />
                  Your solar assessment is ready
                </div>

                <p className="mb-3 text-sm text-white/50">
                  Hello, {name.split(" ")[0]}
                </p>

                <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Your home can run
                  <span className="block text-[#d5a94b]">
                    on cleaner energy.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  Based on your electricity consumption,
                  we recommend a solar system designed
                  around your current energy requirement.
                </p>
              </div>

              <div className="relative flex justify-center">

                <div className="flex h-56 w-56 flex-col items-center justify-center rounded-full border border-[#d5a94b]/30 bg-[#d5a94b]/5 shadow-[0_0_80px_rgba(198,146,46,0.12)]">

                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Recommended
                  </p>

                  <div className="mt-2 flex items-baseline gap-2">

                    <span className="text-7xl font-semibold text-[#d5a94b]">
                      {quotation.recommendedSystem}
                    </span>

                    <span className="text-xl text-white/60">
                      kW
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-white/40">
                    solar capacity
                  </p>

                </div>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <MetricCard
              label="Annual Generation"
              value={`${formatCurrency(
                quotation.estimatedGeneration
              )}`}
              suffix="units"
              delay="0ms"
            />

            <MetricCard
              label="Estimated Savings"
              value={`₹${formatCurrency(
                quotation.estimatedSavings
              )}`}
              suffix="/ year"
              delay="80ms"
            />

            <MetricCard
              label="Government Subsidy"
              value={`₹${formatCurrency(
                quotation.subsidy
              )}`}
              suffix=""
              delay="160ms"
            />

            <MetricCard
              label="Estimated Payback"
              value={payback.toFixed(1)}
              suffix="years"
              delay="240ms"
            />

          </section>

          {/* Financial breakdown */}
          <section className="mt-6 rounded-[2rem] border border-[#17201b]/10 bg-white/80 p-7 shadow-xl shadow-[#17201b]/5 backdrop-blur sm:p-9">

            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#61745f]">
                  Investment overview
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Your solar investment
                </h2>

              </div>

              <span className="rounded-full bg-[#61745f]/10 px-4 py-2 text-xs font-semibold text-[#61745f]">
                {quotation.systemType === "on_grid"
                  ? "On-Grid System"
                  : "Off-Grid System"}
              </span>

            </div>

            <div className="my-8 h-px bg-[#17201b]/10" />

            <div className="space-y-5">

              <PriceRow
                label="System cost"
                value={`₹${formatCurrency(
                  quotation.estimatedCost +
                    quotation.subsidy
                )}`}
              />

              <PriceRow
                label="Government subsidy"
                value={`− ₹${formatCurrency(
                  quotation.subsidy
                )}`}
                positive
              />

              <div className="h-px bg-[#17201b]/10" />

              <div className="flex items-center justify-between gap-4">

                <span className="text-base font-semibold">
                  Estimated final cost
                </span>

                <span className="text-2xl font-semibold text-[#17201b]">
                  ₹{formatCurrency(
                    quotation.estimatedCost
                  )}
                </span>

              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2">

            <button
              onClick={resetQuotation}
              className="group rounded-2xl border border-[#17201b]/10 bg-white px-6 py-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c6922e]/40 hover:shadow-lg"
            >

              <span className="text-xs uppercase tracking-[0.2em] text-[#61745f]">
                Recalculate
              </span>

              <span className="mt-1 block text-lg font-semibold">
                Change my details

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </span>

            </button>

            <Link
              href="/"
              className="group rounded-2xl bg-[#17201b] px-6 py-5 text-left text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#243229] hover:shadow-xl"
            >

              <span className="text-xs uppercase tracking-[0.2em] text-[#d5a94b]">
                Adhiraj Urja Solar
              </span>

              <span className="mt-1 block text-lg font-semibold">

                Return to home

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </span>

            </Link>

          </section>

          <p className="mt-8 text-center text-xs leading-6 text-[#17201b]/40">
            This quotation is an estimate based on the information
            provided. Final system sizing and pricing may vary after
            site assessment.
          </p>

        </div>
      </main>
    );
  }

  /*
   * ---------------------------------------------------------
   * FORM SCREEN
   * ---------------------------------------------------------
   */

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#17201b]">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] animate-[pulse_8s_ease-in-out_infinite] rounded-full bg-[#c6922e]/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#61745f]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#17201b 1px, transparent 1px), linear-gradient(90deg, #17201b 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-10">

        {/* Top navigation */}
        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="group flex items-center"
          >
            <div className="relative h-11 w-40 sm:h-12 sm:w-44">

              <Image
                src="/adhiraj-urja-solar-logo.png"
                alt="Adhiraj Urja Solar"
                fill
                sizes="176px"
                className="object-contain object-left transition-opacity duration-300 group-hover:opacity-80"
                priority
              />

            </div>
          </Link>

          <Link
            href="/"
            className="hidden text-sm font-medium text-[#17201b]/50 transition hover:text-[#17201b] sm:block"
          >
            ← Back to home
          </Link>

        </div>

        {/* Main layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* Left editorial panel */}
          <aside className="relative overflow-hidden rounded-[2rem] bg-[#17201b] p-8 text-white shadow-2xl sm:p-10 lg:sticky lg:top-8">

            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#d5a94b]/20" />

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#d5a94b]/20" />

            <div className="relative">

              <div className="mb-10 flex h-16 w-16 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-full bg-[#d5a94b]/10 text-3xl text-[#d5a94b]">
                ✦
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d5a94b]">
                Solar Calculator
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                Discover your
                <span className="block text-[#d5a94b]">
                  solar potential.
                </span>
              </h1>

              <p className="mt-6 text-sm leading-7 text-white/55">
                Tell us about your property and electricity
                consumption. We&apos;ll calculate an estimated
                solar system designed around your needs.
              </p>

              {/* Mini benefits */}
              <div className="mt-10 space-y-5">

                <Benefit
                  number="01"
                  title="Personalised"
                  text="Based on your electricity usage"
                />

                <Benefit
                  number="02"
                  title="Transparent"
                  text="See subsidy and estimated cost"
                />

                <Benefit
                  number="03"
                  title="Simple"
                  text="Get your estimate in minutes"
                />

              </div>

              <div className="mt-10 border-t border-white/10 pt-6">

                <p className="text-xs leading-6 text-white/35">
                  Your information is used only to prepare
                  your solar assessment and help our team
                  contact you.
                </p>

              </div>

            </div>
          </aside>

          {/* Right form */}
          <section className="rounded-[2rem] border border-[#17201b]/10 bg-white/85 p-6 shadow-xl shadow-[#17201b]/5 backdrop-blur-xl sm:p-9">

            {/* Progress */}
            <div className="mb-10">

              <div className="flex items-center justify-between">

                {steps.map((item, index) => {
                  const active = step >= item.number;

                  return (
                    <div
                      key={item.number}
                      className="flex flex-1 items-center"
                    >

                      <div className="flex flex-col items-center">

                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
                            active
                              ? "bg-[#17201b] text-[#d5a94b] shadow-lg"
                              : "bg-[#17201b]/5 text-[#17201b]/30"
                          }`}
                        >
                          {item.number}
                        </div>

                        <span
                          className={`mt-2 hidden text-[10px] font-semibold uppercase tracking-wider sm:block ${
                            active
                              ? "text-[#17201b]"
                              : "text-[#17201b]/30"
                          }`}
                        >
                          {item.label}
                        </span>

                      </div>

                      {index < steps.length - 1 && (
                        <div className="mx-3 mt-[-18px] h-px flex-1 bg-[#17201b]/10">

                          <div
                            className="h-full bg-[#c6922e] transition-all duration-700"
                            style={{
                              width:
                                step > item.number
                                  ? "100%"
                                  : "0%",
                            }}
                          />

                        </div>
                      )}

                    </div>
                  );
                })}

              </div>
            </div>

            {/* Step content */}
            <div className="min-h-[460px]">

              {/* STEP 1 */}
              {step === 1 && (
                <div className="animate-[fadeUp_0.5s_ease-out]">

                  <StepHeading
                    eyebrow="Step 01"
                    title="What are you powering?"
                    description="Choose the type of property where you plan to install solar."
                  />

                  <div className="mt-10 grid gap-4 sm:grid-cols-2">

                    <SelectionCard
                      selected={
                        customerType === "residential"
                      }
                      onClick={() =>
                        setCustomerType("residential")
                      }
                      icon="⌂"
                      title="Residential"
                      description="Home, bungalow or apartment"
                    />

                    <SelectionCard
                      selected={
                        customerType === "commercial"
                      }
                      onClick={() =>
                        setCustomerType("commercial")
                      }
                      icon="▦"
                      title="Commercial"
                      description="Office, shop or business"
                    />

                  </div>

                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="animate-[fadeUp_0.5s_ease-out]">

                  <StepHeading
                    eyebrow="Step 02"
                    title="Tell us about yourself"
                    description="We'll use these details to prepare your solar assessment."
                  />

                  <div className="mt-10 space-y-5">

                    <PremiumInput
                      label="Full name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={setName}
                    />

                    <PremiumInput
                      label="Mobile number"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(value) =>
                        setPhone(
                          value.replace(/\D/g, "").slice(0, 10)
                        )
                      }
                      prefix="+91"
                      inputMode="numeric"
                    />

                    <PremiumInput
                      label="PIN code"
                      placeholder="6-digit PIN code"
                      value={pinCode}
                      onChange={(value) =>
                        setPinCode(
                          value.replace(/\D/g, "").slice(0, 6)
                        )
                      }
                      inputMode="numeric"
                    />

                  </div>

                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="animate-[fadeUp_0.5s_ease-out]">

                  <StepHeading
                    eyebrow="Step 03"
                    title="How much electricity do you use?"
                    description="Enter either your monthly bill or monthly units."
                  />

                  <div className="mt-10 grid gap-5 sm:grid-cols-2">

                    <EnergyInput
                      label="Monthly electricity bill"
                      prefix="₹"
                      value={monthlyBill}
                      onChange={handleBillChange}
                      suffix="/ month"
                    />

                    <EnergyInput
                      label="Monthly electricity units"
                      value={monthlyUnits}
                      onChange={handleUnitsChange}
                      suffix="units"
                    />

                  </div>

                  {/* Simple reassurance */}
                  <div className="mt-6 rounded-2xl border border-[#c6922e]/20 bg-[#c6922e]/5 p-5">

                    <div className="flex gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c6922e]/10 text-[#c6922e]">
                        ✓
                      </div>

                      <div>

                        <p className="text-sm font-semibold">
                          Enter whichever figure you know
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#17201b]/50">
                          Your electricity details will be used
                          to prepare your solar assessment.
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="animate-[fadeUp_0.5s_ease-out]">

                  <StepHeading
                    eyebrow="Step 04"
                    title="Choose your solar system"
                    description="Select the system type you'd like us to estimate."
                  />

                  <div className="mt-10 space-y-4">

                    <SystemCard
                      selected={
                        systemType === "on_grid"
                      }
                      onClick={() =>
                        setSystemType("on_grid")
                      }
                      title="On-Grid Solar"
                      subtitle="Best for homes connected to the electricity grid"
                      icon="☀"
                      badge={
                        customerType === "residential"
                          ? "Subsidy eligible"
                          : undefined
                      }
                    />

                    <SystemCard
                      selected={
                        systemType === "off_grid"
                      }
                      onClick={() =>
                        setSystemType("off_grid")
                      }
                      title="Off-Grid Solar"
                      subtitle="Independent solar system with battery backup"
                      icon="◐"
                    />

                  </div>

                  <div className="mt-6 rounded-2xl bg-[#17201b]/5 p-5">

                    <p className="text-xs font-semibold uppercase tracking-wider text-[#61745f]">
                      Your assessment
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">

                      <MiniStat
                        label="Property"
                        value={
                          customerType === "residential"
                            ? "Residential"
                            : "Commercial"
                        }
                      />

                      <MiniStat
                        label="Usage"
                        value={`${monthlyUnits || "0"} units`}
                      />

                      <MiniStat
                        label="System"
                        value={
                          systemType === "on_grid"
                            ? "On-Grid"
                            : "Off-Grid"
                        }
                      />

                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between border-t border-[#17201b]/10 pt-6">

              {step > 1 ? (
                <button
                  onClick={previousStep}
                  disabled={isSaving}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#17201b]/50 transition hover:bg-[#17201b]/5 hover:text-[#17201b] disabled:opacity-40"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="group rounded-xl bg-[#17201b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243229] hover:shadow-xl"
                >
                  Continue

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </button>
              ) : (
                <button
                  onClick={calculateQuotation}
                  disabled={isSaving}
                  className="group flex items-center gap-3 rounded-xl bg-[#17201b] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243229] hover:shadow-xl disabled:cursor-wait disabled:opacity-70"
                >

                  {isSaving ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate my solar estimate

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}

                </button>
              )}

            </div>

          </section>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }
      `}</style>
    </main>
  );
}

/* ---------------------------------------------------------
   COMPONENTS
--------------------------------------------------------- */

function StepHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6922e]">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-6 text-[#17201b]/50">
        {description}
      </p>

    </div>
  );
}

function SelectionCard({
  selected,
  onClick,
  icon,
  title,
  description,
}: {
  selected: boolean;
  onClick: () => void;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl border p-6 text-left transition-all duration-300 ${
        selected
          ? "border-[#17201b] bg-[#17201b] text-white shadow-xl"
          : "border-[#17201b]/10 bg-[#faf9f5] hover:-translate-y-1 hover:border-[#c6922e]/40 hover:shadow-lg"
      }`}
    >

      {selected && (
        <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-[#d5a94b] text-xs font-bold text-[#17201b]">
          ✓
        </div>
      )}

      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${
          selected
            ? "bg-[#d5a94b]/10 text-[#d5a94b]"
            : "bg-[#17201b]/5 text-[#17201b]"
        }`}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        {title}
      </h3>

      <p
        className={`mt-2 text-sm leading-6 ${
          selected
            ? "text-white/50"
            : "text-[#17201b]/45"
        }`}
      >
        {description}
      </p>

    </button>
  );
}

function PremiumInput({
  label,
  placeholder,
  value,
  onChange,
  prefix,
  inputMode,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  inputMode?: "text" | "numeric" | "tel";
}) {
  return (
    <label className="block">

      <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#17201b]/50">
        {label}
      </span>

      <div className="flex overflow-hidden rounded-2xl border border-[#17201b]/10 bg-[#faf9f5] transition-all duration-300 focus-within:border-[#c6922e]/60 focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(198,146,46,0.08)]">

        {prefix && (
          <div className="flex items-center border-r border-[#17201b]/10 px-4 text-sm font-semibold text-[#17201b]/40">
            {prefix}
          </div>
        )}

        <input
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={placeholder}
          inputMode={inputMode}
          className="w-full bg-transparent px-4 py-4 text-sm font-medium outline-none placeholder:text-[#17201b]/25"
        />

      </div>
    </label>
  );
}

function EnergyInput({
  label,
  prefix,
  suffix,
  value,
  onChange,
}: {
  label: string;
  prefix?: string;
  suffix: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block rounded-3xl border border-[#17201b]/10 bg-[#faf9f5] p-5 transition-all duration-300 focus-within:border-[#c6922e]/50 focus-within:bg-white focus-within:shadow-lg">

      <span className="text-xs font-bold uppercase tracking-wider text-[#17201b]/45">
        {label}
      </span>

      <div className="mt-5 flex items-center">

        {prefix && (
          <span className="mr-2 text-2xl font-semibold text-[#c6922e]">
            {prefix}
          </span>
        )}

        <input
          type="text"
          inputMode="numeric"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder="0"
          className="min-w-0 flex-1 bg-transparent text-4xl font-semibold tracking-tight outline-none placeholder:text-[#17201b]/10"
        />

        <span className="ml-2 text-xs font-semibold text-[#17201b]/35">
          {suffix}
        </span>

      </div>

      <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#17201b]/5">
        <div className="h-full w-1/3 rounded-full bg-[#c6922e] transition-all duration-500" />
      </div>

    </label>
  );
}

function SystemCard({
  selected,
  onClick,
  title,
  subtitle,
  icon,
  badge,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
  icon: string;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex w-full items-center gap-5 rounded-3xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-[#17201b] bg-[#17201b] text-white shadow-xl"
          : "border-[#17201b]/10 bg-[#faf9f5] hover:-translate-y-1 hover:border-[#c6922e]/40 hover:shadow-lg"
      }`}
    >

      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${
          selected
            ? "bg-[#d5a94b]/10 text-[#d5a94b]"
            : "bg-[#17201b]/5 text-[#17201b]"
        }`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-2">

          <h3 className="font-semibold">
            {title}
          </h3>

          {badge && (
            <span
              className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${
                selected
                  ? "bg-[#d5a94b]/10 text-[#d5a94b]"
                  : "bg-[#61745f]/10 text-[#61745f]"
              }`}
            >
              {badge}
            </span>
          )}

        </div>

        <p
          className={`mt-1 text-xs leading-5 ${
            selected
              ? "text-white/45"
              : "text-[#17201b]/40"
          }`}
        >
          {subtitle}
        </p>

      </div>

      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          selected
            ? "border-[#d5a94b] bg-[#d5a94b] text-[#17201b]"
            : "border-[#17201b]/15"
        }`}
      >
        {selected && (
          <span className="text-xs font-bold">
            ✓
          </span>
        )}
      </div>

    </button>
  );
}

function Benefit({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">

      <span className="text-xs font-semibold text-[#d5a94b]/60">
        {number}
      </span>

      <div>

        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/35">
          {text}
        </p>

      </div>

    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <p className="text-[10px] font-bold uppercase tracking-wider text-[#17201b]/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold">
        {value}
      </p>

    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix,
  delay,
}: {
  label: string;
  value: string;
  suffix: string;
  delay: string;
}) {
  return (
    <div
      style={{
        animationDelay: delay,
      }}
      className="animate-[fadeUp_0.6s_ease-out_both] rounded-3xl border border-[#17201b]/10 bg-white/80 p-6 shadow-lg shadow-[#17201b]/5 backdrop-blur"
    >

      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#61745f]">
        {label}
      </p>

      <div className="mt-4 flex items-baseline gap-2">

        <span className="text-2xl font-semibold">
          {value}
        </span>

        {suffix && (
          <span className="text-xs font-medium text-[#17201b]/35">
            {suffix}
          </span>
        )}

      </div>

    </div>
  );
}

function PriceRow({
  label,
  value,
  positive,
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">

      <span className="text-sm text-[#17201b]/55">
        {label}
      </span>

      <span
        className={`text-sm font-semibold ${
          positive ? "text-[#61745f]" : ""
        }`}
      >
        {value}
      </span>

    </div>
  );
}