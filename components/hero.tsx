import { Advantages } from "./advantages"

export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-4 md:py-12 max-h-[200px] md:max-h-none overflow-hidden"
      style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200&text=Casino+Background')" }}
    >
      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center h-full flex flex-col justify-center">
        <div className="flex items-center justify-center mb-2 md:mb-6">
          <h1 className="text-lg md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Best Online Casinos Australia 2025
          </h1>
        </div>

        <p className="text-sm md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-3 md:mb-8 leading-tight">
          Discover the best bonuses, fastest payouts and most trusted online casinos in Australia
        </p>

        <div className="block md:hidden">
          <Advantages />
        </div>

        <div className="hidden md:block">
          <Advantages />
        </div>
      </div>
    </section>
  )
}
