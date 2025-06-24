"use client"

import { Star, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "@/data/casinos"

export function CasinoRankings() {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="rankings" className="py-2 bg-black">
      <div className="container mx-auto px-4">
        <div className="space-y-3 md:space-y-4">
          {casinos.map((casino) => (
            <Card
              key={casino.rank}
              className={`bg-gray-900 border-gray-800 cursor-pointer transition-all duration-200 ${casino.isTopChoice
                  ? "ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
                  : "hover:border-red-900/50 hover:shadow-lg hover:shadow-red-500/10"
                }`}
              onClick={() => handleCardClick(casino.url)}
            >
              <CardContent className="p-4">
                {/* Mobile Layout (up to md) */}
                <div className="md:hidden">
                  {/* Rank Number - Top Center */}

                  {/* First Row: Logo (left) + Bonus (right) */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      {casino.isTopChoice && (
                        <Badge className="bg-yellow-400 text-black font-semibold text-xs px-1 py-0.5 mb-1">
                          #1 CHOICE
                        </Badge>
                      )}
                      <div className="bg-white rounded p-3 shadow-sm">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-16 w-24 object-contain"
                        />
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="text-center flex-1 ml-4">
                      <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                        <Gift className="h-4 w-4" />
                        <span className="text-sm font-medium">BONUS</span>
                      </div>
                      <div className="text-white font-bold text-lg leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded border border-yellow-400/30">
                        {casino.bonus}
                      </div>
                    </div>
                  </div>

                  {/* Rating - Center */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                            }`}
                        />
                      ))}
                    </div>
                    <span className="text-yellow-500 font-semibold text-sm">{casino.rating}</span>
                  </div>

                  {/* Button - Center */}
                  <div className="text-center">
                    <Button
                      className={`${casino.isTopChoice
                          ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg"
                          : "bg-red-600 hover:bg-red-700 text-white"
                        } font-semibold px-6 py-2 text-sm w-full max-w-xs`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(casino.url)
                      }}
                    >
                      Claim Bonus
                    </Button>
                  </div>
                </div>

                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:block lg:hidden">
                  <div className="flex items-center justify-between gap-0">
                    {/* Left Column: Rank + Casino Info */}
                    <div className="flex items-center gap-4 w-48">
                      {/* Rank */}
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${casino.isTopChoice
                            ? "bg-yellow-400 text-black shadow-lg"
                            : "bg-gray-800 text-white border border-red-900/50"
                          }`}
                      >
                        {casino.rank}
                      </div>

                      {/* Casino Info Column */}
                      <div className="text-center flex-1">
                        {/* Casino Name */}
                        <h3 className="text-sm font-bold text-white mb-2 leading-tight">{casino.name}</h3>

                        {/* Logo */}
                        <div className="bg-white rounded p-2 shadow-sm mb-2 mx-auto w-fit">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-16 w-auto"
                          />
                        </div>

                        {/* Badge under logo */}
                        {casino.isTopChoice && (
                          <Badge className="bg-yellow-400 text-black font-semibold text-xs px-2 py-1">#1 CHOICE</Badge>
                        )}
                      </div>
                    </div>

                    {/* Center Column: Bonus + Rating */}
                    <div className="text-center px-0 w-44">
                      {/* Bonus */}
                      <div className="mb-3">
                        <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                          <Gift className="h-4 w-4" />
                          <span className="text-sm font-medium">BONUS</span>
                        </div>
                        <div className="text-white font-bold text-lg leading-tight">{casino.bonus}</div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-yellow-500 font-semibold text-sm">{casino.rating}</span>
                      </div>
                    </div>

                    {/* Features Column */}
                    <div className="flex flex-col gap-2 w-40">
                      {casino.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-red-900/50 text-gray-300 bg-red-950/20 text-xs px-2 py-1 text-center whitespace-nowrap"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Right Column: Button */}
                    <div className="w-24">
                      <Button
                        className={`${casino.isTopChoice
                            ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg"
                            : "bg-red-600 hover:bg-red-700 text-white"
                          } font-semibold px-3 py-3 text-sm w-full h-auto`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout (lg and up) */}
                <div className="hidden lg:flex">
                  <div className="flex items-center justify-between gap-0 w-full">
                    {/* Left Column: Rank + Casino Info */}
                    <div className="flex items-center gap-6 w-72">
                      {/* Rank */}
                      <div
                        className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl ${casino.isTopChoice
                            ? "bg-yellow-400 text-black shadow-lg"
                            : "bg-gray-800 text-white border border-red-900/50"
                          }`}
                      >
                        {casino.rank}
                      </div>

                      {/* Casino Info Column */}
                      <div className="text-center flex-1">
                        {/* Casino Name */}
                        <h3 className="text-lg font-bold text-white mb-3 leading-tight">{casino.name}</h3>

                        {/* Logo */}
                        <div className="bg-white rounded p-3 shadow-sm mb-3 mx-auto w-fit">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-24 w-auto"
                          />
                        </div>

                        {/* Badge under logo */}
                        {casino.isTopChoice && (
                          <Badge className="bg-yellow-400 text-black font-semibold text-xs px-2 py-1">#1 CHOICE</Badge>
                        )}
                      </div>
                    </div>

                    {/* Center Column: Bonus + Rating */}
                    <div className="text-center px-0 w-64">
                      {/* Bonus */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                          <Gift className="h-5 w-5" />
                          <span className="text-base font-medium">BONUS</span>
                        </div>
                        <div className="text-white font-bold text-xl leading-tight">{casino.bonus}</div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-yellow-500 font-semibold text-base">{casino.rating}</span>
                      </div>
                    </div>

                    {/* Features Column */}
                    <div className="flex flex-col gap-3 w-48">
                      {casino.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-red-900/50 text-gray-300 bg-red-950/20 text-sm px-3 py-2 text-center whitespace-nowrap"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Right Column: Button */}
                    <div className="w-32">
                      <Button
                        className={`${casino.isTopChoice
                            ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg"
                            : "bg-red-600 hover:bg-red-700 text-white"
                          } font-semibold px-4 py-4 text-lg w-full h-auto`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        Claim
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">* Terms and conditions apply. Gambling can be addictive. 18+</p>
        </div>
      </div>
    </section>
  )
}
