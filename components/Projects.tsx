"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Star, Zap } from "lucide-react"

interface ProjectsProps {
  mousePosition: { x: number; y: number }
}

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, animated portfolio website built with Next.js and Framer Motion, featuring scroll-based animations, true black theme, and responsive design inspired by Cursor.com.",
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Raunak017/portfolio",
    demo: "https://raunakshukla.netlify.app",
    featured: true,
    highlights: [
      "Scroll-triggered animations with Framer Motion",
      "Mouse-follow spotlight effects on project cards",
      "True black theme with minimal design",
      "Horizontal timeline with hover interactions",
      "SEO optimized with OpenGraph meta tags",
      "Deployed on Netlify with CI/CD pipeline",
    ],
  },
  {
    title: "Reinforcement Learning for Complex Game Environments",
    description:
      "Trained RL agents for CartPolev2, CarRacingv2, 3D Humanoid etc. using PPO, A2C, & DQN achieving multi-level task completion through stable and scalable training pipelines with Stable Baselines.",
    technologies: ["Python", "Stable Baselines", "PPO", "A2C", "DQN", "CNN", "ResNet"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "Multi-environment RL training pipeline",
      "Custom CNN policy with ResNet architecture",
      "Policy optimization for reinforcement tasks",
      "Stable and scalable training implementation",
    ],
  },
  {
    title: "Analyzing Historical Temperature Anomalies",
    description:
      "Conducted time-series analysis on the GISTEMP v4 dataset, implemented STL ARIMA and SARIMAX models, and developed a tuned RNN to project future temperature anomalies with a 6% error and an AIC of -183.",
    technologies: ["Python", "Time Series Analysis", "ARIMA", "SARIMAX", "RNN", "GISTEMP"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "Time-series analysis on GISTEMP v4 dataset",
      "STL ARIMA and SARIMAX model implementation",
      "Tuned RNN for temperature projection",
      "Achieved 6% error rate with AIC of -183",
    ],
  },
  {
    title: "AI Resume Builder",
    description:
      "A web app that parses PDF resumes and uses OpenAI API to generate or rewrite bullet points based on user-provided prompts or keywords.",
    technologies: ["Next.js", "Supabase", "OpenAI API", "Vercel", "PDF Parser"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "PDF parsing and text extraction",
      "AI-powered content generation",
      "Real-time collaboration features",
      "Supabase authentication and storage",
    ],
  },
  {
    title: "Crypto Tracker",
    description:
      "Real-time cryptocurrency tracking app with price alerts, portfolio management, and interactive charts for 10,000+ digital assets.",
    technologies: ["React.js", "Node.js", "Express", "Firebase", "CoinGecko API"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "Real-time price tracking",
      "Interactive charts and analytics",
      "Portfolio management system",
      "Price alerts and notifications",
    ],
  },
  {
    title: "NYC Crime Data Analysis",
    description:
      "Big data pipeline using Spark to analyze 218k+ NYC crime records with GCP, Airbyte, and Snowflake visualization.",
    technologies: ["PySpark", "GCP", "Airbyte", "Snowflake", "Python"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "ELT pipeline with Medallion Architecture",
      "218k+ records processed",
      "Interactive data visualizations",
      "Cloud-native architecture",
    ],
  },
  {
    title: "IntelliQuest Search Engine",
    description:
      "Academic paper search engine with advanced search options, related papers, and comprehensive database integration.",
    technologies: ["React.js", "Django", "PostgreSQL", "Docker", "DigitalOcean"],
    github: "https://github.com/placeholder",
    demo: "https://placeholder.com",
    featured: false,
    highlights: [
      "Advanced search algorithms",
      "Related paper recommendations",
      "RESTful API architecture",
      "Containerized deployment",
    ],
  },
]

export default function Projects({ mousePosition }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured Projects</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in frontend development, full-stack applications, machine
            learning, and data engineering.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="card-enhanced relative overflow-hidden"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Featured badge */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold z-10">
                    <Star className="w-4 h-4" />
                    Featured
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold accent-text mb-3 uppercase tracking-wide">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="accent-text mt-1 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded-full text-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="group"
                  onMouseEnter={() => setHoveredProject(index + 1)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="card-enhanced h-full">
                    <div className="relative">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded text-xs hover:border-blue-500 hover:text-blue-400 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded text-xs">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
