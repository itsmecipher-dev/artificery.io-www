import { defineCollection, z } from 'astro:content'

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
  }),
})

export const collections = {
  guides,
}
