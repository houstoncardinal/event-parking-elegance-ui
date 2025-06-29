
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Elite VIP Color Palette
				vip: {
					black: '#000000',
					'dark-gray': '#0a0a0a',
					'medium-gray': '#1a1a1a',
					'light-gray': '#2a2a2a',
					white: '#ffffff',
					'off-white': '#f8f8f8',
					accent: '#333333',
					'platinum': '#e5e5e5',
					'silver': '#c0c0c0'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'vip-gradient': 'linear-gradient(135deg, #000000 0%, #0f0f0f 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)',
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.005) 100%)',
				'elite-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #000000 100%)',
				'platinum-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
			},
			boxShadow: {
				'vip': '0 25px 50px rgba(0, 0, 0, 0.6), 0 50px 100px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'vip-glow': '0 0 40px rgba(255, 255, 255, 0.08), 0 0 80px rgba(255, 255, 255, 0.04), 0 0 120px rgba(255, 255, 255, 0.02)',
				'elite': '0 40px 80px rgba(0, 0, 0, 0.8), 0 0 60px rgba(255, 255, 255, 0.08)',
				'neon': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
				'platinum': '0 0 50px rgba(255, 255, 255, 0.15), 0 0 100px rgba(255, 255, 255, 0.08)',
			},
			backdropBlur: {
				'3xl': '64px',
				'4xl': '128px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-15px) rotate(1deg)' },
					'50%': { transform: 'translateY(-30px) rotate(0deg)' },
					'75%': { transform: 'translateY(-15px) rotate(-1deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 30px rgba(255, 255, 255, 0.05), 0 0 60px rgba(255, 255, 255, 0.02)' },
					'50%': { boxShadow: '0 0 50px rgba(255, 255, 255, 0.15), 0 0 100px rgba(255, 255, 255, 0.08), 0 0 150px rgba(255, 255, 255, 0.04)' }
				},
				'scan': {
					'0%': { transform: 'translateX(-100%)', opacity: '0' },
					'25%': { opacity: '1' },
					'75%': { opacity: '1' },
					'100%': { transform: 'translateX(100%)', opacity: '0' }
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)' },
					'100%': { transform: 'translateX(200%) skewX(-15deg)' }
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-in-left': 'slide-in-left 0.8s ease-out',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
				'scan': 'scan 4s ease-in-out infinite',
				'shimmer': 'shimmer 2s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
