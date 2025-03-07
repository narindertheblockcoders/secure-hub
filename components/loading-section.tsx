"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setProgress(100)
  //   }, 3000)
  
  //   const interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval)
  //         return 100
  //       }
  //       return prev + 0.5 // Smaller increments for smooth animation
  //     })
  //   }, 30)
  
  //   return () => {
  //     clearTimeout(timer)
  //     clearInterval(interval)
  //   }
  // }, [])

  return (

    
    <motion.div
      className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      animate={{ y: progress === 100 ? "-100%" : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
<div className="bann-overlay"></div>
{/* <video autoPlay muted loop className="bann-video">
        <source src="/bann-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Larger stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="w-2 h-2 bg-blue-100 rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>
      ))}
    
      {/* Earth/Planet */}
      <motion.div
        className="absolute z-10 planet"
        style={{ top: "15%", right: "35%" }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 100,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <Image
          src="/planet-one.png"
          alt="Planet Earth"
          width={500}
          height={500}
          className="rounded-full shadow-lg shadow-blue-500/30"
          style={{ opacity: 0.5 }}  // Adjust opacity here
        />

      
      </motion.div>

      {/* Astrologer */}
      <motion.div
  className="absolute z-20"
  style={{ bottom: "25%", left: "5%" }} // Set to 'right' instead of 'left'
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }}
>
  <Image 
    src="/rocket.png" 
    alt="Astrologer" 
    width={300} 
    height={350} 
    style={{ transform: "scaleX(-1)" }} // Flip the image horizontally
  />
</motion.div>
        {/* Main content */}
      <div className="bann-content relative z-40 text-center max-w-7xl px-4 mt-0">
      <span className="bann-subtitle  mb-4">Where Security Meets Innovation</span>
        <h1 className="bann-title mb-2">
          <span className="tetxt-white">
           WELCOME TO SECURE HUB
          </span>
        </h1>
        <p className="text-white font-thin mb-2 max-w-md mx-auto text-xl">
          Every journey into the unknown starts with a single launch—make yours a secure one. 
        </p>
      </div>
      
      {/* Loading progress */}
      <div className="relative z-40 mt-8 flex flex-col items-center">
        <div className="w-64 h-4 bg-gray-800 rounded-full overflow-hidden mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-white font-medium">Loading your mission</p>
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <p className="text-white font-medium">{progress}%</p>
          </motion.div>
        </div>

        {progress === 100 && (
          <motion.button
            className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full shadow-lg shadow-purple-500/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Mission
          </motion.button>
        )}
      </div>
      <motion.div
        className="absolute z-20"
        style={{ bottom: "15%", right: "5%" }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Image src="/rocket1.png" alt="Astrologer" width={350} height={450} />
      </motion.div>

      {/* Rocket */}
      <motion.div
        className="absolute z-30"
        initial={{ x: -100, y: 100 }}
        animate={{
          x: [0, 100, 200, 300, 400, 500, 600, 700], // continuous smooth movement
          y: [0, -50, -100, -150, -200, -250, -300], // smooth vertical movement
        }}
        transition={{
          duration: 5,  // Adjust duration for smooth movement
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",  // This ensures smooth easing
        }}
      >
        <div className="relative">
          <Image src="/red-rocket.png" alt="Rocket" width={150} height={150} />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full opacity-80 blur-md"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>

      

      
    </motion.div>
  )
}
