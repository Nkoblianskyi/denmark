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
    name: " Boomerang Bet",
    logo: "/boomerang-bet.svg",
    rating: 9.8,
    bonus: "700% opp til 116 000 kr. + 725 FS",
    features: ["Lav Omsætning", "Mobil App", "5% Cashback"],
    isTopChoice: true,
    url: "https://royalvegas.com",
  },
  {
    rank: 2,
    name: "Betibet",
    logo: "/betsson.png",
    rating: 9.5,
    bonus: "700% opp til 75 000 kr. + 725 FS",
    features: ["Crypto Betaling", "Ugentlige Bonus", "Live Support"],
    url: "https://spinpalace.com",
  },
  {
    rank: 3,
    name: "Lucky Ones",
    logo: "/betiton.png",
    rating: 9.2,
    bonus: "150% opp til 30 000 kr. + 200 FS",
    features: ["Eksklusive Spil", "VIP Program", "Gratis Spins"],
    url: "https://jackpotcity.com",
  },
  {
    rank: 4,
    name: "Rolling slots",
    logo: "/livescorebet.png",
    rating: 9.0,
    bonus: "260% opp til 19 500 kr. + 260 FS",
    features: ["Mobil Casino", "Eksklusive Spil", "Sports Betting"],
    url: "https://888casino.com",
  },
  {
    rank: 5,
    name: "Vegas Now",
    logo: "/gold-casino.svg",
    rating: 8.8,
    bonus: "150% opp til 15 000 kr. + 200 FS",
    features: ["Lav Omsætning", "Reload Bonus", "24/7 Chat"],
    url: "https://leovegas.com",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
