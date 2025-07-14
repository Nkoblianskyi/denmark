"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-yellow-500/30 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-white font-semibold mb-1">Vi bruger cookies</h4>
              <p className="text-gray-300 text-sm">
                Vi bruger cookies til at forbedre din browseroplevelse og analysere vores trafik. Ved at klikke
                "Accepter Alle" giver du samtykke til vores brug af cookies.
                <Link href="/cookie-policy" className="text-yellow-500 hover:underline ml-1">
                  Læs mere
                </Link>
              </p>
            </div>
          </div>

          <div className="flex space-x-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="border-gray-600 hover:bg-gray-800 text-slate-500 bg-transparent"
            >
              Afvis
            </Button>
            <Button size="sm" onClick={acceptCookies} className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Accepter Alle
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
