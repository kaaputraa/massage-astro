export const languages = { id: "Indonesia", en: "English" } as const;
export type Lang = keyof typeof languages;

export const ui = {
  id: {
    homeTitle: "Massage Canggu | Ke Villa atau Hotel Anda",
    homeDesc: "Terapis profesional datang ke villa atau hotel Anda di Canggu. Booking lewat WhatsApp.",
    heroTagline: "Terapis datang ke villa atau hotel Anda.",
    heroAlt: "Terapis massage profesional melayani tamu di villa Canggu",
    bookWa: "Booking via WhatsApp",
    waMessage: "Halo, saya ingin booking massage di Canggu.",
    waMessageArea: "Halo, saya ingin booking massage di {area}.",
    services: "Layanan",
    servicesIn: "Layanan di {area}",
    serviceAreas: "Area layanan",
    massageIn: "Massage {area}",
    faq: "Pertanyaan umum",
    minutes: "menit",
    arrival: "Estimasi tiba",
    suitableFor: "Cocok untuk",
    home: "Beranda",
    navServices: "Layanan",
    navAbout: "Tentang",
    navBlog: "Blog",
    navContact: "Kontak",
    navPrivacy: "Kebijakan privasi",
    menu: "Menu",
    skip: "Lewati ke konten utama",
    footerTagline: "Massage panggilan profesional ke villa, hotel, dan homestay Anda di Canggu.",
    footerMenu: "Menu",
    footerAreaTitle: "Area layanan",
    footerHours: "Jam operasional",
  },
  en: {
    homeTitle: "Massage Canggu | Therapist to Your Villa or Hotel",
    homeDesc: "Professional massage therapists come to your villa or hotel in Canggu. Book via WhatsApp.",
    heroTagline: "A therapist comes to your villa or hotel.",
    heroAlt: "Professional massage therapist treating a guest at a Canggu villa",
    bookWa: "Book via WhatsApp",
    waMessage: "Hello, I would like to book a massage in Canggu.",
    waMessageArea: "Hello, I would like to book a massage in {area}.",
    services: "Services",
    servicesIn: "Services in {area}",
    serviceAreas: "Service areas",
    massageIn: "Massage in {area}",
    faq: "Frequently asked questions",
    minutes: "min",
    arrival: "Estimated arrival",
    suitableFor: "Great for",
    home: "Home",
    navServices: "Services",
    navAbout: "About",
    navBlog: "Blog",
    navContact: "Contact",
    navPrivacy: "Privacy policy",
    menu: "Menu",
    skip: "Skip to main content",
    footerTagline: "Professional in-villa massage delivered to your villa, hotel, or homestay in Canggu.",
    footerMenu: "Menu",
    footerAreaTitle: "Service areas",
    footerHours: "Opening hours",
  },
} as const;

export type UiKey = keyof (typeof ui)["id"];

export function useT(lang: Lang) {
  return (key: UiKey, vars: Record<string, string> = {}) =>
    Object.entries(vars).reduce(
      (text, [k, v]) => text.replace(`{${k}}`, v),
      ui[lang][key] as string,
    );
}

export function pathFor(lang: Lang, path: string) {
  return lang === "id" ? path : `/en${path}`;
}

export const routes = {
  home: { id: "/", en: "/en/" },
  services: { id: "/layanan/", en: "/en/services/" },
  about: { id: "/tentang/", en: "/en/about/" },
  blog: { id: "/blog/", en: "/en/blog/" },
  contact: { id: "/kontak/", en: "/en/contact/" },
  privacy: { id: "/privasi/", en: "/en/privacy/" },
} as const;

export type RouteKey = keyof typeof routes;

export function route(lang: Lang, key: RouteKey) {
  return routes[key][lang];
}