import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { categoryLabels, categoryDescriptions } from '../utils/guides'

const guides = import.meta.glob('/content/guides/**/*.mdx', { eager: true }) as Record<
  string,
  { frontmatter: { title: string; description: string; category: string; date: string } }
>

interface GuideEntry {
  slug: string
  category: string
  title: string
  description: string
  date: string
}

function getGuides(): GuideEntry[] {
  return Object.entries(guides).map(([path, module]) => {
    const parts = path.replace('/content/guides/', '').replace('.mdx', '').split('/')
    const category = parts[0]
    const slug = parts[1]
    const { title, description, date } = module.frontmatter
    return {
      slug,
      category,
      title,
      description,
      date,
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function groupByCategory(guides: GuideEntry[]): Record<string, GuideEntry[]> {
  return guides.reduce((acc, guide) => {
    if (!acc[guide.category]) {
      acc[guide.category] = []
    }
    acc[guide.category].push(guide)
    return acc
  }, {} as Record<string, GuideEntry[]>)
}

export function Guides() {
  const allGuides = getGuides()
  const grouped = groupByCategory(allGuides)

  return (
    <div className="space-y-12">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">Guides & Tutorials</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Step-by-step tutorials and documentation for TTRPG tools and infrastructure.
        </p>
      </section>

      {allGuides.length === 0 ? (
        <div className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-8 text-center">
          <p className="text-slate-400">No guides available yet. Check back soon!</p>
        </div>
      ) : (
        Object.entries(grouped).map(([category, guides]) => (
          <section key={category} className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-white">
                {categoryLabels[category] || category}
              </h2>
              {categoryDescriptions[category] && (
                <p className="text-slate-400 mt-1">{categoryDescriptions[category]}</p>
              )}
            </div>

            <div className="grid gap-4">
              {guides.map((guide) => (
                <Link
                  key={`${guide.category}/${guide.slug}`}
                  to={`/guides/${guide.category}/${guide.slug}`}
                  className="group bg-slate-800/50 hover:bg-slate-800 backdrop-blur rounded-xl border border-slate-700 p-5 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{guide.description}</p>
                      <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(guide.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  )
}
