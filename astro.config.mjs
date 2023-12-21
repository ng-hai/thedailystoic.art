import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel/serverless"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    remarkRehype: {
      footnoteLabelTagName: "h3",
    },
  },
})
