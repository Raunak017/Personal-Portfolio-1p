"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, ExternalLink, Github, Users, Calendar } from "lucide-react"

const research = [
  {
    title: "Comparing Machine Learning Classification Algorithms and Feed Forward Neural Network to Perform Sentiment Analysis",
    authors: "Co-Author",
    publication: "Springer Conference - 6th ICSCSP 2023",
    year: "2023",
    doi: "https://doi.org/10.1007/978-981-99-8628-6_28",
    github: "https://github.com/Raunak017/SentimentAnalysis-ResearchPaper",
    description:
      "Achieved an accuracy of 80% using a voting classifier and a feedforward neural network leveraging PyTorch to perform sentiment analysis on a dataset of 140k values.",
    technologies: ["PyTorch", "Machine Learning", "Neural Networks", "Python"],
  },
  {
    title: "Generating Stock Market Data and Making Predictions Using GAN and Neural Networks",
    authors: "First Author",
    publication: "Preprinted at Research Square",
    year: "2023",
    doi: "https://doi.org/10.21203/rs.3.rs-2948055/v1",
    github: "https://github.com/Raunak017/Capstone-Project",
    description:
      "Generated artificial data using the TimeGAN model for 3 years and used this data for training neural networks. Trained RNN, LSTM & GRU neural networks & made predictions with MAE of 1.64 & MAPE as low as 1.53%",
    technologies: ["GAN", "TimeGAN", "RNN", "LSTM", "GRU", "Python"],
  },
  {
    title: "Total Revenue Prediction of A Sports Management Application: Grook Using Machine Learning Models",
    authors: "First Author",
    publication: "IEEE Conference - 13th ICCCNT 2022",
    year: "2022",
    doi: "https://ieeexplore.ieee.org/document/9984472",
    github: "https://github.com/Raunak017/Grook-RegressionAnalysis",
    description:
      "Built an application for online booking of sports facilities using Java and used ML to predict revenue generated. Assembled a voting regressor and got best R² score of 0.979 and RMSE of 82 using polynomial features of degree 2.",
    technologies: ["Java", "Machine Learning", "Voting Regressor", "Polynomial Features"],
  },
]

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="research" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Research Publications</h2>
          <div className="w-24 h-1 accent-gradient mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Published research work in machine learning, neural networks, and data analysis with contributions to
            academic conferences and journals.
          </p>
        </motion.div>

        <div className="space-y-8">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div whileHover={{ scale: 1.02, y: -5 }} className="card">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 accent-gradient rounded-lg flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{paper.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="font-medium text-white">{paper.authors}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{paper.year}</span>
                          </div>
                        </div>
                        <p className="text-white font-medium mb-4">{paper.publication}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-6">{paper.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-black border border-gray-800 text-gray-400 rounded-full text-sm hover:border-gray-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:ml-6">
                    <motion.a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex items-center gap-2 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Paper
                    </motion.a>

                    <motion.a
                      href={paper.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black border border-gray-800 rounded-full">
            <BookOpen className="w-5 h-5 text-white" />
            <span className="text-gray-400">More research work in progress...</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
