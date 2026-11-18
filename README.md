# Prateek Sharma — Engineering Portfolio

> **Full-Stack MERN & Hardware-Connected Systems Engineer**  
> B.E. CSE (Hons. Full Stack Development), Chandigarh University.

A high-depth, tactile, hand-crafted personal portfolio website built with **React, Vite, Tailwind CSS, and Lucide React**. Designed with an authentic, engineered feel—featuring a 3-layer elevation system, engineered dot-grid canvas, warm coral accents (`#FF6B4A`), and integrated visual architecture system flow diagrams.

---

## ✦ Visual Depth & Elevation Architecture

1. **3-Layer Elevation System:**
   - **Layer 1 (Page Canvas):** Deep obsidian-slate (`#0B0C0F`) overlaid with a subtle CSS radial dot-grid texture (`radial-gradient(#232734 1px, transparent 1px)` at `24px 24px` grid spacing).
   - **Layer 2 (Elevated Slate Cards):** Rich dark slate (`#13151C`) with a crisp `1px solid rgba(255,255,255,0.07)` border, faint top-edge highlight (`shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`), and ambient drop shadow (`shadow-xl shadow-black/40`).
   - **Layer 3 (Interactive Hover Surface):** `#181B24` with smooth `transition-all duration-200 hover:-translate-y-0.5 hover:border-white/15`.
2. **Warm Coral Accent System:**
   - Primary buttons, section indices (`01 //`), and active scroll indicators styled in `#FF6B4A` (with hover `#FF5430` and soft `#FF6B4A]/10` badges).
3. **Engineering Typography:**
   - `Inter` for clean geometric headings and body copy.
   - `JetBrains Mono` for section numbers, protocol labels, and architecture nodes.

---

## ✦ Page Sections

- **Sticky Glassmorphic Navbar (`Navbar.jsx`):**
  - Left: Monogram badge `PS` in `#FF6B4A]/15` box + `Prateek Sharma` (scrolls to top).
  - Center/Right: Direct links to `Projects`, `Stack`, `About`, `Contact` with `IntersectionObserver` active indicator bar + `Get in Touch` CTA.
- **Asymmetric 2-Column Hero (`Hero.jsx`):**
  - Left (7 cols): Location/degree badge, bold headline, sub-headline, bio, solid `#FF6B4A` CTA, dark secondary button, plain-text GitHub & LinkedIn links.
  - Right (5 cols): 3-card tactile highlight stack summarizing Full-Stack & Geospatial, IoT & Edge Hardware, and Leadership & Open Source.
- **Selected Projects with Visual System Flow Diagrams (`Projects.jsx`):**
  - 3 horizontal split cards featuring project details on the left (60%) and clean, connected CSS/SVG system topology diagrams on the right (40%):
    1. `Swasthya Seva — Real-Time Health Resource & Bed Telemetry PWA` (`ESP32 Bed Sensor` → `Node/Express API` → `MongoDB GeoJSON` → `Multilingual PWA`)
    2. `Transparency Chain — Decentralized Public Fund Tracker` (`Fund Allocation` → `Solidity Escrow` → `Milestone Verify` → `Public Audit Ledger`)
    3. `Jarvis — Hybrid Online/Offline AI Voice Assistant` (`Voice Capture` → `Intent Router` → `Offline OS Shell / Gemini API`)
- **Tactile Stack & Milestones (`Stack.jsx`):**
  - 2x2 grid of elevated cards with tactile pills (`Frontend`, `Backend & APIs`, `Database`, `Systems & IoT`), followed by a 3-column milestone strip.
- **Beyond the Terminal (`About.jsx`):**
  - 2-column elevated card pair: Competitive Football & Endurance (I-League 3rd Division box-to-box midfielder, 10k–12k runner) and High-Altitude Riding (Royal Enfield Meteor 350 at 3,895m Yulla Kanda).
- **Interactive Contact & Dual EmailJS (`Contact.jsx`):**
  - Left: Tactile dark inputs with validation for Name, Email, Mobile (`+91`), and Message.
  - Right: Plain-text direct contact block with one-click copy buttons and post-submit confirmation banner confirming dispatch to `<visitor_email>`.

---

## 🚀 Running the Project

```bash
# Navigate to the project directory
cd C:\Users\prate\.gemini\antigravity\scratch\prateek-portfolio

# Start the Vite development server
npm run dev

# Or test the production build
npm run build
npm run preview
```

Visit `http://localhost:5173/` in your browser.
