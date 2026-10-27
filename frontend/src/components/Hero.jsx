import React from 'react';
import { HeartHandshake, Search, ArrowRight, ShieldCheck, Zap, Sparkles, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import './Hero.css';

export default function Hero({ onDonateClick, onFindFoodClick }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Primary CTAs */}
        <div className="hero-content">
          <div className="badge-pill badge-pill-green hero-badge">
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Hackathon Edition • Fighting Hunger Together</span>
          </div>

          <h1 className="hero-title">
            Turn Surplus Food into <span className="highlight-text">Sustenance & Hope</span>
          </h1>

          <p className="hero-description">
            FoodBridge connects restaurants, grocery stores, and event hosts directly with verified local NGOs. Rescue good food from going to waste and feed families in need within minutes.
          </p>

          <div className="hero-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-lg hero-cta-donate"
              onClick={onDonateClick}
            >
              <HeartHandshake size={20} />
              <span>Donate Food</span>
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg hero-cta-find"
              onClick={onFindFoodClick}
            >
              <Search size={19} />
              <span>Find Food</span>
            </button>
          </div>

          {/* Value Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Zap size={16} className="trust-icon" />
              <span>Instant Geo-Matching</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>100% Verified NGOs</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Safe Food Handling</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Card / Visual Rescue Preview */}
        <div className="hero-visual">
          <div className="visual-card-backdrop"></div>
          
          <div className="rescue-card main-rescue-card">
            <div className="card-demo-badge">Demo Simulation • Sample Data</div>
            <div className="card-header">
              <div className="donor-info">
                <div className="donor-avatar">🥖</div>
                <div>
                  <h4 className="donor-name">GreenLeaf Bakery (Sample Donor)</h4>
                  <p className="donor-sub">Demo Listing • 0.6 miles away</p>
                </div>
              </div>
              <span className="live-status-pill">
                <span className="pulse-dot"></span> Sample Match
              </span>
            </div>

            <div className="donation-details">
              <div className="donation-title">45 Fresh Multigrain & Sourdough Loaves</div>
              <p className="donation-desc">Baked this morning, packaged in hygienic crates ready for immediate pickup (sample data).</p>
              
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Quantity</span>
                  <span className="detail-value">45 Loaves (Sample)</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Pickup Window</span>
                  <span className="detail-value">Demo: Next 45 mins</span>
                </div>
              </div>
            </div>

            {/* Matched NGO Banner */}
            <div className="matched-ngo-banner">
              <div className="ngo-badge-icon">
                <CheckCircle2 size={18} />
              </div>
              <div className="ngo-info">
                <div className="ngo-status">Sample Match (Demo):</div>
                <div className="ngo-name">Hope Community Kitchen (Sample NGO)</div>
              </div>
              <div className="match-time">
                <Clock size={12} />
                <span>Simulated</span>
              </div>
            </div>
          </div>

          {/* Floating Micro Badge */}
          <div className="floating-metric-card metric-co2">
            <div className="metric-icon">🌱</div>
            <div>
              <div className="metric-num">Target Goal</div>
              <div className="metric-label">CO₂ Reduction (Demo Target)</div>
            </div>
          </div>

          <div className="floating-metric-card metric-meals">
            <div className="metric-icon">🍲</div>
            <div>
              <div className="metric-num">Pilot Goal</div>
              <div className="metric-label">Target: Zero Food Waste</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
