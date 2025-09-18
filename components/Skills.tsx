"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Cloud, Brain, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Responsive Design"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "Django", "Flask", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Firebase", "Supabase", "Vercel"],
  },
  {
    title: "AI",
    icon: Brain,
    skills: ["LLMs", "RAG", "AI Agents", "MCP", "n8n", "GenAI", "OpenAI API"],
  },
  {
    title: "ML & Data Science",
    icon: Brain,
    skills: [
      "Data Processing",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Fine-tuning",
      "Recommender Systems",
      "PySpark",
      "Airbyte",
      "Snowflake",
    ],
  },
]

const tools = [
  "Git",
  "GitHub",
  "Gitlab",
  "Docker",
  "VS Code",
  "Cursor",
  "Codex",
  "XCode",
  "Jupyter",
  "PySpark",
  "Airbyte",
  "Snowflake",
  "Terraform",
  "Splunk",
  "Figma",
  "Jira",
  "Slack",
  "Google Sheets",
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Technical Skills</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build scalable, efficient, and user-friendly
            applications.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-enhanced h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 accent-gradient rounded-lg flex-shrink-0">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-900/50 border border-gray-700 text-gray-400 rounded-full text-sm hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-black/90 border border-gray-700 text-gray-400 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition-all cursor-default backdrop-filter backdrop-blur-10"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Professional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Professional Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Agile/Scrum",
              "System Design",
              "Software Testing",
              "Problem Solving",
              "Team Leadership",
              "Code Review",
              "Collaboration",
              "Attention to Detail",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                className="group"
              >
                <div className="card-enhanced text-center">
                  <span className="text-gray-400 font-medium group-hover:text-blue-400 transition-colors">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
