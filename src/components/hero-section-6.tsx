'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Menu, X, Crown, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { FeaturesSectionWithHoverEffects } from '@/components/feature-section-with-hover-effects';
import { AnimatedGeometricBackground } from '@/components/animated-geometric-background';
import { cn } from '@/lib/utils';
import { GlowCard } from '@/components/ui/spotlight-card';
import QuoteForm from '@/components/QuoteForm';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5
      }
    }
  }
};

export function HeroSection() {
  return <>
            <HeroHeader />
            <main className="overflow-hidden">
                {/* Luxury background effects */}
                <div aria-hidden className="z-[1] absolute inset-0 pointer-events-none isolate opacity-60">
                    <div className="w-[40rem] h-[90rem] -translate-y-[400px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(45,84%,67%,.12)_0,hsla(45,84%,67%,.04)_50%,hsla(45,84%,67%,0)_80%)]" />
                    <div className="h-[90rem] absolute right-0 top-0 w-64 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,40%,15%,.08)_0,hsla(210,40%,15%,.02)_80%,transparent_100%)] [translate:-5%_-50%]" />
                    <div className="h-[90rem] -translate-y-[400px] absolute left-1/2 top-0 w-72 -rotate-12 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(45,84%,67%,.06)_0,hsla(45,84%,67%,.02)_80%,transparent_100%)]" />
                </div>
                
                <section className="relative">
                    <div className="relative pt-32 md:pt-40 pb-20">
                        {/* Enhanced animated geometric background */}
                        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                            <AnimatedGeometricBackground />
                        </div>
                        
                        {/* Luxury gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-transparent to-gold-50/30 pointer-events-none" style={{ zIndex: 2 }}></div>
                        
                        <div className="mx-auto max-w-7xl px-6 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left side - Main content */}
                                <div className="text-center lg:text-left">
                                    <AnimatedGroup variants={transitionVariants}>
                                        {/* Premium badge */}
                                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-lg backdrop-blur-sm">
                                            <Crown className="w-5 h-5 text-gold-600" />
                                            <span className="text-slate-800 font-semibold text-sm tracking-wide">Premium Valet Services Since 2010</span>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
                                                ))}
                                            </div>
                                        </div>
                            
                                        {/* Main headline */}
                                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-luxury mb-8 leading-[1.1]">
                                            Executive Parking
                                            <span className="block text-gold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                                                Solutions
                                            </span>
                                        </h1>
                                        
                                        {/* Sophisticated description */}
                                        <p className="text-xl lg:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                            Distinguished valet services for Fortune 500 companies, luxury events, and discerning clientele. Experience unparalleled professionalism and attention to detail.
                                        </p>

                                        {/* Trust indicators */}
                                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mb-12 text-slate-600">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 border border-gold-300/30">
                                                    <Shield className="w-5 h-5 text-gold-600" />
                                                </div>
                                                <span className="font-semibold text-sm tracking-wide">Fully Insured & Licensed</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300/30">
                                                    <Clock className="w-5 h-5 text-slate-600" />
                                                </div>
                                                <span className="font-semibold text-sm tracking-wide">24/7 Premium Service</span>
                                            </div>
                                        </div>
                                    </AnimatedGroup>

                                    <AnimatedGroup variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75
                                                }
                                            }
                                        },
                                        ...transitionVariants
                                    }} className="flex flex-col items-center lg:items-start justify-center gap-4 md:flex-row">
                                        <Button className="btn-luxury group shadow-luxury px-10 py-4 text-lg font-semibold tracking-wide">
                                            <span>Reserve Valet Service</span>
                                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                        <Button variant="outline" className="px-10 py-4 text-lg font-semibold tracking-wide border-2 border-slate-300 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 rounded-xl">
                                            <span>View Portfolio</span>
                                        </Button>
                                    </AnimatedGroup>

                                    {/* Statistics - Professional presentation */}
                                    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-200">
                                        <div className="text-center lg:text-left">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold text-luxury mb-2">1,500+</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wide uppercase">Premium Events</div>
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold text-luxury mb-2">150K+</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wide uppercase">Vehicles Serviced</div>
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold text-luxury mb-2">99.8%</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wide uppercase">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Premium Quote Form */}
                                <div className="flex justify-center lg:justify-end">
                                    <AnimatedGroup variants={{
                                        ...transitionVariants,
                                        item: {
                                            ...transitionVariants.item,
                                            hidden: {
                                                ...transitionVariants.item.hidden,
                                                x: 50
                                            },
                                            visible: {
                                                ...transitionVariants.item.visible,
                                                x: 0
                                            }
                                        }
                                    }}>
                                        <QuoteForm />
                                    </AnimatedGroup>
                                </div>
                            </div>

                            {/* Features section for desktop */}
                            <div className="mt-24">
                                <FeaturesSectionWithHoverEffects />
                            </div>
                        </div>

                        {/* Premium dashboard showcase */}
                        <AnimatedGroup variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75
                                    }
                                }
                            },
                            ...transitionVariants
                        }}>
                            <div className="relative mt-20 overflow-hidden px-6">
                                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% to-slate-50" />
                                <div className="card-luxury relative mx-auto max-w-6xl overflow-hidden p-6">
                                    <img 
                                        className="aspect-15/8 relative rounded-2xl shadow-luxury" 
                                        src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75" 
                                        alt="Executive valet service management dashboard" 
                                        width="2700" 
                                        height="1440" 
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>;
}

const menuItems = [{
  name: 'Services',
  href: '#services'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Testimonials',
  href: '#testimonials'
}, {
  name: 'Contact',
  href: '#contact'
}];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return <header>
            <nav data-state={menuState && 'active'} className="fixed z-20 w-full px-4 group">
                <div className={cn('mx-auto mt-4 max-w-6xl px-8 transition-all duration-500 lg:px-12', isScrolled && 'glass-luxury max-w-5xl rounded-2xl border border-white/20 lg:px-8 shadow-luxury')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center space-x-3">
                                <Logo />
                            </a>

                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden rounded-xl hover:bg-slate-100 transition-colors">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-300 text-slate-700" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300 text-slate-700" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10 text-sm font-semibold">
                                {menuItems.map((item, index) => <li key={index}>
                                        <a href={item.href} className="text-slate-700 hover:text-gold-600 block duration-300 tracking-wide px-4 py-2 rounded-lg hover:bg-gold-50 transition-all">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>)}
                            </ul>
                        </div>

                        <div className="glass-luxury group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-white/20 p-8 shadow-luxury md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-semibold">
                                    {menuItems.map((item, index) => <li key={index}>
                                            <a href={item.href} className="text-slate-700 hover:text-gold-600 block duration-300 tracking-wide px-4 py-3 rounded-lg hover:bg-gold-50 transition-all">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-4 sm:flex-row sm:gap-4 sm:space-y-0 md:w-fit">
                                <Button variant="outline" className={cn('border-2 border-slate-300 hover:border-gold-400 hover:bg-gold-50 font-semibold tracking-wide rounded-xl px-6', isScrolled && 'lg:hidden')}>
                                    <span>Get Quote</span>
                                </Button>
                                <Button className={cn('btn-luxury font-semibold tracking-wide px-6', isScrolled && 'lg:hidden')}>
                                    <span>Book Now</span>
                                </Button>
                                <Button className={cn('btn-gold font-semibold tracking-wide px-6 group', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <span>Get Started</span>
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>;
};

const Logo = ({
  className
}: {
  className?: string;
}) => {
  return <div className={cn('flex items-center space-x-3', className)}>
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full shadow-gold-glow blur-sm opacity-75"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full shadow-luxury border border-gold-400/20"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-gold-500/30">
                    <div className="text-gold-400 font-bold text-sm font-playfair">EP</div>
                </div>
                <Crown className="w-3 h-3 text-gold-400 fill-gold-400 absolute -top-1 -right-1 bg-slate-900 rounded-full p-0.5 border border-gold-400/30" />
            </div>
            <div className="flex flex-col leading-tight">
                <div className="font-playfair font-bold text-lg text-luxury tracking-wide">
                    Executive Parking
                </div>
                <div className="font-inter font-medium text-xs text-gold tracking-widest uppercase -mt-1">
                    Premium Services
                </div>
            </div>
        </div>;
};
