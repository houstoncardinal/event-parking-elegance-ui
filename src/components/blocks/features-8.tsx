import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users, Clock, Award, Car, Smartphone, CheckCircle, Star } from 'lucide-react'

export function Features() {
    const features = [
        {
            icon: Car,
            title: "Elite Valet Staff",
            description: "Professionally trained, uniformed attendants with extensive experience in luxury vehicle handling and white-glove customer service.",
            metric: "500+",
            metricLabel: "Events Served"
        },
        {
            icon: Smartphone,
            title: "Smart Vehicle Tracking",
            description: "Advanced real-time GPS tracking system allows guests to monitor their vehicle status and request retrieval via mobile app.",
            metric: "30 sec",
            metricLabel: "Avg Response"
        },
        {
            icon: Shield,
            title: "Complete Protection",
            description: "Comprehensive $2M liability coverage, bonded staff, and state-of-the-art security protocols for absolute peace of mind.",
            metric: "$2M",
            metricLabel: "Coverage"
        },
        {
            icon: Clock,
            title: "24/7 Availability",
            description: "Round-the-clock emergency response team and same-day booking capabilities for any event, any time.",
            metric: "24/7",
            metricLabel: "Available"
        },
        {
            icon: Award,
            title: "Premium Signage",
            description: "Custom-designed, illuminated directional signage that enhances your event's professional appearance and guest experience.",
            metric: "100%",
            metricLabel: "Custom"
        },
        {
            icon: Users,
            title: "VIP Concierge",
            description: "Dedicated concierge services for high-profile guests, including priority parking, shuttle coordination, and personal assistance.",
            metric: "VIP",
            metricLabel: "Service"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 md:py-32 overflow-hidden">
            {/* Futuristic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />
                
                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-orange-500/10 via-yellow-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                
                {/* Scanning Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-8">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-300 font-medium text-sm tracking-wide">INDUSTRY LEADING</span>
                    </div>
                    
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="block text-white mb-2">Why Choose</span>
                        <span className="block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                            Cardinal Valet Services?
                        </span>
                    </h2>
                    
                    <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400 rounded-full" />
                    
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Experience the future of event parking with our cutting-edge technology, 
                        <span className="text-yellow-400 font-medium"> elite service standards</span>, and 
                        unwavering commitment to excellence.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="group relative bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                            
                            <CardContent className="relative p-8">
                                {/* Icon Section */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center group-hover:from-yellow-500/30 group-hover:to-amber-500/30 transition-all duration-500 group-hover:scale-110">
                                        <feature.icon className="w-8 h-8 text-yellow-400 group-hover:text-amber-400 transition-colors duration-500" strokeWidth={1.5} />
                                    </div>
                                    
                                    {/* Metric Badge */}
                                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        {feature.metric}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                        {feature.description}
                                    </p>
                                    
                                    {/* Bottom Accent */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 group-hover:border-yellow-400/30 transition-colors duration-300">
                                        <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                                            {feature.metricLabel}
                                        </span>
                                        <CheckCircle className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-2xl px-8 py-4">
                        <div className="flex -space-x-2">
                            {[1,2,3,4,5].map((i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-white font-medium">Trusted by 1,500+ Houston Events</span>
                    </div>
                </div>
            </div>
        </section>
    )
}