import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privatlivspolitik</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">1. Information Vi Indsamler</h2>
                <p className="text-gray-300 mb-4">
                  Vi indsamler information, som du giver os direkte, såsom når du opretter en konto, abonnerer på vores
                  nyhedsbrev eller kontakter os for support.
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Personlige oplysninger (navn, e-mailadresse)</li>
                  <li>• Brugsdata og analyser</li>
                  <li>• Enhed og browser information</li>
                  <li>• Cookies og sporingsteknologier</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">2. Hvordan Vi Bruger Dine Oplysninger</h2>
                <p className="text-gray-300 mb-4">Vi bruger de indsamlede oplysninger til at:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Levere og forbedre vores tjenester</li>
                  <li>• Sende dig opdateringer og markedsføringsmateriale</li>
                  <li>• Analysere brugsmønstre og tendenser</li>
                  <li>• Sikre sikkerhed og forhindre svindel</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">3. Deling af Information</h2>
                <p className="text-gray-300">
                  Vi sælger, handler eller overfører på anden måde ikke dine personlige oplysninger til tredjeparter
                  uden dit samtykke, undtagen som beskrevet i denne politik.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">4. Datasikkerhed</h2>
                <p className="text-gray-300">
                  Vi implementerer passende sikkerhedsforanstaltninger for at beskytte dine personlige oplysninger mod
                  uautoriseret adgang, ændring, offentliggørelse eller ødelæggelse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">5. Dine Rettigheder</h2>
                <p className="text-gray-300 mb-4">Du har ret til at:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Få adgang til dine personlige oplysninger</li>
                  <li>• Rette unøjagtige oplysninger</li>
                  <li>• Slette dine personlige oplysninger</li>
                  <li>• Framelde dig markedsføringskommunikation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">6. Kontakt Os</h2>
                <p className="text-gray-300">
                  Hvis du har spørgsmål om denne privatlivspolitik, bedes du kontakte os på
                  privacy@bedstecasinoerdanmark.com
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
