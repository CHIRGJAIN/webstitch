'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Full-Stack Development', 'API Integration', 'Performance Optimization'],
    price: 'Starting from ₹25,000',
    popular: true,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and advanced analytics.',
    features: ['Custom E-commerce', 'Payment Gateway', 'Inventory Management', 'Analytics Dashboard'],
    price: 'Starting from ₹45,000',
    popular: false,
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'App Store Deployment', 'Push Notifications'],
    price: 'Starting from ₹35,000',
    popular: false,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that convert visitors into customers and enhance user satisfaction.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    price: 'Starting from ₹15,000',
    popular: false,
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'SEO Services',
    description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Link Building', 'Analytics & Reporting'],
    price: 'Starting from ₹12,000/month',
    popular: false,
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Complete digital marketing solutions to grow your online presence and reach your target audience.',
    features: ['Social Media Marketing', 'PPC Campaigns', 'Content Marketing', 'Email Marketing'],
    price: 'Starting from ₹18,000/month',
    popular: false,
    color: 'from-indigo-500 to-indigo-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
            From concept to deployment, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700 overflow-hidden">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent-400 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}

                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  {service.price}
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-3xl p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss your project and create something amazing together. 
              Get a free consultation and see how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Support Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  30 Days
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Money Back Guarantee
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  5-Star Reviews
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}