"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#172018] px-6 py-28 lg:px-8"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="mx-auto flex w-fit items-center gap-3">
          <span className="h-px w-7 bg-green-400" />

          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-green-400">
            Ready to go solar?
          </p>

          <span className="h-px w-7 bg-green-400" />
        </div>

        <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
          Let's find the right
          <br />
          <span className="text-white/40">
            solar system for you.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/55">
          Get a quick estimate based on your electricity usage, or talk
          directly with our team about your requirements.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/quotation"
            className="group rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#172018] transition-all duration-300 hover:bg-green-100"
          >
            Get Your Quotation
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <a
            href="tel:7507564542"
            className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
          >
            Call 7507564542
          </a>
        </div>

        <p className="mt-6 text-sm text-white/35">
          WhatsApp: 9766614955
        </p>
      </motion.div>
    </section>
  );
}