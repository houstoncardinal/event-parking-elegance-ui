
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Car, ParkingCircle, Shield } from "lucide-react";
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
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating cars */}
        <motion.div
          className="absolute top-20 left-10 text-blue-100"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Car className="w-8 h-8" />
        </motion.div>

        <motion.div
          className="absolute top-32 right-20 text-blue-100"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <ParkingCircle className="w-6 h-6" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-blue-100"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Shield className="w-7 h-7" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-blue-100"
          animate={{
            y: [0, 18, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Car className="w-5 h-5" />
        </motion.div>

        {/* Subtle gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-blue-200/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-l from-blue-50/30 to-gray-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />

        {/* Dotted pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="outline" size="sm" className="gap-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Premium Valet Services <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-poppins font-bold">
              <span className="text-black">Luxury Valet Services</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-blue-600"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
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
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-700 max-w-3xl text-center font-medium">
              Experience unparalleled luxury with our premium valet parking services. 
              Professional, insured attendants providing seamless solutions for weddings, 
              corporate events, and exclusive gatherings.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 bg-blue-600 hover:bg-blue-700 text-white" variant="default">
              Book Valet Service <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 border-black text-black hover:bg-black hover:text-white" variant="outline">
              Schedule Call <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
