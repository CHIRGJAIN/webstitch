import React from "react";
import "../styles/CompanyMission.css";
import { FaRocket, FaHandshake, FaLightbulb, FaUsers, FaReact, FaNodeJs, FaAws, FaCheckCircle, FaLeaf, FaCogs } from "react-icons/fa";

const CompanyMissionSection = () => {
  return (
    <div className="company-hero">
      {/* Hero Section */}
      <section className="company-hero-section">
        <h1>Empowering Digital Transformation</h1>
        <p className="company-hero-subtext">
          At Webstitch, we help businesses grow, innovate, and thrive in the digital era. Our mission is to deliver scalable, high-performance solutions that drive real results.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="company-mission-vision">
        <div className="mv-card">
          <FaRocket className="mv-icon" />
          <h2>Our Mission</h2>
          <p>
            To empower organizations with cutting-edge technology, creative solutions, and a client-first approach—enabling them to achieve digital excellence and sustainable growth.
          </p>
        </div>
        <div className="mv-card">
          <FaLightbulb className="mv-icon" />
          <h2>Our Vision</h2>
          <p>
            To be the most trusted partner for digital transformation, recognized for our innovation, integrity, and impact on businesses worldwide.
          </p>
        </div>
      </section>

      {/* Our Story / Background */}
      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Founded by passionate technologists, Webstitch began as a vision to bridge the gap between business goals and digital possibilities. From our first project in 2017 to serving 580+ clients globally, we've grown through innovation, dedication, and a relentless pursuit of excellence. Our journey is marked by award-winning projects, long-term partnerships, and a commitment to making technology accessible for all.
        </p>
        <div className="company-milestones">
          <div className="milestone-card">
            <span className="milestone-year">2017</span>
            <p>Webstitch founded</p>
          </div>
          <div className="milestone-card">
            <span className="milestone-year">2019</span>
            <p>100+ clients served</p>
          </div>
          <div className="milestone-card">
            <span className="milestone-year">2021</span>
            <p>Award-winning projects launched</p>
          </div>
          <div className="milestone-card">
            <span className="milestone-year">2023</span>
            <p>Global client base, 580+ businesses empowered</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="company-values">
        <h2>What We Stand For</h2>
        <div className="values-cards">
          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h4>Innovation</h4>
            <p>We embrace creativity and new ideas to deliver future-ready solutions.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h4>Integrity</h4>
            <p>We build trust through transparency, honesty, and ethical practices.</p>
          </div>
          <div className="value-card">
            <FaCogs className="value-icon" />
            <h4>Excellence</h4>
            <p>We set high standards and strive for quality in everything we do.</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h4>Customer Focus</h4>
            <p>Your goals are our priority. We tailor every solution to your needs.</p>
          </div>
        </div>
      </section>

      {/* Technology Partners / Collaborations */}
      <section className="company-tech-partners">
        <h2>Technology Partners</h2>
        <div className="tech-icons">
          <div className="tech-icon-card"><FaReact className="tech-icon" /> React</div>
          <div className="tech-icon-card"><FaNodeJs className="tech-icon" /> Node.js</div>
          <div className="tech-icon-card"><FaAws className="tech-icon" /> AWS</div>
          <div className="tech-icon-card"><FaCheckCircle className="tech-icon" /> MongoDB</div>
          <div className="tech-icon-card"><FaCheckCircle className="tech-icon" /> PostgreSQL</div>
        </div>
        <p className="tech-note">We also collaborate with leading SaaS, cloud, and design partners to deliver the best for our clients.</p>
      </section>

      {/* Client-Focused Approach */}
      <section className="company-client-focus">
        <h2>Client-Focused Approach</h2>
        <p>
          Every business is unique. We listen, learn, and adapt our process to fit your goals. Whether it's a startup website or a complex enterprise platform, we deliver solutions that work for you.
        </p>
        <div className="client-examples">
          <div className="client-example-card">
            <h5>Case: SVK Landmark</h5>
            <p>Custom real estate portal with advanced search and booking features, tailored for client needs.</p>
          </div>
          <div className="client-example-card">
            <h5>Case: Videshi Jodi</h5>
            <p>Scalable matchmaking platform with seamless user experience and robust backend.</p>
          </div>
        </div>
      </section>

      {/* Sustainable and Scalable Solutions */}
      <section className="company-sustainable">
        <h2>Sustainable & Scalable Solutions</h2>
        <div className="sustainable-cards">
          <div className="sustainable-card">
            <FaLeaf className="sustainable-icon" />
            <h4>Built for the Future</h4>
            <p>Our solutions are designed for long-term performance, security, and easy scaling as your business grows.</p>
          </div>
          <div className="sustainable-card">
            <FaRocket className="sustainable-icon" />
            <h4>Continuous Improvement</h4>
            <p>We monitor, optimize, and update your digital assets to keep you ahead in a fast-changing world.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="company-cta">
        <h2>Ready to build with us?</h2>
        <a href="/contact" className="company-cta-btn">Get in Touch</a>
        <a href="/services" className="company-cta-link">Explore Services</a>
      </section>
    </div>
  );
};

export default CompanyMissionSection;
