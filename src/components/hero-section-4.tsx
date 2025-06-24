
'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu, X, Phone, Shield, Crown, Star, Car, Users, Clock } from 'lucide-react'
import Logo from '@/components/Logo'

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/20 via-blue-300/15 to-slate-200/25 rounded-full blur-3xl animate-float"></div>
                        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-l from-blue-100/30 via-slate-100/20 to-blue-200/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
                    </div>

                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44 relative z-10">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                {/* Executive Badge */}
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-full px-6 py-3 shadow-lg">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                                        <span className="text-slate-700 text-sm font-medium tracking-wide uppercase">
                                            Enterprise Valet Solutions
                                        </span>
                                    </div>
                                </div>

                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-poppins font-bold text-slate-900 md:text-6xl lg:mt-16 xl:text-7xl leading-tight tracking-tight">
                                    Professional Valet Services for 
                                    <span className="block text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text">
                                        Fortune 500
                                    </span>
                                </h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg text-slate-600 leading-relaxed font-light">
                                    Delivering world-class valet parking solutions for luxury events, corporate gatherings, and exclusive venues. Our certified professionals ensure seamless operations with uncompromising attention to detail.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                        <span className="text-nowrap">Schedule Consultation</span>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                        <span className="text-nowrap">Executive Briefing</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="pointer-events-none order-first ml-auto h-56 w-full sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 flex items-center justify-center">
                                {/* Premium Visual Elements */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <div className="absolute w-64 h-64 bg-gradient-to-br from-blue-600/20 to-slate-600/20 rounded-full blur-2xl"></div>
                                    <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/50">
                                        <div className="grid grid-cols-2 gap-8">
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                    <Shield className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <div className="text-2xl font-bold text-slate-900">$10M+</div>
                                                <div className="text-sm text-slate-600">Insurance</div>
                                            </div>
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                    <Crown className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <div className="text-2xl font-bold text-slate-900">500+</div>
                                                <div className="text-sm text-slate-600">Events</div>
                                            </div>
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                    <Star className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <div className="text-2xl font-bold text-slate-900">99.8%</div>
                                                <div className="text-sm text-slate-600">Retention</div>
                                            </div>
                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                                    <Car className="w-8 h-8 text-blue-600" />
                                                </div>
                                                <div className="text-2xl font-bold text-slate-900">50K+</div>
                                                <div className="text-sm text-slate-600">Vehicles</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm text-slate-600">Trusted by industry leaders</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <div className="flex items-center justify-center space-x-12 md:space-x-16">
                                    <div className="text-slate-400 font-semibold text-lg">Fortune 500</div>
                                    <div className="text-slate-400 font-semibold text-lg">Luxury Hotels</div>
                                    <div className="text-slate-400 font-semibold text-lg">Corporate Events</div>
                                    <div className="text-slate-400 font-semibold text-lg">Private Clubs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group bg-white/95 backdrop-blur-lg fixed z-20 w-full border-b border-gray-200 shadow-sm">
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <div className="flex items-center space-x-2">
                                <Logo size="md" />
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-slate-700" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-slate-700" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-slate-600 hover:text-blue-600 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-slate-600 hover:text-blue-600 block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center">
                                <div className="flex items-center space-x-2 text-sm text-slate-600 mr-4">
                                    <Phone className="w-4 h-4" />
                                    <span>(555) 123-PARK</span>
                                </div>
                                <Button
                                    size="sm"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                    <span>Book Service</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
