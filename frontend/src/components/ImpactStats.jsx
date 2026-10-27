import React from 'react';
import { Target, Users, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import './ImpactStats.css';

const projectGoals = [
  {
    id: 1,
    tag: 'Project Goal',
    icon: Target,
    value: 'Zero Waste',
    label: 'Edible Food Diverted',
    sub: 'Platform mission to channel 100% of edible surplus away from landfills'
  },
  {
    id: 2,
    tag: 'Demo Target',
    icon: Users,
    value: '50+ Shelters',
    label: 'Initial Network Goal',
    sub: 'Connecting verified local food banks, pantries and community kitchens'
  },
  {
    id: 3,
    tag: 'Platform Benchmark',
    icon: Clock,
    value: '< 20 Mins',
    label: 'Target Proximity Match',
    sub: 'Rapid geo-dispatch window from donor posting to NGO confirmation'
  },
  {
    id: 4,
    tag: 'Core Principle',
    icon: ShieldCheck,
    value: '100% Free',
    label: 'For Non-Profit Partners',
    sub: 'Zero platform fees for certified charitable organizations'
  }
];

export default function ImpactStats() {
  return (
    <section id="impact" className="stats-section">
      <div className="container">
        <div className="stats-header-wrap">
          <span className="stats-badge">
            <Sparkles size={14} />
            <span>Pilot Objectives & Targets (Demonstration Mode)</span>
          </span>
          <h3 className="stats-header-title">Our Project Goals</h3>
        </div>

        <div className="stats-grid">
          {projectGoals.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="stat-card">
                <span className="stat-tag">{stat.tag}</span>
                <div className="stat-icon-wrapper">
                  <Icon size={24} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sub">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
