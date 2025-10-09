import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UCT Groups - Professional Security Services Across Australia",
  description:
    "30+ years of combined experience providing licensed security services including VIP protection, static guards, mobile patrols, CCTV, and more. 24/7 emergency response across Sydney.",
  keywords:
    "security services, security guards, VIP protection, mobile patrol, CCTV, Sydney security, licensed security, Australian security",
  openGraph: {
    title: "UCT Groups - Professional Security Services",
    description: "Licensed security services across Australia with 24/7 emergency response",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
