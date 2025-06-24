import { Star, Shield, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-red-950 to-black py-3 md:py-6" style={{ maxHeight: "200px" }}>
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-1 md:mb-2">
          <div className="w-8 h-5 md:w-10 md:h-6 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded shadow-lg flex items-center justify-center mr-2 md:mr-3">
            <span className="text-xs font-bold text-blue-800">AU</span>
          </div>
          <div className="flex space-x-1 md:space-x-2">
            <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
            <Shield className="h-3 w-3 md:h-4 md:w-4 text-red-500" />
            <Zap className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
          </div>
        </div>

        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
          Best Online Casinos
          <span className="block bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Australia 2025
          </span>
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
          Discover the best bonuses, fastest payouts and most trusted online casinos in Australia
        </p>
      </div>
    </section>
  )
}
