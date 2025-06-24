
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Car, ParkingCircle, Shield, Sparkles, Crown, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Exceptional", "Professional", "Luxurious", "Premium", "Exclusive"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20 min-h-screen">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        {/* Premium floating elements with luxury motion */}
        <motion.div
          className="absolute top-20 left-10 text-blue-200/60"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Car className="w-10 h-10 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-20 text-champagne-400/40"
          animate={{
            y: [0, 25, 0],
            x: [0, -12, 0],
            rotate: [0, -15, 0],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 3,
          }}
        >
          <Crown className="w-8 h-8 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-blue-300/50"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 2,
          }}
        >
          <Shield className="w-9 h-9 drop-shadow-xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-champagne-300/60"
          animate={{
            y: [0, 30, 0],
            x: [0, 8, 0],
            rotate: [0, -20, 0],
            scale: [1.1, 0.8, 1.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 5,
          }}
        >
          <Diamond className="w-7 h-7 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3 text-blue-200/40"
          animate={{
            y: [0, -35, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 0],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 7,
          }}
        >
          <Sparkles className="w-6 h-6 drop-shadow-lg" />
        </motion.div>

        {/* Luxury gradient orbs with sophisticated animations */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-200/30 via-champagne-200/20 to-blue-300/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-l from-champagne-100/40 via-blue-100/30 to-slate-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 8,
          }}
        />

        <motion.div
          className="absolute top-2/3 left-1/2 w-72 h-72 bg-gradient-to-br from-blue-300/25 via-champagne-300/15 to-slate-300/20 rounded-full blur-3xl"
          animate={{
            scale: [0.9, 1.4, 0.9],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            delay: 4,
          }}
        />

        {/* Sophisticated pattern overlays */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '60px 60px'
          }}
        />

        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, #f2c94c 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-champagne-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 px-6 lg:px-12">
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-5xl mx-auto text-center">
            {/* Executive Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-full px-6 py-3 shadow-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                <span className="text-slate-700 text-sm font-medium tracking-wide uppercase letter-spacing-wider">
                  Enterprise Valet Solutions
                </span>
                <MoveRight className="w-4 h-4 text-slate-600" />
              </div>
            </motion.div>

            {/* Corporate Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-900 leading-tight tracking-tight">
                Professional Valet Services
              </h1>
              <div className="mt-4 h-20 flex items-center justify-center">
                <span className="text-3xl md:text-5xl lg:text-6xl font-poppins font-bold text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 bg-clip-text relative">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, y: 40 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100, 
                        damping: 15,
                        duration: 0.6
                      }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -40 : 40,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </div>
            </motion.div>

            {/* Executive Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              className="mb-12"
            >
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
                Delivering world-class valet parking solutions for Fortune 500 companies, 
                luxury events, and exclusive corporate gatherings. Our certified professionals 
                ensure seamless operations with uncompromising attention to detail.
              </p>
            </motion.div>

            {/* Corporate Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">$10M+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Insurance Coverage</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <Crown className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Corporate Events</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                  <Diamond className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">99.8%</div>
                <div className="text-sm text-slate-600 uppercase tracking-wide">Client Retention</div>
              </div>
            </motion.div>

            {/* Executive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Schedule Consultation
                <MoveRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-10 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Executive Briefing
                <PhoneCall className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
