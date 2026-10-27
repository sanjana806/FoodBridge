import React, { useState } from 'react';
import { Utensils, HeartHandshake, Search, Menu, X, Leaf } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onDonateClick, onFindFoodClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={closeMobileMenu}>
          <div className="brand-icon-wrapper">
            <Leaf className="brand-icon" size={22} />
          </div>
          <div className="brand-text">
            <span>Food</span>
            <span className="brand-highlight">Bridge</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#impact" className="nav-link">Impact</a>
          <a href="#features" className="nav-link">Why FoodBridge</a>
          <a href="#about" className="nav-link">About Us</a>
        </nav>

        {/* Action Buttons */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn btn-secondary navbar-btn"
            onClick={onFindFoodClick}
          >
            <Search size={16} />
            <span>Find Food</span>
          </button>
          <button 
            type="button" 
            className="btn btn-primary navbar-btn"
            onClick={onDonateClick}
          >
            <HeartHandshake size={18} />
            <span>Donate Food</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          type="button" 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              <a href="#how-it-works" className="mobile-nav-link" onClick={closeMobileMenu}>How It Works</a>
              <a href="#impact" className="mobile-nav-link" onClick={closeMobileMenu}>Impact</a>
              <a href="#features" className="mobile-nav-link" onClick={closeMobileMenu}>Why FoodBridge</a>
              <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</a>
            </nav>
            <div className="mobile-menu-actions">
              <button 
                type="button" 
                className="btn btn-secondary mobile-btn"
                onClick={() => { closeMobileMenu(); onFindFoodClick(); }}
              >
                <Search size={18} />
                <span>Find Food</span>
              </button>
              <button 
                type="button" 
                className="btn btn-primary mobile-btn"
                onClick={() => { closeMobileMenu(); onDonateClick(); }}
              >
                <HeartHandshake size={18} />
                <span>Donate Food</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
