const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'chatbot/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Fygurs branding colors
        fygurs: {
          DEFAULT: '#000000', // Black background from website
          foreground: '#FFFFFF', // White text on dark background
          accent: '#FFFFFF', // White for the logo
          hover: '#333333', // Slightly lighter black for hover states
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Chatbot specific colors
        chatbot: {
          bubble: {
            user: '#333333',       // Dark gray for user messages
            bot: '#000000',        // Black for bot messages
            userText: '#FFFFFF',   // White text for user
            botText: '#FFFFFF',    // White text for bot
          },
          container: {
            bg: '#000000',         // Black background matching site
            border: '#333333',     // Dark gray border
          },
          button: {
            primary: '#FFFFFF',    // White buttons
            primaryText: '#000000', // Black text on buttons
            hover: '#CCCCCC',      // Light gray on hover
          },
          input: {
            bg: '#111111',         // Very dark gray for input
            text: '#FFFFFF',       // White text
            border: '#333333',     // Dark gray border
            placeholder: '#777777' // Gray placeholder text
          }
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
        // Custom rounded corners for chat elements
        chatBubble: '12px',
        chatInput: '8px'
      },
      boxShadow: {
        chatbot: '0 4px 20px rgba(0, 0, 0, 0.25)', // Shadow for the chatbot container
        bubble: '0 2px 5px rgba(0, 0, 0, 0.1)',    // Shadow for chat bubbles
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'slide-from-left': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-to-left': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        },
        // Chatbot specific animations
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'slide-in-bottom': {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: 0
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: 1
          }
        },
        'pulse-dot': {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: 0.5
          },
          '50%': { 
            transform: 'scale(1)',
            opacity: 1
          },
          '100%': { 
            transform: 'scale(0.95)',
            opacity: 0.5
          }
        },
        'typing': {
          '0%': { width: '0%' },
          '20%': { width: '20%' },
          '40%': { width: '40%' },
          '60%': { width: '60%' },
          '80%': { width: '80%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'slide-from-left':
          'slide-from-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'slide-to-left':
          'slide-to-left 0.25s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        // Chatbot specific animations
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
        'pulse-dot': 'pulse-dot 1.5s infinite ease-in-out',
        'typing': 'typing 1.5s ease-in-out infinite alternate',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'), 
    require('@tailwindcss/typography'),
    // Add any additional plugins needed for the chatbot
  ]
}
