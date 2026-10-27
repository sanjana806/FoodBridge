import React from 'react';
import { 
  MapPin, 
  ShieldAlert, 
  Receipt, 
  Scale, 
  Coins, 
  Smile, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import './Features.css';

const featureList = [
  {
    icon: MapPin,
    title: 'Hyper-Local Proximity Matching',
    desc: 'Surplus food is matched to shelters within minutes of travel time, ensuring hot food stays hot and fresh produce arrives crisp.'
  },
  {
    icon: ShieldAlert,
    title: 'Strict Safety & Hygiene Standards',
    desc: 'Integrated checklist for Good Samaritan Food Act compliance, safe temperature holding, and safe allergen disclosures.'
  },
  {
    icon: Receipt,
    title: 'Instant Tax & ESG Documentation',
    desc: 'Automated digital donation receipts for corporate tax deductions, along with sustainability impact reports for CSR disclosures.'
  },
  {
    icon: Coins,
    title: '100% Free for Non-Profits',
    desc: 'FoodBridge is built to empower frontline community kitchens and charities without charging any access or coordination fees.'
  },
  {
    icon: Scale,
    title: 'Balanced Community Distribution',
    desc: 'Our equitable allocation algorithm prevents surplus concentration, distributing across multiple neighborhood shelters in need.'
  },
  {
    icon: Smile,
    title: 'Restoring Human Dignity',
    desc: 'Ensuring surplus gourmet meals and wholesome groceries nourish people with respect, care, and nutritional variety.'
  }
];

export default function Features() {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-title-wrap">
          <div className="badge-pill badge-pill-green" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} />
            <span>Built For Maximum Impact</span>
          </div>
          <h2 className="section-title">Why Communities Choose FoodBridge</h2>
          <p className="section-desc">
            Engineered specifically to solve the logistical barriers between surplus food and empty plates.
          </p>
        </div>

        <div className="features-grid">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-box">
                  <Icon size={22} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
