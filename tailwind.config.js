/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0E0E10',
        surface: '#16161A',
        surfaceHover: '#1C1C22',
        border: '#26262C',
        borderLight: '#32323A',
        primary: '#F4F4F6',
        secondary: '#A1A1AA',
        muted: '#71717A',
        link: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
