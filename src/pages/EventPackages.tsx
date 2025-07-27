import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { CheckCircle, Star, Crown, Umbrella, Users, Shield, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';

const EventPackages = () => {
  const handleSelectPackage = (packageType: string) => {
    // Navigate to booking page with pre-selected package
    window.location.href = `/booking?package=${packageType.toLowerCase().replace(' ', '-')}`;
  };

  const handleRequestQuote = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no booking section on services page, scroll to top and navigate to homepage
      window.location.href = '/#booking';
    }
  };

  const handleCallUs = () => {
    window.location.href = 'tel:(346)764-9163';
  };

  const packages = [
    {
      title: "Standard Package",
      icon: Star,
      badge: "Most Popular",
      description: "Complete valet service package with all essential equipment and professional staff for your event.",
      includes: [
        {
          category: "Uniformed Valet Drivers",
          items: ["Professional uniformed attendants"]
        },
        {
          category: "Valet Station",
          items: [
            "Podium Stand/ Secure Key Safe w/ Umbrella or Canopy as Needed"
          ]
        },
        {
          category: "Signage",
          items: [
            "Directional Signage",
            "Display \"Complimentary Valet\""
          ]
        },
        {
          category: "Safety Cones",
          items: ["Standard traffic safety cones"]
        },
        {
          category: "Operational Supplies",
          items: [
            "Valet Ticket Stubs",
            "Lighting (Evening Events)",
            "Pens/Markers",
            "Rubber bands/ Key Fob Holders",
            "Other Misc. operations Items"
          ]
        }
      ]
    },
    {
      title: "Premium Package",
      icon: Crown,
      badge: "Premium Experience",
      description: "Elevated valet experience with premium amenities, custom options, and enhanced service features.",
      includes: [
        {
          category: "Black and White Dress Code Valet Drivers",
          items: [
            "Button Down Long/Short Sleeve w/ Tie or Bow Tie"
          ]
        },
        {
          category: "Premium Valet Station",
          items: [
            "Podium Stand w/Umbrella or Canopy as Needed"
          ]
        },
        {
          category: "Red Carpet Service",
          items: ["Premium red carpet arrival experience"]
        },
        {
          category: "Signage (Customized per request)",
          items: [
            "Directional Signage",
            "Display \"Complimentary Valet\""
          ]
        },
        {
          category: "Premium Safety Cones w/Rubber Base",
          items: ["High-quality safety cones with rubber base"]
        },
        {
          category: "Ticketless Systems w/ vehicle retrieval request by phone",
          items: ["Modern phone-based vehicle retrieval system"]
        },
        {
          category: "Operational Supplies",
          items: [
            "Ticket Stubs (secondary option)",
            "Lighting (Evening Events)",
            "Pens/Markers",
            "Rubber bands/ Key Fob Holders",
            "Other Misc. operations Items"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Event Packages - Event Parking Services by Cardinal"
        description="Choose from our Standard and Premium event parking packages. Professional valet services tailored to your event's needs in Houston."
        keywords={["event parking packages", "valet service packages", "Houston event parking", "premium valet services"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                Event <span className="text-yellow-400">Packages</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Professional valet services tailored to elevate your event experience
              </p>
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gold-50/20 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-bl from-gold-200/15 via-gold-300/8 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/10 via-slate-300/5 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
            {/* Header */}
            <AnimatedGroup preset="fade" className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
                <Crown className="w-4 h-4 text-gold-600" />
                <span className="text-slate-700 font-medium text-sm">Event Packages</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
                <span className="block text-slate-900 mb-2">Choose Your Perfect</span>
                <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
                  Event Package
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Select from our carefully curated packages designed to meet every event's unique needs, 
                from essential service to premium luxury experience.
              </p>
            </AnimatedGroup>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {packages.map((pkg, index) => (
                <Card key={pkg.title} className={`group bg-white/90 backdrop-blur-sm border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  pkg.title === 'Premium Package' 
                    ? 'border-gold-300 ring-2 ring-gold-200/50' 
                    : 'border-white/60 hover:border-gold-200'
                }`}>
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                        pkg.title === 'Premium Package'
                          ? 'bg-gradient-to-br from-gold-200 to-gold-300'
                          : 'bg-gradient-to-br from-slate-100 to-slate-200'
                      }`}>
                        <pkg.icon className={`w-8 h-8 ${
                          pkg.title === 'Premium Package' ? 'text-gold-700' : 'text-slate-600'
                        }`} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-2">
                      {pkg.title}
                    </h3>
                    
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold-100 text-gold-800 mb-4">
                      {pkg.badge}
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {pkg.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {pkg.includes.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-3">
                        <h4 className="font-playfair font-bold text-slate-900 text-lg border-b border-slate-200 pb-2">
                          {section.category}
                        </h4>
                        <div className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3">
                              <div className="w-5 h-5 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle className="w-3 h-3 text-gold-600" />
                              </div>
                              <span className="text-slate-700 text-sm font-medium leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="pt-6 border-t border-slate-200">
                      <Button 
                        onClick={() => handleSelectPackage(pkg.title)}
                        className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                          pkg.title === 'Premium Package'
                            ? 'bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white'
                            : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-800 hover:to-slate-700 text-white'
                        }`}
                      >
                        Select {pkg.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-playfair font-bold text-slate-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                For events over 300 guests or unique requirements, we'll create a custom package 
                tailored specifically to your needs and budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleRequestQuote}
                  className="bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Request Custom Quote
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleCallUs}
                  className="border-2 border-gold-300 text-gold-700 hover:bg-gold-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (346) 764-9163
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EventPackages;