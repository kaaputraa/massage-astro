import type { Lang } from "../i18n/ui";
import { site } from "../config/site";

type Section = { heading: string; body?: string[]; list?: string[] };

export function getPrivacy(lang: Lang) {
  const contact = site.email
    ? `WhatsApp +${site.whatsapp} / ${site.email}`
    : `WhatsApp +${site.whatsapp}`;

  if (lang === "id") {
    const sections: Section[] = [
      {
        heading: "Ringkasan",
        body: [
          `${site.name} adalah layanan massage panggilan. Situs ini tidak meminta Anda membuat akun atau mengisi formulir. Pemesanan dilakukan lewat WhatsApp.`,
        ],
      },
      {
        heading: "Data yang kami terima",
        body: ["Saat Anda mengirim pesan lewat WhatsApp, kami menerima informasi yang Anda kirim, misalnya:"],
        list: [
          "nomor WhatsApp dan nama profil Anda",
          "lokasi atau nama villa, hotel, atau homestay",
          "layanan, tanggal, jam, dan jumlah tamu yang Anda minta",
          "catatan yang Anda tulis, misalnya area yang pegal atau alergi",
        ],
      },
      {
        heading: "Untuk apa kami memakainya",
        body: [
          "Kami memakai informasi itu untuk mengonfirmasi pesanan, mengatur kedatangan terapis, dan menjawab pertanyaan atau keluhan Anda. Kami tidak menjual data Anda.",
        ],
      },
      {
        heading: "Data teknis",
        body: [
          "Penyedia hosting situs ini mencatat data teknis standar saat halaman dibuka, seperti alamat IP, jenis browser, dan waktu akses. Data ini dipakai untuk keamanan dan kelancaran situs.",
        ],
      },
      {
        heading: "Cookie dan analitik",
        body: site.analytics
          ? [
              "Situs ini memakai Google Tag Manager dan Google Analytics untuk mengetahui halaman yang dibuka dan klik pada tombol WhatsApp. Layanan ini memakai cookie dan mengumpulkan data kunjungan secara statistik.",
              "Anda dapat menghapus atau memblokir cookie lewat pengaturan browser, dan situs tetap bisa dipakai.",
            ]
          : ["Saat ini situs ini tidak memasang cookie pelacakan atau alat analitik."],
      },
      {
        heading: "Layanan pihak ketiga",
        body: [
          "Saat Anda menekan tombol WhatsApp, percakapan berpindah ke WhatsApp dan tunduk pada kebijakan privasi WhatsApp. Situs ini juga dijalankan di penyedia hosting pihak ketiga.",
        ],
      },
      {
        heading: "Berapa lama kami menyimpan",
        body: [
          "Kami menyimpan percakapan dan catatan pesanan selama diperlukan untuk melayani pesanan serta menangani pertanyaan atau keluhan. Anda dapat meminta penghapusan percakapan Anda.",
        ],
      },
      {
        heading: "Hak Anda",
        body: [
          "Anda dapat meminta untuk melihat, memperbaiki, atau menghapus data pribadi yang kami simpan. Hubungi kami lewat kontak di bawah, dan kami akan menanggapinya.",
        ],
      },
      {
        heading: "Perubahan kebijakan",
        body: ["Kebijakan ini dapat diperbarui. Tanggal pembaruan terakhir tertera di bagian atas halaman."],
      },
      {
        heading: "Kontak",
        body: [`Pertanyaan tentang privasi dapat dikirim lewat ${contact}.`],
      },
    ];

    return {
      metaTitle: `Kebijakan Privasi | ${site.name}`,
      metaDesc: `Cara ${site.name} menangani data Anda saat Anda memesan massage panggilan lewat WhatsApp.`,
      tag: "Privasi",
      titleA: "Kebijakan",
      titleHl: "privasi.",
      intro: "Penjelasan singkat tentang data yang kami terima dan cara kami memakainya.",
      updatedLabel: "Diperbarui",
      updated: site.privacyUpdated.id,
      sections,
    };
  }

  const sections: Section[] = [
    {
      heading: "Summary",
      body: [
        `${site.name} is an in-villa massage service. This site does not ask you to create an account or fill in a form. Bookings are made through WhatsApp.`,
      ],
    },
    {
      heading: "Information we receive",
      body: ["When you message us on WhatsApp, we receive the information you send, for example:"],
      list: [
        "your WhatsApp number and profile name",
        "your location or the name of your villa, hotel, or homestay",
        "the service, date, time, and number of guests you request",
        "notes you write, such as sore areas or allergies",
      ],
    },
    {
      heading: "How we use it",
      body: [
        "We use this information to confirm your booking, arrange your therapist's visit, and answer your questions or complaints. We do not sell your data.",
      ],
    },
    {
      heading: "Technical data",
      body: [
        "The hosting provider of this site records standard technical data when a page is opened, such as IP address, browser type, and access time. This is used for security and to keep the site running.",
      ],
    },
    {
      heading: "Cookies and analytics",
      body: site.analytics
        ? [
            "This site uses Google Tag Manager and Google Analytics to understand which pages are opened and when the WhatsApp button is clicked. These services use cookies and collect visit data in statistical form.",
            "You can delete or block cookies in your browser settings, and the site will still work.",
          ]
        : ["At the moment this site does not set tracking cookies or use analytics tools."],
    },
    {
      heading: "Third-party services",
      body: [
        "When you tap the WhatsApp button, the conversation moves to WhatsApp and is subject to WhatsApp's privacy policy. This site is also run on a third-party hosting provider.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "We keep conversations and booking records for as long as needed to serve your booking and handle questions or complaints. You can ask us to delete your conversation.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        "You can ask to see, correct, or delete the personal data we hold about you. Contact us using the details below and we will respond.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: ["This policy may be updated. The date of the latest update is shown at the top of the page."],
    },
    {
      heading: "Contact",
      body: [`Privacy questions can be sent via ${contact}.`],
    },
  ];

  return {
    metaTitle: `Privacy Policy | ${site.name}`,
    metaDesc: `How ${site.name} handles your information when you book an in-villa massage via WhatsApp.`,
    tag: "Privacy",
    titleA: "Privacy",
    titleHl: "policy.",
    intro: "A short explanation of what information we receive and how we use it.",
    updatedLabel: "Updated",
    updated: site.privacyUpdated.en,
    sections,
  };
}