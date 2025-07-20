'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { Send, User, Mail, Phone, MessageSquare, Building } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Web Development',
  'E-commerce Solutions',
  'Mobile App Development',
  'UI/UX Design',
  'SEO Services',
  'Digital Marketing',
  'Custom Software',
  'Other',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', data)
      toast.success('Thank you! We\'ll get back to you within 24 hours.')
      reset()
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-dark-700"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Start Your Project Today
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('name')}
              type="text"
              id="name"
              className="input-field pl-12"
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('email')}
              type="email"
              id="email"
              className="input-field pl-12"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="input-field pl-12"
              placeholder="Enter your phone number"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone.message}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company Name
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              {...register('company')}
              type="text"
              id="company"
              className="input-field pl-12"
              placeholder="Enter your company name (optional)"
            />
          </div>
        </div>

        {/* Service Field */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Service Interested In *
          </label>
          <select
            {...register('service')}
            id="service"
            className="input-field"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Project Details *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className="input-field pl-12 resize-none"
              placeholder="Tell us about your project requirements, timeline, and budget..."
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending Message...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </div>
          )}
        </motion.button>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-primary-600 hover:underline">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a href="/terms" className="text-primary-600 hover:underline">
            Terms of Service
          </a>
          .
        </p>
      </form>
    </motion.div>
  )
}