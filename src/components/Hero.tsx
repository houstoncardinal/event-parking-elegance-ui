
import React from 'react';
import { ArrowRight, Star, Shield, Clock, Sparkles, Zap, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-navy-900">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>

      {/* Advanced Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-blue-400/20 rounded-lg backdrop-blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full backdrop-blur-sm border border-gold-400/30"
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <motion.div
          className="absolute bottom-32 left-40 w-20 h-20 border-2 border-slate-400/30 rotate-45 backdrop-blur-sm"
          animate={{
            rotate: [45, 90, 45],
            y: [0, -25, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Advanced Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-gold-500/15 via-gold-400/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -120, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />

        {/* Particle System */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Scanning Lines Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent h-2"
          animate={{
            y: [-100, window.innerHeight + 100]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 6
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Futuristic Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-600/50 rounded-full px-8 py-4 mb-8 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500"
          >
            <div className="relative">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400 blur-sm opacity-50 animate-pulse"></div>
            </div>
            <span className="text-white font-medium text-sm tracking-wide">Next-Generation Valet Solutions</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-400 fill-gold-400" />
              ))}
            </div>
          </motion.div>

          {/* Main Headline with Advanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-poppins font-black mb-4 leading-none">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                PREMIUM
              </span>
              <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent relative">
                VALET TECH
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse"></div>
              </span>
            </h1>
          </motion.div>

          {/* Advanced Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Revolutionary parking solutions powered by precision technology and unmatched hospitality. 
              <span className="text-blue-400 font-medium"> Experience the future of valet services</span> with our 
              AI-optimized operations and luxury-grade professional team.
            </p>
          </motion.div>

          {/* Advanced Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-12 mb-16"
          >
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl backdrop-blur-sm border border-blue-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Military-Grade Security</div>
                <div className="text-slate-400 text-xs">$15M+ Insurance Coverage</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/30 rounded-xl backdrop-blur-sm border border-gold-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Zap className="w-6 h-6 text-gold-400" />
                </div>
                <div className="absolute inset-0 bg-gold-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">Lightning Response</div>
                <div className="text-slate-400 text-xs">30-Second Guarantee</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-xl backdrop-blur-sm border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">AI-Powered Monitoring</div>
                <div className="text-slate-400 text-xs">Real-Time Analytics</div>
              </div>
            </div>
          </motion.div>

          {/* Futuristic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 border border-blue-500/50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center">
                ACTIVATE SERVICE
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="relative overflow-hidden bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border-2 border-gold-400/50 text-gold-400 hover:bg-gradient-to-r hover:from-gold-400/10 hover:to-gold-500/10 font-bold px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-gold-400/25 transition-all duration-500 hover:scale-105 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">VIEW PORTFOLIO</span>
            </Button>
          </motion.div>

          {/* Advanced Statistics Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-8 pt-16 border-t border-slate-600/30"
          >
            <div className="text-center group cursor-pointer">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-poppins font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">2,500+</div>
                <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Elite Events</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-poppins font-black bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">250K+</div>
                <div className="absolute inset-0 bg-gold-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Vehicles Secured</div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-poppins font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
                <div className="absolute inset-0 bg-purple-400 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Precision Rate</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Advanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-blue-400/40 rounded-full flex justify-center backdrop-blur-sm bg-slate-800/30">
          <motion.div
            className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-3"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
