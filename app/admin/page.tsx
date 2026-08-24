import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdminHeader from "@/components/AdminHeader";

export default async function AdminDashboard() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { count: leadsCount } = await supabase
    .from("leads")
    .select("*", {
      count: "exact",
      head: true,
    });

  const { count: siteVisitsCount } = await supabase
    .from("site_visits")
    .select("*", {
      count: "exact",
      head: true,
    });

  return (
    <main className="min-h-screen bg-gray-50">

      <AdminHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Overview
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-950">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome to the Adhiraj Urja Solar admin dashboard.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm font-semibold text-gray-500">
              Total Leads
            </p>

            <p className="mt-3 text-4xl font-bold text-gray-950">
              {leadsCount ?? 0}
            </p>

            <Link
              href="/admin/leads"
              className="mt-5 inline-block text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              View Leads →
            </Link>

          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">

            <p className="text-sm font-semibold text-gray-500">
              Site Visits
            </p>

            <p className="mt-3 text-4xl font-bold text-gray-950">
              {siteVisitsCount ?? 0}
            </p>

            <Link
              href="/admin/site-visits"
              className="mt-5 inline-block text-sm font-semibold text-orange-500 hover:text-orange-600"
            >
              View Site Visits →
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}