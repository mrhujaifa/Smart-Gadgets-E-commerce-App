"use client";
import { usePathname } from "next/navigation";

export default function useHideOnRoute(routes) {
  const pathname = usePathname();
  if (Array.isArray(routes)) {
    return routes.includes(pathname);
  }

  return pathname === routes;
}
