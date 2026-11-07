export const site = {
  name: "Massage Canggu",
  url: "https://massagecanggu.id",
  whatsapp: "6282191652785", // ganti nomor client, tanpa + atau 0 di depan
  instagram: "@balipro.massage", // isi URL kalau ada
  email: "balipromassage@gmail.com", // isi kalau client punya email bisnis
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

export type TeamMember = {
  slug: string; // nama berkas foto di src/assets/team/<slug>.jpg
  name: string;
  role: { id: string; en: string };
  years?: number;
  bio?: { id: string; en: string };
};

// Isi HANYA dengan terapis yang sudah memberi izin tertulis untuk nama dan fotonya.
// Selama kosong, bagian tim tidak muncul di situs.
export const team: TeamMember[] = [
  // contoh format:
  {
    slug: "terapis-1",
    name: "Maya",
    role: { id: "Terapis senior", en: "Senior therapist" },
    years: 5,
    bio: { id: "Spesialis deep tissue.", en: "Deep tissue specialist." },
  },
];