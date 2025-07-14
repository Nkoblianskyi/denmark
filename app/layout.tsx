import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bedste Online Casinoer Danmark 2025 | Top Vurderede Casino Sider",
  description:
    "Opdag de bedste online casinoer i Danmark for 2025. Sammenlign bonusser, vurderinger og funktioner fra topvurderede casino sider. Licenserede operatører med hurtige udbetalinger og 24/7 support.",
  keywords: "online casinoer Danmark, bedste casino sider, casino bonusser, dansk gambling, online slots, live casino",
  authors: [{ name: "Bedste Casinoer Danmark" }],
  robots: "index, follow",
  openGraph: {
    title: "Bedste Online Casinoer Danmark 2025",
    description: "Find de topvurderede online casinoer i Danmark med eksklusive bonusser og hurtige udbetalinger.",
    type: "website",
    locale: "da_DK",
    siteName: "Bedste Casinoer Danmark",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bedste Online Casinoer Danmark 2025",
    description: "Opdag topvurderede danske casino sider med eksklusive bonusser.",
  },
  alternates: {
    canonical: "https://bedstecasinoerdanmark.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da-DK">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="DK" />
        <meta name="geo.country" content="Denmark" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
