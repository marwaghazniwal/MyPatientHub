import React from 'react';
import { ArrowRight, BadgeCheck, Heart, Hospital, Star, Clock3 } from 'lucide-react';
import { money } from '../data/medicalData.js';

export function PageHeading({ eyebrow, title, description, action }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}

export function DoctorCard({ doctor: d, onBook, compact = false }) {
  return <article className="doctor-card glass">
    <div className="doctor-card-top"><span className={`avatar ${d.color}`}>{d.initials}</span><span className="verified"><BadgeCheck size={14}/> Verified profile</span>
      <button className="heart-button" aria-label={`Save ${d.name}`} onClick={e => e.currentTarget.classList.toggle('liked')}><Heart size={17}/></button>
    </div>
    <h3>{d.name}</h3><div className="doctor-specialty">{d.specialty}</div>
    <div className="doctor-hospital"><Hospital size={14}/>{d.hospital}</div>
    <div className="doctor-meta"><span><Star size={14} fill="currentColor"/><b>{d.rating}</b> <small>({d.reviews})</small></span><span><Clock3 size={14}/>{d.experience}</span></div>
    <div className="doctor-card-bottom"><div><small>Consultation fee</small><strong>{money(d.fee)}</strong></div><button className="outline-button" onClick={onBook}>{compact ? 'View profile' : 'Book visit'} <ArrowRight size={15}/></button></div>
  </article>;
}

export function EmptyResults({ title, desc }) {
  return <div className="empty-results glass"><h3>{title}</h3><p>{desc}</p></div>;
}