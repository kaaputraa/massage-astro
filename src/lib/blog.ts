import type { Lang } from "../i18n/ui";

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    dateStyle: "long",
  }).format(date);
}

export function readingMinutes(body: string | undefined) {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// "id/judul-artikel" menjadi "judul-artikel"
export function slugOf(id: string) {
  return id.split("/")[1] ?? id;
}