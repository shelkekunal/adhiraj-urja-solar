"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Installations", href: "#installations" },
  { label: "Contact", href: "#contact" },
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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#17201b]/10 bg-[#f3f0e8]/90 shadow-[0_8px_30px_rgba(23,32,27,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-[#f3f0e8]/75 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(23,32,27,0.08)] ring-1 ring-[#17201b]/5 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/adhiraj-urja-solar-logo.png"
              alt="Adhiraj Urja Solar"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="hidden sm:block">
            <p className="text-[15px] font-bold tracking-[-0.02em] text-[#17201b]">
              Adhiraj Urja
            </p>

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6824]">
              Solar
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-[13px] font-semibold text-[#17201b]/65 transition-colors duration-300 hover:text-[#17201b]"
            >
              {item.label}

              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#c6922e] transition-all duration-300 group-hover:w-5" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/917507564542"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-semibold text-[#17201b]/70 transition-colors duration-300 hover:text-[#17201b]"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17201b]/[0.06] transition-all duration-300 group-hover:bg-[#61745f]/15">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </span>

            WhatsApp
          </a>

          <Link
            href="/quotation"
            className="group relative overflow-hidden rounded-full bg-[#17201b] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(23,32,27,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26362d] hover:shadow-[0_12px_28px_rgba(23,32,27,0.22)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Solar Quote
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-[#c6922e] transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#17201b]/10 bg-white/70 text-[#17201b] shadow-sm transition-all duration-300 hover:border-[#c6922e]/30 hover:bg-white lg:hidden"
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
        className={`overflow-hidden border-t border-[#17201b]/5 bg-[#f3f0e8]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[#17201b]/[0.06] py-4 text-sm font-semibold text-[#17201b]/70 transition-colors hover:text-[#17201b]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/917507564542"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-xl border border-[#17201b]/10 bg-white px-4 py-3 text-sm font-semibold text-[#17201b]"
            >
              WhatsApp
            </a>

            <Link
              href="/quotation"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-xl bg-[#17201b] px-4 py-3 text-sm font-semibold text-white"
            >
              Get Quote →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}