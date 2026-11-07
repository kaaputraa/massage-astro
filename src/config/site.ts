export const site = {
  name: "Massage Canggu",
  url: "https://massagecanggu.id",
  whatsapp: "62812xxxxxxx", // ganti nomor client, tanpa + atau 0 di depan
  instagram: "", // isi URL kalau ada
  hours: {
    id: "Setiap hari, 09.00 - 22.00",
    en: "Daily, 9 AM - 10 PM",
  },
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}