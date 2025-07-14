import { Crown } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Site Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity">
              <Crown className="h-8 w-8 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
                Bedste Casinoer Danmark
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Din pålidelige guide til de bedste online casinoer i Danmark. Vi anmelder og rangerer kun licenserede og sikre operatører.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#rankings" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Casino Rangeringer
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Juridisk</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  Cookie Politik
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Organization Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-white rounded-md p-2"
            >
              <img
                src="/gamble.webp"
                alt="Gamble Aware"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://ludomani.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/ludomani.png" alt="RCenter for Ludomani" className="h-10 w-auto" />
            </a>
            <a
              href="https://stopspillet.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity p-2"
            >
              <img
                src="/stopsillet.svg"
                alt="Stop Spillet"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://www.rofus.nu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/rofus.png"
                alt="Rofus"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity bg-white rounded-md p-2"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* 18+ Badge */}
          <div className="flex justify-center mb-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg border-2 border-yellow-500">
              18+
            </div>
          </div>

          <p className="text-gray-500 text-sm text-center">
            © 2025 Bedste Casinoer Danmark. Alle rettigheder forbeholdes. | Spil Ansvarligt
          </p>
        </div>
      </div>
    </footer>
  )
}
