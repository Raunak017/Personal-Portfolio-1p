"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Trophy, Briefcase, GraduationCap, BookOpen, Smartphone, ArrowRight } from "lucide-react"
import AnimatedContent from "./AnimatedContent"

const journeyEvents = [
  {
    year: "2019",
    title: "Started CS Undergrad",
    description:
      "Began my Computer Science degree at VIT, exploring programming fundamentals and developing a strong interest in building scalable software systems.",
    icon: GraduationCap,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2021",
    title: "Software Dev at YTBC",
    description:
      "Worked as Software Developer at Young Tycoons Business Challenge, building reusable components and backend APIs to support 20,000+ users on a production web platform.",
    type: "achievement",
    linkTo: "experience",
  },
  {
    year: "2022",
    title: "ML Intern at Feynn Labs",
    description:
      "Interned as a Machine Learning Intern at Feynn Labs, applying clustering models and data visualization to improve market segmentation and business analytics.",
    icon: BookOpen,
    type: "research",
    linkTo: "experience",
  },
  {
    year: "2023",
    title: "Started Masters at NYU",
    description:
      "Enrolled in MS Computer Science at NYU Tandon, focusing on advanced algorithms, software engineering, big data, and machine learning.",
    icon: GraduationCap,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2024",
    title: "CS Grader at NYU",
    description:
      "Served as grader for Intro to CS at NYU Courant, reviewing Java assignments and providing detailed 1:1 feedback to help students strengthen fundamentals.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2024",
    title: "Bootcamp Admin",
    description:
      "Managed LeetCode and Data Science bootcamps at NYU Tandon Career Hub, coordinating 500+ participants and improving retention by 20% through automation.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2025",
    title: "Started at BDR",
    description:
      "Joined Building Diagnostics Robotics as Software Engineer Intern, developing cross-platform apps and scalable web features with Next.js, React Native, and AWS.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2025",
    title: "Graduated NYU",
    description:
      "Completed Master’s in Computer Science at NYU with 3.73 GPA, gaining expertise in distributed systems, AI, and full‑stack development.",
    icon: Trophy,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2025",
    title: "SWE at BDR",
    description:
      "Promoted to Software Engineer at BDR, revamping website architecture with Next.js, deploying iOS app via CI/CD, and launching new service verticals.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
]

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="journey" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Journey</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            From a curious CS student to a passionate software engineer - hover over the milestones to explore my
            journey.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative px-4">
          {/* Timeline line */}
          <div className="absolute top-[11px] left-0 right-0 h-0.5 bg-gray-800 z-0" />

          {/* Timeline events */}
          <div className="flex justify-between items-start relative gap-1">
            {journeyEvents.map((event, index) => (
              <AnimatedContent
                key={index}
                distance={80}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={index * 0.1}
              >
                <div
                  className="relative flex flex-col items-center cursor-pointer"
                  onMouseEnter={() => setHoveredEvent(index)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => scrollToSection(event.linkTo)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to ${event.linkTo} section`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToSection(event.linkTo); } }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    animate={{
                      scale: hoveredEvent === index ? 1.4 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative z-10 w-3 h-3 bg-white rounded-full border-2 border-black mb-2"
                  />

                  {/* Year below dot */}
                  <motion.div
                    animate={{
                      scale: hoveredEvent === index ? 1.1 : hoveredEvent !== null ? 0.9 : 1,
                      opacity: hoveredEvent !== null && hoveredEvent !== index ? 0.6 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mb-2"
                  >
                    <span className="text-xs font-bold text-white">{event.year}</span>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    animate={{
                      scale: hoveredEvent === index ? 1 : hoveredEvent !== null ? 0.85 : 1,
                      opacity: hoveredEvent !== null && hoveredEvent !== index ? 0.4 : 1,
                      width: hoveredEvent === index ? "320px" : "112px",
                      height: hoveredEvent === index ? "230px" : "80px",
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="journey-card overflow-hidden relative"
                    style={{
                      borderColor: hoveredEvent === index ? "rgba(59, 130, 246, 0.8)" : "rgb(55, 65, 81)",
                      boxShadow:
                        hoveredEvent === index
                          ? "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)"
                          : "none",
                    }}
                  >
                    {/* Static title - center when not hovered */}
                    {hoveredEvent !== index && (
                      <div className="absolute inset-0 flex items-center justify-center px-6">
                        <h3 className="text-xs font-semibold text-white leading-tight text-center">{event.title}</h3>
                      </div>
                    )}

                    {/* Expanded content - only visible on hover */}
                    {hoveredEvent === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="absolute inset-0 p-6 flex flex-col justify-between"
                      >
                        {/* Title at top */}
                        <div className="mb-4">
                          <h3 className="text-sm font-bold text-white mb-3 text-center">{event.title}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-800 pt-3">{event.description}</p>
                        </div>

                        {/* Bottom section with type and button */}
                        <div className="flex items-center justify-between mt-auto">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700">
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>

                          <motion.button
                            onClick={() => scrollToSection(event.linkTo)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 text-xs text-white hover:text-blue-400 font-medium transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <AnimatedContent distance={100} direction="vertical" duration={1} ease="power3.out" delay={0.8}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black border border-gray-800 rounded-full">
              <Trophy className="w-6 h-6 text-white" />
              <span className="text-lg font-medium text-white">The journey continues... 🚀</span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  )
}
