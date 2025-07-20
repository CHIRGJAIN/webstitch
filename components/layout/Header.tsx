'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { toggleMobileMenu, setMobileMenuOpen } from '@/store/slices/uiSlice'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce' },
      { name: 'Mobile App Development', href: '/services/mobile-apps' },
      { name: 'UI/UX Design', href: '/services/design' },
      { name: 'SEO & Digital Marketing', href: '/services/seo' },
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const { mobileMenuOpen } = useSelector((state: RootState) => state.ui)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    dispatch(setMobileMenuOpen(false))
  }, [pathname, dispatch])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 98997 21172</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>webstitchh@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>🚀 Free Consultation Available - Limited Time!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-xl backdrop-blur-md' 
          : 'bg-white/90 dark:bg-dark-900/90'
      }`}>
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  Webstitch
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Code. Craft. Connect
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-dark-800'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Submenu */}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 glass-effect rounded-xl shadow-xl border border-white/20 dark:border-dark-700/50 overflow-hidden"
                        >
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-colors duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary"
              >
                Get Free Consultation
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => dispatch(toggleMobileMenu())}
                className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                data-testid="mobile-menu-button"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-200 dark:border-dark-700 glass-effect"
            >
              <div className="container-custom py-4">
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                          pathname === item.href
                            ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-dark-800'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors duration-200"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}