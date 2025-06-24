
'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizontal, Shield, Clock, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
    return (
        <>
            <style jsx>{`
                @keyframes carMove1 {
                    0% { transform: translate(-100px, 50px) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.3; }
                    25% { transform: translate(200px, 50px) rotate(15deg); opacity: 0.4; }
                    50% { transform: translate(400px, 100px) rotate(45deg); opacity: 0.3; }
                    75% { transform: translate(600px, 150px) rotate(90deg); opacity: 0.2; }
                    100% { transform: translate(800px, 200px) rotate(120deg); opacity: 0; }
                }
                
                @keyframes carMove2 {
                    0% { transform: translate(100vw, 200px) rotate(180deg); opacity: 0; }
                    15% { opacity: 0.3; }
                    35% { transform: translate(70vw, 180px) rotate(195deg); opacity: 0.4; }
                    60% { transform: translate(40vw, 160px) rotate(225deg); opacity: 0.3; }
                    85% { transform: translate(10vw, 140px) rotate(270deg); opacity: 0.2; }
                    100% { transform: translate(-100px, 120px) rotate(300deg); opacity: 0; }
                }
                
                @keyframes carMove3 {
                    0% { transform: translate(50vw, -50px) rotate(90deg); opacity: 0; }
                    20% { opacity: 0.2; }
                    40% { transform: translate(55vw, 100px) rotate(105deg); opacity: 0.3; }
                    65% { transform: translate(45vw, 250px) rotate(135deg); opacity: 0.2; }
                    90% { transform: translate(35vw, 400px) rotate(180deg); opacity: 0.1; }
                    100% { transform: translate(25vw, 500px) rotate(225deg); opacity: 0; }
                }
                
                @keyframes parkingLines {
                    0%, 100% { opacity: 0.1; transform: translateY(0px); }
                    50% { opacity: 0.3; transform: translateY(-10px); }
                }
                
                @keyframes valetWalk {
                    0% { transform: translateX(-50px); opacity: 0; }
                    25% { transform: translateX(25vw); opacity: 0.2; }
                    50% { transform: translateX(50vw); opacity: 0.3; }
                    75% { transform: translateX(75vw); opacity: 0.2; }
                    100% { transform: translateX(100vw); opacity: 0; }
                }
                
                .car-animation-1 {
                    position: absolute;
                    width: 60px;
                    height: 30px;
                    background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
                    border-radius: 15px 15px 8px 8px;
                    animation: carMove1 20s infinite linear;
                    top: 20%;
                    left: 0;
                }
                
                .car-animation-2 {
                    position: absolute;
                    width: 55px;
                    height: 28px;
                    background: linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.25));
                    border-radius: 12px 12px 6px 6px;
                    animation: carMove2 25s infinite linear 5s;
                    top: 40%;
                    right: 0;
                }
                
                .car-animation-3 {
                    position: absolute;
                    width: 50px;
                    height: 25px;
                    background: linear-gradient(45deg, rgba(255,255,255,0.08), rgba(255,255,255,0.2));
                    border-radius: 10px 10px 5px 5px;
                    animation: carMove3 30s infinite linear 10s;
                    top: 0;
                    left: 50%;
                }
                
                .parking-lines {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: 
                        repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 100px,
                            rgba(255,255,255,0.02) 100px,
                            rgba(255,255,255,0.02) 102px
                        ),
                        repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 150px,
                            rgba(255,255,255,0.015) 150px,
                            rgba(255,255,255,0.015) 152px
                        );
                    animation: parkingLines 8s ease-in-out infinite;
                }
                
                .valet-figure {
                    position: absolute;
                    width: 20px;
                    height: 40px;
                    background: linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
                    border-radius: 10px 10px 5px 5px;
                    bottom: 30%;
                    animation: valetWalk 35s infinite linear 15s;
                }
                
                .valet-figure::before {
                    content: '';
                    position: absolute;
                    top: -8px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 12px;
                    height: 12px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                }
            `}</style>
            
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

                    {/* Advanced Parking/Valet Animation Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="parking-lines"></div>
                        <div className="car-animation-1"></div>
                        <div className="car-animation-2"></div>
                        <div className="car-animation-3"></div>
                        <div className="valet-figure"></div>
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
