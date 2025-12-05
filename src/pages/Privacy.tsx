export function Privacy() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">Privacy Policy</h1>
        <div className="bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 p-6 md:p-8">
          <div className="prose prose-invert max-w-none space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">1. Overview</h2>
              <p className="text-slate-300">
                This privacy policy explains how we handle your personal data when you visit our website. We take your privacy seriously and are committed to protecting your personal information.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">2. Data Collection</h2>
              <p className="text-slate-300 mb-2">
                This website is a static site that does not actively collect personal data. We do not use:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Cookies for tracking purposes</li>
                <li>Analytics services</li>
                <li>User registration or login systems</li>
                <li>Contact forms that store data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">3. Hosting</h2>
              <p className="text-slate-300">
                This website may be hosted on platforms like GitHub Pages, Vercel, or similar services. These hosting providers may collect basic access logs (IP addresses, browser type, access times) for security and operational purposes. Please refer to the respective hosting provider's privacy policy for details.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">4. External Links</h2>
              <p className="text-slate-300">
                Our website contains links to external websites (such as GitHub). We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">5. Third-Party Tools</h2>
              <p className="text-slate-300">
                Our tools (like the Foundry VTT Installer) are designed to process data locally in your browser. API keys and credentials you enter are not sent to our servers - they are used directly from your browser to communicate with third-party services (like DigitalOcean or Cloudflare) as needed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">6. Your Rights</h2>
              <p className="text-slate-300 mb-2">
                Under GDPR and other applicable data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                <li>Access your personal data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
              <p className="text-slate-300 mt-2">
                Since we do not collect personal data, these rights are primarily applicable to our hosting providers.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">7. Contact</h2>
              <p className="text-slate-300">
                If you have any questions about this privacy policy, please contact us at: artificery.io@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">8. Changes to This Policy</h2>
              <p className="text-slate-300">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
              <p className="text-slate-400 text-sm mt-2">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
