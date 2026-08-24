"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

type SiteVisitStatusProps = {
  visitId: string;
  currentStatus: string;
};

export default function SiteVisitStatus({
  visitId,
  currentStatus,
}: SiteVisitStatusProps) {
  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);

  async function updateStatus(
    newStatus: string
  ) {
    setStatus(newStatus);
    setSaving(true);

    const supabase =
      createSupabaseBrowserClient();

    const { error } = await supabase
      .from("site_visits")
      .update({
        status: newStatus,
      })
      .eq("id", visitId);

    if (error) {
      console.error(
        "STATUS UPDATE ERROR:",
        error
      );

      setStatus(currentStatus);
    }

    setSaving(false);
  }

  return (
    <div>
      <select
        value={status}
        onChange={(event) =>
          updateStatus(event.target.value)
        }
        disabled={saving}
        className="cursor-pointer rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold capitalize text-gray-900 shadow-sm outline-none transition hover:border-orange-400 hover:bg-orange-50 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:cursor-wait disabled:opacity-70"
      >
        <option value="scheduled">
          Scheduled
        </option>

        <option value="completed">
          Completed
        </option>

        <option value="cancelled">
          Cancelled
        </option>

        <option value="rescheduled">
          Rescheduled
        </option>
      </select>

      {saving && (
        <p className="mt-1 text-xs text-gray-400">
          Saving...
        </p>
      )}
    </div>
  );
}