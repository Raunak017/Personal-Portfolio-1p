import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raunak Shukla - Software Engineer",
  description:
    "Portfolio of Raunak Shukla, a passionateSoftware Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: "Software Engineer, AI Engineer, React, Next.js, Python, AI Agents, Portfolio",
  authors: [{ name: "Raunak Shukla" }],
  openGraph: {
    title: "Raunak Shukla - Software Engineer",
    description: "Portfolio showcasing my journey as a Software Engineer",
    url: "https://raunak17.dev",
    siteName: "Raunak Shukla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Shukla - Software Engineer",
    description: "Portfolio showcasing my journey as a Frontend Software Engineer",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
