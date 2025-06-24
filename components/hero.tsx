import { Advantages } from "./advantages"

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-8 md:py-12"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Best Online Casinos Australia 2025
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-8">
          Discover the best bonuses, fastest payouts and most trusted online casinos in Australia
        </p>

        <Advantages />
      </div>
    </section>
  )
}
