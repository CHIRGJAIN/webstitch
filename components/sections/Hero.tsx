'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

const stats = [
  { label: 'Projects Completed', value: '580+', icon: '🚀' },
  { label: 'Happy Clients', value: '450+', icon: '😊' },
  { label: 'Years Experience', value: '7+', icon: '⭐' },
  { label: 'Team Members', value: '15+', icon: '👥' },
]

const technologies = [
  { name: 'React', color: 'from-blue-400 to-blue-600' },
  { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
  { name: 'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'MongoDB', color: 'from-green-600 to-green-800' },
  { name: 'AWS', color: 'from-orange-400 to-orange-600' },
]

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 dark:bg-accent-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-200"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float animation-delay-400"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary-200 dark:border-primary-800"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Trusted by 580+ businesses worldwide</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Transform Your
              <span className="gradient-text block">Digital Presence</span>
              with Webstitch
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl"
            >
              We craft exceptional digital experiences through cutting-edge web development, 
              innovative design, and strategic digital marketing that drives real business growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact" className="btn-primary group">
                Start Your Project
                <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`text-center transition-all duration-300 ${
                    currentStat === index ? 'scale-110' : 'scale-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Powered by modern technologies:</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${tech.color} shadow-lg`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="relative h-96 lg:h-[500px]"
          >
            {mounted && (
              <Suspense fallback={<div className="w-full h-full bg-gray-100 dark:bg-dark-800 rounded-2xl animate-pulse" />}>
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <AnimatedSphere />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </Suspense>
            )}
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 glass-effect p-4 rounded-lg shadow-lg"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-white">React & Next.js</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Modern Framework</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 glass-effect p-4 rounded-lg shadow-lg"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-white">99% Uptime</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Reliable Hosting</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-5 glass-effect p-3 rounded-lg shadow-lg"
            >
              <div className="text-sm font-medium text-gray-900 dark:text-white">24/7 Support</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Always Available</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-300 dark:bg-gray-600 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}