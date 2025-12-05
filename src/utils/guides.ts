export interface GuideMeta {
  title: string
  description: string
  category: string
  date: string
  slug: string
}

export interface Guide extends GuideMeta {
  Component: React.ComponentType
}

export const categoryLabels: Record<string, string> = {
  foundry: 'Foundry VTT',
  infrastructure: 'Infrastructure',
}

export const categoryDescriptions: Record<string, string> = {
  foundry: 'Guides for setting up and managing Foundry VTT',
  infrastructure: 'Server, DNS, and cloud infrastructure tutorials',
}
