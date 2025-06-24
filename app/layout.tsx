import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Online Casinos Australia 2025 | Top Rated Casino Sites",
  description:
    "Discover the best online casinos in Australia for 2025. Compare bonuses, ratings, and features of top-rated casino sites. Licensed operators with fast payouts and 24/7 support.",
  keywords:
    "online casinos Australia, best casino sites, casino bonuses, Australian gambling, online slots, live casino",
  authors: [{ name: "Best Casinos Australia" }],
  robots: "index, follow",
  openGraph: {
    title: "Best Online Casinos Australia 2025",
    description: "Find the top-rated online casinos in Australia with exclusive bonuses and fast payouts.",
    type: "website",
    locale: "en_AU",
    siteName: "Best Casinos Australia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Online Casinos Australia 2025",
    description: "Discover top-rated Australian casino sites with exclusive bonuses.",
  },
  alternates: {
    canonical: "https://bestcasinosaustralia.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.country" content="Australia" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
