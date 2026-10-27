import React, { useState } from 'react';
import { X, HeartHandshake, Search, MapPin, Clock, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import './ActionModal.css';

export default function ActionModal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    foodType: 'Prepared Meals',
    servings: '',
    pickupWindow: 'Within 2 hours',
    contact: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const sampleSurplusFeed = [
    {
      id: 1,
      source: 'Sunbeam Organic Bakery (Sample)',
      category: 'Artisan Bread & Pastries',
      quantity: '40 loaves (~80 portions)',
      distance: '0.4 miles away (Demo)',
      readyUntil: 'Pickup Window: 45 mins',
      status: 'Demo Available'
    },
    {
      id: 2,
      source: 'Harbor Greens Grocers (Sample)',
      category: 'Fresh Produce & Fruit Crates',
      quantity: '6 crates (~120 lbs)',
      distance: '1.2 miles away (Demo)',
      readyUntil: 'Pickup Window: 2 hours',
      status: 'Demo Available'
    },
    {
      id: 3,
      source: 'Golden Spire Catering (Sample)',
      category: 'Warm Banquet Rice & Vegetable Curry',
      quantity: '55 prepared trays',
      distance: '1.8 miles away (Demo)',
      readyUntil: 'Pickup Window: 1 hour',
      status: 'Demo Available'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={resetAndClose}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {mode === 'donate' ? (
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-icon-wrap donate">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h3 className="modal-title">Donate Surplus Food</h3>
                <p className="modal-subtitle">Quick intake to connect your surplus with nearby verified shelters</p>
              </div>
            </div>

            {submitted ? (
              <div className="modal-success-box">
                <CheckCircle2 size={48} className="success-icon" />
                <h4>Donation Listing Posted! (Demo)</h4>
                <p>
                  Thank you! [Demo Mode] In live deployment, nearby verified partner NGOs will be automatically notified to claim and pick up within your specified window.
                </p>
                <div className="success-summary">
                  <strong>Estimated Meals Saved (Demo Estimate):</strong> {formData.servings || '40'} portions
                </div>
                <button type="button" className="btn btn-primary" onClick={resetAndClose}>
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label htmlFor="businessName">Donor / Business Name</label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    placeholder="e.g. Blue Bistro, Central Bakery"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="foodType">Food Category</label>
                    <select
                      id="foodType"
                      name="foodType"
                      value={formData.foodType}
                      onChange={handleInputChange}
                    >
                      <option value="Prepared Meals">Cooked / Prepared Meals</option>
                      <option value="Bakery & Bread">Bakery & Bread</option>
                      <option value="Fresh Produce">Fresh Produce / Fruits</option>
                      <option value="Dairy & Chilled">Dairy & Chilled Items</option>
                      <option value="Packaged Goods">Packaged / Dry Goods</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="servings">Estimated Servings</label>
                    <input
                      id="servings"
                      name="servings"
                      type="number"
                      required
                      min="1"
                      placeholder="e.g. 50"
                      value={formData.servings}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pickupWindow">Pickup Window</label>
                    <select
                      id="pickupWindow"
                      name="pickupWindow"
                      value={formData.pickupWindow}
                      onChange={handleInputChange}
                    >
                      <option value="Within 1 hour">Immediate (Next 1 hour)</option>
                      <option value="Within 2 hours">Within 2 hours</option>
                      <option value="This afternoon">This afternoon</option>
                      <option value="Tonight before 10pm">Tonight before 10 PM</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact">Phone or Email</label>
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      placeholder="For driver verification"
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="notice-box">
                  <AlertCircle size={16} />
                  <span>Protected under the Bill Emerson Good Samaritan Food Donation Act.</span>
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn btn-secondary" onClick={resetAndClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <HeartHandshake size={18} />
                    <span>Publish Donation Alert</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-icon-wrap find">
                <Search size={24} />
              </div>
              <div>
                <h3 className="modal-title">Find Surplus Food</h3>
                <p className="modal-subtitle">Live available donations for verified community shelters and kitchens</p>
              </div>
            </div>

            <div className="feed-filter-bar">
              <span className="live-pulse-badge">
                <span className="pulse-dot"></span> Demonstration Feed • Sample Listings
              </span>
            </div>

            <div className="surplus-list">
              {sampleSurplusFeed.map((item) => (
                <div key={item.id} className="feed-item">
                  <div className="feed-item-top">
                    <div>
                      <span className="sample-indicator-pill">Demo Sample</span>
                      <h4 className="feed-source">{item.source}</h4>
                      <p className="feed-category">{item.category}</p>
                    </div>
                    <span className="feed-status-badge">{item.status}</span>
                  </div>

                  <div className="feed-item-meta">
                    <span className="feed-meta-pill">
                      <MapPin size={13} />
                      {item.distance}
                    </span>
                    <span className="feed-meta-pill">
                      <Clock size={13} />
                      {item.readyUntil}
                    </span>
                    <span className="feed-meta-pill highlight">
                      {item.quantity}
                    </span>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-primary claim-btn"
                    onClick={() => alert(`[Demonstration Only] Sample pickup reservation initiated for "${item.source}". This is a demo simulation.`)}
                  >
                    Claim Donation For Pickup (Demo)
                  </button>
                </div>
              ))}
            </div>

            <div className="modal-footer-note">
              <Sparkles size={14} />
              <span>Are you a newly registered NGO? Complete your verification to unlock scheduled daily routes.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
