"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTopCasino } from "@/data/casinos"

export function HowWeRank() {
  const criteria = [
    {
      title: "Licens & Sikkerhed",
      description: "Vi anmelder kun casinoer med gyldige licenser fra anerkendte myndigheder",
      weight: "25%",
    },
    {
      title: "Spil Udvalg",
      description: "Variation og kvalitet af slots, bordspil og live dealer muligheder",
      weight: "20%",
    },
    {
      title: "Bonusser & Kampagner",
      description: "Velkomstbonusser, løbende kampagner og fair omsætningskrav",
      weight: "20%",
    },
    {
      title: "Kundesupport",
      description: "24/7 tilgængelighed, svartider og supportkvalitet",
      weight: "15%",
    },
    {
      title: "Betalingsmetoder",
      description: "Hurtige udbetalinger, flere betalingsmuligheder og lave gebyrer",
      weight: "10%",
    },
    {
      title: "Brugeroplevelse",
      description: "Hjemmeside design, mobil kompatibilitet og overordnet brugervenlighed",
      weight: "10%",
    },
  ]

  const topCasino = getTopCasino()
  const topCasinoExtended = {
    ...topCasino,
    features: ["MGA Licens", "Crypto Betalinger", "Live Casino", "24/7 Support"],
    pros: ["Fremragende spil variation", "Hurtige udbetalinger", "Professionel support", "Mobil optimeret"],
    cons: ["Høje omsætningskrav", "Begrænsede live chat timer"],
  }

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Sådan <span className="text-yellow-400">Rangerer Vi Casinoer</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Vores ekspertteam bruger et omfattende scoringssystem til at evaluere alle aspekter af online casinoer,
            hvilket sikrer, at du får de mest nøjagtige og pålidelige rangeringer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-900/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3">{criterion.description}</p>
                <Badge className="bg-red-600 text-white font-semibold text-xs md:text-sm">{criterion.weight}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Choice Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Vores <span className="text-yellow-400">Topvalg</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Efter grundig test og evaluering skiller dette casino sig ud som vores #1 anbefaling til danske spillere.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          <Card
            className="bg-gray-900 border-gray-800 cursor-pointer transition-all duration-200 relative overflow-hidden ring-2 ring-yellow-400 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 hover:ring-yellow-300"
            onClick={() => handleCardClick(topCasino.url)}
          >
            <CardContent className="p-4">
              <Badge className="absolute -top-1 -left-1 bg-yellow-400 text-black font-black text-xs px-3 py-1 z-10 rounded-sm">
                VORES FAVORIT
              </Badge>

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
                        src={topCasino.logo || "/placeholder.svg"}
                        alt={`${topCasino.name} logo`}
                        className="h-16 w-24 object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                          />
                        ))}
                      </div>
                      <span className="text-white font-semibold text-sm">{topCasino.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Bonus */}
                  <div className="text-center flex-1 ml-4">
                    <div className="flex items-center justify-center gap-1 text-red-500 mb-2">
                      <span className="text-sm font-medium">VELKOMST BONUS</span>
                    </div>
                    <div className="text-white font-bold text-xl leading-tight bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent p-2 rounded">
                      {topCasino.bonus}
                    </div>
                  </div>
                </div>

                {/* Button - Center */}
                <div className="text-center">
                  <Button
                    style={{
                      backgroundColor: "#fbbf24",
                      color: "#000000",
                    }}
                    className="font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(topCasino.url)
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
                    <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg bg-yellow-400 text-black opacity-100 bg-opacity-100 relative z-10">
                      1
                    </div>

                    {/* Casino Info Column */}
                    <div className="text-center flex-1">
                      {/* Logo */}
                      <div className="bg-transparent rounded p-2 shadow-sm mb-2 mx-auto w-fit relative z-10">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-16 w-auto"
                        />
                      </div>

                      {/* Rating under logo */}
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-xl">{topCasino.rating.toFixed(1)}</span>
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
                      <div className="text-white font-bold text-lg leading-tight">{topCasino.bonus}</div>
                    </div>
                  </div>

                  {/* Features Column */}
                  <div className="flex flex-col gap-2 w-40">
                    {topCasinoExtended.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-red-900/70 text-gray-300 bg-red-950 text-xs px-2 py-1 text-center justify-center whitespace-nowrap w-32 opacity-100 relative z-10 font-bold"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Right Column: Button */}
                  <div className="w-28">
                    <Button
                      style={{
                        backgroundColor: "#fbbf24",
                        color: "#000000",
                      }}
                      className="font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
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
                    <div className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl bg-yellow-400 text-black opacity-100 bg-opacity-100 relative z-10">
                      1
                    </div>

                    {/* Casino Info Column */}
                    <div className="text-center flex-1">
                      {/* Logo */}
                      <div className="bg-transparent rounded p-3 shadow-sm mb-2 mt-3 mx-auto w-fit relative z-10">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-24 w-auto"
                        />
                      </div>

                      {/* Rating under logo */}
                      <div className="flex items-center justify-center gap-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(topCasino.rating) ? "text-yellow-500 fill-current" : "text-gray-600"}`}
                            />
                          ))}
                        </div>
                        <span className="text-white font-semibold text-2xl">{topCasino.rating.toFixed(1)}</span>
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
                      <div className="text-white font-bold shadow-xl text-3xl leading-tight">{topCasino.bonus}</div>
                    </div>
                  </div>

                  {/* Features Column */}
                  <div className="flex flex-col items-center gap-3 w-32">
                    {topCasinoExtended.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-red-900/70 text-gray-300 bg-red-950 text-sm px-3 py-2 text-center justify-center whitespace-nowrap w-36 opacity-100 relative z-10 font-bold"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Right Column: Button */}
                  <div className="w-32">
                    <Button
                      style={{
                        backgroundColor: "#fbbf24",
                        color: "#000000",
                      }}
                      className="font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
                      }}
                    >
                      SPIL NU
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
