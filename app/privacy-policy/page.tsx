import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you create an account, subscribe to
                  our newsletter, or contact us for support.
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Personal information (name, email address)</li>
                  <li>• Usage data and analytics</li>
                  <li>• Device and browser information</li>
                  <li>• Cookies and tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Provide and improve our services</li>
                  <li>• Send you updates and promotional materials</li>
                  <li>• Analyze usage patterns and trends</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">3. Information Sharing</h2>
                <p className="text-gray-300">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">4. Data Security</h2>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">5. Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your personal information</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">6. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at
                  privacy@bestcasinosaustralia.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
