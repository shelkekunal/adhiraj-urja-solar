import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdminHeader from "@/components/AdminHeader";
import SiteVisitStatus from "@/components/SiteVisitStatus";

export default async function SiteVisitsPage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: visits, error } = await supabase
    .from("site_visits")
    .select(`
      *,
      leads (
        name,
        phone,
        email,
        pin_code
      )
    `)
    .order("visit_date", { ascending: true })
    .order("visit_time", { ascending: true });

  if (error) {
    console.error("SITE VISITS ERROR:", error);

    return (
      <main className="min-h-screen bg-gray-50">
        <AdminHeader />

        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-2xl bg-red-50 p-6 text-red-700">
            Unable to load site visits.
          </div>
        </div>
      </main>
    );
  }

  const allVisits = visits ?? [];

  return (
    <main className="min-h-screen bg-gray-50">

      <AdminHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Field Operations
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-950">
            Site Visits
          </h1>

          <p className="mt-2 text-gray-500">
            Manage upcoming customer site visits.
          </p>
        </div>

        {allVisits.length === 0 ? (

          <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">

            <p className="text-lg font-semibold text-gray-900">
              No site visits scheduled
            </p>

            <p className="mt-2 text-gray-500">
              Scheduled customer visits will appear here.
            </p>

          </div>

        ) : (

          <div className="mt-10 space-y-4">

            {allVisits.map((visit) => (

              <div
                key={visit.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                  <div>

                    <p className="text-sm font-semibold text-orange-500">
                      {formatDate(visit.visit_date)}
                    </p>

                    <p className="mt-1 text-2xl font-bold text-gray-950">
                      {formatTime(visit.visit_time)}
                    </p>

                  </div>

                  <div className="flex-1 md:px-8">

                    <h2 className="text-xl font-bold text-gray-950">
                      {visit.leads?.name ?? "Unknown customer"}
                    </h2>

                    <p className="mt-1 text-gray-600">
                      📞 {visit.leads?.phone ?? "No phone"}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      PIN: {visit.leads?.pin_code ?? "Not provided"}
                    </p>

                  </div>

                  <div>
                    <SiteVisitStatus
                       visitId={visit.id}
                       currentStatus={visit.status}
                    />

                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">

                  <Link
                    href={`/admin/leads/${visit.lead_id}`}
                    className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Open Lead
                  </Link>

                  {visit.leads?.phone && (
                    <a
                      href={`tel:${visit.leads.phone}`}
                      className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                    >
                      Call
                    </a>
                  )}

                  {visit.leads?.phone && (
                    <a
                      href={`https://wa.me/91${visit.leads.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 hover:bg-green-50"
                    >
                      WhatsApp
                    </a>
                  )}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}

function formatDate(date: string) {
  return new Date(
    `${date}T00:00:00`
  ).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatTime(time: string) {
  return new Date(
    `1970-01-01T${time}`
  ).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });
}