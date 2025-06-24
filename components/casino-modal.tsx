"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star } from "lucide-react"
import { getTopCasino } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // Show modal after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="relative">
        {/* Ribbon banner above card */}
        <div className="absolute  -left-8 -right-8 z-10">
          <div
            className="relative text-black text-center py-4 px-8 font-bold text-sm shadow-lg bg-cover bg-center bg-no-repeat h-16 flex items-center justify-center w-full"
            style={{
              backgroundImage: "url('/line.png')"
            }}
          >
            EDITOR'S CHOICE THIS WEEK
          </div>
        </div>

        <Card className="bg-gray-900 border-2 border-red-600 max-w-sm w-full relative overflow-hidden mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-3 right-[0px] text-gray-400 hover:text-white z-20"
          >
            <X className="h-4 w-4" />
          </button>

          <CardContent className="p-6 text-center bg-gray-900">
            {/* Logo */}
            <div className="mb-6 mt-4">
              <div className="bg-white rounded-lg p-4 shadow-lg mx-auto w-fit">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-16 w-auto mx-auto"
                />
              </div>
            </div>

            {/* Bonus */}
            <div className="mb-6">
              <p className="text-gray-300 text-base mb-2">WELCOME BONUS</p>
              <div className="text-2xl font-bold text-yellow-400 mb-1">{topCasino.bonus}</div>
            </div>

            {/* Rating */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-xl font-bold text-white">
                {topCasino.rating}
                <span className="text-gray-400 text-base">/10</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full bg-yellow-500 hover:bg-green-600 text-white font-bold py-3 text-base"
              onClick={(e) => {
                e.stopPropagation()
                handleModalClick()
              }}
            >
              GET BONUS
            </Button>

            <p className="text-xs text-gray-500 text-center mt-3">* Terms and conditions apply. 18+ only.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
