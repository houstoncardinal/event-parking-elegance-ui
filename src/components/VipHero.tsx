
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VipHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent h-1"
          animate={{ y: [-100, window.innerHeight + 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent w-1"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div
          className="absolute bottom-32 left-40 w-20 h-20 border-2 border-white/15 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            y: [0, -35, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Particle system */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large ambient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.05, 0.02],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1.4, 1],
            opacity: [0.03, 0.06, 0.03],
            rotate: [0, -120, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* VIP Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-4 glass-vip rounded-full px-8 py-4 mb-8 no-tap-highlight"
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-orbitron text-sm tracking-wider uppercase">
              Elite Valet Operations
            </span>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </motion.div>

          {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-black mb-6 leading-none">
              <motion.span
                className="block text-white mb-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                EXECUTIVE
              </motion.span>
              <motion.span
                className="block text-white relative"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 20px rgba(255,255,255,0.6)",
                    "0 0 10px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                VALET
                {/* Scanning line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-inter font-light">
              Classified-level parking solutions for the world's most exclusive events. 
              <span className="text-white font-medium"> Precision. Discretion. Excellence.</span>
            </p>
          </motion.div>

          {/* Tech Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          >
            <div className="group no-tap-highlight">
              <div className="glass-vip rounded-lg p-6 hover:vip-glow transition-all duration-500">
                <div className="w-14 h-14 glass-vip rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-orbitron font-bold text-white mb-2">LEVEL 5</div>
                <div className="text-white/60 text-sm font-inter uppercase tracking-wider">Security Clearance</div>
              </div>
            </div>

            <div className="group no-tap-highlight">
              <div className="glass-vip rounded-lg p-6 hover:vip-glow transition-all duration-500">
                <div className="w-14 h-14 glass-vip rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-orbitron font-bold text-white mb-2">15 SEC</div>
                <div className="text-white/60 text-sm font-inter uppercase tracking-wider">Response Time</div>
              </div>
            </div>

            <div className="group no-tap-highlight">
              <div className="glass-vip rounded-lg p-6 hover:vip-glow transition-all duration-500">
                <div className="w-14 h-14 glass-vip rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div className="text-2xl font-orbitron font-bold text-white mb-2">24/7</div>
                <div className="text-white/60 text-sm font-inter uppercase tracking-wider">Surveillance</div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button className="btn-vip text-lg px-12 py-6 no-tap-highlight">
              <span className="flex items-center">
                ACTIVATE SERVICE
                <ArrowRight className="ml-3 w-5 h-5" />
              </span>
            </Button>

            <Button 
              variant="outline"
              className="glass-vip border-white/20 hover:border-white/40 text-white hover:bg-white/5 text-lg px-12 py-6 font-orbitron font-bold tracking-wide no-tap-highlight"
            >
              <span className="flex items-center">
                SECURE LINE
                <Phone className="ml-3 w-5 h-5" />
              </span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 pt-16 border-t border-white/10"
          >
            <div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-4xl md:text-5xl font-orbitron font-black text-white mb-2"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.4)",
                    "0 0 10px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                1,000+
              </motion.div>
              <div className="text-white/60 text-sm font-inter font-medium uppercase tracking-wider">Classified Events</div>
            </div>

            <div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-4xl md:text-5xl font-orbitron font-black text-white mb-2"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.4)",
                    "0 0 10px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                99.9%
              </motion.div>
              <div className="text-white/60 text-sm font-inter font-medium uppercase tracking-wider">Mission Success</div>
            </div>

            <div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-4xl md:text-5xl font-orbitron font-black text-white mb-2"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(255,255,255,0.2)",
                    "0 0 20px rgba(255,255,255,0.4)",
                    "0 0 10px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                ZERO
              </motion.div>
              <div className="text-white/60 text-sm font-inter font-medium uppercase tracking-wider">Incidents</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-white/20 rounded-full flex justify-center glass-vip">
          <motion.div
            className="w-1.5 h-6 bg-white rounded-full mt-3"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VipHero;
