'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 bg-gray-200 dark:bg-dark-800 rounded-lg animate-pulse" />
    )
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' },
  ]

  const currentTheme = themes.find(t => t.name === theme) || themes[0]

  return (
    <div className="relative">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex(t => t.name === theme)
          const nextIndex = (currentIndex + 1) % themes.length
          setTheme(themes[nextIndex].name)
        }}
        className="w-10 h-10 bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 rounded-lg flex items-center justify-center transition-all duration-200 group"
        title={`Switch to ${themes[(themes.findIndex(t => t.name === theme) + 1) % themes.length].label} mode`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            <currentTheme.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 transition-colors duration-200" />
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  )
}