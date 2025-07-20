'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  Award,
  Users,
  Zap
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'E-commerce Solutions', href: '/services/ecommerce' },
    { name: 'Mobile App Development', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/design' },
    { name: 'SEO & Digital Marketing', href: '/services/seo' },
    { name: 'Custom Software', href: '/services/custom-software' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support Center', href: '/support' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/webstitch' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/webstitch' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/webstitch' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/webstitch' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/webstitch' },
]

const achievements = [
  { icon: Award, label: 'Award Winning', value: '25+ Awards' },
  { icon: Users, label: 'Happy Clients', value: '450+' },
  { icon: Zap, label: 'Projects Delivered', value: '580+' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <div>
                <div className="text-2xl font-bold">Webstitch</div>
                <div className="text-sm text-gray-400">Code. Craft. Connect</div>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions. 
              We craft exceptional web experiences that drive growth and success.
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <achievement.icon className="w-5 h-5 text-primary-400" />
                  <div>
                    <div className="text-sm font-semibold">{achievement.value}</div>
                    <div className="text-xs text-gray-400">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Our Office</div>
                  <div className="text-gray-300 text-sm">
                    Delta-1, Greater Noida<br />
                    Delhi NCR - 201308, India
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-300 text-sm">+91 98997 21172</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-300 text-sm">webstitchh@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1" />
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-300 text-sm">
                    Mon-Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 10:00 AM - 5:00 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest insights on web development trends and best practices.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Webstitch. All rights reserved. | Crafted with ❤️ in Greater Noida
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-200 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              {footerLinks.resources.slice(-3).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}