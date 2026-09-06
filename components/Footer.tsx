import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#172018] px-6 py-10 text-white/45 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">
            Adhiraj Urja Solar
          </p>

          <p className="mt-1 text-sm">
            Rooftop solar solutions in Pune & Pimpri-Chinchwad
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm">
          <Link
            href="#services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <Link
            href="#about"
            className="transition hover:text-white"
          >
            About Us
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            href="/quotation"
            className="transition hover:text-green-400"
          >
            Get Quotation
          </Link>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/25">
        © {new Date().getFullYear()} Adhiraj Urja Solar. All rights reserved.
      </div>
    </footer>
  );
}