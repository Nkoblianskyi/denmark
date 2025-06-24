import { Gift, CreditCard, Headphones, Shield } from "lucide-react"

export function Advantages() {
  const advantages = [
    {
      icon: Gift,
      title: "Exclusive Bonuses",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: CreditCard,
      title: "Fast Payouts",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      color: "text-yellow-400",
      bg: "bg-yellow-400/20 border-yellow-400/30",
    },
    {
      icon: Shield,
      title: "Licensed & Safe",
      color: "text-blue-500",
      bg: "/flag.png",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-3 max-w-2xl">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-8 h-8 ${advantage.bg} rounded-full mb-2 border`}
              >
                {advantage.title === "Licensed & Safe" ? (
                  <div className="w-6 h-4 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-800">AU</span>
                  </div>
                ) : (
                  <advantage.icon className={`h-4 w-4 ${advantage.color}`} />
                )}
              </div>
              <h3 className="text-xs font-semibold text-white">{advantage.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
