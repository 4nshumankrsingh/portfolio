"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, ExternalLink, FileText } from "lucide-react"
import { HeroOrbit } from "@/components/HeroOrbit"
import Link from "next/link"

export const HeroSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <motion.div
      ref={containerRef}
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)">
        {/* Gradient Background */}
        <div className="absolute inset-0 -z-40 bg-linear-to-b from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Grain Texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5 mix-blend-overlay"
          style={{
            backgroundImage: `url(/grain.jpg)`,
          }}
        ></div>

        {/* Glassmorphism Layers */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[100px] -z-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-600/5 blur-[80px] -z-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Hero Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {[620, 820, 1020, 1220].map((size, index) => (
            <motion.div
              key={size}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full"
              style={{ width: size, height: size }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            />
          ))}
        </div>

        {/* Orbiting Elements */}
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            {/* Using star.svg */}
            <div className="size-28 text-orange-300/80">⭐</div>
          </motion.div>
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <div className="size-12 text-orange-300/70">⭐</div>
          </motion.div>
        </HeroOrbit>

        {/* Sparkles */}
        {[
          { size: 430, rotation: -14, duration: "30s", sparkleSize: 8 },
          { size: 440, rotation: 79, duration: "32s", sparkleSize: 5 },
          { size: 530, rotation: 178, duration: "36s", sparkleSize: 10 },
          { size: 710, rotation: 144, duration: "44s", sparkleSize: 14 },
        ].map((orbit, index) => (
          <HeroOrbit
            key={index}
            size={orbit.size}
            rotation={orbit.rotation}
            shouldOrbit
            orbitDuration={orbit.duration}
            shouldSpin
            spinDuration="3s"
          >
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                rotate: [0, 180],
              }}
              transition={{
                opacity: { duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            >
              <div className={`size-${orbit.sparkleSize} text-orange-300/30`}>✨</div>
            </motion.div>
          </HeroOrbit>
        ))}

        {/* Floating dots */}
        {[
          { size: 720, rotation: 85, duration: "46s", dotSize: 3 },
          { size: 520, rotation: -41, duration: "34s", dotSize: 2 },
          { size: 650, rotation: -5, duration: "42s", dotSize: 2 },
        ].map((orbit, index) => (
          <HeroOrbit
            key={`dot-${index}`}
            size={orbit.size}
            rotation={orbit.rotation}
            shouldOrbit
            orbitDuration={orbit.duration}
          >
            <motion.div
              className={`size-${orbit.dotSize} rounded-full bg-orange-300/30`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: index * 0.5,
              }}
            />
          </HeroOrbit>
        ))}
      </div>

      {/* Content */}
      <motion.div className="container md:-mt-32 -mt-10 relative z-10" style={{ y, opacity }}>
        <div className="flex flex-col items-center">
          {/* Status Indicator */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-md border border-gray-800 px-5 py-2 inline-flex items-center gap-4 rounded-full shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="bg-orange-500 size-3 rounded-full"></div>
              <div className="bg-orange-500/50 absolute inset-0 rounded-full animate-ping"></div>
            </div>
            <div className="text-sm font-medium text-white/90">Available for new projects</div>
          </motion.div>
        </div>

        {/* Heading and Description */}
        <motion.div
          className="max-w-2xl mx-auto mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-center tracking-tight font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
            Crafting Scalable & Efficient Web Solutions
          </h1>
          <p className="mt-7 text-center text-white/70 md:text-base leading-relaxed">
            As a Full-Stack Developer, I build robust, high-performance applications, from backend architecture to seamless UI/UX.  
            Let's collaborate to bring your ideas to life.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center mt-10 gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.button
            className="group inline-flex items-center gap-3 border border-orange-500/20 px-7 h-14 rounded-full bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link 
              href={"https://drive.google.com/file/d/1pSOHwxazfKJe2TFRZq0IpZkJm8nopl9Q/view?usp=drive_link"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <FileText className="size-4 group-hover:text-orange-400 transition-colors" />
              <span className="font-medium">View Resume</span>
              <ExternalLink className="size-4 group-hover:text-orange-400 transition-colors" />
            </Link>
          </motion.button>

          <motion.button
            className="inline-flex items-center gap-3 border border-orange-500/20 bg-linear-to-r from-orange-500 to-orange-600 text-white h-14 px-7 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={"https://linkedin.com/in/anshuman-kumar-singh-078b01316/"} className="inline-flex items-center gap-3">
              <span className="text-lg">👋</span>
              <span className="font-medium">Let's Connect</span>
              <ExternalLink className="size-4 ml-1" />
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}