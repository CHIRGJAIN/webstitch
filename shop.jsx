// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../styles/shop.css'; // custom CSS for styling

// const slides = [
//   {
//     title: 'Social Media',
//     highlight: 'Marketing',
//     description: 'Make your business presence online',
//     image: '/images/social-marketing.png', // Ensure image is in /public/images/
//   },
//   {
//     title: 'Search Engine',
//     highlight: 'Optimization',
//     description: 'Boost your visibility and rank higher on Google',
//     image: '/images/seo.png',
//   },
//   {
//     title: 'Email',
//     highlight: 'Marketing',
//     description: 'Reach customers directly in their inbox',
//     image: '/images/email-marketing.png',
//   },
// ];

// const Shop = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <>
//       <div className="shop-slider-container">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div className="slide" key={index}>
//               <div className="slide-content">
//                 <div className="text-content">
//                   <p className="tag">PROMOTION</p>
//                   <h2>
//                     {slide.title} <span>{slide.highlight}</span>
//                   </h2>
//                   <p className="subtext">{slide.description}</p>
//                   <button className="shop-btn">SHOP NOW</button>
//                 </div>
//                 <div className="image-content">
//                   <img src={slide.image} alt={slide.highlight} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Category Tabs */}
//       <div className="category-tabs">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={selectedCategory === cat ? 'active' : ''}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="product-grid">
//         {filteredProducts.map((product) => (
//           <div className="product-card" key={product.id}>
//             {product.discount && <span className="discount">{product.discount}</span>}
//             <img src={product.image} alt={product.title} />
//             <h4>{product.title}</h4>
//             <p className="price">
//               {product.originalPrice && (
//                 <span className="original">{product.originalPrice}</span>
//               )}
//               <span className="final">{product.price}</span>
//             </p>
//           </div>
//         ))}
//       </div>

//       <h3 className="section-heading">Best selling items</h3>
//     </>
//   );
// };
//   );
// };


import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/shop.css';

const heroSlides = [
  {
    title: 'Grow Your Brand',
    heading: 'Digital Marketing Solutions',
    subheading: 'Boost your business with our expert digital marketing, SEO, and branding services.',
    bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    mainImage: '/images/social-marketing.png',
    cta: 'Get Started',
  },
  {
    title: 'Modern Web Design',
    heading: 'Stunning Websites',
    subheading: 'We build beautiful, responsive websites that convert visitors into customers.',
    bgImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    mainImage: '/images/ecommerce.png',
    cta: 'See Portfolio',
  },
  {
    title: 'SEO & Analytics',
    heading: 'Rank Higher, Grow Faster',
    subheading: 'Advanced SEO and analytics to help your business get found and grow.',
    bgImage: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',
    mainImage: '/images/seo.png',
    cta: 'Learn More',
  },
];

const products = [
  {
    id: 1,
    title: 'News / Blogs Website Development',
    image: '/images/blogs.png',
    price: '₹19,999.00',
    originalPrice: '',
    category: 'Development',
    discount: '',
  },
  {
    id: 2,
    title: 'E-Commerce Website Development',
    image: '/images/ecommerce.png',
    price: '₹29,999.00',
    originalPrice: '',
    category: 'Development',
    discount: '',
  },
  {
    id: 3,
    title: 'Brand Design',
    image: '/images/brand.png',
    price: '₹20,000.00',
    originalPrice: '₹24,999.00',
    discount: '-20%',
    category: 'Design',
  },
  {
    id: 4,
    title: 'Logo Design',
    image: '/images/logo.png',
    price: '₹4,999.00',
    originalPrice: '₹5,000.00',
    discount: '-0%',
    category: 'Design',
  },
  {
    id: 5,
    title: 'Customized Website Development',
    image: '/images/custom.png',
    price: '₹24,999.00',
    originalPrice: '₹29,999.00',
    discount: '-17%',
    category: 'Development',
  },
  {
    id: 6,
    title: 'Advanced Website Development',
    image: '/images/advanced.png',
    price: '₹21,999.00',
    originalPrice: '₹24,999.00',
    discount: '-12%',
    category: 'Development',
  },
  {
    id: 7,
    title: 'Basic Website Development',
    image: '/images/basic.png',
    price: '₹9,999.00',
    originalPrice: '₹14,999.00',
    discount: '-33%',
    category: 'Development',
  },
  {
    id: 8,
    title: 'Search Engine Optimization',
    image: '/images/seo.png',
    price: '₹8,999.00',
    originalPrice: '₹12,999.00',
    discount: '-31%',
    category: 'Marketing',
  },
];

const categories = ['All', 'Design', 'Development', 'Marketing'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  return (
    <div className="shop-page">
      {/* Modern Hero Slider */}
      <section className="modern-hero-slider-section">
        <Slider {...heroSettings} className="modern-hero-slider">
          {heroSlides.map((slide, idx) => (
            <div className="modern-hero-slide" key={idx} style={{
              background: `linear-gradient(rgba(20,20,30,0.55),rgba(20,20,30,0.55)), url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              minHeight: '440px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div className="modern-hero-slide-content">
                <div className="modern-hero-slide-left">
                  <h4 className="modern-hero-title">{slide.title}</h4>
                  <h1 className="modern-hero-heading">{slide.heading}</h1>
                  <p className="modern-hero-subheading">{slide.subheading}</p>
                  <button className="modern-hero-cta">{slide.cta}</button>
                </div>
                <div className="modern-hero-slide-right">
                  <img src={slide.mainImage} alt={slide.heading} className="modern-hero-main-image" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-wrapper">
              {product.discount && <span className="discount-badge">{product.discount}</span>}
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <h4 className="product-title">{product.title}</h4>
              <div className="product-price">
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
                <span className="final-price">{product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how we can help you achieve your digital goals.</p>
            </div>
            <div className="cta-actions">
              <button className="cta-primary-btn">Start Your Project</button>
              <div className="cta-contact">
                <span className="contact-label">Call us now</span>
                <span className="contact-number">+91 92846 56561</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;


// import { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../styles/shop.css';

// const products = [
//   {
//     id: 1,
//     title: 'News / Blogs Website Development',
//     image: '/images/blogs.png',
//     price: '₹19,999.00',
//     originalPrice: '',
//     category: 'Development',
//     discount: '',
//   },
//   {
//     id: 2,
//     title: 'E-Commerce Website Development',
//     image: '/images/ecommerce.png',
//     price: '₹29,999.00',
//     originalPrice: '',
//     category: 'Development',
//     discount: '',
//   },
//   {
//     id: 3,
//     title: 'Brand Design',
//     image: '/images/brand.png',
//     price: '₹20,000.00',
//     originalPrice: '₹24,999.00',
//     discount: '-20%',
//     category: 'Design',
//   },
//   {
//     id: 4,
//     title: 'Logo Design',
//     image: '/images/logo.png',
//     price: '₹4,999.00',
//     originalPrice: '₹5,000.00',
//     discount: '-0%',
//     category: 'Design',
//   },
//   {
//     id: 5,
//     title: 'Customized Website Development',
//     image: '/images/custom.png',
//     price: '₹24,999.00',
//     originalPrice: '₹29,999.00',
//     discount: '-17%',
//     category: 'Development',
//   },
//   {
//     id: 6,
//     title: 'Advanced Website Development',
//     image: '/images/advanced.png',
//     price: '₹21,999.00',
//     originalPrice: '₹24,999.00',
//     discount: '-12%',
//     category: 'Development',
//   },
//   {
//     id: 7,
//     title: 'Basic Website Development',
//     image: '/images/basic.png',
//     price: '₹9,999.00',
//     originalPrice: '₹14,999.00',
//     discount: '-33%',
//     category: 'Development',
//   },
//   {
//     id: 8,
//     title: 'Search Engine Optimization',
//     image: '/images/seo.png',
//     price: '₹8,999.00',
//     originalPrice: '₹12,999.00',
//     discount: '-31%',
//     category: 'Marketing',
//   },
// ];

// const categories = ['All', 'Design', 'Development', 'Marketing'];

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const filteredProducts =
//     selectedCategory === 'All'
//       ? products
//       : products.filter((p) => p.category === selectedCategory);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//   };

//   return (
//     <>
//       <div className="shop-slider-container">
//         <Slider {...settings}>
//           {slides.map((slide, index) => (
//             <div className="slide" key={index}>
//               <div className="slide-content">
//                 <div className="text-content">
//                   <p className="tag">PROMOTION</p>
//                   <h2>
//                     {slide.title} <span>{slide.highlight}</span>
//                   </h2>
//                   <p className="subtext">{slide.description}</p>
//                   <button className="shop-btn">SHOP NOW</button>
//                 </div>
//                 <div className="image-content">
//                   <img src={slide.image} alt={slide.highlight} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Category Tabs */}
//       <div className="category-tabs">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setSelectedCategory(cat)}
//             className={selectedCategory === cat ? 'active' : ''}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <div className="product-grid">
//         {filteredProducts.map((product) => (
//           <div className="product-card" key={product.id}>
//             {product.discount && <span className="discount">{product.discount}</span>}
//             <img src={product.image} alt={product.title} />
//             <h4>{product.title}</h4>
//             <p className="price">
//               {product.originalPrice && (
//                 <span className="original">{product.originalPrice}</span>
//               )}
//               <span className="final">{product.price}</span>
//             </p>
//           </div>
//         ))}
//       </div>

//       <h3 className="section-heading">Best selling items</h3>
//     </>
//   );
// };

// export default Shop;



