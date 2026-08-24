"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type SiteVisitProps = {
  leadId: string;
};

export default function SiteVisit({
  leadId,
}: SiteVisitProps) {
  const router = useRouter();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function scheduleVisit() {
    if (!date || !time) {
      setMessage("Please select a date and time.");
      return;
    }

    setSaving(true);
    setMessage("");

    const supabase =
      createSupabaseBrowserClient();

    // Create the site visit
    const { error } = await supabase
      .from("site_visits")
      .insert({
        lead_id: leadId,
        visit_date: date,
        visit_time: time,
        status: "scheduled",
      });

    if (error) {
      console.error("SITE VISIT ERROR:", error);

      setMessage("Could not schedule site visit.");
      setSaving(false);
      return;
    }

    // Update the lead status
    const { error: leadError } = await supabase
      .from("leads")
      .update({
        status: "site_visit",
      })
      .eq("id", leadId);

    if (leadError) {
      console.error(
        "LEAD STATUS UPDATE ERROR:",
        leadError
      );

      setMessage(
        "Visit was created, but lead status could not be updated."
      );

      setSaving(false);
      return;
    }

    setMessage(
      `Site visit scheduled for ${date} at ${time}.`
    );

    setSaving(false);

    router.refresh();
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">

      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
          Site Visit
        </p>

        <h2 className="mt-2 text-xl font-bold text-gray-950">
          Schedule a Site Visit
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Choose a convenient date and time for the customer visit.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div>
          <label
            htmlFor="visit-date"
            className="text-sm font-semibold text-gray-700"
          >
            Date
          </label>

          <input
            id="visit-date"
            type="date"
            value={date}
            onChange={(event) =>
              setDate(event.target.value)
            }
            className="cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm outline-none transition hover:border-orange-400 hover:bg-orange-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:cursor-wait disabled:opacity-70"
          />
        </div>

        <div>
          <label
            htmlFor="visit-time"
            className="cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm outline-none transition hover:border-orange-400 hover:bg-orange-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:cursor-wait disabled:opacity-70"
          >
            Time
          </label>

          <input
            id="visit-time"
            type="time"
            value={time}
            onChange={(event) =>
              setTime(event.target.value)
            }
            className="cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm outline-none transition hover:border-orange-400 hover:bg-orange-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:cursor-wait disabled:opacity-70"
          />
        </div>

      </div>

      <button
        type="button"
        onClick={scheduleVisit}
        disabled={saving}
        className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
      >
        {saving
          ? "Scheduling..."
          : "Schedule Site Visit"}
      </button>

      {message && (
        <p className="mt-4 text-sm text-gray-600">
          {message}
        </p>
      )}

    </div>
  );
}