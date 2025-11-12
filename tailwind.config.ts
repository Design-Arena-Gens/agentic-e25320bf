import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C7CF2',
        secondary: '#091836',
        accent: '#F2B705'
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        profile: '0 20px 60px -20px rgba(44, 124, 242, 0.3)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at center, rgba(44, 124, 242, 0.15), transparent 60%)'
      }
    }
  },
  plugins: []
};

export default config;
