"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const navItems = [
{
label: "Dashboard",
href: "/admin",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <rect x="3" y="3" width="7" height="7" rx="1.5" /> <rect x="14" y="3" width="7" height="7" rx="1.5" /> <rect x="3" y="14" width="7" height="7" rx="1.5" /> <rect x="14" y="14" width="7" height="7" rx="1.5" /> </svg>
),
},
{
label: "Leads",
href: "/admin/leads",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M22 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" /> </svg>
),
},
{
label: "Site Visits",
href: "/admin/site-visits",
icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"> <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z" /> <circle cx="12" cy="10" r="3" /> </svg>
),
},
];

export default function AdminHeader() {
const router = useRouter();
const pathname = usePathname();

async function handleLogout() {
const supabase = createSupabaseBrowserClient();


await supabase.auth.signOut();

router.push("/admin/login");
router.refresh();


}

return ( <header className="sticky top-0 z-50 border-b border-[#17201b]/10 bg-[#17201b]/95 text-white shadow-[0_8px_30px_rgba(23,32,27,0.12)] backdrop-blur-xl">

```
  <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">

    {/* Brand */}
    <Link
      href="/admin"
      className="group flex shrink-0 items-center gap-3"
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/adhiraj-urja-solar-logo.png"
          alt="Adhiraj Urja Solar"
          fill
          className="object-contain p-1.5"
          priority
        />
      </div>

      <div className="hidden sm:block">
        <p className="text-[14px] font-bold tracking-[-0.02em] text-white">
          Adhiraj Urja
        </p>

        <div className="flex items-center gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#d6ae62]">
            Solar
          </span>

          <span className="h-1 w-1 rounded-full bg-[#c6922e]" />

          <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-white/35">
            Admin
          </span>
        </div>
      </div>
    </Link>

    {/* Navigation */}
    <nav className="flex items-center gap-1">

      {navItems.map((item) => {
        const isActive =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-all duration-300 sm:px-4 ${
              isActive
                ? "bg-white/[0.09] text-white"
                : "text-white/50 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span
              className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                isActive ? "text-[#d6ae62]" : ""
              }`}
            >
              {item.icon}
            </span>

            <span className="hidden md:inline">
              {item.label}
            </span>

            {isActive && (
              <span className="absolute bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[#c6922e]" />
            )}
          </Link>
        );
      })}

    </nav>

    {/* Right side */}
    <div className="flex shrink-0 items-center gap-3">

      {/* Status */}
      <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 lg:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6922e] opacity-40" />
          <span className="relative h-2 w-2 rounded-full bg-[#c6922e]" />
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
          Admin Panel
        </span>
      </div>

      {/* Sign out */}
      <button
        type="button"
        onClick={handleLogout}
        className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[12px] font-semibold text-white/65 transition-all duration-300 hover:border-[#c6922e]/30 hover:bg-[#c6922e]/10 hover:text-[#d6ae62] sm:px-4"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
          <path d="M21 19V5a2 2 0 0 0-2-2h-6" />
        </svg>

        <span className="hidden sm:inline">
          Sign Out
        </span>
      </button>

    </div>
  </div>

  {/* Mobile navigation */}
  <div className="border-t border-white/[0.06] md:hidden">
    <nav className="mx-auto flex max-w-7xl overflow-x-auto px-5 py-2 sm:px-6">

      {navItems.map((item) => {
        const isActive =
          item.href === "/admin"
            ? pathname === "/admin"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`mr-1 flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
              isActive
                ? "bg-white/[0.09] text-[#d6ae62]"
                : "text-white/45 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <span className="h-3.5 w-3.5">
              {item.icon}
            </span>

            {item.label}
          </Link>
        );
      })}

    </nav>
  </div>

</header>


);
}
