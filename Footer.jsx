import React from "react";
import "../styles/Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <p>Delta-1, Greater Noida, Delhi NCR - 201308</p>
          <p>webstitchh@gmail.com</p>
          <p className="footer-phone">+91 9654308456</p>
          <div className="footer-socials">
            <FaWhatsapp />
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Media Marketing</li>
            <li>Branding</li>
            <li>SEO</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick links</h4>
          <ul>
            <li>Home</li>
            <li>Why Groweb</li>
            <li>Services</li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help & FAQ</li>
            <li>Contact Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 WebsStitch. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
