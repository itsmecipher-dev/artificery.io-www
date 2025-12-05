export function LegalNotice() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">Legal Notice</h1>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
              <p className="text-slate-300">
                Email: artificery.io@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Disclaimer</h2>

              <h3 className="text-lg font-medium text-white mt-4 mb-2">Liability for Contents</h3>
              <p className="text-slate-400 text-sm">
                We make every effort to keep the information on this website accurate and up-to-date. However, we cannot guarantee the completeness, accuracy, or timeliness of the content provided.
              </p>

              <h3 className="text-lg font-medium text-white mt-4 mb-2">Liability for Links</h3>
              <p className="text-slate-400 text-sm">
                This website contains links to external websites of third parties, over whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their contents.
              </p>

              <h3 className="text-lg font-medium text-white mt-4 mb-2">Copyright</h3>
              <p className="text-slate-400 text-sm">
                The content and works created by the site operators on these pages are subject to copyright law. Duplication, processing, distribution, or any form of commercialization beyond the scope of copyright law requires written consent from the author or creator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
