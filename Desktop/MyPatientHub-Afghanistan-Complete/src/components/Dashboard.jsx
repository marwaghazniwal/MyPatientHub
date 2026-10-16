import React from 'react';
import { Activity, ArrowRight, BadgeCheck, Cross, Heart, HeartPulse, Hospital, MapPin, Package, Search, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { doctors } from '../data/medicalData.js';
import { DoctorCard } from './Shared.jsx';

function Stat({ Icon, label, value, sub, color }) {
  return <div className="stat-card glass"><span className={`stat-icon ${color}`}><Icon size={19}/></span><div className="stat-label">{label}</div><strong className="stat-value">{value}</strong><small>{sub}</small></div>;
}
function ServiceCard({ Icon, number, title, desc, color, onClick, cta }) {
  return <button className="service-card glass" onClick={onClick}><div className="service-card-top"><span className={`service-icon ${color}`}><Icon size={23}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{desc}</p><span className="service-cta">{cta}<ArrowRight size={15}/></span></button>;
}

export default function Dashboard({ go, setSearch }) {
  return <>
    <div className="welcome-row"><div><div className="eyebrow"><span className="live-dot"/> YOUR HEALTH, IN ONE PLACE</div><h1>Care that feels <span>closer.</span></h1><p>Find trusted healthcare professionals, discover hospitals, and shop medical essentials across Afghanistan.</p></div><div className="welcome-art"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-cross"><Cross size={57}/></div><span className="floating-chip chip-one"><HeartPulse size={17}/> Better care</span><span className="floating-chip chip-two"><ShieldCheck size={17}/> Trusted access</span><span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✦</span></div></div>
    <div className="hero-search glass"><span className="search-icon"><Search size={21}/></span><input aria-label="Search doctors or specialties" placeholder="Search doctors, specialties or hospitals..." onChange={e => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' && go('Find a Doctor')}/><button className="primary-button" onClick={() => go('Find a Doctor')}>Find care <ArrowRight size={17}/></button></div>
    <div className="stats-grid"><Stat Icon={Stethoscope} label="Specialist doctors" value="120+" sub="Across key cities" color="mint"/><Stat Icon={Hospital} label="Partner facilities" value="35+" sub="Clinics & hospitals" color="lilac"/><Stat Icon={MapPin} label="Cities covered" value="8" sub="Growing nationwide" color="peach"/><Stat Icon={ShieldCheck} label="Care-first approach" value="100%" sub="Your wellbeing matters" color="blue"/></div>
    <div className="section-heading"><div><div className="eyebrow">GET STARTED</div><h2>What do you need today?</h2><p>Choose a service to get started.</p></div><span className="soft-pill"><Sparkles size={14}/> Made for you</span></div>
    <div className="service-grid"><ServiceCard Icon={Stethoscope} number="01" title="Find a doctor" desc="Explore specialists by expertise, city and availability." color="mint" onClick={() => go('Find a Doctor')} cta="Explore doctors"/><ServiceCard Icon={Hospital} number="02" title="Hospitals & clinics" desc="Discover healthcare facilities and their services." color="lilac" onClick={() => go('Hospitals')} cta="Browse facilities"/><ServiceCard Icon={Package} number="03" title="Medical marketplace" desc="Equipment and everyday essentials for care teams." color="peach" onClick={() => go('Marketplace')} cta="Shop equipment"/></div>
    <div className="section-heading doctors-heading"><div><div className="eyebrow">COMMUNITY PICKS</div><h2>Doctors to know</h2><p>Explore a few featured healthcare professionals.</p></div><button className="text-button" onClick={() => go('Find a Doctor')}>View all doctors <ArrowRight size={16}/></button></div>
    <div className="doctor-preview-grid">{doctors.slice(0,3).map(d => <DoctorCard key={d.id} doctor={d} onBook={() => go('Find a Doctor')} compact/>)}</div>
    <div className="afghan-note glass"><div className="note-icon"><MapPin size={22}/></div><div><strong>Healthcare for every corner of Afghanistan</strong><p>Search Kabul, Herat, Mazar-i-Sharif, Kandahar and Jalalabad. New locations are being added.</p></div><button onClick={() => go('Hospitals')}>Explore locations <ArrowRight size={16}/></button></div>
  </>;
}