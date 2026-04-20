import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        surface: {
          900: '#0f172a',
          800: '#16223c',
          700: '#334155',
          600: '#475569',
        },
        accent: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      boxShadow: {
        card: '0 12px 30px rgba(2, 6, 23, 0.28)',
      },
    },
  },
  plugins: [],
} satisfies Config;
