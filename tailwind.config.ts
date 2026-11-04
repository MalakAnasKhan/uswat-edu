import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4D2E', // Deep Emerald Green
          dark: '#073620',
          hover: '#083E25',
          light: '#11633C',
          muted: '#E8F3ED',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#C59B27', // Warm Gold
          dark: '#9F7B1C',
          hover: '#B28B21',
          light: '#DEB544',
          subtle: '#FAF5E8',
          foreground: '#0A4D2E',
        },
        accent: {
          DEFAULT: '#C59B27',
          hover: '#B28B21',
          foreground: '#0A4D2E',
        },
        neutral: {
          dark: '#0F172A', // Slate Charcoal
          charcoal: '#1E293B',
          light: '#F8FAFC', // Off-White
          slate: '#F1F5F9', // Cream Slate
          border: '#E2E8F0',
          textMuted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(10, 77, 46, 0.08)',
        card: '0 10px 30px -5px rgba(15, 23, 42, 0.06)',
        dropdown: '0 12px 35px -4px rgba(10, 77, 46, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;

