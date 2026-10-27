import React from 'react';
import { HeartHandshake, Search, Sparkles } from 'lucide-react';
import './CallToAction.css';

export default function CallToAction({ onDonateClick, onFindFoodClick }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-badge">
            <Sparkles size={14} />
            <span>Join the Movement</span>
          </div>

          <h2 className="cta-title">
            Ready to Bridge the Gap Between Surplus and Hunger?
          </h2>

          <p className="cta-desc">
            Whether you manage a bakery with fresh end-of-day bread or run a shelter serving hot dinners, FoodBridge makes connection effortless.
          </p>

          <div className="cta-button-group">
            <button 
              type="button" 
              className="btn btn-primary btn-lg cta-btn-primary"
              onClick={onDonateClick}
            >
              <HeartHandshake size={20} />
              <span>Donate Food Now</span>
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-lg cta-btn-secondary"
              onClick={onFindFoodClick}
            >
              <Search size={19} />
              <span>Find Food For Your NGO</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
