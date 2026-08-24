import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdminHeader from "@/components/AdminHeader";
import LeadStatus from "@/components/LeadStatus";
import SiteVisit from "@/components/SiteVisit";

type LeadPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LeadDetailsPage({
  params,
}: LeadPageProps) {
  const { id } = await params;

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: lead, error } = await supabase
    .from("leads")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !lead) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* Back */}

        <Link
          href="/admin/leads"
          className="text-sm font-semibold text-orange-500 hover:text-orange-600"
        >
          ← Back to Leads
        </Link>

        {/* Main Lead Card */}

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">

          {/* Header */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
                Customer Lead
              </p>

              <h1 className="mt-2 text-4xl font-bold text-gray-950">
                {lead.name}
              </h1>

              <p className="mt-2 text-gray-500">
                Lead created{" "}
                {new Date(
                  lead.created_at
                ).toLocaleString("en-IN")}
              </p>
            </div>

            <LeadStatus
              leadId={lead.id}
              currentStatus={lead.status}
            />

          </div>

          {/* Customer Information */}

          <section className="mt-10">

            <h2 className="text-xl font-bold text-gray-950">
              Customer Information
            </h2>

            <div className="mt-4 grid gap-6 md:grid-cols-2">

              <InfoCard
                label="Phone"
                value={lead.phone}
              />

              <InfoCard
                label="Email"
                value={lead.email || "Not provided"}
              />

            </div>

          </section>

          {/* Electricity Usage */}

          <section className="mt-10">

            <h2 className="text-xl font-bold text-gray-950">
              Electricity Usage
            </h2>

            <div className="mt-4 grid gap-6 md:grid-cols-2">

              <InfoCard
                label="Monthly Electricity Bill"
                value={
                  lead.monthly_bill
                    ? `₹${Number(
                        lead.monthly_bill
                      ).toLocaleString("en-IN")}`
                    : "Not provided"
                }
              />

              <InfoCard
                label="Monthly Electricity Units"
                value={
                  lead.monthly_units
                    ? `${Number(
                        lead.monthly_units
                      ).toLocaleString("en-IN")} units`
                    : "Not provided"
                }
              />

            </div>

          </section>

          {/* Solar Quotation */}

          <section className="mt-10">

            <div>
              <h2 className="text-xl font-bold text-gray-950">
                Solar Quotation
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Estimated quotation generated from customer
                electricity usage.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <QuotationCard
                label="Recommended System"
                value={
                  lead.recommended_system
                    ? `${lead.recommended_system} kW`
                    : "Not calculated"
                }
              />

              <QuotationCard
                label="System Type"
                value={
                  lead.system_type
                    ? formatSystemType(
                        lead.system_type
                      )
                    : "Not specified"
                }
              />

              <QuotationCard
                label="Estimated Annual Generation"
                value={
                  lead.estimated_generation
                    ? `${Number(
                        lead.estimated_generation
                      ).toLocaleString("en-IN")} kWh`
                    : "—"
                }
              />

              <QuotationCard
                label="Estimated Annual Savings"
                value={
                  lead.estimated_savings
                    ? `₹${Number(
                        lead.estimated_savings
                      ).toLocaleString("en-IN")}`
                    : "—"
                }
              />

              <QuotationCard
                label="Estimated System Cost"
                value={
                  lead.estimated_cost &&
                  lead.subsidy
                    ? `₹${Number(
                        Number(lead.estimated_cost) +
                          Number(lead.subsidy)
                      ).toLocaleString("en-IN")}`
                    : lead.estimated_cost
                    ? `₹${Number(
                        lead.estimated_cost
                      ).toLocaleString("en-IN")}`
                    : "—"
                }
              />

              <QuotationCard
                label="Government Subsidy"
                value={
                  lead.subsidy
                    ? `₹${Number(
                        lead.subsidy
                      ).toLocaleString("en-IN")}`
                    : "Not applicable"
                }
              />

              {/* Final Cost */}

              <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:col-span-2">

                <p className="text-sm font-medium text-gray-600">
                  Estimated Cost After Subsidy
                </p>

                <p className="mt-2 text-3xl font-bold text-orange-500">
                  {lead.estimated_cost
                    ? `₹${Number(
                        lead.estimated_cost
                      ).toLocaleString("en-IN")}`
                    : "—"}
                </p>

              </div>

              <QuotationCard
                label="Estimated Payback"
                value={
                  lead.estimated_payback
                    ? `${Number(
                        lead.estimated_payback
                      ).toFixed(1)} years`
                    : "—"
                }
              />

            </div>

            <p className="mt-4 text-xs leading-5 text-gray-400">
              All quotation values are estimates and may
              change after site assessment and final system
              design.
            </p>

          </section>

          {/* Customer Message */}

          {lead.message && (
            <section className="mt-10">

              <h2 className="text-xl font-bold text-gray-950">
                Customer Message
              </h2>

              <div className="mt-4 rounded-2xl bg-gray-50 p-6">

                <p className="text-gray-800">
                  {lead.message}
                </p>

              </div>

            </section>
          )}

          {/* Contact Actions */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={`tel:${lead.phone}`}
              className="rounded-full bg-gray-950 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Call Customer
            </a>

            <a
              href={`https://wa.me/91${lead.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* Site Visit */}

        <SiteVisit leadId={lead.id} />

      </div>

    </main>
  );
}


/* -------------------------------- */
/* Information Card */
/* -------------------------------- */

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-6">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-gray-950">
        {value}
      </p>

    </div>
  );
}


/* -------------------------------- */
/* Quotation Card */
/* -------------------------------- */

function QuotationCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-6">

      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-xl font-semibold text-gray-950">
        {value}
      </p>

    </div>
  );
}


/* -------------------------------- */
/* System Type Formatting */
/* -------------------------------- */

function formatSystemType(
  systemType: string
) {
  return systemType
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
}