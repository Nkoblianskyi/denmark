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
    features: ["Instant Payouts", "Mobile App", "5% Cashback"],
    isTopChoice: true,
    url: "https://royalvegas.com",
  },
  {
    rank: 2,
    name: "Spin Palace Casino",
    logo: "/betsson.png",
    rating: 9.5,
    bonus: "75% up to $750 + 100 FS",
    features: ["Crypto Payments", "Weekly Bonuses", "Live Support"],
    url: "https://spinpalace.com",
  },
  {
    rank: 3,
    name: "Jackpot City Casino",
    logo: "/betiton.png",
    rating: 9.2,
    bonus: "50% up to $500 + 50 FS",
    features: ["Fast Withdrawals", "VIP Program", "Free Spins"],
    url: "https://jackpotcity.com",
  },
  {
    rank: 4,
    name: "888 Casino",
    logo: "/livescorebet.png",
    rating: 9.0,
    bonus: "100% up to $200 + 25 FS",
    features: ["Mobile Casino", "Exclusive Games", "Sports Betting"],
    url: "https://888casino.com",
  },
  {
    rank: 5,
    name: "LeoVegas Casino",
    logo: "/gold-casino.svg",
    rating: 8.8,
    bonus: "200% up to $300 + 30 FS",
    features: ["Low Wagering", "Reload Bonuses", "24/7 Chat"],
    url: "https://leovegas.com",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
