import React from 'react';
import { Cross, Moon, Sun, Languages, ChevronDown, ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar({ active, go, dark, setDark, lang, setLang, cartCount, setCartOpen, mobileMenu, setMobileMenu }) {
  const nav = ['Overview', 'Find a Doctor', 'Hospitals', 'Services', 'Marketplace', 'My Appointments', 'About & Contact'];
  return <>
    <header className="topbar glass">
      <button className="brand" onClick={() => go('Overview')} aria-label="My Patient Hub home">
        <span className="brand-mark"><Cross size={23} strokeWidth={3} /></span>
        <span className="brand-copy"><strong>my patient<span>hub</span></strong><small>HEALTHCARE, CONNECTED</small></span>
      </button>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(label => <button key={label} className={active === label ? 'nav-link active' : 'nav-link'} onClick={() => go(label)}>{label}</button>)}
      </nav>
      <div className="top-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="language-button" onClick={() => setLang(lang === 'EN' ? 'دری' : 'EN')}><Languages size={17}/> {lang} <ChevronDown size={13}/></button>
        <button className="icon-button cart-top" onClick={() => setCartOpen(true)} title="Open basket"><ShoppingCart size={19}/>{cartCount > 0 && <i>{cartCount}</i>}</button>
        <button className="mobile-menu-button" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X/> : <Menu/>}</button>
      </div>
    </header>
    {mobileMenu && <div className="mobile-nav glass">{nav.map(label => <button key={label} onClick={() => go(label)}>{label}</button>)}</div>}
  </>;
}