import { useLocation } from "@tanstack/react-router";
import type { Locale } from "./translations";
import { t as translate } from "./translations";

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  if (pathname === "/it" || pathname.startsWith("/it/")) return "it";
  return "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/es" || pathname === "/it") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/it/")) return pathname.slice(3) || "/";
  return pathname;
}

export function localizedPath(locale: Locale, path: string): string {
  // path is the canonical path WITHOUT locale prefix, starting with "/"
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function useLocale() {
  const { pathname } = useLocation();
  const locale = getLocaleFromPath(pathname);
  const t = translate(locale);
  const basePath = stripLocalePrefix(pathname);
  return { locale, t, basePath, pathname };
}
