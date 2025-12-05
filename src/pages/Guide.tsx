import { useParams, Navigate } from 'react-router-dom'
import { GuideLayout } from '../components/GuideLayout'
import { mdxComponents } from '../components/mdx'

const guides = import.meta.glob('/content/guides/**/*.mdx', { eager: true }) as Record<
  string,
  {
    default: React.ComponentType<{ components?: Record<string, unknown> }>
    frontmatter: { title: string; description: string; category: string; date: string }
  }
>

export function Guide() {
  const { category, slug } = useParams<{ category: string; slug: string }>()
  const path = `/content/guides/${category}/${slug}.mdx`
  const guide = guides[path]

  if (!guide) {
    return <Navigate to="/guides" replace />
  }

  const { default: Content, frontmatter } = guide

  return (
    <GuideLayout
      title={frontmatter.title}
      description={frontmatter.description}
      category={frontmatter.category}
      date={frontmatter.date}
    >
      <Content components={mdxComponents} />
    </GuideLayout>
  )
}
