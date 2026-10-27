import React from 'react';
import { Leaf, Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrap" id="about">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-icon-wrapper">
                <Leaf size={20} />
              </div>
              <span className="brand-text">
                Food<span className="brand-highlight">Bridge</span>
              </span>
            </div>
            <p className="footer-tagline">
              An intelligent hyper-local network bridging edible surplus food with verified non-profits and community kitchens to eliminate hunger.
            </p>
            <div className="hackathon-tag">
              🏆 Built for Hackathon 2026 • Frontend Milestone 1
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Platform</h4>
              <ul>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#impact">Impact Statistics</a></li>
                <li><a href="#features">Key Features</a></li>
                <li><a href="#about">About Our Mission</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">For Donors</h4>
              <ul>
                <li><a href="#how-it-works">Restaurant Guidelines</a></li>
                <li><a href="#how-it-works">Food Safety Checklist</a></li>
                <li><a href="#how-it-works">Tax Exemption Info</a></li>
                <li><a href="#how-it-works">ESG & CSR Reporting</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">For NGOs</h4>
              <ul>
                <li><a href="#how-it-works">Register Your NGO</a></li>
                <li><a href="#how-it-works">Verification Steps</a></li>
                <li><a href="#how-it-works">Pickup Logistics</a></li>
                <li><a href="#how-it-works">Volunteer Network</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} FoodBridge Platform. All rights reserved. Made with <Heart size={14} className="heart-icon" /> for zero food waste.
          </p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Good Samaritan Act</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
