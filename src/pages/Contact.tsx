import { Github, Mail } from 'lucide-react'

export function Contact() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">Contact</h1>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
          <p className="text-slate-300 text-lg mb-8">
            Have questions, suggestions, or just want to say hi? Feel free to reach out through any of the channels below.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/itsmecipher-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors group"
            >
              <div className="p-3 bg-slate-600 rounded-lg group-hover:bg-slate-500 transition-colors">
                <Github className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-slate-400 text-sm">@itsmecipher-dev</p>
              </div>
            </a>

            <a
              href="mailto:artificery.io@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-700/50 hover:bg-slate-700 rounded-xl transition-colors group"
            >
              <div className="p-3 bg-slate-600 rounded-lg group-hover:bg-slate-500 transition-colors">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <p className="text-slate-400 text-sm">artificery.io@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Report Issues</h2>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
          <p className="text-slate-300 mb-4">
            Found a bug or have a feature request? Please open an issue on the relevant GitHub repository:
          </p>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a
                href="https://github.com/itsmecipher-dev/fvtt-installer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Foundry VTT Installer Issues →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
