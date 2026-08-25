import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo / Company Name */}
        <Link href="/" className="group">
          <p className="text-xl font-bold tracking-tight text-gray-950 transition group-hover:text-orange-500">
            Adhiraj Urja Solar
          </p>

          <p className="text-xs text-gray-500">
            Pune & PCMC
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Home
          </Link>

          <a
            href="#services"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Solar Solutions
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            About Us
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Contact
          </a>

        </div>

        {/* Main CTA */}
        <Link
          href="/quotation"
          className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 hover:shadow-md"
        >
          Get Your Quotation
        </Link>

      </div>
    </nav>
  );
}