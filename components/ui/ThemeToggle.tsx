'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-dark-700 animate-pulse" />
    )
  }

  const themes = [
    { name: 'light', icon: SunIcon, label: 'Light' },
    { name: 'dark', icon: MoonIcon, label: 'Dark' },
    { name: 'system', icon: ComputerDesktopIcon, label: 'System' },
  ]

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-gray-100 dark:bg-dark-800 rounded-lg p-1">
        {themes.map(({ name, icon: Icon, label }) => (
          <motion.button
            key={name}
            onClick={() => setTheme(name)}
            className={`relative p-2 rounded-md transition-colors ${
              theme === name
                ? 'text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${label} theme`}
          >
            <AnimatePresence>
              {theme === name && (
                <motion.div
                  layoutId="theme-indicator"
                  className="absolute inset-0 bg-white dark:bg-dark-700 rounded-md shadow-sm"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </AnimatePresence>
            <Icon className="w-5 h-5 relative z-10" />
          </motion.button>
        ))}
      </div>
    </div>
  )
}