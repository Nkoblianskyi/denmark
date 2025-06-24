import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Advantages } from "@/components/advantages"
import { CasinoRankings } from "@/components/casino-rankings"
import { HowWeRank } from "@/components/how-we-rank"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { CasinoModal } from "@/components/casino-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Advantages />
      <CasinoRankings />
      <HowWeRank />
      <Footer />
      <CookieBanner />
      <CasinoModal />
    </div>
  )
}
