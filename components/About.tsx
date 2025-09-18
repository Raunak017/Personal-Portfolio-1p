"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Software & AI Engineer</h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hey! I'm Raunak, a Software & AI Engineer with an MS in Computer Science from NYU. I build products end‑to‑end and ship fast. I'm currently working at Building Diagnostics Robotics, where I've designed a production ML pipeline for automated curve‑fitting and model evaluation and developed their with modular Next.js components and mobile‑first UX.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                My work spans full‑stack (React/Next.js, Node.js, Django), mobile (React Native), and cloud (AWS/GCP, CI/CD) as well as applied ML/GenAI (TensorFlow, PyTorch, LLMs, fine‑tuning). I’ve built things like IntelliQuest (paper search engine), an AI Resume Builder using OpenAI, and big‑data pipelines on Spark and Snowflake.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Previously, I’ve delivered real‑time chat interfaces at Radical AI and supported 500+ learners at NYU’s Career Hub bootcamps. I care about clean, maintainable code and building scalable systems that make a real impact.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated background elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 border border-blue-500/20 rounded-2xl"
              />

              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-8 border border-purple-500/10 rounded-2xl"
              />

              {/* Main photo container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card-glow w-80 h-96 flex items-center justify-center relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(59,130,246,0.5), rgba(147,51,234,0.4))",
                      "linear-gradient(135deg, rgba(147,51,234,0.4), rgba(59,130,246,0.5))",
                      "linear-gradient(225deg, rgba(59,130,246,0.5), rgba(147,51,234,0.4))",
                      "linear-gradient(315deg, rgba(147,51,234,0.4), rgba(59,130,246,0.5))",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 z-0"
                />

                <Image
                  src="/images/raunak-about.jpeg"
                  alt="Raunak Shukla"
                  fill
                  className="object-cover z-10"
                  priority
                />
              </motion.div>

              {/* Floating particles around photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-100"
                  style={{
                    left: `${20 + i * 45}%`,
                    top: `${20 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Corner decorations */}
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-blue-500/90 z-0"
              />
              <motion.div
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                  scale: [1.2, 1, 1.2],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-purple-500/90 z-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
