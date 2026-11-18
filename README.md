# Prateek Sharma — Personal Portfolio

Clean, minimal, hand-coded portfolio website for **Prateek Sharma** (Full-Stack MERN & Hardware-Connected Systems Engineer), built with **React, Vite, Tailwind CSS, and Lucide React**.

---

## ✦ Design Philosophy
- **Authentic Hand-Built Aesthetic:** No glowing neon gradients, no cursor spotlights, no fake terminal widgets or pulsing badges.
- **Palette:** Matte charcoal (`#0E0E10`) background, subtle elevated surface (`#16161A`), crisp `1px solid #26262C` borders, off-white text (`#F4F4F6`), and muted secondary text (`#A1A1AA`).
- **Typography:** `Inter` for clean headlines/body and `JetBrains Mono` for tech tags and section metadata.
- **Layout:** Centered single-column container (`max-w-4xl mx-auto px-6`) with generous whitespace, sharp alignment, and zero visual clutter.
- **Zero Friction:** Everything is directly scannable on the page—no bento grids, filter pills, or pop-up modals.

---

## 📂 File Structure

```
prateek-portfolio/
├── index.html                   # HTML entry with Inter & JetBrains Mono fonts
├── package.json                 # React, Vite, Tailwind CSS, Lucide React, EmailJS
├── tailwind.config.js           # Matte charcoal theme & typography configuration
├── .env.example                 # Environment variables template
├── .env                         # Local environment settings
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Centered single-column layout
    ├── index.css                # Minimal Tailwind base styles & subtle scrollbar
    ├── data/
    │   └── portfolioData.js     # Clean, centralized content (projects, stack, about)
    ├── services/
    │   └── emailService.js      # Dual EmailJS dispatches with safe simulation fallback
    └── components/
        ├── Navbar.jsx           # Sticky top bar with IntersectionObserver scroll-spy
        ├── Hero.jsx             # Left-aligned typographic intro & action buttons
        ├── Projects.jsx         # 3 clean vertically stacked project cards
        ├── Stack.jsx            # 2-column key-value tech stack & milestone highlights
        ├── About.jsx            # Single human paragraph (football & Himalayan motorcycle)
        ├── Contact.jsx          # Direct two-column form & plain-text contact block
        └── Footer.jsx           # Minimalist copyright line
```

---

## 🚀 Getting Started

1. **Clone or Open:** Open the folder in your IDE:
   ```bash
   cd C:\Users\prate\.gemini\antigravity\scratch\prateek-portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173/`.

4. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📬 Contact Form & EmailJS

The contact form dispatches two emails:
1. An automated thank-you email sent directly to the visitor's email with Prateek's verified contact details.
2. An owner notification email sent to Prateek with the inquiry details.

Configure in `.env`:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_NOTIFY_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
VITE_OWNER_EMAIL=prateeksharma.dev@gmail.com
VITE_OWNER_PHONE="+91 98765 43210"
VITE_OWNER_LINKEDIN=https://linkedin.com/in/prateeksharma-dev
VITE_OWNER_GITHUB=https://github.com/prateeksharma-dev
```

If keys are not provided, the form runs safely in local simulation fallback mode without throwing errors.
