import { Code, Dice6, Heart } from 'lucide-react'
import { BrandName } from '../components/BrandName'

export function About() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">About <BrandName /></h1>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              <BrandName /> is dedicated to building tools for tabletop roleplaying games. Our goal is to enhance your sessions and make them more memorable for both game masters and players.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              From simplifying server deployment to creating modules that add new functionality, we focus on practical solutions that help you spend less time on technical setup and more time on what matters: great storytelling and epic adventures.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-6">
          <Dice6 className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">TTRPG Focused</h3>
          <p className="text-slate-400 text-sm">
            Tools built for Foundry VTT, D&D Beyond, and the broader tabletop gaming ecosystem.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-6">
          <Code className="w-8 h-8 text-purple-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Quality Crafted</h3>
          <p className="text-slate-400 text-sm">
            Each tool is carefully designed and tested to integrate seamlessly with your Foundry setup.
          </p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-6">
          <Heart className="w-8 h-8 text-red-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Community Driven</h3>
          <p className="text-slate-400 text-sm">
            Built for GMs and players. Your feedback shapes these tools.
          </p>
        </div>
      </section>
    </div>
  )
}
