"use client";

import { useMemo, useState } from "react";
import QuoteForm from "@/components/QuoteForm";

type PropertyType = "residential" | "commercial";

export default function SolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [propertyType, setPropertyType] =
    useState<PropertyType>("residential");
  const [pinCode, setPinCode] = useState("");
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const result = useMemo(() => {
    const annualBill = monthlyBill * 12;

    /*
     * These are temporary estimation assumptions.
     * We will replace them with validated business rules.
     */

    const billFactor =
      propertyType === "commercial" ? 1300 : 1200;

    const estimatedSystemSize = Math.max(
      1,
      Math.round(monthlyBill / billFactor)
    );

    const estimatedAnnualGeneration =
      estimatedSystemSize * 1400;

    const assumedTariff =
      propertyType === "commercial" ? 7 : 6;

    const estimatedAnnualSavings = Math.min(
      annualBill,
      estimatedAnnualGeneration * assumedTariff
    );

    const estimatedSystemCost =
      estimatedSystemSize * 55000;

    const estimatedPayback =
      estimatedAnnualSavings > 0
        ? estimatedSystemCost / estimatedAnnualSavings
        : 0;

    return {
      estimatedSystemSize,
      estimatedAnnualGeneration,
      estimatedAnnualSavings,
      estimatedSystemCost,
      estimatedPayback,
    };
  }, [monthlyBill, propertyType]);

  return (
    <section className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold text-orange-400">
            SOLAR SAVINGS CALCULATOR
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            See your potential solar savings
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-400">
            Tell us a little about your property and electricity
            usage to get an initial solar estimate.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-white p-6 text-gray-900 shadow-2xl md:p-10">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Inputs */}
            <div>

              {/* Property Type */}
              <div>
                <label className="text-lg font-semibold">
                  Property Type
                </label>

                <div className="mt-4 grid grid-cols-2 gap-3">

                  <button
                    type="button"
                    onClick={() =>
                      setPropertyType("residential")
                    }
                    className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${
                      propertyType === "residential"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    🏠 Residential
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setPropertyType("commercial")
                    }
                    className={`rounded-xl border px-4 py-4 text-sm font-semibold transition ${
                      propertyType === "commercial"
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    🏢 Commercial
                  </button>

                </div>
              </div>

              {/* PIN Code */}
              <div className="mt-8">
                <label
                  htmlFor="pinCode"
                  className="text-lg font-semibold"
                >
                  Property PIN Code
                </label>

                <p className="mt-2 text-sm text-gray-500">
                  This helps us understand your service location.
                </p>

                <input
                  id="pinCode"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={pinCode}
                  onChange={(event) =>
                    setPinCode(
                      event.target.value.replace(/\D/g, "")
                    )
                  }
                  placeholder="e.g. 411028"
                  className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Monthly Bill */}
              <div className="mt-8">
                <label
                  htmlFor="monthlyBill"
                  className="text-lg font-semibold"
                >
                  Average Monthly Electricity Bill
                </label>

                <div className="mt-6 flex items-end justify-between">
                  <span className="text-sm text-gray-500">
                    Monthly bill
                  </span>

                  <span className="text-4xl font-bold text-gray-950">
                    ₹{monthlyBill.toLocaleString("en-IN")}
                  </span>
                </div>

                <input
                  id="monthlyBill"
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={monthlyBill}
                  onChange={(event) =>
                    setMonthlyBill(
                      Number(event.target.value)
                    )
                  }
                  className="mt-6 w-full accent-orange-500"
                />

                <div className="mt-2 flex justify-between text-xs text-gray-400">
                  <span>₹1,000</span>
                  <span>₹30,000</span>
                </div>
              </div>

            </div>

            {/* Results */}
            <div className="rounded-2xl bg-gray-50 p-6">

              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Your Initial Estimate
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Recommended system
                  </span>

                  <span className="font-bold">
                    {result.estimatedSystemSize} kW
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Estimated annual generation
                  </span>

                  <span className="font-bold">
                    {result.estimatedAnnualGeneration.toLocaleString(
                      "en-IN"
                    )} units
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Estimated annual savings
                  </span>

                  <span className="font-bold text-green-600">
                    ₹
                    {Math.round(
                      result.estimatedAnnualSavings
                    ).toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-200 pb-4">
                  <span className="text-gray-600">
                    Estimated system cost
                  </span>

                  <span className="font-bold">
                    ₹
                    {result.estimatedSystemCost.toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Estimated payback
                  </span>

                  <span className="font-bold">
                    {result.estimatedPayback.toFixed(1)} years
                  </span>
                </div>

              </div>

              {/* Quote CTA */}
              <button
                type="button"
                onClick={() => setShowQuoteForm(true)}
                className="mt-8 w-full rounded-full bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Get My Detailed Quote
              </button>
                

              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                Entering your PIN code allows our team to confirm
                service availability and prepare a more accurate
                estimate.
              </p>

            </div>

          </div>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-gray-500">
          This calculator provides an indicative estimate only.
          Actual system size, generation, pricing, savings and
          payback depend on electricity consumption, tariff,
          roof conditions, system design, equipment selection,
          applicable subsidy and site-specific factors.
        </p>

      </div>
    {showQuoteForm && (
      <QuoteForm
        monthlyBill={monthlyBill}
        propertyType={propertyType}
        pinCode={pinCode}
        systemSize={result.estimatedSystemSize}
        onClose={() => setShowQuoteForm(false)}
      />
    )}
    </section>
  );
}