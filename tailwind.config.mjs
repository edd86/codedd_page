/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        surface: {
          DEFAULT: '#131313',
          dim: '#131313',
          bright: '#3a3939',
          lowest: '#0e0e0e',
          low: '#1c1b1b',
          container: '#201f1f',
          high: '#2a2a2a',
          highest: '#353534',
          card: 'rgba(255, 255, 255, 0.03)',
        },
        primary: {
          DEFAULT: '#a855f7',
          light: '#ddb7ff',
          container: '#b76dff',
          dark: '#6900b3',
        },
        secondary: {
          DEFAULT: '#06b6d4',
          light: '#4cd7f6',
          container: '#03b5d3',
          dark: '#004e5c',
        },
        neutral: {
          DEFAULT: '#e5e2e1',
          variant: '#cfc2d6',
          muted: '#988d9f',
          dark: '#1c1b1b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace', 'Inter'],
      },
      borderRadius: {
        'bento': '1rem',
        'inner': '0.5rem',
      },
      boxShadow: {
        'glow-primary': '0 0 40px -10px rgba(168, 85, 247, 0.3)',
        'glow-secondary': '0 0 40px -10px rgba(6, 182, 212, 0.3)',
      },
      backdropBlur: {
        'bento': '12px',
      },
    },
  },
  plugins: [],
};
