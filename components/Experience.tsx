"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer",
    company: "Building Diagnostics Robotics",
    location: "Brooklyn, NY",
    period: "June 2025 - Present",
    type: "Full-time",
    description: [
      "Developed a ML pipeline for automated curve fitting and model evaluation across CSV datasets using Chebyshev, spline, ridge, and piecewise regression; implemented train/test RMSE analysis to optimize generalization and visualize performance, achieving an average R2 score of 0.98.",
      "Revamped BDR’s website architecture with modular Next.js components, implemented mobile-first design improvements including dynamic navigation behavior and exit-intent modals, and launched new service verticals and blog-driven content using MDX and static generation strategies, enhancing user engagement and content accessibility.",
    ],
    technologies: ["Next.js", "React", "Redux", "AWS", "CI/CD", "MDX", "Machine Learning", "Regression Models"],
  },
  {
    title: "Software Engineer Intern",
    company: "Building Diagnostics Robotics",
    location: "Brooklyn, NY",
    period: "March 2025 - June 2025",
    type: "Internship",
    description: [
      "Spearheaded a scalable cross-platform app (iOS & Android) using React Native and Flask; designed a serverless backend with AWS Lambda, GraphQL, Cognito, and API Gateway to support 1000+ users.",
      "Deployed the iOS version of BDR’s mobile app to the App Store; set up a CI/CD pipeline using AWS to streamline release workflows and reduce deployment cycles by 15%.",
    ],
    technologies: ["React Native", "Flask", "Next.js", "AWS Lambda", "GraphQL", "Cognito", "API Gateway", "CI/CD", "iOS", "Android"],
  },
  {
    title: "Bootcamp Admin",
    company: "NYU Tandon Career Hub",
    location: "Brooklyn, NY",
    period: "Sept 2024 - May 2025",
    type: "Part-time",
    description: [
      "Oversaw LeetCode and Data Science bootcamps with ~500 participants across two semesters",
      "Managed logistics, automating data collection and analysis with Google Sheets",
      "Increased program retention by 20% through improved operational efficiency",
    ],
    technologies: ["Google Sheets", "Data Analysis", "Program Management"],
  },
  {
    title: "Software Engineer Intern",
    company: "Radical AI",
    location: "Remote",
    period: "June 2024 - Aug 2024",
    type: "Internship",
    description: [
      "Built a real-time chat interface for the company's website with OpenAI API and scalable backend solutions using Node.js and Firebase-CLI",
      "Designed an activity dashboard for tracking user engagement using D3.js",
      "Conducted API testing and validation using Postman and optimized user experience with quick action buttons and default prompts",
    ],
    technologies: ["Node.js", "OpenAI API", "Firebase", "D3.js", "Postman"],
  },
  {
    title: "Grader for Introduction to Computer Science Course",
    company: "NYU Courant",
    location: "New York, NY",
    period: "Jan 2024 - May 2024",
    type: "Part-time",
    description: [
      "Evaluated Java assignments and provided 1:1 feedback to students on their code to ensure best object-oriented practices",
      "Assisted students with debugging techniques and code optimization strategies",
      "Collaborated with professors to maintain consistent grading standards across multiple sections",
    ],
    technologies: ["Java", "Object-Oriented Programming", "Code Review", "Teaching"],
  },
  {
    title: "Machine Learning Intern",
    company: "Feynn Labs",
    location: "Remote",
    period: "Oct 2022 - Dec 2022",
    type: "Internship",
    description: [
      "Modeled and fine-tuned machine learning models for market segmentation, achieving 92.2% accuracy by applying K-means clustering and hierarchical clustering on large-scale datasets",
      "Applied statistical modeling and data visualization on Tableau to support sales analytics and recommendations, enabling a startup to identify target customer segments and optimize marketing strategies",
    ],
    technologies: [
      "Python",
      "K-means Clustering",
      "Hierarchical Clustering",
      "Tableau",
      "Statistical Modeling",
      "Data Visualization",
    ],
  },
  {
    title: "Software Developer",
    company: "Young Tycoons Business Challenge",
    location: "Remote",
    period: "Nov 2021 - Aug 2022",
    type: "Contract",
    description: [
      "Supervised a team of 5 members in building reusable components and key web pages for a production-level website using React.js",
      "Designed and developed a backend server with RESTful APIs to facilitate seamless integration with frontend",
      "Handled user authentication, data manipulation, and state management for over 20,000+ users",
    ],
    technologies: ["React.js", "RESTful APIs", "Team Leadership", "Authentication"],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Work Experience</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-enhanced">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 accent-gradient rounded-lg flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg text-gray-400 font-medium">{exp.company}</h4>
                      </div>
                      <span className="px-3 py-1 bg-gray-900/50 border border-gray-700 accent-text rounded-full text-sm font-medium flex-shrink-0">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 accent-text flex-shrink-0" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 accent-text flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <p key={itemIndex} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="accent-text mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded-full text-xs hover:border-blue-500 hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
