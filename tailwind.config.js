/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0C0F',
        elevated: {
          base: '#13151C',
          hover: '#181B24',
          recessed: '#0E1015',
          pill: '#1A1D26',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          hover: '#FF5430',
          muted: 'rgba(255, 107, 74, 0.15)',
          border: 'rgba(255, 107, 74, 0.35)',
        },
        ink: {
          primary: '#F4F4F6',
          secondary: '#A1A1AA',
          muted: '#71717A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'card': '0 20px 40px -15px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'card-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'inset-top': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(#232734 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '24px 24px',
      }
    },
  },
  plugins: [],
}
