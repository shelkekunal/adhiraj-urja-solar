"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type QuotationResult = {
  monthlyUnits: number;
  recommendedSystem: number;
  estimatedGeneration: number;
  estimatedSavings: number;
  subsidy: number;
  estimatedCost: number;
  estimatedPayback: number;
  systemType: "on_grid" | "off_grid";
};

export default function QuotationPage() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [monthlyBill, setMonthlyBill] = useState("");
  const [monthlyUnits, setMonthlyUnits] = useState("");

  const [systemType, setSystemType] = useState<
    "on_grid" | "off_grid"
  >("on_grid");

  const [quotation, setQuotation] =
    useState<QuotationResult | null>(null);

  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  function handleContinue() {
    if (step === 1) {
      if (!name.trim()) {
        setError("Please enter your name.");
        return;
      }

      if (!/^[6-9]\d{9}$/.test(phone)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

      setError("");
      setStep(2);
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

    const requiredSystem = calculatedUnits / 120;

    const recommendedSystem = Math.ceil(requiredSystem);

    const estimatedGeneration =
      recommendedSystem * 120 * 12;

    const estimatedSavings =
      estimatedGeneration * 12;

    let subsidy = 0;
    let systemCost = 0;

    if (systemType === "on_grid") {
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
      estimatedPayback,
      systemType,
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

      if (insertError) {
        console.error(
          "LEAD INSERT ERROR:",
          insertError
        );

        setError(
          "We couldn't save your quotation. Please try again."
        );

        return;
      }

      setQuotation(result);
      setStep(3);

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
    setStep(2);
  }

  function handleStartAgain() {
    setStep(1);

    setName("");
    setPhone("");
    setEmail("");

    setMonthlyBill("");
    setMonthlyUnits("");

    setSystemType("on_grid");

    setQuotation(null);
    setError("");
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-3xl">

        {/* Progress */}
        <div className="mb-10 flex items-center justify-center gap-3 text-sm">

          <span
            className={
              step === 1
                ? "font-semibold text-orange-500"
                : "font-semibold text-green-600"
            }
          >
            {step === 1
              ? "1. Your Details"
              : "✓ Your Details"}
          </span>

          <span className="text-gray-300">
            →
          </span>

          <span
            className={
              step === 2
                ? "font-semibold text-orange-500"
                : step === 3
                  ? "font-semibold text-green-600"
                  : "text-gray-400"
            }
          >
            {step === 3
              ? "✓ Electricity"
              : "2. Electricity"}
          </span>

          <span className="text-gray-300">
            →
          </span>

          <span
            className={
              step === 3
                ? "font-semibold text-orange-500"
                : "text-gray-400"
            }
          >
            3. Quotation
          </span>

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="text-center">

                <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Adhiraj Urja Solar
                </p>

                <h1 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
                  Get Your Solar Quotation
                </h1>

                <p className="mt-3 text-gray-500">
                  Tell us a few details and we'll estimate
                  the solar system suitable for you.
                </p>

              </div>

              <div className="mt-10 space-y-6">

                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-gray-800"
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
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Email Address

                    <span className="ml-2 font-normal text-gray-400">
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
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-600"
                >
                  Continue →
                </button>

              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Electricity Usage
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-950">
                  Your Electricity Usage
                </h1>

                <p className="mt-3 text-gray-500">
                  Enter your monthly electricity bill,
                  units, or both.
                </p>
              </div>

              <div className="mt-8 space-y-6">

                <div>
                  <label
                    htmlFor="monthly-bill"
                    className="text-sm font-semibold text-gray-800"
                  >
                    Monthly Electricity Bill
                  </label>

                  <div className="relative mt-2">

                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
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
                      className="w-full rounded-xl border border-gray-300 py-3 pl-9 pr-4 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <div className="h-px flex-1 bg-gray-200" />

                  <span className="text-xs font-semibold text-gray-400">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-gray-200" />

                </div>

                <div>
                  <label
                    htmlFor="monthly-units"
                    className="text-sm font-semibold text-gray-800"
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
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                      units
                    </span>

                  </div>
                </div>

                <div>

                  <p className="text-sm font-semibold text-gray-800">
                    Solar System Type
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    <button
                      type="button"
                      onClick={() =>
                        setSystemType("on_grid")
                      }
                      className={`rounded-xl border p-5 text-left transition ${
                        systemType === "on_grid"
                          ? "border-orange-500 bg-orange-50 shadow-sm"
                          : "border-gray-300 bg-white hover:border-gray-400"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <p className="font-semibold text-gray-900">
                          On-Grid
                        </p>

                        {systemType === "on_grid" && (
                          <span className="text-orange-500">
                            ✓
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        Connected to the electricity grid.
                      </p>

                      <p className="mt-2 text-xs font-medium text-green-600">
                        Government subsidy available*
                      </p>

                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSystemType("off_grid")
                      }
                      className={`rounded-xl border p-5 text-left transition ${
                        systemType === "off_grid"
                          ? "border-orange-500 bg-orange-50 shadow-sm"
                          : "border-gray-300 bg-white hover:border-gray-400"
                      }`}
                    >

                      <div className="flex items-center justify-between">

                        <p className="font-semibold text-gray-900">
                          Off-Grid
                        </p>

                        {systemType === "off_grid" && (
                          <span className="text-orange-500">
                            ✓
                          </span>
                        )}

                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        Independent solar power system.
                      </p>

                      <p className="mt-2 text-xs font-medium text-gray-500">
                        No government subsidy
                      </p>

                    </button>

                  </div>

                </div>

                <div className="flex gap-3 pt-2">

                  <button
                    type="button"
                    onClick={() => {
                      setError("");
                      setStep(1);
                    }}
                    className="w-1/3 rounded-full border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={isSaving}
                    className="w-2/3 rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSaving
                      ? "Preparing Your Quotation..."
                      : "Calculate →"}
                  </button>

                </div>

              </div>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && quotation && (
            <>
              <div className="text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                  ☀️
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
                  Adhiraj Urja Solar
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-950 md:text-4xl">
                  Your Solar Quotation
                </h1>

                <p className="mt-3 text-gray-500">
                  Here is an estimated solar system based
                  on the information you provided.
                </p>

              </div>

              <div className="mt-8 rounded-2xl bg-orange-50 p-6 text-center">

                <p className="text-sm font-medium text-gray-600">
                  Recommended System
                </p>

                <p className="mt-2 text-4xl font-bold text-orange-500">
                  {quotation.recommendedSystem} kW
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {quotation.systemType === "on_grid"
                    ? "On-Grid Solar System"
                    : "Off-Grid Solar System"}
                </p>

              </div>

              <div className="mt-6 divide-y divide-gray-100 rounded-2xl border border-gray-100">

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-gray-600">
                    Estimated Annual Generation
                  </span>

                  <span className="font-semibold text-gray-900">
                    {quotation.estimatedGeneration.toLocaleString(
                      "en-IN"
                    )}{" "}
                    kWh
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-gray-600">
                    Estimated Annual Savings
                  </span>

                  <span className="font-semibold text-green-600">
                    {formatCurrency(
                      quotation.estimatedSavings
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-gray-600">
                    Estimated System Cost
                  </span>

                  <span className="font-semibold text-gray-900">
                    {formatCurrency(
                      quotation.estimatedCost +
                        quotation.subsidy
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-gray-600">
                    Government Subsidy
                  </span>

                  <span className="font-semibold text-green-600">
                    {quotation.subsidy > 0
                      ? formatCurrency(quotation.subsidy)
                      : "Not applicable"}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-gray-50 px-5 py-5">

                  <span className="font-semibold text-gray-900">
                    Estimated Cost After Subsidy
                  </span>

                  <span className="text-xl font-bold text-orange-500">
                    {formatCurrency(
                      quotation.estimatedCost
                    )}
                  </span>

                </div>

                <div className="flex items-center justify-between px-5 py-4">

                  <span className="text-gray-600">
                    Estimated Payback
                  </span>

                  <span className="font-semibold text-gray-900">
                    {quotation.estimatedPayback.toFixed(1)}{" "}
                    years
                  </span>

                </div>

              </div>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-500">
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
                  className="w-full rounded-full border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Change Details
                </button>

                <button
                  type="button"
                  onClick={handleStartAgain}
                  className="w-full rounded-full bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-orange-600"
                >
                  Start Again
                </button>

              </div>

            </>
          )}

        </div>

      </div>
    </main>
  );
}