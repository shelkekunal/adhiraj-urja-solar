"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#why-choose-us" },
  { label: "Services", href: "/#services" },
  { label: "Installations", href: "/#installations" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6">
      <div
        className={`mx-auto max-w-7xl overflow-hidden rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[#17201b]/[0.98] shadow-[0_15px_45px_rgba(23,32,27,0.20)]"
            : "border-white/[0.08] bg-[#17201b]/95 shadow-[0_10px_35px_rgba(23,32,27,0.14)]"
        } backdrop-blur-xl`}
      >
        {/* Main Navbar */}
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-5 lg:px-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group flex shrink-0 items-center"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#f7f6f1] shadow-[0_5px_18px_rgba(0,0,0,0.15)] ring-1 ring-[#c6922e]/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-[#c6922e]/50 sm:h-12 sm:w-12">
              <Image
                src="/adhiraj-urja-solar-logo.png"
                alt="Adhiraj Urja Solar"
                fill
                className="object-contain p-1.5"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative rounded-full px-4 py-2.5 text-[13px] font-medium text-white/60 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                {/* Gold underline */}
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#c6922e] transition-all duration-300 group-hover:w-5" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917507564542"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-[12px] font-semibold text-white/65 transition-all duration-300 hover:border-[#61745f]/40 hover:bg-white/[0.05] hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-all duration-300 group-hover:bg-[#61745f]/20 group-hover:text-[#d6ae62]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </span>

              WhatsApp
            </a>

            {/* Quote Button */}
            <Link
              href="/quotation"
              className="group relative overflow-hidden rounded-full bg-[#c6922e] px-5 py-3 text-[12px] font-bold text-[#17201b] shadow-[0_8px_22px_rgba(198,146,46,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d6ae62] hover:shadow-[0_12px_28px_rgba(198,146,46,0.28)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Solar Quote

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition-all duration-300 hover:border-[#c6922e]/30 hover:bg-white/[0.08] lg:hidden"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-white/[0.06] transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="px-4 pb-5 pt-2 sm:px-5">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-4 text-sm font-medium text-white/65 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>

                  <span className="text-[#c6922e] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/917507564542"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-[#61745f]/40 hover:bg-white/[0.07] hover:text-white"
              >
                WhatsApp
              </a>

              <Link
                href="/quotation"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-xl bg-[#c6922e] px-4 py-3 text-sm font-bold text-[#17201b] transition-colors duration-300 hover:bg-[#d6ae62]"
              >
                Get Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Gold Accent */}
        <div className="h-px bg-[#c6922e]/20">
          <div className="h-full w-1/5 bg-[#c6922e]" />
        </div>
      </div>
    </header>
  );
}