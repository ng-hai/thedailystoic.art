import { defineCollection, reference, z } from "astro:content"

const dates = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    part: reference("parts"),
    category: reference("categories"),
  }),
})

const parts = defineCollection({ type: "data", schema: z.object({ name: z.string() }) })

const categories = defineCollection({ type: "data", schema: z.object({ name: z.string() }) })

export const collections = {
  dates,
  parts,
  categories,
}
