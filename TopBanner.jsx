// src/components/TopBanner.js
import React from "react";
import "../styles/TopBanner.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <p>
        <strong>Now Hiring:</strong> Are you a creative and skilled Graphics Designer??
      </p>
      <div className="contact-icons">
        <span>📞 +91 9654 3084 56</span>
        <span>📧 webstitchh@gmail.com</span>
        <span>📷</span>
        <span>📘</span>
        <span>🟢</span>
      </div>
    </div>
  );
};

export default TopBanner;
