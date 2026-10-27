import React, { useState } from 'react';
import { 
  UploadCloud, 
  Cpu, 
  Truck, 
  Award, 
  FileCheck2, 
  BellRing, 
  BookmarkCheck, 
  HeartHandshake,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks({ onDonateClick, onFindFoodClick }) {
  const [activeTab, setActiveTab] = useState('donors'); // 'donors' or 'ngos'

  const donorSteps = [
    {
      step: '01',
      icon: UploadCloud,
      title: 'Post Surplus in 60s',
      desc: 'Snap a photo or specify item category, estimated portions, and pickup window before closing time.'
    },
    {
      step: '02',
      icon: Cpu,
      title: 'Smart Instant Match',
      desc: 'Our intelligent routing algorithm instantly notifies nearby verified food banks and shelters.'
    },
    {
      step: '03',
      icon: Truck,
      title: 'Contactless Handover',
      desc: 'NGO representatives or volunteers arrive with a secure digital QR code to verify and collect the food.'
    },
    {
      step: '04',
      icon: Award,
      title: 'Track Real-World Impact',
      desc: 'Receive automated tax-deduction receipts, ESG reporting metrics, and see meals provided.'
    }
  ];

  const ngoSteps = [
    {
      step: '01',
      icon: FileCheck2,
      title: 'Fast NGO Verification',
      desc: 'Register your shelter, kitchen, or non-profit with simple documentation for verified trust.'
    },
    {
      step: '02',
      icon: BellRing,
      title: 'Real-Time Food Alerts',
      desc: 'Receive immediate push notifications when fresh surplus food matches your capacity and dietary criteria.'
    },
    {
      step: '03',
      icon: BookmarkCheck,
      title: 'Claim With One Click',
      desc: 'Secure the donation instantly to prevent duplicate claims and coordinate smooth pickup.'
    },
    {
      step: '04',
      icon: HeartHandshake,
      title: 'Distribute with Dignity',
      desc: 'Deliver hot meals and nutritious groceries safely to underserved community members.'
    }
  ];

  const currentSteps = activeTab === 'donors' ? donorSteps : ngoSteps;

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge-pill badge-pill-green" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Seamless Flow</span>
          </div>
          <h2 className="section-title">How FoodBridge Works</h2>
          <p className="section-desc">
            A frictionless, transparent pipeline connecting food abundance to community need in four effortless steps.
          </p>

          {/* Interactive Role Switcher Tabs */}
          <div className="role-switcher">
            <button 
              type="button"
              className={`switcher-tab ${activeTab === 'donors' ? 'active' : ''}`}
              onClick={() => setActiveTab('donors')}
            >
              For Food Donors
              <span className="tab-pill">Restaurants & Caterers</span>
            </button>
            <button 
              type="button"
              className={`switcher-tab ${activeTab === 'ngos' ? 'active' : ''}`}
              onClick={() => setActiveTab('ngos')}
            >
              For Receiving NGOs
              <span className="tab-pill">Shelters & Food Banks</span>
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="steps-grid">
          {currentSteps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="step-card">
                <div className="step-header">
                  <span className="step-number">{item.step}</span>
                  <div className="step-icon-box">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.desc}</p>
                <div className="step-indicator-bar"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA depending on active tab */}
        <div className="how-it-works-cta">
          {activeTab === 'donors' ? (
            <div className="tab-cta-box">
              <div className="tab-cta-text">
                <h4>Have excess food today?</h4>
                <p>Don't let edible food end up in landfills. Make an impact in minutes.</p>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onDonateClick}
              >
                <span>Donate Food Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div className="tab-cta-box">
              <div className="tab-cta-text">
                <h4>Are you a registered non-profit or shelter?</h4>
                <p>Join our mission to connect registered non-profits with fresh, wholesome surplus food.</p>
              </div>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onFindFoodClick}
              >
                <span>Find Food For Your NGO</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
