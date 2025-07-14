"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Education from "@/components/Education"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Research from "@/components/Research"
import Skills from "@/components/Skills"
import Journey from "@/components/Journey"
import Contact from "@/components/Contact"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Education />
        <Experience />
        <Projects mousePosition={mousePosition} />
        <Research />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
