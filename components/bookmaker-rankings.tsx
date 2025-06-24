import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Trophy, Gift } from "lucide-react"
import Image from "next/image"

export function BookmakerRankings() {
  const bookmakers = [
    {
      rank: 1,
      name: "Bet365",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 9.8,
      bonus: "€100 Free Bet",
      features: ["Live Streaming", "Cash Out", "Mobile App"],
      isTop: true,
    },
    {
      rank: 2,
      name: "Unibet",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 9.5,
      bonus: "€50 Welcome Bonus",
      features: ["Live Betting", "Best Odds", "Fast Payouts"],
    },
    {
      rank: 3,
      name: "888Sport",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 9.2,
      bonus: "€30 Free Bet",
      features: ["Boost Odds", "Live Casino", "VIP Program"],
    },
    {
      rank: 4,
      name: "William Hill",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 9.0,
      bonus: "€40 Free Bet",
      features: ["Enhanced Odds", "Live Streaming", "Mobile Betting"],
    },
    {
      rank: 5,
      name: "Betfair",
      logo: "/placeholder.svg?height=60&width=120",
      rating: 8.8,
      bonus: "€20 Free Bet",
      features: ["Exchange Betting", "Best Price", "Live Markets"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="rankings">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Топ-5 букмекерів Данії</h2>

        <div className="space-y-4">
          {bookmakers.map((bookmaker) => (
            <Card
              key={bookmaker.rank}
              className={`bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow ${
                bookmaker.isTop ? "ring-2 ring-blue-500 bg-gradient-to-r from-white to-blue-50" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  {/* Rank and Logo */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl ${
                        bookmaker.isTop ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {bookmaker.rank === 1 ? <Trophy className="h-6 w-6" /> : bookmaker.rank}
                    </div>
                    <Image
                      src={bookmaker.logo || "/placeholder.svg"}
                      alt={`${bookmaker.name} logo`}
                      width={120}
                      height={60}
                      className="bg-white rounded p-2 border"
                    />
                  </div>

                  {/* Bookmaker Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{bookmaker.name}</h3>
                      {bookmaker.isTop && <Badge className="bg-blue-600 text-white font-semibold">#1 CHOICE</Badge>}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(bookmaker.rating) ? "text-green-500 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-green-600 font-semibold">{bookmaker.rating}/10</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {bookmaker.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Bonus and CTA */}
                  <div className="flex flex-col items-center lg:items-end gap-3 min-w-fit">
                    <div className="text-center lg:text-right">
                      <div className="flex items-center gap-1 text-green-600 mb-1">
                        <Gift className="h-4 w-4" />
                        <span className="text-sm font-medium">BONUS</span>
                      </div>
                      <div className="text-gray-900 font-bold text-lg">{bookmaker.bonus}</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        className={`${
                          bookmaker.isTop
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-green-600 hover:bg-green-700 text-white"
                        } font-semibold px-6`}
                      >
                        Зробити ставку
                      </Button>
                      <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                        Огляд
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            * Умови та положення застосовуються. Ставки можуть викликати залежність. 18+
          </p>
        </div>
      </div>
    </section>
  )
}
