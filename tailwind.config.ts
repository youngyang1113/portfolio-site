import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        panel: 'rgba(15, 23, 42, 0.8)',
        accent: '#38bdf8',
        glow: '#7dd3fc'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 45%)',
      }
    }
  },
  plugins: [],
}

export default config
