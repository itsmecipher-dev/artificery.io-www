import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react'

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error'
  children: React.ReactNode
}

const styles = {
  info: {
    bg: 'bg-blue-900/30 border-blue-700',
    icon: Info,
    iconColor: 'text-blue-400',
  },
  warning: {
    bg: 'bg-yellow-900/30 border-yellow-700',
    icon: AlertTriangle,
    iconColor: 'text-yellow-400',
  },
  success: {
    bg: 'bg-green-900/30 border-green-700',
    icon: CheckCircle,
    iconColor: 'text-green-400',
  },
  error: {
    bg: 'bg-red-900/30 border-red-700',
    icon: XCircle,
    iconColor: 'text-red-400',
  },
}

export function Callout({ type = 'info', children }: CalloutProps) {
  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={`flex gap-3 p-4 rounded-lg border ${style.bg} my-4`}>
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${style.iconColor}`} />
      <div className="text-slate-300 text-sm">{children}</div>
    </div>
  )
}
