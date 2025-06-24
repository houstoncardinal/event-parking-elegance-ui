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
            <main className="overflow-hidden">
                {/* Enhanced luxury background effects with bokeh */}
                <div aria-hidden className="z-[1] absolute inset-0 pointer-events-none isolate opacity-70">
                    <div className="w-[50rem] h-[100rem] -translate-y-[500px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(45,84%,67%,.15)_0,hsla(45,84%,67%,.08)_40%,hsla(45,84%,67%,.02)_70%,hsla(45,84%,67%,0)_100%)]" />
                    <div className="h-[100rem] absolute right-0 top-0 w-80 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(210,40%,15%,.12)_0,hsla(210,40%,15%,.06)_60%,hsla(210,40%,15%,.02)_80%,transparent_100%)] [translate:-5%_-50%]" />
                    <div className="h-[100rem] -translate-y-[500px] absolute left-1/2 top-0 w-96 -rotate-12 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(45,84%,67%,.10)_0,hsla(45,84%,67%,.04)_60%,hsla(45,84%,67%,.01)_80%,transparent_100%)]" />
                    
                    {/* Enhanced luxury glow effects */}
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-gold-300/20 via-gold-400/10 to-transparent rounded-full blur-3xl animate-luxury-float" />
                    <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-tr from-slate-200/15 via-slate-300/8 to-transparent rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '3s' }} />
                    
                    {/* Bokeh light effects */}
                    <div className="absolute top-1/6 left-1/5 w-12 h-12 bg-gold-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute top-1/3 right-1/6 w-8 h-8 bg-gold-300/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s' }} />
                    <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gold-200/25 rounded-full blur-md animate-pulse" style={{ animationDelay: '4s' }} />
                    <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-gold-500/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.8s' }} />
                    <div className="absolute top-1/2 left-1/8 w-10 h-10 bg-slate-300/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '3.2s' }} />
                    <div className="absolute bottom-1/6 right-1/5 w-14 h-14 bg-gold-100/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.8s' }} />
                </div>
                
                <section className="relative">
                    <div className="relative pt-32 md:pt-40 pb-20">
                        {/* Enhanced animated geometric background */}
                        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
                            <AnimatedGeometricBackground />
                        </div>
                        
                        {/* Enhanced luxury gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/98 via-gold-50/30 to-slate-100/95 pointer-events-none" style={{ zIndex: 2 }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gold-50/20 pointer-events-none" style={{ zIndex: 2 }}></div>
                        
                        <div className="w-full px-4 lg:px-8 relative z-10">
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                {/* Left side - Main content */}
                                <div className="text-center lg:text-left">
                                    <AnimatedGroup variants={transitionVariants}>
                                        {/* Enhanced premium badge */}
                                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-50/95 via-white/95 to-gold-100/90 backdrop-blur-xl border border-gold-200/60 rounded-full px-8 py-4 mb-10 shadow-luxury hover:shadow-gold-glow transition-all duration-500 group">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold-glow">
                                                <Crown className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-slate-800 font-semibold text-sm tracking-wide">Premium Valet Services Since 2010</span>
                                            <div className="flex items-center gap-1 ml-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500 drop-shadow-sm" />
                                                ))}
                                            </div>
                                        </div>
                            
                                        {/* Enhanced main headline with luxury gradients */}
                                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-10 leading-[1.05]">
                                            <span className="block bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent drop-shadow-sm">
                                                Executive Parking
                                            </span>
                                            <span className="block bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent drop-shadow-gold relative">
                                                Solutions
                                                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent blur-sm opacity-30 -z-10">
                                                    Solutions
                                                </div>
                                            </span>
                                        </h1>
                                        
                                        {/* Enhanced description */}
                                        <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium drop-shadow-sm">
                                            Distinguished valet services for Fortune 500 companies, luxury events, and discerning clientele. Experience unparalleled professionalism and attention to detail.
                                        </p>

                                        {/* Enhanced trust indicators */}
                                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-10 mb-14 text-slate-600">
                                            <div className="flex items-center gap-4 group">
                                                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gold-100 via-gold-200 to-gold-300 border border-gold-300/40 shadow-lg group-hover:shadow-gold-glow transition-all duration-300">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-gold-100 rounded-full blur-sm opacity-50"></div>
                                                    <Shield className="w-5 h-5 text-gold-700 relative z-10" />
                                                </div>
                                                <span className="font-semibold text-sm tracking-wide">Fully Insured & Licensed</span>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border border-slate-300/40 shadow-lg group-hover:shadow-platinum-glow transition-all duration-300">
                                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full blur-sm opacity-50"></div>
                                                    <Clock className="w-5 h-5 text-slate-700 relative z-10" />
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
                                    }} className="flex flex-col items-center lg:items-start justify-center gap-6 md:flex-row">
                                        <Button className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-12 py-5 text-lg font-semibold tracking-wide rounded-xl shadow-luxury hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group border border-slate-700/20">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            <span className="relative z-10">Reserve Valet Service</span>
                                            <ArrowRight className="ml-3 w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                        <Button className="relative overflow-hidden bg-gradient-to-r from-white via-gold-50 to-white hover:from-gold-50 hover:via-gold-100 hover:to-gold-50 text-slate-800 px-12 py-5 text-lg font-semibold tracking-wide border-2 border-gold-300/60 hover:border-gold-400/80 rounded-xl shadow-lg hover:shadow-gold-glow transition-all duration-500 hover:scale-[1.02] group backdrop-blur-sm">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                            <span className="relative z-10">View Portfolio</span>
                                        </Button>
                                    </AnimatedGroup>

                                    {/* Enhanced statistics with luxury presentation */}
                                    <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-gradient-to-r from-transparent via-slate-200 to-transparent">
                                        <div className="text-center lg:text-left group">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">1,500+</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wider uppercase">Premium Events</div>
                                        </div>
                                        <div className="text-center lg:text-left group">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">150K+</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wider uppercase">Vehicles Serviced</div>
                                        </div>
                                        <div className="text-center lg:text-left group">
                                            <div className="text-3xl md:text-4xl font-playfair font-bold bg-gradient-to-br from-gold-600 via-gold-500 to-gold-600 bg-clip-text text-transparent mb-3 drop-shadow-gold group-hover:scale-105 transition-transform duration-300">99.8%</div>
                                            <div className="text-slate-600 text-sm font-semibold tracking-wider uppercase">Client Satisfaction</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right side - Enhanced Premium Quote Form */}
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
                                        <div className="relative">
                                            {/* Enhanced glow effect around form */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gold-200/30 via-transparent to-slate-200/20 rounded-3xl blur-xl scale-105 opacity-60"></div>
                                            <QuoteForm />
                                        </div>
                                    </AnimatedGroup>
                                </div>
                            </div>

                            {/* Features section for desktop */}
                            <div className="mt-28">
                                <FeaturesSectionWithHoverEffects />
                            </div>
                        </div>

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
                            <div className="relative mt-24 overflow-hidden px-4 lg:px-8">
                                <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent from-30% to-slate-50/95" />
                                <div className="relative overflow-hidden">
                                    {/* Enhanced luxury card wrapper */}
                                    <div className="card-luxury relative p-8 bg-gradient-to-br from-white/98 via-gold-50/30 to-white/95 backdrop-blur-xl border border-white/40 shadow-luxury hover:shadow-xl transition-all duration-700 group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold-100/20 via-transparent to-slate-100/20 rounded-2xl"></div>
                                        <img 
                                            className="aspect-15/8 relative rounded-2xl shadow-luxury group-hover:shadow-xl transition-all duration-700 border border-white/60" 
                                            src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75" 
                                            alt="Executive valet service management dashboard" 
                                            width="2700" 
                                            height="1440" 
                                        />
                                    </div>
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
                <div className={cn('mx-auto mt-4 max-w-7xl px-8 transition-all duration-700 lg:px-16', isScrolled && 'glass-luxury max-w-7xl rounded-2xl border border-white/30 lg:px-12 shadow-luxury backdrop-blur-xl')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-8 lg:py-6">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center space-x-3 group">
                                <Logo />
                            </a>

                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden rounded-xl hover:bg-slate-100/80 backdrop-blur-sm transition-all duration-300 border border-transparent hover:border-slate-200/50">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-300 text-slate-700" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-300 text-slate-700" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm font-semibold">
                                {menuItems.map((item, index) => <li key={index}>
                                        <a href={item.href} className="text-slate-700 hover:text-gold-600 block duration-300 tracking-wide px-5 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gold-50 hover:to-gold-100/80 transition-all hover:shadow-sm group">
                                            <span className="relative z-10">{item.name}</span>
                                        </a>
                                    </li>)}
                            </ul>
                        </div>

                        <div className="glass-luxury group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border border-white/30 p-8 shadow-luxury backdrop-blur-xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-semibold">
                                    {menuItems.map((item, index) => <li key={index}>
                                            <a href={item.href} className="text-slate-700 hover:text-gold-600 block duration-300 tracking-wide px-6 py-4 rounded-xl hover:bg-gradient-to-r hover:from-gold-50 hover:to-gold-100/80 transition-all hover:shadow-sm">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-4 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button className={cn('relative overflow-hidden bg-gradient-to-r from-white via-gold-50 to-white hover:from-gold-50 hover:via-gold-100 hover:to-gold-50 text-slate-800 border-2 border-gold-300/60 hover:border-gold-400/80 font-semibold tracking-wide rounded-xl px-6 py-3 text-sm shadow-lg hover:shadow-gold-glow transition-all duration-500 group', isScrolled && 'lg:hidden')}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <span className="relative z-10">Get Quote</span>
                                </Button>
                                <Button className={cn('relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white font-semibold tracking-wide px-6 py-3 text-sm rounded-xl shadow-luxury hover:shadow-xl transition-all duration-500 group border border-slate-700/20', isScrolled && 'lg:hidden')}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <span className="relative z-10">Book Now</span>
                                </Button>
                                <Button className={cn('btn-gold font-semibold tracking-wide px-6 py-3 text-sm group relative overflow-hidden shadow-gold-glow hover:shadow-xl transition-all duration-500 hover:scale-[1.02]', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                    <span className="relative z-10">Get Started</span>
                                    <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
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
            <div className="relative w-12 h-12 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full shadow-gold-glow blur-sm opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-full shadow-luxury border border-gold-400/30 group-hover:border-gold-400/50 transition-all duration-300"></div>
                <div className="absolute inset-1 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-gold-500/40 group-hover:border-gold-500/60 transition-all duration-300">
                    <div className="text-gold-400 group-hover:text-gold-300 font-bold text-sm font-playfair transition-colors duration-300">EP</div>
                </div>
                <Crown className="w-3 h-3 text-gold-400 fill-gold-400 absolute -top-1 -right-1 bg-slate-900 rounded-full p-0.5 border border-gold-400/40 shadow-sm group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col leading-tight">
                <div className="font-playfair font-bold text-lg text-luxury tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                    Executive Parking
                </div>
                <div className="font-inter font-medium text-xs text-gold tracking-widest uppercase -mt-1 group-hover:text-gold-600 transition-colors duration-300">
                    Premium Services
                </div>
            </div>
        </div>;
};
