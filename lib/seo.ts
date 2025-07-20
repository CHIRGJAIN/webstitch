export const siteConfig = {
  name: 'Webstitch',
  description: 'Transform your digital presence with Webstitch - Greater Noida\'s leading web development company. We create stunning, high-performance websites and applications that drive business growth.',
  url: 'https://webstitch.in',
  ogImage: 'https://webstitch.in/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/webstitch',
    github: 'https://github.com/webstitch',
    linkedin: 'https://linkedin.com/company/webstitch',
  },
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Webstitch',
  alternateName: 'Webstitch Technologies',
  url: 'https://webstitch.in',
  logo: 'https://webstitch.in/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98997-21172',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Delta-1',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201308',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4744,
    longitude: 77.5040,
  },
  sameAs: [
    'https://www.facebook.com/webstitch',
    'https://www.twitter.com/webstitch',
    'https://www.linkedin.com/company/webstitch',
    'https://www.instagram.com/webstitch',
  ],
  founder: {
    '@type': 'Person',
    name: 'Webstitch Team',
  },
  foundingDate: '2017',
  numberOfEmployees: '15',
  slogan: 'Code. Craft. Connect',
  description: 'Leading web development company in Greater Noida specializing in modern web applications, mobile apps, and digital marketing solutions.',
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 28.4744,
      longitude: 77.5040,
    },
    geoRadius: '50000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom website development using modern technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile application development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Marketing',
          description: 'Comprehensive digital marketing and SEO services',
        },
      },
    ],
  },
}

export const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://webstitch.in/#localbusiness',
  name: 'Webstitch',
  image: 'https://webstitch.in/logo.png',
  telephone: '+91-98997-21172',
  email: 'webstitchh@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Delta-1',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201308',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4744,
    longitude: 77.5040,
  },
  url: 'https://webstitch.in',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  priceRange: '₹₹₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
  },
}