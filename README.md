# My Patient Hub — Afghanistan Edition

A component-based React + Vite frontend inspired by the provided My Patient Hub sample link. It preserves the core healthcare hub concept and adds a glassmorphism visual style, light/dark themes, an account screen, doctor search, hospital directory, services, appointments, marketplace, about/contact pages, and AFN price labels.

## Run locally
1. Extract this folder.
2. Open it in VS Code.
3. In the project root, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the localhost URL printed by Vite. Do not open `index.html` directly.

## Main components
- `AuthPage.jsx` — sign-in, sign-up, guest entry
- `Navbar.jsx`, `Sidebar.jsx`, `Footer.jsx` — shared layout
- `Dashboard.jsx` — overview
- `DoctorDirectory.jsx`, `BookingModal.jsx` — doctor search/details and appointment request
- `Hospitals.jsx` — hospital directory
- `Services.jsx` — services page
- `Marketplace.jsx`, `CartDrawer.jsx` — medical equipment store and basket
- `Appointments.jsx` — appointment requests
- `AboutContact.jsx` — about and contact page
- `Shared.jsx` — reusable page heading, doctor cards and empty state
- `src/data/medicalData.js` — demo listings

## Important demo limitations
The sample website requires JavaScript to render, so its complete live section list could not be inspected from page source alone. This implementation recreates the known healthcare-hub structure rather than claiming a pixel-perfect copy of every live route. Doctor/hospital/product details are illustrative. Sign-in and sign-up use browser local storage for a frontend demonstration only; passwords are not secure and must not be used for real accounts. Real authentication, booking, payment, messaging, provider verification and order fulfilment require a backend. The English/Dari toggle is a placeholder.
