import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">What Are Cookies?</h2>
                <p className="text-gray-300">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our
                  website. They help us provide you with a better experience by remembering your preferences and
                  analyzing how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Types of Cookies We Use</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation and access to secure areas of the website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      We use analytics cookies to understand how visitors interact with our website. This helps us
                      improve our content and user experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-300">
                      These cookies track your browsing habits to show you relevant advertisements and measure the
                      effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Managing Cookies</h2>
                <p className="text-gray-300 mb-4">You can control and manage cookies in several ways:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Use our cookie banner to accept or reject cookies</li>
                  <li>• Adjust your browser settings to block or delete cookies</li>
                  <li>• Use browser extensions to manage cookies</li>
                  <li>• Opt-out of third-party advertising cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300">
                  We may use third-party services like Google Analytics, which may set their own cookies. These services
                  have their own privacy policies and cookie practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Updates to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at
                  cookies@bestcasinosaustralia.com
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
