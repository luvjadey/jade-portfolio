import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef7',
          100: '#c5d3e8',
          200: '#8fa7cf',
          300: '#5a7cb6',
          400: '#3a5a93',
          500: '#1f3a6b',
          600: '#142a52',
          700: '#0d1f3d',
          800: '#08152b',
          900: '#050e1f',
          950: '#020815',
        },
        cyber: {
          cyan: '#5eead4',
          blue: '#60a5fa',
          glow: '#7dd3fc',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(125, 211, 252, 0.25)',
        'glow-strong': '0 0 36px rgba(125, 211, 252, 0.45)',
      },
      backgroundImage: {
        'grid-cyber':
          'linear-gradient(rgba(125, 211, 252, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
export default config
