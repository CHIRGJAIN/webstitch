import React from 'react';
import '../styles/Portfolio.css';

const templates = [
  {
    title: 'Modern Agency',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    description: 'A clean, modern agency template for creative businesses.',
    url: 'https://preview.colorlib.com/theme/creativeagency/',
  },
  {
    title: 'Startup Landing',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Perfect for SaaS, startups, and product launches.',
    url: 'https://preview.colorlib.com/theme/startup2/',
  },
  {
    title: 'Portfolio Minimal',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Minimalist portfolio for designers and freelancers.',
    url: 'https://preview.colorlib.com/theme/personalportfolio/',
  },
  {
    title: 'Restaurant & Food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    description: 'A delicious template for restaurants and cafes.',
    url: 'https://preview.colorlib.com/theme/pulse/',
  },
  {
    title: 'E-Commerce Shop',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    description: 'Modern e-commerce template for online stores.',
    url: 'https://preview.colorlib.com/theme/shop/',
  },
  {
    title: 'Business Consulting',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    description: 'Professional template for business and consulting firms.',
    url: 'https://preview.colorlib.com/theme/consulting/',
  },
];

const Portfolio = () => (
  <div className="portfolio-page">
    <h2 className="portfolio-heading">Sample Website Portfolio</h2>
    <div className="portfolio-grid">
      {templates.map((tpl, idx) => (
        <div className="portfolio-card" key={idx}>
          <img src={tpl.image} alt={tpl.title} className="portfolio-img" />
          <div className="portfolio-info">
            <h3>{tpl.title}</h3>
            <p>{tpl.description}</p>
            <a href={tpl.url} target="_blank" rel="noopener noreferrer" className="portfolio-btn">View Demo</a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio; 