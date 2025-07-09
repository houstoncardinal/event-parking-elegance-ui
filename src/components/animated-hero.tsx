import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Star, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Waves } from "@/components/ui/background";
import { Marquee } from "@/components/ui/marquee";
import { Pricing } from "@/components/ui/pricing-section-with-comparison";
import { Link } from "react-router-dom";
function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Weddings", "Corporate Events", "Private Parties", "Galas", "Conferences"], []);
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
  return <div className="relative w-full bg-white min-h-screen overflow-x-hidden">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves lineColor="rgba(0,0,0,0.10)" backgroundColor="#fff" waveSpeedX={0.02} waveSpeedY={0.01} waveAmpX={40} waveAmpY={20} friction={0.9} tension={0.01} maxCursorMove={120} xGap={12} yGap={36} />
      </div>
      {/* Hero content */}
      <div className="relative z-10 container mx-auto">
        <div className="flex gap-8 pt-6 pb-0 lg:pt-8 lg:pb-0 items-center justify-center flex-col mb-12">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 bg-white text-black border border-black hover:bg-gray-100 py-2 my-4">
              <Star className="w-4 h-4 text-black" />
              Event Parking Services By Cardinal <MoveRight className="w-4 h-4 text-black" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-black font-bold my-0">Professional Valet Parking for</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => <motion.span key={index} className="absolute font-semibold text-yellow-600" initial={{
                opacity: 0,
                y: "-100"
              }} transition={{
                type: "spring",
                stiffness: 50
              }} animate={titleNumber === index ? {
                y: 0,
                opacity: 1
              } : {
                y: titleNumber > index ? -150 : 150,
                opacity: 0
              }}>
                    {title}
                  </motion.span>)}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-800 max-w-3xl text-center">
              Professional valet parking services for weddings, corporate events, and special occasions across Houston. 
              <span className="text-yellow-600 font-medium"> Luxury service meets reliability</span> with our 
              experienced team and comprehensive event parking solutions.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-sm">Fully Insured</div>
                <div className="text-gray-600 text-xs">$2M Coverage</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-sm">24/7 Available</div>
                <div className="text-gray-600 text-xs">Same-Day Booking</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-sm">5-Star Rated</div>
                <div className="text-gray-600 text-xs">500+ Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Link to="/booking" className="w-full">
              <Button size="lg" className="gap-4 bg-yellow-600 text-white border-2 border-yellow-600 hover:bg-yellow-700 w-full" variant="outline">
                Get Free Quote <PhoneCall className="w-4 h-4 text-white" />
              </Button>
            </Link>
            <Link to="/services" className="w-full">
              <Button size="lg" className="gap-4 bg-black text-white hover:bg-gray-900 w-full">
                View Services <MoveRight className="w-4 h-4 text-white" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
}
export { Hero };