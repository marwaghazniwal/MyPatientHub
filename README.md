# MyPatientHUB React

React conversion of the supplied MyPatientHUB HTML/CSS/JavaScript pages, built with Vite.

## Run locally
1. Install Node.js (18+ recommended).
2. In this folder run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.
4. Run `npm run build` to create a production build in `dist/`.

## Pages
- `/` Login (demo credentials: `admin` / `12345678`)
- `/dashboard` Dashboard
- `/doctor` Find a Doctor
- `/clinic` Find a Clinic (OpenStreetMap tiles via Leaflet; internet required for map tiles)
- `/market` Marketplace

The supplied HTML/CSS/JS were used as the source. Some integrations shown in the originals (social authentication, real booking, and data-backed account services) were demo placeholders and remain illustrative rather than connected to a backend.
