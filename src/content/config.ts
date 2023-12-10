// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content"

// 2. Define a `type` and `schema` for each collection
const dateCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    date: z.date(),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  date: dateCollection,
}
