import { Gift, TrendingUp, Users } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Ексклюзивні бонуси",
      description: "Отримайте найкращі вітальні пропозиції та фрібети",
    },
    {
      icon: TrendingUp,
      title: "Високі коефіцієнти",
      description: "Найкращі коефіцієнти на популярні спортивні події",
    },
    {
      icon: Users,
      title: "Перевірені букмекери",
      description: "Тільки ліцензовані та надійні оператори з відмінною репутацією",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
