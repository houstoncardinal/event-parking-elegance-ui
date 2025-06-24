
'use client';

import React from 'react';
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { FeaturesSectionWithHoverEffects } from '@/components/feature-section-with-hover-effects';
import { AnimatedGeometricBackground } from '@/components/animated-geometric-background';
import { cn } from '@/lib/utils';
import { GlowCard } from '@/components/ui/spotlight-card';

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
                <div aria-hidden className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-32 md:pt-40 lg:pt-48">
                        {/* Enhanced animated geometric background */}
                        <div className="absolute inset-0 pointer-events-auto" style={{ zIndex: 1 }}>
                            <AnimatedGeometricBackground />
                        </div>
                        
                        <AnimatedGroup variants={{
            container: {
              visible: {
                transition: {
                  delayChildren: 1
                }
              }
            },
            item: {
              hidden: {
                opacity: 0,
                y: 20
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  bounce: 0.3,
                  duration: 2
                }
              }
            }
          }} className="absolute inset-0 -z-20">
                            <img src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120" alt="background" className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block" width="3276" height="4095" />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6 relative z-10">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <a href="#link" className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border border-gray-200 p-2 pl-6 pr-2 shadow-lg shadow-black/10 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 hover:shadow-xl">
                                        <span className="text-foreground text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Introducing Premium Valet Services</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-gray-300 dark:bg-zinc-700"></span>

                                        <div className="bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700 size-8 overflow-hidden rounded-full duration-300 shadow-md">
                                            <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-8">
                                                    <ArrowRight className="m-auto size-4 text-white" />
                                                </span>
                                                <span className="flex size-8">
                                                    <ArrowRight className="m-auto size-4 text-white" />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                        
                                    <h1 className="mt-12 max-w-5xl mx-auto text-balance text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] lg:mt-20">
                                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Executive Valet Solutions</span>
                                        <br />
                                        <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">for Modern Business</span>
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-2xl text-balance text-xl leading-relaxed text-gray-600 font-medium">
                                        Professional valet parking services that elevate your corporate events, weddings, and exclusive gatherings with unmatched attention to detail.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.75
                    }
                  }
                },
                ...transitionVariants
              }} className="mt-16 flex flex-col items-center justify-center gap-4 md:flex-row">
                                    <div key={1} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-0.5 shadow-xl">
                                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-[14px] px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                            <a href="#booking">
                                                <span className="text-nowrap">Book Valet Service</span>
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </a>
                                        </Button>
                                    </div>
                                    <Button key={2} asChild size="lg" variant="outline" className="h-14 rounded-2xl px-8 py-4 text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                                        <a href="#contact">
                                            <span className="text-nowrap">Request a Quote</span>
                                        </a>
                                    </Button>
                                </AnimatedGroup>

                                {/* Replace the three GlowCards with FeaturesSectionWithHoverEffects */}
                                <div className="mt-20">
                                    <FeaturesSectionWithHoverEffects />
                                </div>
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
                            <div className="relative -mr-56 mt-16 overflow-hidden px-2 sm:mr-0 sm:mt-20 md:mt-24">
                                <div aria-hidden className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%" />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 p-6 shadow-2xl shadow-zinc-950/20 ring-1">
                                    <img className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block" src="https://tailark.com//_next/image?url=%2Fmail2.png&w=3840&q=75" alt="Valet service dashboard" width="2700" height="1440" />
                                    <img className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden" src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75" alt="Valet service dashboard" width="2700" height="1440" />
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
                <div className={cn('mx-auto mt-4 max-w-7xl px-8 transition-all duration-300 lg:px-12', isScrolled && 'bg-white/95 max-w-5xl rounded-2xl border border-gray-200 backdrop-blur-lg shadow-xl lg:px-8')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0 lg:py-5">
                        <div className="flex w-full justify-between lg:w-auto">
                            <a href="/" aria-label="home" className="flex items-center space-x-3">
                                <Logo />
                            </a>

                            <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10 text-base">
                                {menuItems.map((item, index) => <li key={index}>
                                        <a href={item.href} className="text-gray-700 hover:text-blue-600 font-medium block duration-200 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">
                                            <span>{item.name}</span>
                                        </a>
                                    </li>)}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => <li key={index}>
                                            <a href={item.href} className="text-gray-700 hover:text-blue-600 font-medium block duration-200">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>)}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button asChild variant="outline" size="sm" className={cn('border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 font-medium', isScrolled && 'lg:hidden')}>
                                    <a href="#contact">
                                        <span>Get Quote</span>
                                    </a>
                                </Button>
                                <Button asChild size="sm" className={cn('bg-blue-600 hover:bg-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-200', isScrolled && 'lg:hidden')}>
                                    <a href="#booking">
                                        <span>Book Now</span>
                                    </a>
                                </Button>
                                <Button asChild size="sm" className={cn('bg-blue-600 hover:bg-blue-700 font-medium shadow-md hover:shadow-lg transition-all duration-200', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <a href="#booking">
                                        <span>Get Started</span>
                                    </a>
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg"></div>
                <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
                    <div className="text-blue-600 font-bold text-lg">EPS</div>
                </div>
            </div>
            <div className="flex flex-col leading-tight">
                <div className="font-bold text-xl text-gray-800">Event Parking</div>
                <div className="font-medium text-sm text-blue-600 -mt-1">Premium Valet</div>
            </div>
        </div>;
};
