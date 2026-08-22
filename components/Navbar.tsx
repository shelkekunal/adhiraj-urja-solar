export default function Navbar() {
  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Adhiraj Urja Solar
          </h1>

          <p className="text-xs text-gray-500">
            Pune, Maharashtra
          </p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Services
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Our Work
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            About Us
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <button className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600">
          Get Free Quote
        </button>
      </div>
    </nav>
  );
}