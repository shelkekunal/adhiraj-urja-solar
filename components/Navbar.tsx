import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          href="/"
          className="flex items-center transition-opacity duration-200 hover:opacity-90"
          aria-label="Adhiraj Urja Solar Home"
        >
          <Image
            src="/adhiraj-urja-solar-logo.png"
            alt="Adhiraj Urja Solar"
            width={210}
            height={80}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
          >
            Solar Solutions
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
          >
            About Us
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-orange-500"
          >
            Contact
          </Link>

        </div>

        {/* =====================================================
            MAIN CTA
        ====================================================== */}
        <Link
          href="/quotation"
          className="hidden rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-md md:inline-flex"
        >
          Get Your Quotation
        </Link>

        {/* =====================================================
            MOBILE CTA
        ====================================================== */}
        <Link
          href="/quotation"
          className="rounded-full bg-gray-950 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-orange-500 md:hidden"
        >
          Get Quote
        </Link>

      </div>
    </nav>
  );
}