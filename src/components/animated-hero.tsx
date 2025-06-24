
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Car, ParkingCircle, Shield, Sparkles, Crown, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["elegant", "professional", "luxurious", "premium", "exclusive"],
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

      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button variant="outline" size="sm" className="gap-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300">
              Premium Valet Services <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <div className="flex gap-4 flex-col">
            <motion.h1 
              className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-poppins font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            >
              <span className="text-slate-800 drop-shadow-sm">Luxury Valet Services</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-champagne-600 bg-clip-text text-transparent drop-shadow-sm"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-600 max-w-3xl text-center font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
            >
              Experience unparalleled luxury with our premium valet parking services. 
              Professional, insured attendants providing seamless solutions for weddings, 
              corporate events, and exclusive gatherings.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.6 }}
          >
            <Button size="lg" className="gap-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" variant="default">
              Book Valet Service <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white backdrop-blur-sm bg-white/80 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" variant="outline">
              Schedule Call <PhoneCall className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
