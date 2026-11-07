export const site = {
  name: "Massage Canggu",
  url: "https://massagecanggu.id",
  whatsapp: "62812xxxxxxx", // ganti nomor client, tanpa + atau 0 di depan
  instagram: "", // isi URL kalau ada
  hours: {
    id: "Setiap hari, 09.00 - 22.00",
    en: "Daily, 9 AM - 10 PM",
  },
  eta: { id: "sekitar 30 menit", en: "about 30 minutes" },
} as const;

export const rating: { score: number; count: number } | null = null;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Testimonial = {
  name: string;
  origin?: string;
  rating?: number; // 1-5, opsional
  text: { id: string; en: string };
};


export const testimonials: Testimonial[] = [
  // contoh format:
  {
    name: "Malya",
    origin: "Australia",
    rating: 5,
    text: { id: "Professional Therapist", en: "Terapis Profesional" },
  },
];