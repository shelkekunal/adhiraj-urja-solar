import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function LeadsPage() {
  const supabase = createSupabaseServerClient();

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);

    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-gray-950">
          Unable to load leads
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div>
          <p className="font-semibold text-orange-500">
            ADHIRAJ URJA SOLAR
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-950">
            Lead Dashboard
          </h1>

          <p className="mt-3 text-gray-500">
            Manage customer enquiries and solar quotation requests.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Total Leads
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-950">
              {leads?.length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              New
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-950">
              {leads?.filter(
                (lead) => lead.status === "new"
              ).length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Contacted
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-950">
              {leads?.filter(
                (lead) => lead.status === "contacted"
              ).length ?? 0}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Won
            </p>

            <p className="mt-2 text-3xl font-bold text-gray-950">
              {leads?.filter(
                (lead) => lead.status === "won"
              ).length ?? 0}
            </p>
          </div>

        </div>

        {/* Leads */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">

          <div className="border-b border-gray-100 px-6 py-5">
            <h2 className="text-xl font-bold text-gray-950">
              Customer Enquiries
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="bg-gray-50 text-sm text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-medium">
                    Customer
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Phone
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Property
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Bill
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Solar
                  </th>

                  <th className="px-6 py-4 font-medium">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {leads?.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-5">
                      <div className="font-semibold text-gray-950">
                        {lead.name}
                      </div>

                      {lead.email && (
                        <div className="mt-1 text-sm text-gray-500">
                          {lead.email}
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-5 text-gray-700">
                      {lead.phone}
                    </td>

                    <td className="px-6 py-5">
                      <div className="capitalize text-gray-900">
                        {lead.property_type}
                      </div>

                      {lead.pin_code && (
                        <div className="text-sm text-gray-500">
                          {lead.pin_code}
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-5 text-gray-700">
                      {lead.monthly_bill
                        ? `₹${Number(
                            lead.monthly_bill
                          ).toLocaleString("en-IN")}`
                        : "-"}
                    </td>

                    <td className="px-6 py-5 font-semibold text-gray-900">
                      {lead.system_size
                        ? `${lead.system_size} kW`
                        : "-"}
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold capitalize text-orange-700">
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        </div>

      </div>
    </main>
  );
}