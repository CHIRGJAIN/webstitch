import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Webstitch - Code. Craft. Connect | Premier Web Development in Greater Noida',
    template: '%s | Webstitch'
  },
  description: 'Transform your digital presence with Webstitch - Greater Noida\'s leading web development company. We create stunning, high-performance websites and applications that drive business growth.',
  keywords: ['web development', 'Greater Noida', 'React', 'Next.js', 'digital marketing', 'SEO', 'UI/UX design', 'e-commerce'],
  authors: [{ name: 'Webstitch Team' }],
  creator: 'Webstitch',
  publisher: 'Webstitch',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://webstitch.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webstitch.in',
    title: 'Webstitch - Code. Craft. Connect',
    description: 'Transform your digital presence with Webstitch - Greater Noida\'s leading web development company.',
    siteName: 'Webstitch',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Webstitch - Web Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webstitch - Code. Craft. Connect',
    description: 'Transform your digital presence with Webstitch - Greater Noida\'s leading web development company.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}