export const doctors = [
  { id: 1, name: 'Dr. Farzana Rahimi', specialty: 'Cardiology', hospital: 'Kabul City Medical Center', city: 'Kabul', age: 42, gender: 'Female', days: 'Saturday–Wednesday', hours: '9:00 AM – 3:00 PM', experience: '12 years', rating: 4.9, reviews: 128, fee: 800, initials: 'FR', color: 'rose', available: 'Today, 2:30 PM' },
  { id: 2, name: 'Dr. Ahmad Wali', specialty: 'General Medicine', hospital: 'Arya Specialty Hospital', city: 'Kabul', age: 38, gender: 'Male', days: 'Saturday–Thursday', hours: '10:00 AM – 5:00 PM', experience: '9 years', rating: 4.8, reviews: 96, fee: 500, initials: 'AW', color: 'blue', available: 'Today, 4:00 PM' },
  { id: 3, name: 'Dr. Laila Sediqi', specialty: 'Pediatrics', hospital: 'Sehat Children Clinic', city: 'Herat', age: 40, gender: 'Female', days: 'Saturday–Wednesday', hours: '8:30 AM – 2:00 PM', experience: '10 years', rating: 4.9, reviews: 114, fee: 600, initials: 'LS', color: 'lilac', available: 'Tomorrow, 9:00 AM' },
  { id: 4, name: 'Dr. Omar Safi', specialty: 'Dermatology', hospital: 'Wazir Akbar Khan Hospital', city: 'Kabul', age: 36, gender: 'Male', days: 'Sunday–Thursday', hours: '1:00 PM – 6:00 PM', experience: '8 years', rating: 4.7, reviews: 73, fee: 650, initials: 'OS', color: 'mint', available: 'Today, 5:15 PM' },
  { id: 5, name: 'Dr. Mariam Noori', specialty: 'Gynecology', hospital: 'Balkh Regional Clinic', city: 'Mazar-i-Sharif', age: 46, gender: 'Female', days: 'Saturday–Wednesday', hours: '9:00 AM – 1:00 PM', experience: '14 years', rating: 4.9, reviews: 151, fee: 700, initials: 'MN', color: 'peach', available: 'Tomorrow, 11:30 AM' },
  { id: 6, name: 'Dr. Zahir Khan', specialty: 'Orthopedics', hospital: 'Herat Central Hospital', city: 'Herat', age: 43, gender: 'Male', days: 'Saturday–Thursday', hours: '8:00 AM – 12:00 PM', experience: '11 years', rating: 4.8, reviews: 88, fee: 750, initials: 'ZK', color: 'blue', available: 'Friday, 10:00 AM' }
];

export const hospitals = [
  { name: 'Kabul City Medical Center', type: 'Multi-specialty hospital', city: 'Kabul', services: 'Cardiology · Imaging · Lab', rating: '4.8', color: 'mint' },
  { name: 'Arya Specialty Hospital', type: 'Private hospital', city: 'Kabul', services: 'Surgery · Maternity · ICU', rating: '4.7', color: 'blue' },
  { name: 'Herat Central Hospital', type: 'Regional hospital', city: 'Herat', services: 'Emergency · Pediatrics · Lab', rating: '4.6', color: 'lilac' },
  { name: 'Balkh Regional Clinic', type: 'Regional clinic', city: 'Mazar-i-Sharif', services: 'General care · Maternity · Lab', rating: '4.6', color: 'peach' }
];

export const products = [
  { id: 1, name: 'Digital Blood Pressure Monitor', category: 'Monitoring', price: 2850, old: 3200, rating: 4.8, stock: 'In stock', icon: 'Activity', color: 'mint', tag: 'Bestseller' },
  { id: 2, name: 'Professional Stethoscope', category: 'Diagnostic', price: 1750, old: 2100, rating: 4.7, stock: 'In stock', icon: 'Stethoscope', color: 'blue', tag: 'Popular' },
  { id: 3, name: 'First Aid Kit — 45 pieces', category: 'First Aid', price: 1250, rating: 4.9, stock: 'In stock', icon: 'Bandage', color: 'peach', tag: 'Essential' },
  { id: 4, name: 'Digital Thermometer', category: 'Monitoring', price: 420, old: 500, rating: 4.6, stock: 'In stock', icon: 'Thermometer', color: 'lilac', tag: 'Value pick' },
  { id: 5, name: 'Portable Pulse Oximeter', category: 'Monitoring', price: 1150, rating: 4.8, stock: 'Low stock', icon: 'HeartPulse', color: 'rose', tag: 'Clinic ready' },
  { id: 6, name: 'Medical Examination Gloves', category: 'Consumables', price: 380, rating: 4.5, stock: 'In stock', icon: 'ShieldCheck', color: 'blue', tag: 'Box of 100' },
  { id: 7, name: 'Basic Microscope', category: 'Diagnostic', price: 8900, old: 9600, rating: 4.7, stock: 'In stock', icon: 'Microscope', color: 'mint', tag: 'For labs' },
  { id: 8, name: 'Syringe Pack — 10 pieces', category: 'Consumables', price: 180, rating: 4.5, stock: 'In stock', icon: 'Syringe', color: 'peach', tag: 'Clinic supply' }
];

export const specialties = ['All specialties', 'Cardiology', 'General Medicine', 'Pediatrics', 'Dermatology', 'Gynecology', 'Orthopedics'];
export const cities = ['All Afghanistan', 'Kabul', 'Herat', 'Mazar-i-Sharif', 'Kandahar', 'Jalalabad'];
export const money = value => `${Number(value).toLocaleString('en-US')} AFN`;
