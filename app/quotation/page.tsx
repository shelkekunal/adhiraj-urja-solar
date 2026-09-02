"use client";

import Link from "next/link";
import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

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

export default function QuotationPage() {
const [step, setStep] = useState(1);

const [customerType, setCustomerType] =
useState<CustomerType | null>(null);

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");

const [monthlyBill, setMonthlyBill] = useState("");
const [monthlyUnits, setMonthlyUnits] = useState("");

const [systemType, setSystemType] = useState<
"on_grid" | "off_grid"

> ("on_grid");

const [quotation, setQuotation] =
useState<QuotationResult | null>(null);

const [error, setError] = useState("");
const [isSaving, setIsSaving] = useState(false);

function handleContinue() {
if (step === 1) {
if (!customerType) {
setError(
"Please select whether this installation is residential or commercial."
);
return;
}


  setError("");
  setStep(2);
  return;
}

if (step === 2) {
  if (!name.trim()) {
    setError("Please enter your name.");
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    setError("Please enter a valid 10-digit mobile number.");
    return;
  }

  setError("");
  setStep(3);
  return;
}

calculateQuotation();


}

async function calculateQuotation() {
setError("");


const bill = Number(monthlyBill);
const units = Number(monthlyUnits);

if (!monthlyBill && !monthlyUnits) {
  setError(
    "Please enter your monthly bill, monthly units, or both."
  );
  return;
}

let calculatedUnits = units;

if (!monthlyUnits && bill > 0) {
  calculatedUnits = bill / 12;
}

if (calculatedUnits <= 0) {
  setError("Please enter a valid electricity usage.");
  return;
}

if (!customerType) {
  setError("Please select an installation type.");
  return;
}

const requiredSystem = calculatedUnits / 120;
const recommendedSystem = Math.ceil(requiredSystem);

const estimatedGeneration =
  recommendedSystem * 120 * 12;

const estimatedSavings =
  estimatedGeneration * 12;

let subsidy = 0;
let systemCost = 0;

/*
  Residential On-Grid:
  Current subsidy/cost assumptions.

  Commercial:
  Currently treated without government subsidy.
  We can create separate commercial pricing
  logic later.
*/

if (
  customerType === "residential" &&
  systemType === "on_grid"
) {
  if (recommendedSystem === 1) {
    systemCost = 70000;
    subsidy = 30000;
  } else if (recommendedSystem === 2) {
    systemCost = 150000;
    subsidy = 65000;
  } else if (recommendedSystem === 3) {
    systemCost = 210000;
    subsidy = 78000;
  } else if (recommendedSystem === 4) {
    systemCost = 270000;
    subsidy = 78000;
  } else if (recommendedSystem === 5) {
    systemCost = 325000;
    subsidy = 78000;
  } else {
    systemCost =
      325000 + (recommendedSystem - 5) * 65000;

    subsidy = 78000;
  }
} else {
  systemCost = recommendedSystem * 80000;
  subsidy = 0;
}

const estimatedCost = systemCost - subsidy;

const estimatedPayback =
  estimatedSavings > 0
    ? estimatedCost / estimatedSavings
    : 0;

const result: QuotationResult = {
  monthlyUnits: calculatedUnits,
  recommendedSystem,
  estimatedGeneration,
  estimatedSavings,
  subsidy,
  estimatedCost,
  systemType,
  customerType,
};

setIsSaving(true);

try {
  const supabase = createSupabaseBrowserClient();

  const { error: insertError } = await supabase
    .from("leads")
    .insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || null,

      customer_type: customerType,

      monthly_bill: monthlyBill
        ? Number(monthlyBill)
        : null,

      monthly_units: calculatedUnits,

      system_type: systemType,

      recommended_system: recommendedSystem,

      estimated_generation: estimatedGeneration,

      estimated_savings: estimatedSavings,

      subsidy: subsidy,

      estimated_cost: estimatedCost,

      estimated_payback: estimatedPayback,

      status: "new",
    });

  if (insertError) {
    console.error("LEAD INSERT ERROR:", {
      message: insertError.message,
      details: insertError.details,
      hint: insertError.hint,
      code: insertError.code,
    });

    setError(
      "We couldn't save your quotation. Please try again."
    );

    return;
  }

  setQuotation(result);
  setStep(4);
} catch (err) {
  console.error("QUOTATION ERROR:", err);

  setError(
    "Something went wrong. Please try again."
  );
} finally {
  setIsSaving(false);
}


}

function formatCurrency(value: number) {
return new Intl.NumberFormat("en-IN", {
style: "currency",
currency: "INR",
maximumFractionDigits: 0,
}).format(value);
}

function handleBack() {
setError("");

if (step === 2) {
  setStep(1);
} else if (step === 3) {
  setStep(2);
} else if (step === 4) {
  setStep(3);
}


}

function handleStartAgain() {
setStep(1);


setCustomerType(null);

setName("");
setPhone("");
setEmail("");

setMonthlyBill("");
setMonthlyUnits("");

setSystemType("on_grid");

setQuotation(null);
setError("");

}

return ( <main className="premium-paper min-h-screen px-6 py-12 sm:py-16">


  <div className="mx-auto max-w-3xl">

    {/* =====================================================
        PROGRESS
    ====================================================== */}

    <div className="mb-10 flex items-center justify-center gap-2 text-xs sm:gap-3 sm:text-sm">

      <span
        className={
          step === 1
            ? "font-semibold text-[#b98224]"
            : "font-semibold text-[#61745f]"
        }
      >
        {step === 1
          ? "1. Installation"
          : "✓ Installation"}
      </span>

      <span className="text-[#17201b]/20">
        →
      </span>

      <span
        className={
          step === 2
            ? "font-semibold text-[#b98224]"
            : step > 2
              ? "font-semibold text-[#61745f]"
              : "text-[#17201b]/35"
        }
      >
        {step > 2
          ? "✓ Your Details"
          : "2. Your Details"}
      </span>

      <span className="text-[#17201b]/20">
        →
      </span>

      <span
        className={
          step === 3
            ? "font-semibold text-[#b98224]"
            : step > 3
              ? "font-semibold text-[#61745f]"
              : "text-[#17201b]/35"
        }
      >
        {step > 3
          ? "✓ Electricity"
          : "3. Electricity"}
      </span>

      <span className="text-[#17201b]/20">
        →
      </span>

      <span
        className={
          step === 4
            ? "font-semibold text-[#b98224]"
            : "text-[#17201b]/35"
        }
      >
        4. Quotation
      </span>

    </div>

    {/* =====================================================
        MAIN CARD
    ====================================================== */}

    <div className="premium-surface rounded-[32px] p-7 sm:p-10">

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* ===================================================
          STEP 1 — INSTALLATION TYPE
      ==================================================== */}

      {step === 1 && (
        <>
          <div className="text-center">

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98224]">
              Adhiraj Urja Solar
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#17201b] sm:text-4xl">
              What type of installation do you need?
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#68716b] sm:text-base">
              Choose the option that best describes your
              solar requirement.
            </p>

          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">

            {/* Residential */}
            <button
              type="button"
              onClick={() => {
                setCustomerType("residential");
                setError("");
              }}
              className={`group rounded-[24px] border p-6 text-left transition-all duration-300 ${
                customerType === "residential"
                  ? "border-[#c6922e] bg-[#c6922e]/10 shadow-[0_12px_30px_rgba(198,146,46,0.10)]"
                  : "border-[#17201b]/10 bg-[#faf9f5] hover:-translate-y-1 hover:border-[#c6922e]/40 hover:shadow-[0_12px_30px_rgba(23,32,27,0.07)]"
              }`}
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#61745f]/10 text-2xl">
                  🏠
                </div>

                {customerType === "residential" && (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c6922e] text-sm font-bold text-[#17201b]">
                    ✓
                  </span>
                )}

              </div>

              <h2 className="mt-6 text-xl font-semibold text-[#17201b]">
                Residential
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#68716b]">
                Solar for homes, villas, apartments and
                individual residences.
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#61745f]">
                Ideal for homeowners
              </p>

            </button>

            {/* Commercial */}
            <button
              type="button"
              onClick={() => {
                setCustomerType("commercial");
                setError("");
              }}
              className={`group rounded-[24px] border p-6 text-left transition-all duration-300 ${
                customerType === "commercial"
                  ? "border-[#c6922e] bg-[#c6922e]/10 shadow-[0_12px_30px_rgba(198,146,46,0.10)]"
                  : "border-[#17201b]/10 bg-[#faf9f5] hover:-translate-y-1 hover:border-[#c6922e]/40 hover:shadow-[0_12px_30px_rgba(23,32,27,0.07)]"
              }`}
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#61745f]/10 text-2xl">
                  🏢
                </div>

                {customerType === "commercial" && (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#c6922e] text-sm font-bold text-[#17201b]">
                    ✓
                  </span>
                )}

              </div>

              <h2 className="mt-6 text-xl font-semibold text-[#17201b]">
                Commercial
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#68716b]">
                Solar for shops, offices, factories,
                warehouses and businesses.
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#61745f]">
                Ideal for businesses
              </p>

            </button>

          </div>

          <button
            type="button"
            onClick={handleContinue}
            className="mt-8 w-full rounded-full bg-[#17201b] px-6 py-4 text-sm font-bold text-[#faf9f5] shadow-[0_12px_30px_rgba(23,32,27,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#243329]"
          >
            Continue →
          </button>
        </>
      )}

      {/* ===================================================
          STEP 2 — YOUR DETAILS
      ==================================================== */}

      {step === 2 && (
        <>
          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98224]">
              {customerType === "commercial"
                ? "Commercial Solar"
                : "Residential Solar"}
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17201b]">
              Tell us about yourself
            </h1>

            <p className="mt-3 text-[#68716b]">
              We'll use these details to prepare your
              solar quotation.
            </p>

          </div>

          <div className="mt-8 space-y-6">

            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#29342d]"
              >
                {customerType === "commercial"
                  ? "Contact Person *"
                  : "Full Name *"}
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder={
                  customerType === "commercial"
                    ? "Enter contact person's name"
                    : "Enter your name"
                }
                className="mt-2 w-full rounded-xl border border-[#17201b]/15 bg-[#faf9f5] px-4 py-3.5 text-[#17201b] outline-none transition focus:border-[#c6922e] focus:ring-2 focus:ring-[#c6922e]/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-[#29342d]"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(
                    event.target.value.replace(/\D/g, "")
                  )
                }
                placeholder="10-digit mobile number"
                maxLength={10}
                className="mt-2 w-full rounded-xl border border-[#17201b]/15 bg-[#faf9f5] px-4 py-3.5 text-[#17201b] outline-none transition focus:border-[#c6922e] focus:ring-2 focus:ring-[#c6922e]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#29342d]"
              >
                Email Address

                <span className="ml-2 font-normal text-[#8a918b]">
                  Optional
                </span>
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[#17201b]/15 bg-[#faf9f5] px-4 py-3.5 text-[#17201b] outline-none transition focus:border-[#c6922e] focus:ring-2 focus:ring-[#c6922e]/10"
              />
            </div>

            <div className="flex gap-3 pt-2">

              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 rounded-full border border-[#17201b]/15 px-6 py-3.5 font-semibold text-[#435047] transition hover:bg-[#17201b]/5"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={handleContinue}
                className="w-2/3 rounded-full bg-[#17201b] px-6 py-3.5 font-semibold text-[#faf9f5] shadow-sm transition hover:bg-[#243329]"
              >
                Continue →
              </button>

            </div>

          </div>
        </>
      )}

      {/* ===================================================
          STEP 3 — ELECTRICITY
      ==================================================== */}

      {step === 3 && (
        <>
          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98224]">
              Electricity Usage
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17201b]">
              Your Electricity Usage
            </h1>

            <p className="mt-3 text-[#68716b]">
              Enter your monthly electricity bill,
              units, or both.
            </p>

          </div>

          <div className="mt-8 space-y-6">

            <div>
              <label
                htmlFor="monthly-bill"
                className="text-sm font-semibold text-[#29342d]"
              >
                Monthly Electricity Bill
              </label>

              <div className="relative mt-2">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#68716b]">
                  ₹
                </span>

                <input
                  id="monthly-bill"
                  type="number"
                  min="0"
                  value={monthlyBill}
                  onChange={(event) =>
                    setMonthlyBill(event.target.value)
                  }
                  placeholder="Example: 5000"
                  className="w-full rounded-xl border border-[#17201b]/15 bg-[#faf9f5] py-3.5 pl-9 pr-4 text-[#17201b] outline-none transition focus:border-[#c6922e] focus:ring-2 focus:ring-[#c6922e]/10"
                />

              </div>
            </div>

            <div className="flex items-center gap-4">

              <div className="h-px flex-1 bg-[#17201b]/10" />

              <span className="text-xs font-semibold text-[#8a918b]">
                OR
              </span>

              <div className="h-px flex-1 bg-[#17201b]/10" />

            </div>

            <div>
              <label
                htmlFor="monthly-units"
                className="text-sm font-semibold text-[#29342d]"
              >
                Monthly Electricity Units
              </label>

              <div className="relative mt-2">

                <input
                  id="monthly-units"
                  type="number"
                  min="0"
                  value={monthlyUnits}
                  onChange={(event) =>
                    setMonthlyUnits(event.target.value)
                  }
                  placeholder="Example: 400"
                  className="w-full rounded-xl border border-[#17201b]/15 bg-[#faf9f5] px-4 py-3.5 pr-20 text-[#17201b] outline-none transition focus:border-[#c6922e] focus:ring-2 focus:ring-[#c6922e]/10"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#8a918b]">
                  units
                </span>

              </div>
            </div>

            <div>

              <p className="text-sm font-semibold text-[#29342d]">
                Solar System Type
              </p>

              <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">

                <button
                  type="button"
                  onClick={() =>
                    setSystemType("on_grid")
                  }
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                    systemType === "on_grid"
                      ? "border-[#c6922e] bg-[#c6922e]/10 shadow-sm"
                      : "border-[#17201b]/10 bg-[#faf9f5] hover:border-[#17201b]/20"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <p className="font-semibold text-[#17201b]">
                      On-Grid
                    </p>

                    {systemType === "on_grid" && (
                      <span className="text-[#b98224]">
                        ✓
                      </span>
                    )}

                  </div>

                  <p className="mt-2 text-sm text-[#68716b]">
                    Connected to the electricity grid.
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#61745f]">
                    {customerType === "residential"
                      ? "Government subsidy may be available*"
                      : "Suitable for grid-connected businesses"}
                  </p>

                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSystemType("off_grid")
                  }
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                    systemType === "off_grid"
                      ? "border-[#c6922e] bg-[#c6922e]/10 shadow-sm"
                      : "border-[#17201b]/10 bg-[#faf9f5] hover:border-[#17201b]/20"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <p className="font-semibold text-[#17201b]">
                      Off-Grid
                    </p>

                    {systemType === "off_grid" && (
                      <span className="text-[#b98224]">
                        ✓
                      </span>
                    )}

                  </div>

                  <p className="mt-2 text-sm text-[#68716b]">
                    Independent solar power system.
                  </p>

                  <p className="mt-2 text-xs font-medium text-[#68716b]">
                    Battery-based independent system
                  </p>

                </button>

              </div>

            </div>

            <div className="flex gap-3 pt-2">

              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 rounded-full border border-[#17201b]/15 px-6 py-3.5 font-semibold text-[#435047] transition hover:bg-[#17201b]/5"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={handleContinue}
                disabled={isSaving}
                className="w-2/3 rounded-full bg-[#17201b] px-6 py-3.5 font-semibold text-[#faf9f5] shadow-[0_10px_25px_rgba(23,32,27,0.12)] transition hover:bg-[#243329] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSaving
                  ? "Preparing Your Quotation..."
                  : "Calculate →"}
              </button>

            </div>

          </div>
        </>
      )}

      {/* ===================================================
          STEP 4 — QUOTATION
      ==================================================== */}

      {step === 4 && quotation && (
        <>
          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c6922e]/15 text-2xl">
              ☀
            </div>

            <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#b98224]">
              {quotation.customerType === "commercial"
                ? "Commercial Solar"
                : "Residential Solar"}
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17201b] sm:text-4xl">
              Your Solar Quotation
            </h1>

            <p className="mt-3 text-[#68716b]">
              Here is an estimated solar system based
              on the information you provided.
            </p>

          </div>

          <div className="mt-8 rounded-[24px] bg-[#17201b] p-7 text-center text-[#faf9f5] shadow-[0_20px_50px_rgba(23,32,27,0.15)]">

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Recommended System
            </p>

            <p className="mt-2 text-5xl font-semibold tracking-tight text-[#d6ae62]">
              {quotation.recommendedSystem} kW
            </p>

            <p className="mt-2 text-sm text-white/60">
              {quotation.systemType === "on_grid"
                ? "On-Grid Solar System"
                : "Off-Grid Solar System"}
            </p>

          </div>

          <div className="mt-6 divide-y divide-[#17201b]/10 overflow-hidden rounded-2xl border border-[#17201b]/10">

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-[#68716b]">
                Estimated Annual Generation
              </span>

              <span className="text-sm font-semibold text-[#17201b]">
                {quotation.estimatedGeneration.toLocaleString(
                  "en-IN"
                )}{" "}
                kWh
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-[#68716b]">
                Estimated Annual Savings
              </span>

              <span className="text-sm font-semibold text-[#61745f]">
                {formatCurrency(
                  quotation.estimatedSavings
                )}
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-[#68716b]">
                Estimated System Cost
              </span>

              <span className="text-sm font-semibold text-[#17201b]">
                {formatCurrency(
                  quotation.estimatedCost +
                    quotation.subsidy
                )}
              </span>
            </div>

            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm text-[#68716b]">
                Government Subsidy
              </span>

              <span className="text-sm font-semibold text-[#61745f]">
                {quotation.subsidy > 0
                  ? formatCurrency(quotation.subsidy)
                  : "Not applicable"}
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#f3f0e8] px-5 py-5">

              <span className="text-sm font-semibold text-[#17201b]">
                Estimated Cost After Subsidy
              </span>

              <span className="text-xl font-bold text-[#b98224]">
                {formatCurrency(
                  quotation.estimatedCost
                )}
              </span>

            </div>

            <div className="flex items-center justify-between px-5 py-4">

              <span className="text-sm text-[#68716b]">
                Estimated Payback
              </span>

              <span className="text-sm font-semibold text-[#17201b]"> {quotation.estimatedCost > 0 && quotation.estimatedSavings > 0 ? ( quotation.estimatedCost / quotation.estimatedSavings ).toFixed(1) : "—"}{" "} years </span>

            </div>

          </div>

          <div className="mt-6 rounded-2xl border border-[#17201b]/10 bg-[#f3f0e8] p-4 text-sm leading-6 text-[#68716b]">
            This is an estimated calculation based on
            average electricity usage and solar generation.
            The final system size, price and subsidy
            eligibility will be confirmed after a site
            assessment.
          </div>

          <div className="mt-8 space-y-3">

            <button
              type="button"
              onClick={handleBack}
              className="w-full rounded-full border border-[#17201b]/15 px-6 py-3.5 font-semibold text-[#435047] transition hover:bg-[#17201b]/5"
            >
              ← Change Details
            </button>

            <Link
              href="/"
              className="flex w-full items-center justify-center rounded-full bg-[#17201b] px-6 py-3.5 font-semibold text-[#faf9f5] shadow-[0_10px_25px_rgba(23,32,27,0.12)] transition hover:-translate-y-0.5 hover:bg-[#243329]"
            >
              Go to Home
            </Link>

          
          </div>

        </>
      )}

    </div>
  </div>
</main>


);
}
