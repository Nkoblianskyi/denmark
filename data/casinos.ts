export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  bonusTwo: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: " Boomerang Bet",
    logo: "/boomerang-bet.svg",
    rating: 9.8,
    bonus: "700% opp til 100 000 kr + 500 FS",
    bonusTwo: '',
    features: ["Lav Omsætning", "Mobil App", "5% Cashback"],
    isTopChoice: true,
    url: "https://royalvegas.com",
  },
  {
    rank: 2,
    name: "Betibet",
    logo: "/betsson.png",
    rating: 9.5,
    bonus: "75% op til 750 kr + 100 FS",
    bonusTwo: '',
    features: ["Crypto Betaling", "Ugentlige Bonus", "Live Support"],
    url: "https://spinpalace.com",
  },
  // {
  //   rank: 3,
  //   name: "Jackpot City Casino",
  //   logo: "/betiton.png",
  //   rating: 9.2,
  //   bonus: "50% op til 500 kr + 50 FS",
  //   features: ["Hurtige Udbetalinger", "VIP Program", "Gratis Spins"],
  //   url: "https://jackpotcity.com",
  // },
  // {
  //   rank: 4,
  //   name: "888 Casino",
  //   logo: "/livescorebet.png",
  //   rating: 9.0,
  //   bonus: "100% op til 200 kr + 25 FS",
  //   features: ["Mobil Casino", "Eksklusive Spil", "Sports Betting"],
  //   url: "https://888casino.com",
  // },
  // {
  //   rank: 5,
  //   name: "LeoVegas Casino",
  //   logo: "/gold-casino.svg",
  //   rating: 8.8,
  //   bonus: "200% op til 300 kr + 30 FS",
  //   features: ["Lav Omsætning", "Reload Bonus", "24/7 Chat"],
  //   url: "https://leovegas.com",
  // },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
