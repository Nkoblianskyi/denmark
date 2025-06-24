import { Gift, CreditCard, Headphones, Shield } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      description: "Get the best welcome bonuses and promotional offers",
      color: "text-yellow-500",
      bg: "bg-yellow-500/20 border-yellow-500/30",
    },
    {
      icon: CreditCard,
      title: "Fast Payouts",
      description: "Instant withdrawals to all popular payment methods",
      color: "text-red-500",
      bg: "bg-red-500/20 border-red-500/30",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Professional customer support available around the clock",
      color: "text-yellow-500",
      bg: "bg-yellow-500/20 border-yellow-500/30",
    },
    {
      icon: Shield,
      title: "Licensed & Safe",
      description: "Fully licensed and regulated for Australian players",
      color: "text-blue-500",
      bg: "bg-blue-500/20 border-blue-500/30",
    },
  ]

  return (
    <section className="py-5 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 ${advantage.bg} rounded-full mb-2 md:mb-4 border`}
              >
                {advantage.title === "Licensed & Safe" ? (
                  <div className="w-6 h-4 md:w-8 md:h-5 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-800">AU</span>
                  </div>
                ) : (
                  <advantage.icon className={`h-4 w-4 md:h-5 md:w-5 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white mb-1 md:mb-2">{advantage.title}</h3>
              <p className="text-xs text-gray-400">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
