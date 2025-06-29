import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Zap, Eye, ArrowRight, Car, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Elite Valet Parking',
    description: 'Provide seamless and secure parking services for your VIP guests, ensuring a premium arrival and departure experience.',
    icon: Shield,
    features: [
      'Secure Vehicle Handling',
      'Rapid Response Time',
      'Professional Attendants',
      'Customized Parking Solutions'
    ],
    price: '$25/hr'
  },
  {
    title: 'Event Traffic Management',
    description: 'Optimize traffic flow and minimize congestion around your event venue, enhancing overall guest satisfaction and safety.',
    icon: Car,
    features: [
      'Traffic Planning & Coordination',
      'Directional Signage',
      'Shuttle Services',
      'Real-Time Monitoring'
    ],
    price: '$20/hr'
  },
  {
    title: 'Corporate Valet Services',
    description: 'Elevate your corporate image with our professional valet services, perfect for business meetings, conferences, and company events.',
    icon: Building,
    features: [
      'Executive Parking Solutions',
      'Client Concierge Services',
      'Branded Uniforms',
      'Efficient Parking Management'
    ],
    price: '$30/hr'
  },
  {
    title: 'Private Party Valet',
    description: 'Add a touch of elegance to your private gatherings with our discreet and reliable valet services, ensuring a memorable experience for your guests.',
    icon: Users,
    features: [
      'Personalized Guest Assistance',
      'Discreet Service',
      'Luxury Vehicle Care',
      'Flexible Scheduling'
    ],
    price: '$18/hr'
  },
  {
    title: 'Wedding Valet Services',
    description: 'Make your special day even more magical with our dedicated wedding valet services, providing stress-free parking for your cherished guests.',
    icon: Crown,
    features: [
      'Elegant Arrival Experience',
      'Guest Transportation',
      'Decorated Parking Area',
      'Attentive Service'
    ],
    price: '$22/hr'
  },
  {
    title: 'VIP Transportation',
    description: 'Offer exclusive transportation services for your top-tier clients, ensuring they travel in style and comfort with our premium fleet and professional drivers.',
    icon: Zap,
    features: [
      'Luxury Vehicle Options',
      'Chauffeur Services',
      'Airport Transfers',
      'Customized Routes'
    ],
    price: '$40/hr'
  },
];

const Services = () => {
  return (
    <section id="services" className="section-vip py-24 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl opacity-25" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center space-x-3 glass-vip rounded-full px-8 py-4 mb-8">
              <Crown className="w-5 h-5 text-white/80" />
              <span className="text-white/80 font-orbitron text-sm tracking-[0.2em] uppercase font-medium">
                Elite Service Portfolio
              </span>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-orbitron font-black text-vip-glow mb-8 tracking-tight"
          >
            PREMIUM
            <span className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
              SERVICES
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-inter"
          >
            Experience unparalleled luxury with our comprehensive suite of professional valet services, 
            designed for the most prestigious events and venues.
          </motion.p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="card-vip p-8 h-full hover:shadow-vip-glow transition-all duration-700 relative overflow-hidden">
                {/* Service Icon with Enhanced Styling */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 glass-vip rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <service.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                  
                  {/* Floating accent */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <h3 className="text-2xl font-orbitron font-bold text-vip mb-4 text-center group-hover:text-vip-glow transition-all duration-500">
                  {service.title}
                </h3>
                
                <p className="text-white/70 text-center leading-relaxed font-inter group-hover:text-white/80 transition-colors duration-500 mb-6">
                  {service.description}
                </p>

                {/* Enhanced Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/60 text-sm font-inter">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3 group-hover:bg-white/60 transition-colors duration-500" />
                      <span className="group-hover:text-white/70 transition-colors duration-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Premium Pricing */}
                <div className="text-center pt-4 border-t border-white/10">
                  <div className="text-2xl font-orbitron font-bold text-vip-glow mb-2">
                    {service.price}
                  </div>
                  <div className="text-white/50 text-sm font-inter tracking-wide">
                    Starting Rate
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-vip rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-50" />
            
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-vip-glow mb-6 relative z-10">
              Need a Custom Solution?
            </h3>
            
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed font-inter relative z-10">
              Our elite team specializes in creating bespoke valet experiences tailored to your unique requirements.
            </p>
            
            <Button className="btn-vip text-lg px-12 py-4 font-bold tracking-wider uppercase relative z-10 group">
              <span className="flex items-center">
                Discuss Custom Package
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
