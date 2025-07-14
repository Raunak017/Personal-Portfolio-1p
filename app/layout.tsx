import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raunak Shukla - Frontend Software Engineer",
  description:
    "Portfolio of Raunak Shukla, a passionate Frontend Software Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: "Frontend Developer, Software Engineer, React, Next.js, JavaScript, TypeScript, Portfolio",
  authors: [{ name: "Raunak Shukla" }],
  openGraph: {
    title: "Raunak Shukla - Frontend Software Engineer",
    description: "Portfolio showcasing my journey as a Frontend Software Engineer",
    url: "https://raunakshukla.netlify.app",
    siteName: "Raunak Shukla Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raunak Shukla - Frontend Software Engineer",
    description: "Portfolio showcasing my journey as a Frontend Software Engineer",
  },
    generator: 'v0.dev'
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
