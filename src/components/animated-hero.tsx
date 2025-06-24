
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import DisplayCards from "@/components/display-cards";

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
    <div className="w-full bg-gradient-to-br from-white via-blue-50/30 to-champagne-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-champagne-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-champagne-100/40 to-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/20 to-champagne-50/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 py-20 lg:py-32 items-center">
          {/* Left Column - Content */}
          <div className="flex gap-8 flex-col order-2 lg:order-1">
            <div>
              <Button variant="outline" size="sm" className="gap-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Premium Valet Services <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-6 flex-col">
              <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-2xl tracking-tighter font-poppins font-bold leading-tight">
                <span className="text-navy-900">Luxury Valet</span>
                <br />
                <span className="text-navy-900">Services</span>
                <span className="relative flex w-full overflow-hidden md:pb-4 md:pt-1">
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

              <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl font-medium">
                Experience unparalleled luxury with our premium valet parking services. 
                Professional, insured attendants providing seamless solutions for weddings, 
                corporate events, and exclusive gatherings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" variant="default">
                Book Valet Service <MoveRight className="w-4 h-4" />
              </Button>
              <Button size="lg" className="gap-4 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300" variant="outline">
                Schedule Call <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Display Cards */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Decorative background for cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-champagne-100/30 rounded-3xl blur-xl scale-110"></div>
              <div className="relative z-10 p-8">
                <DisplayCards />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-3 gap-8 py-16 border-t border-gray-200/50">
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-gray-600 text-sm md:text-base font-medium">Events Served</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-champagne-600 mb-2 group-hover:scale-110 transition-transform duration-300">50K+</div>
            <div className="text-gray-600 text-sm md:text-base font-medium">Vehicles Parked</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl md:text-4xl font-poppins font-bold text-navy-600 mb-2 group-hover:scale-110 transition-transform duration-300">99%</div>
            <div className="text-gray-600 text-sm md:text-base font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
