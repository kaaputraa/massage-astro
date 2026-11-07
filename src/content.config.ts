import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const teks = z.object({ id: z.string(), en: z.string() });
const daftar = z.object({ id: z.array(z.string()), en: z.array(z.string()) });

const layanan = defineCollection({
  loader: file("src/data/layanan.json"),
  schema: z.object({
    title: teks,
    price: z.number().positive(),
    duration: z.number().positive(),
    description: teks,
    benefits: daftar.optional(),
    bestFor: teks.optional(),
  }),
});

const faq = defineCollection({
  loader: file("src/data/faq.json"),
  schema: z.object({ question: teks, answer: teks }),
});

const area = defineCollection({
  loader: file("src/data/area.json"),
  schema: z.object({
    nama: z.string(),
    judul: teks,
    deskripsi: teks,
    intro: teks,
    waktuTiba: teks,
    cocokUntuk: daftar,
    landmarks: daftar.optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { layanan, faq, area, blog };


