export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Royal Vegas Casino",
    logo: "/billybets.webp",
    rating: 9.8,
    bonus: "100% up to $1000 + 200 FS",
    features: ["MGA License", "Crypto Payments", "Live Casino"],
    isTopChoice: true,
    url: "https://royalvegas.com",
  },
  {
    rank: 2,
    name: "Spin Palace Casino",
    logo: "/betsson.png",
    rating: 9.5,
    bonus: "75% up to $750 + 100 FS",
    features: ["Curacao License", "Mobile App", "Jackpots"],
    url: "https://spinpalace.com",
  },
  {
    rank: 3,
    name: "Jackpot City Casino",
    logo: "/betiton.png",
    rating: 9.2,
    bonus: "50% up to $500 + 50 FS",
    features: ["MGA License", "Progressive Jackpots", "Live Dealers"],
    url: "https://jackpotcity.com",
  },
  {
    rank: 4,
    name: "888 Casino",
    logo: "/livescorebet.png",
    rating: 9.0,
    bonus: "100% up to $200 + 25 FS",
    features: ["UK License", "Exclusive Games", "Sports Betting"],
    url: "https://888casino.com",
  },
  {
    rank: 5,
    name: "LeoVegas Casino",
    logo: "/placeholder.svg?height=50&width=100&text=LeoVegas",
    rating: 8.8,
    bonus: "200% up to $300 + 30 FS",
    features: ["Mobile Casino", "Live Games", "Fast Payouts"],
    url: "https://leovegas.com",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
