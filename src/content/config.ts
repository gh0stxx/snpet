import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      author: z.string(),
      image: image(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  blog: blogCollection,
};
