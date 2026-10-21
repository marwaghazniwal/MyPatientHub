import React, { useMemo, useState } from 'react';
import { doctors, products } from './data/medicalData.js';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './components/Dashboard.jsx';
import DoctorDirectory from './components/DoctorDirectory.jsx';
import HospitalsPage from './components/Hospitals.jsx';
import Marketplace from './components/Marketplace.jsx';
import Appointments from './components/Appointments.jsx';
import BookingModal from './components/BookingModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import AuthPage from './components/AuthPage.jsx';
import Services from './components/Services.jsx';
import AboutContact from './components/AboutContact.jsx';

export default function App() {
  const [active, setActive] = useState('Overview');
  const [currentUser, setCurrentUser] = useState(() => { try { return JSON.parse(localStorage.getItem('mph-demo-session') || 'null'); } catch { return null; } });
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState('EN');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [specialty, setSpecialty] = useState('All specialties');
  const [city, setCity] = useState('All Afghanistan');
  const [productSearch, setProductSearch] = useState('');
  const [productCategory, setProductCategory] = useState('All equipment');
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [booking, setBooking] = useState(null);
  const [booked, setBooked] = useState([]);
  const [notice, setNotice] = useState('');

  const go = page => { setActive(page); setMobileMenu(false); window.scrollTo({top:0,behavior:'smooth'}); };
  const signOut = () => { localStorage.removeItem('mph-demo-session'); setCurrentUser(null); setActive('Overview'); };
  const filteredDoctors = useMemo(() => doctors.filter(d => {
    const q = search.toLowerCase();
    return (!q || `${d.name} ${d.specialty} ${d.hospital} ${d.city}`.toLowerCase().includes(q)) &&
      (specialty === 'All specialties' || d.specialty === specialty) &&
      (city === 'All Afghanistan' || d.city === city);
  }), [search, specialty, city]);
  const filteredProducts = useMemo(() => products.filter(p =>
    (productCategory === 'All equipment' || p.category === productCategory) &&
    (!productSearch || p.name.toLowerCase().includes(productSearch.toLowerCase()))
  ), [productSearch, productCategory]);
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartTotal = products.reduce((sum, p) => sum + p.price * (cart[p.id] || 0), 0);
  const addToCart = id => { setCart(prev => ({...prev,[id]:(prev[id]||0)+1})); setNotice('Added to your equipment basket'); window.setTimeout(()=>setNotice(''),2200); };
  const changeQty = (id, delta) => setCart(prev => { const next={...prev,[id]:Math.max(0,(prev[id]||0)+delta)}; if(!next[id]) delete next[id]; return next; });
  const submitBooking = doctor => { setBooked(prev => prev.includes(doctor.id) ? prev : [...prev,doctor.id]); setBooking(null); setNotice(`Appointment request saved for ${doctor.name}`); window.setTimeout(()=>setNotice(''),3000); };

  if (!currentUser) return <div className={`app ${dark?'dark':''}`}><AuthPage onAuthenticated={setCurrentUser} dark={dark} setDark={setDark}/></div>;

  return <div className={`app ${dark?'dark':''}`}>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <Navbar active={active} go={go} dark={dark} setDark={setDark} lang={lang} setLang={setLang} cartCount={cartCount} setCartOpen={setCartOpen} mobileMenu={mobileMenu} setMobileMenu={setMobileMenu}/>
    <main className="page-shell">
      <Sidebar active={active} go={go} setNotice={setNotice}/>
      <section className="main-content">
        <div className="signed-in-strip"><span>Signed in as <strong>{currentUser.name || currentUser.email || "Guest"}</strong>{currentUser.role && <small>{currentUser.role}</small>}</span><button onClick={signOut}>Sign out</button></div>
        {active==='Overview' && <Dashboard go={go} setSearch={setSearch}/>}
        {active==='Find a Doctor' && <DoctorDirectory search={search} setSearch={setSearch} specialty={specialty} setSpecialty={setSpecialty} city={city} setCity={setCity} doctors={filteredDoctors} setBooking={setBooking}/>}
        {active==='Hospitals' && <HospitalsPage go={go}/>}
        {active==='Services' && <Services go={go}/>}
        {active==='About & Contact' && <AboutContact go={go} setNotice={setNotice}/>} 
        {active==='Marketplace' && <Marketplace search={productSearch} setSearch={setProductSearch} category={productCategory} setCategory={setProductCategory} products={filteredProducts} addToCart={addToCart}/>}
        {active==='My Appointments' && <Appointments booked={booked} setBooking={setBooking} go={go}/>}
        <Footer/>
      </section>
    </main>
    <BookingModal doctor={booking} onClose={()=>setBooking(null)} onSubmit={submitBooking}/>
    <CartDrawer open={cartOpen} onClose={()=>setCartOpen(false)} cart={cart} products={products} changeQty={changeQty} cartCount={cartCount} cartTotal={cartTotal} setNotice={setNotice} go={go}/>
    {notice && <div className="toast"><span className="toast-check">✓</span>{notice}<button onClick={()=>setNotice('')}>×</button></div>}
  </div>;
}