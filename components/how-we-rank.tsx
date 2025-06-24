import { CheckCircle, Star, Shield, Award, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HowWeRank() {
  const criteria = [
    {
      icon: Shield,
      title: "Licensing & Security",
      description: "We only review casinos with valid licenses from reputable authorities",
      weight: "25%",
    },
    {
      icon: Star,
      title: "Game Selection",
      description: "Variety and quality of slots, table games, and live dealer options",
      weight: "20%",
    },
    {
      icon: TrendingUp,
      title: "Bonuses & Promotions",
      description: "Welcome bonuses, ongoing promotions, and fair wagering requirements",
      weight: "20%",
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "24/7 availability, response times, and support quality",
      weight: "15%",
    },
    {
      icon: CheckCircle,
      title: "Payment Methods",
      description: "Fast withdrawals, multiple payment options, and low fees",
      weight: "10%",
    },
    {
      icon: Award,
      title: "User Experience",
      description: "Website design, mobile compatibility, and overall usability",
      weight: "10%",
    },
  ]

  const topCasino = {
    name: "Royal Vegas Casino",
    logo: "/placeholder.svg?height=60&width=120&text=Royal+Vegas",
    rating: 9.8,
    bonus: "100% up to $1000 + 200 FS",
    features: ["MGA License", "Crypto Payments", "Live Casino", "24/7 Support"],
    pros: ["Excellent game variety", "Fast payouts", "Professional support", "Mobile optimized"],
    cons: ["High wagering requirements", "Limited live chat hours"],
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How We{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Rank Casinos
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Our expert team uses a comprehensive scoring system to evaluate every aspect of online casinos, ensuring you
            get the most accurate and trustworthy rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-900/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-3 md:mb-4">
                  <criterion.icon className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3">{criterion.description}</p>
                <Badge className="bg-red-600 text-white font-semibold text-xs md:text-sm">{criterion.weight}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Choice Section - Make mobile friendly */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
              Top Choice
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            After thorough testing and evaluation, this casino stands out as our #1 recommendation for Australian
            players.
          </p>
        </div>

        <Card className="bg-gray-900 border-2 border-yellow-500 shadow-lg shadow-red-500/20 bg-gradient-to-r from-gray-900 via-red-950/30 to-gray-900 max-w-4xl mx-auto">
          <CardContent className="p-4 md:p-8">
            <div className="flex flex-col items-center gap-4 md:gap-8">
              {/* Casino Logo and Info - Mobile optimized */}
              <div className="text-center w-full">
                <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg mb-3 md:mb-4 inline-block">
                  <img
                    src={topCasino.logo || "/placeholder.svg"}
                    alt={`${topCasino.name} logo`}
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{topCasino.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-yellow-500 font-bold text-base md:text-lg">{topCasino.rating}/10</span>
                </div>
                <Badge className="bg-gradient-to-r from-yellow-500 to-red-500 text-black font-semibold text-sm md:text-lg px-3 md:px-4 py-1 md:py-2">
                  {topCasino.bonus}
                </Badge>
              </div>

              {/* Pros and Cons - Stack on mobile */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <h4 className="text-green-500 font-semibold mb-3 flex items-center justify-center md:justify-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {topCasino.pros.map((pro, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm flex items-start">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-500 font-semibold mb-3 flex items-center justify-center md:justify-start">
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {topCasino.cons.map((con, index) => (
                      <li key={index} className="text-gray-300 text-xs md:text-sm flex items-start">
                        <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Features and CTA */}
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700">
              <div className="flex flex-wrap gap-1 md:gap-2 justify-center mb-4 md:mb-6">
                {topCasino.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-yellow-500/50 text-gray-300 bg-yellow-500/10 text-xs"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg w-full md:w-auto">
                  Play at Royal Vegas Casino
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
