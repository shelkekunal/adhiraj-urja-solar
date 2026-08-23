"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  monthlyBill: number;
  propertyType: "residential" | "commercial";
  pinCode: string;
  systemSize: number;
  onClose: () => void;
};

export default function QuoteForm({
  monthlyBill,
  propertyType,
  pinCode,
  systemSize,
  onClose,
}: QuoteFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(
  event: FormEvent<HTMLFormElement>
) {
  event.preventDefault();

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        message,
        monthlyBill,
        propertyType,
        pinCode,
        systemSize,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong.");
      return;
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Submission error:", error);

    alert(
      "Unable to submit your request. Please try again."
    );
  }
}

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6">
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl">
          <div className="text-5xl">☀️</div>

          <h2 className="mt-5 text-3xl font-bold text-gray-950">
            Request Received
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Thank you, {name}. Our Adhiraj Urja Solar team will
            contact you to discuss your solar requirements.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-8 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 px-6 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl md:p-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-semibold text-orange-500">
              FREE SOLAR QUOTE
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-950">
              Let's plan your solar system
            </h2>

            <p className="mt-3 text-gray-500">
              Share your details and our team will contact you.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-3 py-2 text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Estimate Summary */}
        <div className="mx-auto w-full max-w-2xl rounded-3xl bg-white p-6 text-gray-900 shadow-2xl md:p-10">
          <p className="text-sm font-semibold text-orange-900">
            Your initial estimate
          </p>

          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">

            <div>
              <p className="text-xs text-orange-700">
                Property
              </p>

              <p className="mt-1 font-bold capitalize text-gray-900">
                {propertyType}
              </p>
            </div>

            <div>
              <p className="text-xs text-orange-700">
                Monthly bill
              </p>

              <p className="mt-1 font-bold text-gray-900">
                ₹{monthlyBill.toLocaleString("en-IN")}
              </p>
            </div>

            <div>
              <p className="text-xs text-orange-700">
                Estimated system
              </p>

              <p className="mt-1 font-bold text-gray-900">
                {systemSize} kW
              </p>
            </div>

          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Full Name *
            </label>

            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Mobile Number *
            </label>

            <input
              id="phone"
              type="tel"
              required
              maxLength={10}
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value.replace(/\D/g, "")
                )
              }
              placeholder="10-digit mobile number"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* PIN */}
          <div>
            <label
              htmlFor="quotePin"
              className="block text-sm font-semibold text-gray-900"
            >
              Property PIN Code
            </label>

            <input
              id="quotePin"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={pinCode}
              readOnly
              className="mt-2 w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Anything else you'd like us to know?
            </label>

            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Tell us about your roof, electricity usage, or any questions..."
              className="mt-2 w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-full bg-orange-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-100 transition hover:bg-orange-600"
          >
            Request Free Quote
          </button>

          <p className="text-center text-xs leading-5 text-gray-400">
            By submitting this form, you agree to be contacted
            by Adhiraj Urja Solar regarding your solar enquiry.
          </p>

        </form>
      </div>
    </div>
  );
}