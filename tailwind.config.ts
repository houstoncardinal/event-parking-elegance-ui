
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
    			orbitron: [
    				'Orbitron',
    				'monospace'
    			],
    			inter: [
    				'Inter',
    				'sans-serif'
    			],
    			playfair: [
    				'Playfair Display',
    				'serif'
    			]
    		},
    		transitionDuration: {
    			'1200': '1200ms',
    			'1500': '1500ms'
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
			gold: {
				50: 'hsl(var(--gold-50))',
				100: 'hsl(var(--gold-100))',
				200: 'hsl(var(--gold-200))',
				300: 'hsl(var(--gold-300))',
				400: 'hsl(var(--gold-400))',
				500: 'hsl(var(--gold-500))',
				600: 'hsl(var(--gold-600))',
				700: 'hsl(var(--gold-700))',
				800: 'hsl(var(--gold-800))',
				900: 'hsl(var(--gold-900))'
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
    			vip: {
    				black: '#000000',
    				'dark-gray': '#0a0a0a',
    				'medium-gray': '#1a1a1a',
    				'light-gray': '#2a2a2a',
    				white: '#ffffff',
    				'off-white': '#f5f5f5',
    				accent: '#333333'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		backgroundImage: {
    			'vip-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
    			'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)'
    		},
    		boxShadow: {
    			vip: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    			'vip-glow': '0 0 30px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.05)',
    			neon: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'slide-in-left': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-20px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0)'
    				}
    			},
    			float: {
    				'0%, 100%': {
    					transform: 'translateY(0px)'
    				},
    				'50%': {
    					transform: 'translateY(-20px)'
    				}
    			},
    			'pulse-glow': {
    				'0%, 100%': {
    					boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
    				},
    				'50%': {
    					boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
    				}
    			},
    			scan: {
    				'0%': {
    					transform: 'translateX(-100%)',
    					opacity: '0'
    				},
    				'50%': {
    					opacity: '1'
    				},
    				'100%': {
    					transform: 'translateX(100%)',
    					opacity: '0'
    				}
    			},
    			marquee: {
    				to: {
    					transform: 'translateX(-50%)'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.6s ease-out',
    			'slide-in-left': 'slide-in-left 0.6s ease-out',
    			float: 'float 6s ease-in-out infinite',
    			'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
    			scan: 'scan 3s ease-in-out infinite',
    			marquee: 'marquee var(--duration, 30s) linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
