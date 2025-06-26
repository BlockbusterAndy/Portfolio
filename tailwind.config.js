/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 15px rgba(255,255, 255, 0.3)",
          "0 0px 50px rgba(255, 255,255, 0.15)"
        ]
      },
      spacing: {
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
      },
      fontSize: {
        'xs': ['0.65rem', { lineHeight: '0.8rem' }],
        'sm': ['0.7rem', { lineHeight: '0.9rem' }],
        'base': ['0.8rem', { lineHeight: '1rem' }],
        'lg': ['0.9rem', { lineHeight: '1.1rem' }],
        'xl': ['1rem', { lineHeight: '1.3rem' }],
        '2xl': ['1.2rem', { lineHeight: '1.5rem' }],
        '3xl': ['1.5rem', { lineHeight: '1.8rem' }],
        '4xl': ['1.8rem', { lineHeight: '2.1rem' }],
        '5xl': ['2.4rem', { lineHeight: '2.7rem' }],
        '6xl': ['3rem', { lineHeight: '3.3rem' }],
      },
    },
    colors:{
      primaryBg: '#0A0A0A',
      cardBg: '#121212',
      primaryText: '#F5F5F5',
      secondaryText: '#A3A3A3',
      // Add semantic colors that work with both themes
      background: '#0A0A0A',
      foreground: '#F5F5F5',
      // Keep existing colors and add theme-aware variants
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      blue: {
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
      },
      green: {
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
      },
      yellow: {
        400: '#facc15',
        500: '#eab308',
      },
    }
  },
  plugins: [],
}

