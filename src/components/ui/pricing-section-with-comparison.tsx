import { Check, PhoneCall, Calendar, Crown, Star, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Pricing() {
  const packages = [
    {
      name: "Standard Valet",
      description: "Perfect for smaller events and intimate gatherings",
      price: "Starting at $250",
      duration: "per event",
      popular: false,
      features: [
        "2-4 Professional Attendants",
        "Basic Event Signage",
        "Up to 100 Vehicles",
        "4-Hour Service Window",
        "Liability Insurance Included",
        "Basic Vehicle Tracking"
      ]
    },
    {
      name: "Premium Valet",
      description: "Our most popular choice for weddings and corporate events",
      price: "Starting at $450",
      duration: "per event",
      popular: true,
      features: [
        "4-6 Elite Attendants",
        "Custom Branded Signage",
        "Up to 250 Vehicles",
        "6-Hour Service Window",
        "Full Insurance Coverage",
        "Real-Time Vehicle Tracking",
        "Guest Concierge Service",
        "Priority Vehicle Retrieval"
      ]
    },
    {
      name: "VIP Concierge",
      description: "White-glove service for luxury events and high-profile occasions",
      price: "Custom Quote",
      duration: "tailored service",
      popular: false,
      features: [
        "6+ Certified Attendants",
        "Luxury Event Signage",
        "Unlimited Vehicles",
        "Full-Day Coverage",
        "Premium Insurance ($2M)",
        "Advanced Tracking System",
        "Dedicated Event Manager",
        "VIP Guest Services",
        "Shuttle Coordination",
        "24/7 Support Hotline"
      ]
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">TRANSPARENT PRICING</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Valet Services
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect valet package for your event. All packages include professional staff, 
            full insurance coverage, and our signature white-glove service.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative bg-white border-2 transition-all duration-300 hover:shadow-xl ${
              pkg.popular 
                ? 'border-yellow-400 shadow-lg shadow-yellow-100 scale-105' 
                : 'border-gray-200 hover:border-yellow-300'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-amber-400 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                  <div className="text-gray-500 text-sm">{pkg.duration}</div>
                </div>
                
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white' 
                      : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  {pkg.name === "VIP Concierge" ? (
                    <>
                      <PhoneCall className="w-4 h-4 mr-2" />
                      Get Custom Quote
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book This Package
                    </>
                  )}
                </Button>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-900 mb-3">What's Included:</div>
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which package is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our event specialists will help you choose the perfect valet service for your specific needs and budget. 
            Get a personalized quote in under 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              <PhoneCall className="w-5 h-5 mr-2" />
              Call (713) 555-VALET
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">1,500+ Events Served</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">Same-Day Booking Available</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">5-Star Rated Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Pricing };