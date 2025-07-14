"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { casinos } from "@/data/casinos"

export function CasinoRankings() {
  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="rankings" className="py-4 bg-black">
      <div className="container mx-auto px-4">
        <div className="space-y-3 md:space-y-4">
          {casinos.map((casino) => (
            <Card
              key={casino.rank}
              className={`bg-gray-900 border-gray-800 cursor-pointer transition-all duration-200 relative overflow-hidden ${casino.isTopChoice
                  ? "ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
                  : "hover:border-red-900/50 hover:shadow-lg hover:shadow-red-500/10"
                }`}
              onClick={() => handleCardClick(casino.url)}
            >
              <CardContent className="p-4">
                {casino.isTopChoice && (
                  <Badge className="absolute -top-1 -left-1 bg-yellow-400 text-black font-bold text-xs px-3 py-1 z-10 rounded-sm">
                    BEDST BEDØMTE CASINO
                  </Badge>
                )}
                {casino.rank === 2 && (
                  <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-bold text-xs px-3 py-1 z-10 rounded-sm">
                    SPILLERENS VALG
                  </Badge>
                )}
                {casino.rank === 3 && (
                  <Badge className="absolute -top-1 -left-1 bg-red-800 text-white font-bold text-xs px-3 py-1 z-10 rounded-sm">
                    TENDENSER
                  </Badge>
                )}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fillOpacity='0.4'%3E%3Ctext x='10' y='20' fontSize='16' fontFamily='serif'%3E♠%3C/text%3E%3Ctext x='50' y='20' fontSize='16' fontFamily='serif'%3E♥%3C/text%3E%3Ctext x='30' y='40' fontSize='16' fontFamily='serif'%3E♦%3C/text%3E%3Ctext x='70' y='40' fontSize='16' fontFamily='serif'%3E♣%3C/text%3E%3Ccircle cx='20' cy='60' r='8' fill='none' stroke='%23fbbf24' strokeWidth='2'/%3E%3Ccircle cx='60' cy='60' r='8' fill='none' stroke='%23dc2626' strokeWidth='2'/%3E%3Crect x='5' y='5' width='12' height='12' rx='2' fill='none' stroke='%23fbbf24' strokeWidth='1'/%3E%3Crect x='63' y='5' width='12' height='12' rx='2' fill='none' stroke='%23dc2626' strokeWidth='1'/%3E%3Ccircle cx='8' cy='8' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='14' cy='14' r='1' fill='%23fbbf24'/%3E%3Ccircle cx='66' cy='8' r='1' fill='%23dc2626'/%3E%3Ccircle cx='72' cy='14' r='1' fill='%23dc2626'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "80px 80px",
                      backgroundRepeat: "repeat",
                    }}
                  />
                </div>
                {/* Mobile Layout (up to md) */}
                <div className="md:hidden">
                  {/* First Row: Logo (left) + Bonus (right) */}
                  <div className="flex items-center justify-between mb-2">
                    {/* Logo */}
                    <div className="flex-shrink-0 mt-3">
                      <div className="bg-transparent rounded shadow-sm relative z-10">
                        <img
                          src={casino.logo || "/placeholder.svg"}
                          alt={`${casino.name} logo`}
                          className="h-24 w-28 object-contain"
                        />
                      </div>
                      <div className="flex items- justify-center gap-2 mt-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-sm">{casino.rating.toFixed(1)}</span>
                      </div>
                    </div>

                    {/* Bonus */}
                    <div className="text-center flex-1 ml-4 mt-2">
                      <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                        <span className="text-sm font-medium">VELKOMST BONUS</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                          {casino.bonus}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button - Center */}
                  <div className="text-center">
                    <Button
                      style={{
                        backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                        color: casino.isTopChoice ? "#000000" : "#ffffff",
                      }}
                      className={`font-semibold px-4 py-2 text-sm w-full max-w-xs relative z-10 shadow-lg hover:opacity-90 transition-opacity`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(casino.url)
                      }}
                    >
                      SPIL NU
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
                        className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"
                          } opacity-100 bg-opacity-100 relative z-10`}
                      >
                        {casino.rank}
                      </div>

                      {/* Casino Info Column */}
                      <div className="text-center flex-1">
                        {/* Logo */}
                        <div className="bg-transparent rounded p-2 shadow-sm mb-2 mx-auto w-fit relative z-10">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-16 w-auto"
                          />
                        </div>

                        {/* Rating under logo */}
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
                          <span className="text-white font-semibold text-xl">{casino.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Column: Bonus only */}
                    <div className="text-center px-0 w-44">
                      {/* Bonus */}
                      <div className="mb-3">
                        <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                          <span className="text-sm font-medium">VELKOMST BONUS</span>
                        </div>
                        <div className="text-white font-bold text-lg leading-tight">{casino.bonus}</div>
                      </div>
                    </div>

                    {/* Features Column */}
                    <div className="flex flex-col gap-2 w-44">
                      {casino.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-red-900/70 text-gray-300 bg-red-950 text-xs px-2 py-1 text-center justify-center w-full opacity-100 relative z-10 font-bold"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Right Column: Button */}
                    <div className="w-28">
                      <Button
                        style={{
                          backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                          color: casino.isTopChoice ? "#000000" : "#ffffff",
                        }}
                        className={`font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        SPIL NU
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
                        className={`flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl ${casino.isTopChoice ? "bg-yellow-400 text-black" : "bg-red-800 text-white"
                          } opacity-100 bg-opacity-100 relative z-10`}
                      >
                        {casino.rank}
                      </div>

                      {/* Casino Info Column */}
                      <div className="text-center flex-1">
                        {/* Logo */}
                        <div className="bg-transparent rounded p-3 shadow-sm mb-2 mt-3 mx-auto w-fit relative z-10">
                          <img
                            src={casino.logo || "/placeholder.svg"}
                            alt={`${casino.name} logo`}
                            className="h-24 w-auto"
                          />
                        </div>

                        {/* Rating under logo */}
                        <div className="flex items-center justify-center gap-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < Math.floor(casino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-white font-semibold text-2xl">{casino.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Center Column: Bonus only */}
                    <div className="text-center px-0 w-82">
                      {/* Bonus */}
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-2 text-red-500 mb-3">
                          <span className="text-xl font-medium">VELKOMST BONUS</span>
                        </div>
                        <div className="text-white font-bold shadow-xl text-3xl leading-tight">{casino.bonus}</div>
                      </div>
                    </div>

                    {/* Features Column */}
                    <div className="flex flex-col items-center gap-3 w-40">
                      {casino.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-red-900/70 text-gray-300 bg-red-950 text-sm px-2 py-1 text-center justify-center w-full opacity-100 relative z-10 font-bold"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Right Column: Button */}
                    <div className="w-32">
                      <Button
                        style={{
                          backgroundColor: casino.isTopChoice ? "#fbbf24" : "#16a34a",
                          color: casino.isTopChoice ? "#000000" : "#ffffff",
                        }}
                        className={`font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity`}
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(casino.url)
                        }}
                      >
                        SPIL NU
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">* Vilkår og betingelser gælder. Spil kan være vanedannende. 18+</p>
        </div>
      </div>
    </section>
  )
}
