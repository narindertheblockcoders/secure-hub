"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function WebDevSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 py-20 relative thirdweb"
    >
      <motion.div className="thirdwebContent" style={{ opacity, y }}>
        <h2>
          One Small Step for Your Brand, <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">
            One Giant Leap for Your Online Presence</b>
        </h2>

        <div className="maniPara">


          <p className="text-lg mb-6 text-gray-300">
            Every expedition to new frontiers begins with a reliable launchpad—and your website is no exception. Our web
            development team designs visually captivating, high-performing platforms that capture your audience's
            imagination and hold strong, no matter how far you travel.
            <br></br>
            <br></br>
            Because when your ambition spans galaxies, your website needs to keep pace.
          </p>

        
        </div>
      </motion.div>

      {/* <div className="columnsec">
            {["Responsive Design", "Performance Optimization", "Custom Solutions"].map((feature, index) => (
              <div key={index} className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/20">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-medium text-blue-200">{feature}</h4>
              </div>
            ))}
          </div> */}

      {/* Constellation effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 15}%`,
            }}
          />
        ))}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M100,150 L200,100 L300,200 L400,150 L500,180"
            stroke="rgba(96, 165, 250, 0.2)"
            strokeWidth="1"
            fill="none"
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        </svg>
      </div>
    </section>
  )
}

