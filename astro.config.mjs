import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "hybrid",
  adapter: vercel(),
  markdown: {
    remarkRehype: { footnoteLabelTagName: "h3" },
  },
})
