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
      "Began my journey in Computer Science at Vellore Institute of Technology, diving into programming fundamentals and discovering my passion for software development.",
    icon: GraduationCap,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2021",
    title: "First App Published",
    description:
      "Published my first mobile application on Google Play Store, marking my entry into app development and gaining real-world experience with user feedback.",
    icon: Smartphone,
    type: "achievement",
    linkTo: "projects",
  },
  {
    year: "2022",
    title: "First Research Paper",
    description:
      "Published my first research paper in IEEE Conference on machine learning applications, exploring revenue prediction models with 97.9% accuracy.",
    icon: BookOpen,
    type: "research",
    linkTo: "research",
  },
  {
    year: "2023",
    title: "Started Masters at NYU",
    description:
      "Began MS in Computer Science at NYU Tandon School of Engineering, focusing on advanced algorithms, software engineering, and big data technologies.",
    icon: GraduationCap,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2024",
    title: "CS Grader at NYU",
    description:
      "Started working as a grader for Introduction to Computer Science course at NYU Courant, evaluating Java assignments and providing 1:1 feedback to students.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2024",
    title: "Bootcamp Admin",
    description:
      "Joined NYU Tandon Career Hub as Bootcamp Admin, managing LeetCode and Data Science bootcamps for 500+ participants with 20% retention improvement.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2025",
    title: "Started at BDR",
    description:
      "Began internship at Building Diagnostics Robotics, working on web and mobile apps with Next.js, React Native, and AWS serverless architecture.",
    icon: Briefcase,
    type: "work",
    linkTo: "experience",
  },
  {
    year: "2025",
    title: "Graduated NYU",
    description:
      "Successfully completed Master of Science in Computer Science with 3.7 GPA, specializing in software engineering and distributed systems.",
    icon: Trophy,
    type: "education",
    linkTo: "education",
  },
  {
    year: "2025",
    title: "SWE at BDR",
    description:
      "Promoted to Jr. Software Engineer at Building Diagnostics Robotics. Revamped website architecture with Next.js, launched new service verticals, and deployed iOS app with CI/CD pipeline.",
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
                >
                  {/* Timeline dot */}
                  <motion.div
                    animate={{
                      scale: hoveredEvent === index ? 1.4 : 1,
                      backgroundColor: hoveredEvent === index ? "#ffffff" : "#ffffff",
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

                  {/* Title Card */}
                  <motion.div
                    animate={{
                      scale: hoveredEvent === index ? 1 : hoveredEvent !== null ? 0.85 : 1,
                      opacity: hoveredEvent !== null && hoveredEvent !== index ? 0.4 : 1,
                      width: hoveredEvent === index ? "280px" : "110px",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="card"
                    style={{
                      minHeight: "60px",
                    }}
                  >
                    <div className="text-center">
                      <h3 className="text-xs font-semibold text-white leading-tight">{event.title}</h3>
                    </div>

                    {/* Expanded content on hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0, filter: "blur(4px)" }}
                      animate={{
                        opacity: hoveredEvent === index ? 1 : 0,
                        height: hoveredEvent === index ? "auto" : 0,
                        filter: hoveredEvent === index ? "blur(0px)" : "blur(4px)",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-gray-800">
                        <p className="text-xs text-gray-400 leading-relaxed text-left mb-3">{event.description}</p>

                        <div className="flex items-center justify-between">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400">
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>

                          <motion.button
                            onClick={() => scrollToSection(event.linkTo)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 text-xs text-white hover:text-gray-300 font-medium transition-colors"
                          >
                            Learn More
                            <ArrowRight className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
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
