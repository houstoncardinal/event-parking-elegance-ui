import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Clock, 
  Shield, 
  Car, 
  CreditCard, 
  MapPin, 
  Phone, 
  Users, 
  Calendar,
  Star,
  CheckCircle,
  AlertTriangle,
  Zap
} from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Services",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "bg-blue-500",
      questions: [
        {
          question: "What is valet parking and how does it work?",
          answer: "Valet parking is a premium service where our professional attendants park and retrieve your vehicle for you. Simply pull up to the designated valet area, hand us your keys, and we'll take care of the rest. When you're ready to leave, present your ticket and we'll have your car ready in minutes."
        },
        {
          question: "What types of events do you provide valet services for?",
          answer: "We specialize in weddings, corporate events, private parties, galas, fundraisers, restaurant services, hotel events, and any occasion where you want to provide exceptional guest experience. From intimate gatherings of 20 guests to large corporate events with 500+ attendees."
        },
        {
          question: "How far in advance should I book your services?",
          answer: "We recommend booking at least 2-4 weeks in advance for most events. For peak seasons (wedding season, holidays) or large events, 6-8 weeks advance booking is preferred. However, we can often accommodate last-minute requests with 48-72 hours notice."
        },
        {
          question: "Do you provide services throughout the Houston area?",
          answer: "Yes! We provide valet parking services throughout Greater Houston including downtown Houston, The Woodlands, Sugar Land, Pearland, Katy, Pasadena, and surrounding areas. Contact us for specific location availability."
        }
      ]
    },
    {
      title: "Pricing & Packages",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-green-500",
      questions: [
        {
          question: "How much does valet parking cost?",
          answer: "Our pricing varies based on event size, duration, location, and specific requirements. Typical rates range from $15-25 per hour per attendant, with a minimum service time. We offer package deals for longer events and regular clients. Contact us for a detailed quote tailored to your event."
        },
        {
          question: "What's included in your valet service packages?",
          answer: "Our standard package includes professional uniformed attendants, parking tickets, traffic cones, signage, insurance coverage, and event coordination. Premium packages add features like vehicle detailing, covered parking areas, and extended service hours."
        },
        {
          question: "Do you charge for travel time or setup?",
          answer: "For locations within our primary service area (Houston Metro), travel and setup are included. For events outside our standard radius, minimal travel fees may apply. Setup time is always included in our service."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, all major credit cards, and can set up net-30 payment terms for corporate clients and event planners. A deposit is typically required to secure your booking."
        }
      ]
    },
    {
      title: "Safety & Insurance",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-500",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer: "Yes, we are fully licensed, bonded, and insured. We carry comprehensive general liability insurance and garage keepers liability insurance specifically for valet operations. All attendants are background-checked and professionally trained."
        },
        {
          question: "What happens if my car is damaged during valet service?",
          answer: "While extremely rare, if any damage occurs, we have comprehensive insurance coverage. We document all vehicles upon arrival and have clear protocols for handling any incidents. Our insurance covers both minor and major damages."
        },
        {
          question: "How do you ensure vehicle security?",
          answer: "All vehicles are parked in designated secure areas. Our attendants maintain visual supervision of parked vehicles throughout the event. Keys are secured and organized with our numbered ticket system. We use professional-grade equipment and follow strict security protocols."
        },
        {
          question: "Do you handle luxury and exotic vehicles?",
          answer: "Absolutely! Our attendants are specially trained to handle luxury vehicles, exotic cars, and classic automobiles. We take extra precautions with high-value vehicles and can provide premium parking locations upon request."
        }
      ]
    },
    {
      title: "Operations & Logistics",
      icon: <Car className="w-5 h-5" />,
      color: "bg-purple-500",
      questions: [
        {
          question: "How many attendants will be at my event?",
          answer: "Attendant count depends on your guest count and event duration. Typically, we provide 1 attendant per 25-40 vehicles. For events with 50+ cars, we assign multiple attendants to ensure efficient service and minimal wait times."
        },
        {
          question: "What if it rains during my outdoor event?",
          answer: "We come prepared for all weather conditions. Our attendants have proper rain gear and we can provide covered areas for ticket distribution. In severe weather, we work with you to modify service as needed while maintaining safety."
        },
        {
          question: "Do you provide your own parking equipment?",
          answer: "Yes, we bring all necessary equipment including traffic cones, directional signage, ticket dispensers, and professional uniforms. We can also coordinate with venues for additional equipment if needed."
        },
        {
          question: "Can you accommodate wheelchair accessible vehicles?",
          answer: "Absolutely. Our team is trained to handle vehicles with wheelchair lifts, hand controls, and other accessibility modifications. We ensure these vehicles receive priority parking in convenient locations."
        }
      ]
    },
    {
      title: "Event Planning",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-orange-500",
      questions: [
        {
          question: "Do you offer site visits before the event?",
          answer: "Yes, we highly recommend a pre-event site visit. This allows us to assess parking logistics, identify the best traffic flow, and coordinate with your venue. Site visits help ensure smooth operations on event day."
        },
        {
          question: "How early do your attendants arrive?",
          answer: "Our team typically arrives 30-60 minutes before guest arrival to set up equipment, review logistics, and coordinate with your event staff. For large events, we may arrive earlier to ensure everything is perfectly organized."
        },
        {
          question: "Can you coordinate with other event vendors?",
          answer: "Absolutely! We regularly work with wedding planners, caterers, photographers, and venue coordinators. We understand the importance of seamless vendor coordination and will work with your team to ensure perfect timing."
        },
        {
          question: "What information do you need to provide a quote?",
          answer: "We need: event date and time, approximate guest count, event location/venue, expected duration of service, and any special requirements. The more details you provide, the more accurate our quote will be."
        }
      ]
    },
    {
      title: "Special Situations",
      icon: <Star className="w-5 h-5" />,
      color: "bg-yellow-500",
      questions: [
        {
          question: "Do you provide valet for multi-day events?",
          answer: "Yes, we provide valet services for conferences, festivals, and multi-day celebrations. We can arrange overnight vehicle security and coordinate with your event schedule across multiple days."
        },
        {
          question: "Can you handle events with VIP guests?",
          answer: "Certainly! We provide special VIP services including priority parking, dedicated attendants, and discretion for high-profile guests. We're experienced with celebrity events and understand confidentiality requirements."
        },
        {
          question: "What about venues with limited parking space?",
          answer: "We specialize in maximizing limited parking spaces through efficient vehicle arrangement and off-site parking coordination when necessary. We can arrange shuttle services or remote parking solutions for challenging venues."
        },
        {
          question: "Do you provide services during holidays?",
          answer: "Yes, we operate year-round including holidays. Holiday events may have premium pricing due to increased demand and holiday pay for staff. We recommend booking holiday events well in advance."
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Frequently Asked Questions - Event Parking Services by Cardinal"
        description="Find answers to common questions about our professional valet parking services in Houston. Learn about pricing, insurance, safety, and booking information."
        keywords={["valet parking FAQ", "Houston valet questions", "event parking help", "valet service information"]}
        url="https://cardinalvalet.com/faq"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Everything You Need to Know
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our professional valet parking services. 
              Can't find what you're looking for? <a href="/contact" className="text-primary hover:underline font-medium">Contact us directly</a>.
            </p>
          </div>

          {/* Quick Contact Card */}
          <Card className="mb-16 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Quick Quote</h3>
                  <p className="text-sm text-muted-foreground">Call us for immediate assistance</p>
                  <a href="tel:(832)555-CARDINAL" className="text-primary font-medium hover:underline">
                    (832) 555-CARDINAL
                  </a>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">We're here when you need us</p>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Always Open
                  </Badge>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Fast Response</h3>
                  <p className="text-sm text-muted-foreground">Quotes within 24 hours</p>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Quick Service
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Questions Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg px-6 py-2 hover:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <div className="flex items-start gap-4 w-full">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-semibold text-gray-900 text-lg leading-tight">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0 pb-6">
                        <div className="ml-12 text-muted-foreground leading-relaxed text-base">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still Have Questions Section */}
          <Card className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our experienced team is here to help! Whether you need a custom quote, 
                have specific requirements, or want to discuss your event in detail, 
                we're just a phone call away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Get in Touch
                </a>
                
                <a 
                  href="tel:(832)555-CARDINAL"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Clock className="w-5 h-5" />
                  Call Now: (832) 555-CARDINAL
                </a>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;