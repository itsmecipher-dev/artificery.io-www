import { ExternalLink, Server, Shield, Zap } from 'lucide-react'

const tools = [
  {
    name: 'Foundry VTT Cloud Installer',
    description: 'Deploy your own Foundry VTT server in minutes. A guided wizard that helps you set up a self-hosted Foundry VTT instance on cloud providers like DigitalOcean or Hetzner.',
    href: 'https://itsmecipher-dev.github.io/fvtt-installer/',
    github: 'https://github.com/itsmecipher-dev/fvtt-installer',
    logo: '/fvtt-logo.png',
    features: ['One-click deployment', 'Multiple cloud providers', 'Automated SSL setup', 'Optional S3 storage'],
  },
  {
    name: 'D&D Beyond Owned Sources Filter',
    description: 'Chrome extension that automatically filters D&D Beyond content pages to show only sources you own. Supports Monsters, Spells, Equipment, Magic Items, Feats, and Backgrounds.',
    href: 'https://chromewebstore.google.com/detail/artificeryio-dd-beyond-ow/kgkijkpgaailadjcdmacnkfbdfgfnoaj',
    buttonLabel: 'Install Extension',
    github: 'https://github.com/itsmecipher-dev/dndbeyond-filter-memory',
    logo: '/dndbeyond-filter-logo.png',
    features: ['Auto-detect owned sources', 'Filter all content pages', 'Easy popup management', 'Global toggle'],
  },
]

export function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Enhance Your TTRPG Experience
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Tools and utilities for Foundry VTT and tabletop gaming to make your sessions more memorable.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-white">Tools</h2>

        {tools.map((tool) => (
          <div
            key={tool.name}
            className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex gap-4">
                {tool.logo && (
                  <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded-lg shrink-0" />
                )}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                  <p className="text-slate-400">{tool.description}</p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
                >
                  {tool.buttonLabel || 'Open Tool'}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={tool.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tool.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-300">
                  {index === 0 && <Zap className="w-4 h-4 text-blue-400" />}
                  {index === 1 && <Server className="w-4 h-4 text-green-400" />}
                  {index === 2 && <Shield className="w-4 h-4 text-purple-400" />}
                  {index === 3 && <Server className="w-4 h-4 text-orange-400" />}
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-800/30 rounded-2xl border border-slate-700/50 p-6 md:p-8 text-center">
        <h2 className="text-xl font-semibold text-white mb-2">More Tools Coming Soon</h2>
        <p className="text-slate-400">
          Stay tuned for more Foundry VTT tools, modules, and utilities.
        </p>
      </section>
    </div>
  )
}
