"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

const statuses = [
  "new",
  "contacted",
  "site_visit",
  "quote_sent",
  "won",
  "lost",
];

type LeadStatusProps = {
  leadId: string;
  currentStatus: string;
};

export default function LeadStatus({
  leadId,
  currentStatus,
}: LeadStatusProps) {
  const router = useRouter();

  const [status, setStatus] = useState(currentStatus);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function updateStatus(newStatus: string) {
    const previousStatus = status;

    setStatus(newStatus);
    setSaving(true);
    setMessage("");

    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase
      .from("leads")
      .update({
        status: newStatus,
      })
      .eq("id", leadId);

    if (error) {
      console.error("STATUS UPDATE ERROR:", error);

      setStatus(previousStatus);
      setMessage("Failed to update status.");
      setSaving(false);

      return;
    }

    setMessage("Status updated successfully.");
    setSaving(false);

    router.refresh();
  }

  function formatStatus(value: string) {
    return value
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">

      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        Lead Status
      </p>

      <div className="mt-3">

        <select
          value={status}
          onChange={(event) =>
            updateStatus(event.target.value)
          }
          disabled={saving}
          className="w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 outline-none transition hover:border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 disabled:cursor-wait disabled:opacity-60"
        >
          {statuses.map((item) => (
            <option key={item} value={item}>
              {formatStatus(item)}
            </option>
          ))}
        </select>

      </div>

      <div className="mt-4 flex flex-wrap gap-2">

        {statuses.map((item) => {
          const isActive = status === item;

          return (
            <span
              key={item}
              className={
                isActive
                  ? "rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-700"
                  : "rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-400"
              }
            >
              {formatStatus(item)}
            </span>
          );
        })}

      </div>

      {saving && (
        <p className="mt-3 text-sm text-gray-500">
          Saving status...
        </p>
      )}

      {message && !saving && (
        <p
          className={
            message.includes("Failed")
              ? "mt-3 text-sm font-medium text-red-600"
              : "mt-3 text-sm font-medium text-green-600"
          }
        >
          {message}
        </p>
      )}

    </div>
  );
}