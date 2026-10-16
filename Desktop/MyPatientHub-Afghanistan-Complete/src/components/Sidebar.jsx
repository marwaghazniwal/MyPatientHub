import React from 'react';
import { LayoutDashboard, Stethoscope, Hospital, ShoppingBag, CalendarDays, Heart, Package, Headphones, ArrowRight } from 'lucide-react';

const items = [
  { label: 'Overview', Icon: LayoutDashboard },
  { label: 'Find a Doctor', Icon: Stethoscope },
  { label: 'Hospitals', Icon: Hospital },
  { label: 'Marketplace', Icon: ShoppingBag },
  { label: 'My Appointments', Icon: CalendarDays },
  { label: 'Services', Icon: Heart },
  { label: 'About & Contact', Icon: Headphones }
];

export default function Sidebar({ active, go, setNotice }) {
  return <aside className="left-rail">
    <div className="rail-label">WORKSPACE</div>
    {items.map(({label, Icon}) => <button key={label} onClick={() => go(label)} className={`rail-link ${active === label ? 'selected' : ''}`}><Icon size={18}/><span>{label}</span>{active === label && <span className="rail-dot"/>}</button>)}
    <div className="rail-divider"/>
    <div className="rail-label">YOUR HEALTH</div>
    <button className="rail-link" onClick={() => go('My Appointments')}><Heart size={18}/><span>Saved doctors</span></button>
    <button className="rail-link" onClick={() => go('Marketplace')}><Package size={18}/><span>Equipment orders</span></button>
    <div className="help-card"><span className="help-icon"><Headphones size={19}/></span><strong>Need a hand?</strong><p>Our support team is here to help you find care.</p><button onClick={() => setNotice('Support demo: hello@mypatienthub.af')}>Contact support <ArrowRight size={14}/></button></div>
    <div className="rail-foot"><span className="online-dot"/> Services designed for Afghanistan</div>
  </aside>;
}