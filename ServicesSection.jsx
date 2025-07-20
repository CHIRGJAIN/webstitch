import React from "react";
import "../styles/ServicesSection.css";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable websites with responsive design and seamless user experience. Built for performance and growth.",
    image: "/images/ecommerce.png",
  },
  {
    title: "App Development",
    description:
      "Custom mobile apps for Android & iOS. Intuitive, fast, and tailored to your business needs.",
    image: "/images/custom.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand with data-driven digital marketing, social media, and content strategies.",
    image: "/images/social-marketing.png",
  },
  {
    title: "Creative Design",
    description:
      "Stunning UI/UX, branding, and graphics that make your business stand out online.",
    image: "/images/brand.png",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility and ranking with advanced SEO and analytics solutions.",
    image: "/images/seo.png",
  },
  {
    title: "Brand Strategy",
    description:
      "Comprehensive brand identity, strategy, and positioning for long-term success.",
    image: "/images/brand.png",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-wrapper">
      <h2>
        Services Offered by <span className="highlight">WebStitch</span>
      </h2>
      <p className="services-subtitle">Empowering your business with end-to-end digital solutions</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card pro" key={index}>
            <div className="icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="services-cta">
        <h3>Ready to elevate your business?</h3>
        <a href="/contact" className="cta-btn">Get a Free Consultation</a>
      </div>
    </div>
  );
};

export default ServicesSection;
