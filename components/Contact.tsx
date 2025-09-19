"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      // value: "rs8668@nyu.edu",
      href: "mailto:rs8668@nyu.edu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      // value: "linkedin.com/in/raunakshukla17",
      href: "https://linkedin.com/in/raunakshukla17",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-black scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're looking to collaborate on a project, need a software or AI engineer for your team, or just want to chat about technology, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center max-w-2xl mx-auto"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect!</h3>
              
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card flex items-center gap-4"
                >
                  <div className="p-3 accent-gradient rounded-lg">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{info.label}</p>
                    {/* <p className="text-white font-medium">{info.value}</p> */}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Raunak Shukla. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
