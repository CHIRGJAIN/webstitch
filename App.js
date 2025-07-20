// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Layout Components
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Home Page Components
import HeroSection from "./components/HeroSection";
import TestimonialSection from "./components/TestimonialSection";
import StatsProjectsSection from "./components/StatsProjectsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import CompanyMissionSection from "./components/CompanyMissionSection";
import ExcellenceSection from "./components/ExcellenceSection";
import Shop from "./components/shop";
import Portfolio from "./components/Portfolio";

// Pages
import WhyWebstitchPage from "./components/WhyWebStitch";
import ContactUs from "./components/ContactUs"; // ✅ Import Contact Page

function App() {
  return (
    <Router>
      {/* <TopBanner /> */}
      <Header />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <TestimonialSection />
              <StatsProjectsSection />
              <ProjectsSection /> 
              <ServicesSection />
              <CompanyMissionSection />
              <ExcellenceSection />
            </>
          }
        />

        {/* Individual Section Routes */}
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/testimonials" element={<TestimonialSection />} />
        <Route path="/stats-projects" element={<StatsProjectsSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/company" element={<CompanyMissionSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/excellence" element={<ExcellenceSection />} />

        {/* Why Webstitch Route */}
        <Route path="/why-webstitch" element={<WhyWebstitchPage />} />

        {/* Shop Route ✅ */}
        <Route path="/shop" element={<Shop />} />

        {/* Contact Us Route ✅ */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
