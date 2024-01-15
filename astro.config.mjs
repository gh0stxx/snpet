import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/serverless';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  //ssr settings
  output: 'hybrid',
  adapter: vercelServerless(),
});