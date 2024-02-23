const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-fredoka)', ...fontFamily.sans],
        hand: ['var(--font-caveat)', ...fontFamily.mono],
        mono: ['var(--font-2p)', ...fontFamily.mono],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        blink: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#1f0e28',
            'text-shadow': 'none',
            'box-shadow': 'none',
            border: '3px solid rgba(22, 182, 212, 0.3)',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 100%': {
            border: '3px solid rgba(22, 182, 212, 1)',
            color: '#ffc2fd',
            'text-shadow':
              '0 0 10px #f205ae, 0 0 20px #f205ae, 0 0 40px #f205ae, 0 0 80px #f205ae, 0 0 160px #f205ae, 0 0 320px #f205ae, 0 0 640px #f205ae',
            'box-shadow':
              'inset 0 0 10px rgba(113,213,255, 0.5), inset 0 0 20px rgba(113,213,255, 0.5), 0 0 10px rgba(113,213,255, 0.3), 0 0 20px rgba(113,213,255, 0.3), 0 0 40px rgba(113,213,255, 0.3), 0 0 80px rgba(113,213,255, 0.3), 0 0 160px rgba(113,213,255, 0.3), 0 0 320px rgba(113,213,255, 0.3)',
          },
        },
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        blink: 'blink 8s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
