
'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizontal, Shield, Clock, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
    return (
        <>
            <main>
                <section className="relative min-h-screen bg-black text-white overflow-hidden">
                    {/* Video Background */}
                    <div className="absolute inset-0">
                        <video
                            className="w-full h-full object-cover opacity-40"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="https://cdn.pixabay.com/video/2023/05/15/163068-829226678_large.mp4" type="video/mp4" />
                            <source src="https://cdn.pixabay.com/video/2022/07/14/122842-728764437_large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-40 min-h-screen flex items-center">
                        <div className="w-full">
                            <div className="max-w-4xl mx-auto text-center">
                                {/* Premium Badge */}
                                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                                    <div className="bg-white rounded-full px-3 py-1">
                                        <span className="text-black text-sm font-semibold">Premium</span>
                                    </div>
                                    <span className="text-white/90 text-sm font-medium">Luxury Valet Services</span>
                                    <div className="w-px h-4 bg-white/30"></div>
                                    <ArrowRight className="size-4 text-white/70" />
                                </div>

                                {/* Main Heading */}
                                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight">
                                    <span className="block text-white">Professional</span>
                                    <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                                        Valet Solutions
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                                    Experience unparalleled luxury with our premium valet services. 
                                    Professional, insured attendants delivering excellence for your most important events.
                                </p>

                                {/* Email Form */}
                                <div className="max-w-md mx-auto mb-12">
                                    <form className="relative">
                                        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-2xl">
                                            <div className="flex items-center">
                                                <div className="flex-1 relative">
                                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 size-5" />
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your email address"
                                                        className="w-full bg-transparent text-white placeholder-white/60 pl-12 pr-4 py-4 focus:outline-none text-lg"
                                                    />
                                                </div>
                                                <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105">
                                                    <span className="hidden sm:block">Get Started</span>
                                                    <SendHorizontal className="size-5 sm:hidden" />
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Feature Icons */}
                                <div className="flex flex-wrap justify-center gap-8 lg:gap-12 text-center">
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
                                            <Shield className="size-6 text-white" />
                                        </div>
                                        <span className="text-white/90 font-medium">Fully Insured</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
                                            <Award className="size-6 text-white" />
                                        </div>
                                        <span className="text-white/90 font-medium">Professional Staff</span>
                                    </div>
                                    <div className="flex flex-col items-center space-y-3">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
                                            <Clock className="size-6 text-white" />
                                        </div>
                                        <span className="text-white/90 font-medium">24/7 Availability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
                </section>
            </main>
        </>
    )
}
