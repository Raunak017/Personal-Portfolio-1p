"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[]

    // Use IntersectionObserver so the active link updates reliably near section edges
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        // Top margin accounts for fixed navbar height; bottom margin biases to current section when near the end
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0.01, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach((el) => observer.observe(el))

    return () => {
      sections.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white">
            Raunak Shukla
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div layoutId="navbar-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            ))}

            <motion.a
              href="/resume.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm"
              rel="noreferrer"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Mobile Navigation Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-400 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-2 border-t border-gray-800"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="block w-full text-left px-3 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
