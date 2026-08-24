import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdminHeader from "@/components/AdminHeader";

type LeadsPageProps = {
  searchParams: Promise<{
    status?: string;
  }>;
};

const statuses = [
  "new",
  "contacted",
  "site_visit",
  "quote_sent",
  "won",
  "lost",
];

export default async function LeadsPage({
  searchParams,
}: LeadsPageProps) {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { status: selectedStatus } = await searchParams;

  const activeStatus =
    selectedStatus && statuses.includes(selectedStatus)
      ? selectedStatus
      : "all";

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase leads error:", error);

    return (
      <main className="min-h-screen bg-gray-50">
        <AdminHeader />

        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-2xl bg-red-50 p-6 text-red-700">
            Unable to load leads.
          </div>
        </div>
      </main>
    );
  }

  const allLeads = leads ?? [];

  /* -------------------------------- */
  /* Statistics */
  /* -------------------------------- */

  const totalLeads = allLeads.length;

  const newLeads = allLeads.filter(
    (lead) => lead.status === "new"
  ).length;

  const contactedLeads = allLeads.filter(
    (lead) => lead.status === "contacted"
  ).length;

  const siteVisitLeads = allLeads.filter(
    (lead) => lead.status === "site_visit"
  ).length;

  const quoteSentLeads = allLeads.filter(
    (lead) => lead.status === "quote_sent"
  ).length;

  const wonLeads = allLeads.filter(
    (lead) => lead.status === "won"
  ).length;

  const lostLeads = allLeads.filter(
    (lead) => lead.status === "lost"
  ).length;

  /* -------------------------------- */
  /* Filtered Leads */
  /* -------------------------------- */

  const filteredLeads =
    activeStatus === "all"
      ? allLeads
      : allLeads.filter(
          (lead) => lead.status === activeStatus
        );

  const filterLabel =
    activeStatus === "all"
      ? "All Leads"
      : formatStatus(activeStatus);

  return (
    <main className="min-h-screen bg-gray-50">

      <AdminHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Sales CRM
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-950">
              Lead Dashboard
            </h1>

            <p className="mt-2 text-gray-500">
              Manage and track your solar enquiries.
            </p>
          </div>

          <div className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm">
            {totalLeads} Total Leads
          </div>

        </div>

        {/* Statistics */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Leads"
            value={totalLeads}
          />

          <StatCard
            title="New"
            value={newLeads}
          />

          <StatCard
            title="Contacted"
            value={contactedLeads}
          />

          <StatCard
            title="Site Visits"
            value={siteVisitLeads}
          />

          <StatCard
            title="Quotes Sent"
            value={quoteSentLeads}
          />

          <StatCard
            title="Won"
            value={wonLeads}
          />

          <StatCard
            title="Lost"
            value={lostLeads}
          />

        </div>

        {/* Filters */}

        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Filter Leads
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Show customers by their current sales stage.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">

              <FilterButton
                href="/admin/leads"
                label="All"
                count={totalLeads}
                active={activeStatus === "all"}
              />

              <FilterButton
                href="/admin/leads?status=new"
                label="New"
                count={newLeads}
                active={activeStatus === "new"}
              />

              <FilterButton
                href="/admin/leads?status=contacted"
                label="Contacted"
                count={contactedLeads}
                active={activeStatus === "contacted"}
              />

              <FilterButton
                href="/admin/leads?status=site_visit"
                label="Site Visit"
                count={siteVisitLeads}
                active={activeStatus === "site_visit"}
              />

              <FilterButton
                href="/admin/leads?status=quote_sent"
                label="Quote Sent"
                count={quoteSentLeads}
                active={activeStatus === "quote_sent"}
              />

              <FilterButton
                href="/admin/leads?status=won"
                label="Won"
                count={wonLeads}
                active={activeStatus === "won"}
              />

              <FilterButton
                href="/admin/leads?status=lost"
                label="Lost"
                count={lostLeads}
                active={activeStatus === "lost"}
              />

            </div>

          </div>

        </div>

        {/* Leads */}

        <div className="mt-10">

          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">

            <div>

              <h2 className="text-2xl font-bold text-gray-950">
                Customer Enquiries
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {filterLabel}
                {" · "}
                {filteredLeads.length}{" "}
                {filteredLeads.length === 1
                  ? "lead"
                  : "leads"}
              </p>

            </div>

            {activeStatus !== "all" && (
              <Link
                href="/admin/leads"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Clear Filter
              </Link>
            )}

          </div>

          {filteredLeads.length === 0 ? (

            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">

              <p className="text-lg font-semibold text-gray-900">
                No {filterLabel.toLowerCase()} leads
              </p>

              <p className="mt-2 text-gray-500">
                There are currently no customers in this
                sales stage.
              </p>

              {activeStatus !== "all" && (
                <Link
                  href="/admin/leads"
                  className="mt-5 inline-block text-sm font-semibold text-orange-500 hover:text-orange-600"
                >
                  View All Leads
                </Link>
              )}

            </div>

          ) : (

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="overflow-x-auto">

                <table className="min-w-full">

                  <thead className="border-b border-gray-200 bg-gray-50">

                    <tr>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Customer
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Phone
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Usage
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Solar System
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Estimated Cost
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Status
                      </th>

                      <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Date
                      </th>

                    </tr>

                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    {filteredLeads.map((lead) => (

                      <tr
                        key={lead.id}
                        className="transition hover:bg-gray-50"
                      >

                        {/* Customer */}

                        <td className="px-6 py-5">

                          <Link
                            href={`/admin/leads/${lead.id}`}
                            className="font-semibold text-gray-950 hover:text-orange-500"
                          >
                            {lead.name}
                          </Link>

                          <p className="mt-1 text-sm text-gray-500">
                            {lead.email || "No email"}
                          </p>

                        </td>

                        {/* Phone */}

                        <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-700">
                          {lead.phone}
                        </td>

                        {/* Usage */}

                        <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-700">

                          {lead.monthly_units
                            ? `${Number(
                                lead.monthly_units
                              ).toLocaleString("en-IN")} units`
                            : "—"}

                          {lead.monthly_bill && (
                            <p className="mt-1 text-xs text-gray-400">
                              ₹
                              {Number(
                                lead.monthly_bill
                              ).toLocaleString("en-IN")}
                              /month
                            </p>
                          )}

                        </td>

                        {/* Solar System */}

                        <td className="whitespace-nowrap px-6 py-5">

                          {lead.recommended_system ? (
                            <>
                              <p className="text-sm font-semibold text-gray-900">
                                {lead.recommended_system} kW
                              </p>

                              <p className="mt-1 text-xs capitalize text-gray-500">
                                {lead.system_type?.replace(
                                  "_",
                                  "-"
                                ) || "—"}
                              </p>
                            </>
                          ) : (
                            "—"
                          )}

                        </td>

                        {/* Estimated Cost */}

                        <td className="whitespace-nowrap px-6 py-5">

                          {lead.estimated_cost ? (
                            <>
                              <p className="text-sm font-semibold text-gray-900">
                                ₹
                                {Number(
                                  lead.estimated_cost
                                ).toLocaleString("en-IN")}
                              </p>

                              {Number(lead.subsidy) > 0 && (
                                <p className="mt-1 text-xs text-green-600">
                                  ₹
                                  {Number(
                                    lead.subsidy
                                  ).toLocaleString("en-IN")}{" "}
                                  subsidy
                                </p>
                              )}
                            </>
                          ) : (
                            "—"
                          )}

                        </td>

                        {/* Status */}

                        <td className="whitespace-nowrap px-6 py-5">

                          <StatusBadge
                            status={lead.status}
                          />

                        </td>

                        {/* Date */}

                        <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-500">

                          {new Date(
                            lead.created_at
                          ).toLocaleDateString("en-IN")}

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          )}

        </div>

      </div>

    </main>
  );
}


/* -------------------------------- */
/* Statistics Card */
/* -------------------------------- */

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <p className="mt-3 text-3xl font-bold text-gray-950">
        {value}
      </p>

    </div>
  );
}


/* -------------------------------- */
/* Filter Button */
/* -------------------------------- */

function FilterButton({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        active
          ? "rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition"
          : "rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
      }
    >
      {label} ({count})
    </Link>
  );
}


/* -------------------------------- */
/* Status Badge */
/* -------------------------------- */

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const label = formatStatus(status);

  return (
    <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold capitalize text-gray-700">
      {label}
    </span>
  );
}


/* -------------------------------- */
/* Status Formatting */
/* -------------------------------- */

function formatStatus(status: string) {
  return status
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
}