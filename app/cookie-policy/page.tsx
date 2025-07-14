import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Politik</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Hvad Er Cookies?</h2>
                <p className="text-gray-300">
                  Cookies er små tekstfiler, der placeres på din computer eller mobile enhed, når du besøger vores
                  hjemmeside. De hjælper os med at give dig en bedre oplevelse ved at huske dine præferencer og
                  analysere, hvordan du bruger vores side.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Typer af Cookies Vi Bruger</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Nødvendige Cookies</h3>
                    <p className="text-gray-300">
                      Disse cookies er nødvendige for, at hjemmesiden fungerer korrekt. De muliggør grundlæggende
                      funktioner som sidenavigation og adgang til sikre områder af hjemmesiden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Analyse Cookies</h3>
                    <p className="text-gray-300">
                      Vi bruger analyse cookies til at forstå, hvordan besøgende interagerer med vores hjemmeside. Dette
                      hjælper os med at forbedre vores indhold og brugeroplevelse.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-500 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-300">
                      Disse cookies sporer dine browsing-vaner for at vise dig relevante annoncer og måle effektiviteten
                      af vores marketingkampagner.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Håndtering af Cookies</h2>
                <p className="text-gray-300 mb-4">Du kan kontrollere og administrere cookies på flere måder:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Brug vores cookie banner til at acceptere eller afvise cookies</li>
                  <li>• Juster dine browserindstillinger for at blokere eller slette cookies</li>
                  <li>• Brug browser-udvidelser til at administrere cookies</li>
                  <li>• Frameld dig tredjeparters reklame cookies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Tredjeparters Cookies</h2>
                <p className="text-gray-300">
                  Vi kan bruge tredjepartstjenester som Google Analytics, som kan sætte deres egne cookies. Disse
                  tjenester har deres egne privatlivspolitikker og cookie-praksis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Opdateringer til Denne Politik</h2>
                <p className="text-gray-300">
                  Vi kan opdatere denne cookie politik fra tid til anden. Eventuelle ændringer vil blive offentliggjort
                  på denne side med en opdateret revisionsdato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">Kontakt Os</h2>
                <p className="text-gray-300">
                  Hvis du har spørgsmål om vores brug af cookies, bedes du kontakte os på
                  cookies@bedstecasinoerdanmark.com
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
