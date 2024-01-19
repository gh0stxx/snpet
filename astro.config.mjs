import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/serverless';
import mdx from "@astrojs/mdx";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), icon()],
  //ssr settings
  output: 'hybrid',
  adapter: vercelServerless(),
  markdownOptions: {
    rehypePlugins: [
      // ...
    ],
    remarkPlugins: [
      // ...
    ]
  }
});