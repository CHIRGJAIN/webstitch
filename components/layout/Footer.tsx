'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ArrowUpIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'

const navigation = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/design' },
    { name: 'Digital Marketing', href: '/services/marketing' },
    { name: 'SEO Services', href: '/services/seo' },
    { name: 'E-commerce', href: '/services/ecommerce' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Case Studies', href: '/case-studies' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '/help' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Changelog', href: '/changelog' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/webstitch', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/webstitch', icon: 'twitter' },
    { name: 'Instagram', href: 'https://instagram.com/webstitch', icon: 'instagram' },
    { name: 'Facebook', href: 'https://facebook.com/webstitch', icon: 'facebook' },
    { name: 'GitHub', href: 'https://github.com/webstitch', icon: 'github' },
  ],
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <CodeBracketIcon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold">Webstitch</span>
                <p className="text-xs text-gray-400 -mt-1">Code. Craft. Connect</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transforming digital experiences with cutting-edge web development, 
              innovative design, and strategic digital marketing solutions. Building 
              the future, one pixel at a time.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Delta-1, Greater Noida<br />
                  Delhi NCR - 201308, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+919899721172" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +91 98997 21172
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:webstitchh@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  webstitchh@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest updates, insights, and industry trends.
              </p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 Webstitch. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>Made with ❤️ in Greater Noida</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={item.name}
                >
                  <span className="text-sm font-semibold group-hover:text-white">
                    {item.icon === 'linkedin' && 'Li'}
                    {item.icon === 'twitter' && 'Tw'}
                    {item.icon === 'instagram' && 'Ig'}
                    {item.icon === 'facebook' && 'Fb'}
                    {item.icon === 'github' && 'Gh'}
                  </span>
                </a>
              ))}
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors ml-4"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}