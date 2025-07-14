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
    logo: "/betibet.svg",
    rating: 9.5,
    bonus: "700% opp til 116 000 kr. + 725 FS",
    features: ["Crypto Betaling", "Ugentlige Bonus", "Live Support"],
    url: "https://play.betibet.com/no",
  },
  {
    rank: 3,
    name: "Lucky Ones",
    logo: "/luckyones.svg",
    rating: 9.2,
    bonus: "150% opp til 30 000 kr. + 200 FS",
    features: ["Eksklusive Spil", "VIP Program", "Gratis Spins"],
    url: "https://www.luckyones.com/",
  },
  {
    rank: 4,
    name: "Rolling slots",
    logo: "/rollingslot.svg",
    rating: 9.0,
    bonus: "260% opp til 19 500 kr. + 260 FS",
    features: ["Mobil Casino", "Eksklusive Spil", "Sports Betting"],
    url: "https://rollingslots.com/en",
  },
  {
    rank: 5,
    name: "Vegas Now",
    logo: "/vegasnow.svg",
    rating: 8.8,
    bonus: "150% opp til 15 000 kr. + 200 FS",
    features: ["Lav Omsætning", "Reload Bonus", "24/7 Chat"],
    url: "https://www.vegasnow.com/entry",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
