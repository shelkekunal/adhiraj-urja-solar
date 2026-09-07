"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ReloadToHome() {
const router = useRouter();
const pathname = usePathname();

useEffect(() => {
const navigationEntries = performance.getEntriesByType("navigation");

if (
  navigationEntries.length > 0 &&
  (navigationEntries[0] as PerformanceNavigationTiming).type === "reload" &&
  pathname !== "/"
) {
  router.replace("/");
}

}, [pathname, router]);

return null;
}
