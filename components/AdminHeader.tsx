"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createSupabaseBrowserClient();

    await supabase.auth.signOut();

    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="border-b border-gray-200 bg-white px-6 py-5">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Company name */}
        <div>
          <p className="font-semibold text-orange-500">
            ADHIRAJ URJA SOLAR
          </p>

          <p className="text-sm text-gray-500">
            Admin Dashboard
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <Link
            href="/admin"
            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/leads"
            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Leads
          </Link>

          <Link
            href="/admin/site-visits"
            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Site Visits
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Sign Out
          </button>

        </div>

      </div>

    </div>
  );
}   