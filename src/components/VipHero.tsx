
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Eye, ArrowRight, Phone, Star, Crown, Diamond } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VipHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Ultra-Sophisticated Grid Background */}
      <div className="absolute inset-0">
        {/* Primary Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_120%)]" />
        
        {/* Secondary Fine Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Elite Scanning Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent h-0.5"
          animate={{ y: [-200, window.innerHeight + 200] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 8 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent w-0.5"
          animate={{ x: [-200, window.innerWidth + 200] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
        />

        {/* Diamond Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px),radial-gradient(circle_at_75%_75%,white_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      {/* Advanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Luxury Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 border border-white/5 rounded-2xl backdrop-blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.01) 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 50px 100px rgba(0,0,0,0.3)'
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-32 right-24 w-32 h-32 rounded-full backdrop-blur-3xl border border-white/10"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 70%)',
            boxShadow: '0 0 80px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <motion.div
          className="absolute bottom-40 left-32 w-24 h-24 rotate-45 backdrop-blur-3xl border-2 border-white/8"
          style={{
            background: 'linear-gradient(45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))',
            boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
          animate={{
            rotate: [45, 135, 45],
            y: [0, -45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        />

        {/* Luxury Particle System */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: `radial-gradient(circle, rgba(255,255,255,${0.3 + Math.random() * 0.4}) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -300 - Math.random() * 200, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5 + Math.random(), 0],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Ambient Light Orbs */}
        <motion.div
          className="absolute top-1/6 left-1/6 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.015]"
          style={{
            background: 'radial-gradient(circle, white 0%, transparent 70%)'
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.015, 0.04, 0.015],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/6 right-1/6 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.02]"
          style={{
            background: 'radial-gradient(circle, white 0%, transparent 60%)'
          }}
          animate={{
            scale: [1, 0.7, 1.6, 1],
            opacity: [0.02, 0.08, 0.02],
            rotate: [0, -180, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      {/* Main Luxury Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Premium Elite Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center space-x-6 glass-vip rounded-full px-12 py-6 mb-12 no-tap-highlight shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 60px rgba(255,255,255,0.05)'
            }}
          >
            <motion.div 
              className="w-3 h-3 bg-white rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Crown className="w-6 h-6 text-white opacity-80" />
            <span className="text-white font-orbitron text-lg tracking-[0.2em] uppercase font-medium">
              Executive Valet Division
            </span>
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
            <Diamond className="w-6 h-6 text-white opacity-80" />
          </motion.div>

          {/* Ultra-Premium Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-12"
          >
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-orbitron font-black mb-8 leading-[0.8] tracking-tighter">
              <motion.span
                className="block text-white mb-6 relative"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.4)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                ELITE
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 8 }}
                />
              </motion.span>
              <motion.span
                className="block text-white relative overflow-hidden"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3)'
                }}
              >
                VALET
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                  animate={{ x: ['-150%', '150%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 6 }}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Luxury Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-20"
          >
            <p className="text-2xl md:text-3xl text-white/70 max-w-5xl mx-auto leading-relaxed font-inter font-light tracking-wide">
              Classified-grade parking solutions for the world's most 
              <span className="text-white font-medium"> exclusive events</span>.
              <br className="hidden md:block" />
              Where precision meets 
              <span className="text-white font-medium"> absolute discretion</span>.
            </p>
          </motion.div>

          {/* Elite Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 max-w-6xl mx-auto"
          >
            <motion.div 
              className="group no-tap-highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-vip rounded-2xl p-8 hover:shadow-vip-glow transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-20 h-20 glass-vip rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-3 tracking-wider">LEVEL 9</div>
                  <div className="text-white/50 text-sm font-inter uppercase tracking-[0.2em] font-medium">Security Protocol</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group no-tap-highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-vip rounded-2xl p-8 hover:shadow-vip-glow transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-20 h-20 glass-vip rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-3 tracking-wider">8 SEC</div>
                  <div className="text-white/50 text-sm font-inter uppercase tracking-[0.2em] font-medium">Response Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group no-tap-highlight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-vip rounded-2xl p-8 hover:shadow-vip-glow transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className="w-20 h-20 glass-vip rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-orbitron font-black text-white mb-3 tracking-wider">24/7</div>
                  <div className="text-white/50 text-sm font-inter uppercase tracking-[0.2em] font-medium">Elite Watch</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24"
          >
            <Button className="btn-vip text-xl px-16 py-8 no-tap-highlight relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="flex items-center relative z-10">
                ACTIVATE ELITE SERVICE
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>

            <Button 
              variant="outline"
              className="glass-vip border-white/20 hover:border-white/40 text-white hover:bg-white/5 text-xl px-16 py-8 font-orbitron font-bold tracking-wide no-tap-highlight relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="flex items-center relative z-10">
                SECURE CONTACT
                <Phone className="ml-4 w-6 h-6" />
              </span>
            </Button>
          </motion.div>

          {/* Elite Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="grid grid-cols-3 gap-12 pt-20 border-t border-white/10"
          >
            <motion.div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 relative"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                5,000+
                <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </motion.div>
              <div className="text-white/50 text-base font-inter font-medium uppercase tracking-[0.2em]">Elite Events</div>
            </motion.div>

            <motion.div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 relative"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              >
                99.99%
                <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </motion.div>
              <div className="text-white/50 text-base font-inter font-medium uppercase tracking-[0.2em]">Perfect Record</div>
            </motion.div>

            <motion.div className="text-center group cursor-pointer no-tap-highlight">
              <motion.div 
                className="text-5xl md:text-7xl font-orbitron font-black text-white mb-4 relative"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 40px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 3 }}
              >
                ZERO
                <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              </motion.div>
              <div className="text-white/50 text-base font-inter font-medium uppercase tracking-[0.2em]">Incidents</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sophisticated Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-10 h-16 border-2 border-white/20 rounded-full flex justify-center glass-vip relative overflow-hidden">
          <motion.div
            className="w-2 h-8 bg-white rounded-full mt-4"
            animate={{ opacity: [1, 0.2, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default VipHero;
