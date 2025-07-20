'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { RootState } from '@/store/store'
import { toggleMobileMenu } from '@/store/slices/uiSlice'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dispatch = useDispatch()
  const { mobileMenuOpen } = useSelector((state: RootState) => state.ui)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu())
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Webstitch</span>
            <p className="text-xs text-gray-600 dark:text-gray-400 -mt-1">Code. Craft. Connect</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                pathname === item.href
                  ? 'text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <ThemeToggle />
          <a
            href="tel:+919899721172"
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>+91 98997 21172</span>
          </a>
          <Link href="/contact" className="btn-primary">
            <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            onClick={handleMobileMenuToggle}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-gray-200 dark:border-dark-700"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                  onClick={() => dispatch(toggleMobileMenu())}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-dark-700">
                <a
                  href="tel:+919899721172"
                  className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-4"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>+91 98997 21172</span>
                </a>
                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => dispatch(toggleMobileMenu())}
                >
                  <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}