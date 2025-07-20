'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  CloudIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js for optimal performance.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Secure & Scalable'],
    color: 'from-blue-500 to-blue-600',
    href: '/services/web-development',
    popular: true,
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    color: 'from-purple-500 to-purple-600',
    href: '/services/mobile-apps',
  },
  {
    icon: PaintBrushIcon,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction through research-driven approach.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-pink-600',
    href: '/services/design',
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies to grow your online presence and drive conversions through multiple channels.',
    features: ['Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Email Marketing'],
    color: 'from-green-500 to-green-600',
    href: '/services/marketing',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'SEO Services',
    description: 'Advanced SEO strategies to improve your search rankings and increase organic traffic with data-driven optimization.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Analytics & Reporting'],
    color: 'from-yellow-500 to-yellow-600',
    href: '/services/seo',
  },
  {
    icon: ShoppingCartIcon,
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide seamless shopping experiences with integrated payment systems.',
    features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
    color: 'from-red-500 to-red-600',
    href: '/services/ecommerce',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud for enterprise-grade applications.',
    features: ['Cloud Migration', 'DevOps', 'Auto Scaling', 'Monitoring'],
    color: 'from-indigo-500 to-indigo-600',
    href: '/services/cloud',
  },
  {
    icon: CogIcon,
    title: 'Custom Software',
    description: 'Tailored software solutions designed specifically for your business needs with enterprise-level security and scalability.',
    features: ['Business Logic', 'API Development', 'Database Design', 'Integration'],
    color: 'from-gray-500 to-gray-600',
    href: '/services/custom-software',
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-900" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={service.href}>
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-dark-700 h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-accent-400 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <motion.div
                    className="mt-auto pt-6 border-t border-gray-100 dark:border-dark-700"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors inline-flex items-center">
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your digital presence?
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/contact" className="btn-primary">
              Get Started Today
            </Link>
            <Link href="/portfolio" className="btn-secondary">
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}