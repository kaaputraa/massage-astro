import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

const layanan = defineCollection({
  loader: file("src/data/layanan.json"),
  schema: z.object({
    title: z.string(),
    price: z.number().positive(),
    duration: z.number().positive(),
    description: z.string(),
  }),
});

const faq = defineCollection({
  loader: file("src/data/faq.json"),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
  }),
});

export const collections = { layanan, faq };