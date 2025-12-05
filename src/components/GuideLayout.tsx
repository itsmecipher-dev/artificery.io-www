import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag } from 'lucide-react'

interface GuideLayoutProps {
  title: string
  description?: string
  category: string
  date?: string
  children: React.ReactNode
}

const categoryLabels: Record<string, string> = {
  foundry: 'Foundry VTT',
  infrastructure: 'Infrastructure',
}

export function GuideLayout({ title, description, category, date, children }: GuideLayoutProps) {
  return (
    <div className="space-y-6">
      <Link
        to="/guides"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Guides
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-700/50 text-slate-300 rounded-full">
            <Tag className="w-3.5 h-3.5" />
            {categoryLabels[category] || category}
          </span>
          {date && (
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {description && <p className="text-xl text-slate-400">{description}</p>}
      </header>

      <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
        {children}
      </div>
    </div>
  )
}
