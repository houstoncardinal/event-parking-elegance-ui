
'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizontal, Shield, Clock, Award, Building2, Users, TrendingUp } from 'lucide-react'

export function HeroSection() {
    return (
        <main>
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
                {/* Professional Background Pattern */}
                <div className="absolute inset-0">
                    {/* Subtle grid pattern */}
                    <div 
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }}
                    />
                    
                    {/* Corporate geometric shapes */}
                    <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-32 left-16 w-80 h-80 bg-gradient-to-tr from-slate-600/10 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-700/5 to-slate-700/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 min-h-screen flex items-center">
                    <div className="w-full">
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Executive Badge */}
                            <div className="inline-flex items-center gap-3 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full px-8 py-4 mb-10">
                                <div className="bg-blue-600 rounded-full px-4 py-2">
                                    <span className="text-white text-sm font-semibold tracking-wide">ENTERPRISE</span>
                                </div>
                                <span className="text-slate-200 text-sm font-medium tracking-wide">Fortune 500 Trusted</span>
                                <div className="w-px h-5 bg-slate-600"></div>
                                <ArrowRight className="size-4 text-slate-400" />
                            </div>

                            {/* Main Corporate Heading */}
                            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 tracking-tight leading-none">
                                <span className="block text-white font-light">Executive</span>
                                <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent font-bold">
                                    Valet Solutions
                                </span>
                            </h1>

                            {/* Executive Value Proposition */}
                            <p className="text-2xl lg:text-3xl text-slate-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                                Delivering world-class valet parking solutions for Fortune 500 companies, 
                                luxury corporate events, and executive gatherings. Trusted by industry leaders worldwide.
                            </p>

                            {/* Corporate Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-4">
                                        <Building2 className="size-8 text-blue-400" />
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                                    <div className="text-slate-400 text-lg font-medium">Corporate Clients</div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-4">
                                        <Users className="size-8 text-blue-400" />
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-2">50K+</div>
                                    <div className="text-slate-400 text-lg font-medium">Events Managed</div>
                                </div>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full mb-4">
                                        <TrendingUp className="size-8 text-blue-400" />
                                    </div>
                                    <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                                    <div className="text-slate-400 text-lg font-medium">Client Retention</div>
                                </div>
                            </div>

                            {/* Executive Contact Form */}
                            <div className="max-w-lg mx-auto mb-16">
                                <form className="relative">
                                    <div className="relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-2 shadow-2xl">
                                        <div className="flex items-center">
                                            <div className="flex-1 relative">
                                                <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 size-5" />
                                                <input
                                                    type="email"
                                                    placeholder="Executive contact email"
                                                    className="w-full bg-transparent text-white placeholder-slate-400 pl-14 pr-4 py-5 focus:outline-none text-lg"
                                                />
                                            </div>
                                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 text-lg">
                                                <span className="hidden sm:block">Schedule Consultation</span>
                                                <SendHorizontal className="size-5 sm:hidden" />
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            {/* Enterprise Trust Indicators */}
                            <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                                        <Shield className="size-8 text-blue-400" />
                                    </div>
                                    <span className="text-slate-300 font-semibold text-lg">$10M+ Insurance</span>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                                        <Award className="size-8 text-blue-400" />
                                    </div>
                                    <span className="text-slate-300 font-semibold text-lg">Certified Staff</span>
                                </div>
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                                        <Clock className="size-8 text-blue-400" />
                                    </div>
                                    <span className="text-slate-300 font-semibold text-lg">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
            </section>
        </main>
    )
}
