"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Science (MS) in Computer Science",
    school: "New York University - Tandon School of Engineering",
    location: "Brooklyn, NY",
    period: "2023 - 2025",
    gpa: "3.73/4.0",
    coursework: [
      "Algorithms",
      "Software Engineering",
      "Big Data",
      "Machine Learning",
      "Data Science",
      "Java",
      "Blockchain",
      "Data Visualization",
      "Network Security",
      "Info Security & Privacy"
    ],
  },
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
    school: "Vellore Institute of Technology",
    location: "Vellore, India",
    period: "2019 - 2023",
    gpa: "8.44/10",
    coursework: [
      "Data Structures",
      "Operating Systems",
      "Database Systems",
      "Artificial Intelligence",
      "Cloud Microservices",
      "Object Oriented Programming",
    ],
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Education</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="card-enhanced h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 accent-gradient rounded-lg flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                      {edu.degree}
                    </h3>
                    <h4 className="text-gray-400 font-medium mb-3">{edu.school}</h4>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 accent-text flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 accent-text flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Award className="w-4 h-4 accent-text flex-shrink-0" />
                    <span className="font-medium">GPA: {edu.gpa}</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-semibold accent-text mb-3 uppercase tracking-wide">
                    Relevant Coursework
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded-full text-xs hover:border-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
