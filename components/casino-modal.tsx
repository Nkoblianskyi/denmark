"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Star, Gift, ExternalLink } from "lucide-react"
import { getTopCasino } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000) // Show modal after 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <Card
        className="bg-gray-900 border-yellow-500 max-w-md w-full relative cursor-pointer hover:border-yellow-400 transition-colors"
        onClick={handleModalClick}
      >
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(false)
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">#1 Casino in Australia!</h2>
            <p className="text-gray-300 text-sm">Don't miss out on the best casino experience</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="text-center mb-4">
              <img
                src={topCasino.logo || "/placeholder.svg"}
                alt={`${topCasino.name} logo`}
                className="h-20 w-auto mx-auto bg-white rounded p-3 shadow-lg"
              />
            </div>

            <div className="text-center mb-3">
              <h3 className="text-xl font-bold text-white mb-2">{topCasino.name}</h3>
              <div className="flex items-center justify-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-yellow-500 font-semibold">{topCasino.rating}/10</span>
              </div>
            </div>

            <div className="text-center mb-3">
              <Badge className="bg-yellow-400 text-black font-semibold">
                <Gift className="h-3 w-3 mr-1" />
                {topCasino.bonus}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {topCasino.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="border-gray-600 text-gray-300 bg-gray-700/50 text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              onClick={(e) => {
                e.stopPropagation()
                handleModalClick()
              }}
            >
              Claim Bonus Now
              <ExternalLink className="h-4 w-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="w-full border-gray-600 hover:bg-gray-800 text-gray-950"
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(false)
              }}
            >
              View All Casinos
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">* Terms and conditions apply. 18+ only.</p>
        </CardContent>
      </Card>
    </div>
  )
}
