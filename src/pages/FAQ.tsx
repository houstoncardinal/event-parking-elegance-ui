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
      title: "Service Booking & Process",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "bg-blue-500",
      questions: [
        {
          question: "How does your service work and/or how do we reserve services for our upcoming Event?",
          answer: "First, to reserve your valet service fill out your instant quote form and once you have received the email simply follow the instructions which is the most efficient and effective. You may also call our office for assistance and support with the process. It would be our pleasure to assist you with getting the information you are looking for."
        },
        {
          question: "How far in advance do we need to book to assure availability?",
          answer: "The more time the better, by giving us advance notice it allows our team to plan and arrange every detail of the service, however any request made 72 hours or less will be considered an Express booking which will cost an additional $149.99."
        }
      ]
    },
    {
      title: "Staff & Appearance",
      icon: <Users className="w-5 h-5" />,
      color: "bg-green-500",
      questions: [
        {
          question: "What will the Valet Parking staff wear?",
          answer: "Our standard uniforms are company logo polo shirt with lead attendant's color code will be slightly different than the rest of the team. Premium service will include staff members dressed in formal button down long/short sleeve with tie or bow tie. We require staff to wear black pants or shorts and black shoes and in the winter or rainy weather conditions our company provides uniformed company jackets."
        },
        {
          question: "How many drivers will my event require?",
          answer: "The number of valet staff is based upon the distance of designated pick up and drop off or valet station location and parking facility. We usually calculate an average of 20 vehicles per driver with an additional staff member who remains up front to attend patrons upon arrival and a staff member to assist patrons upon departure at the valet station."
        }
      ]
    },
    {
      title: "Insurance & Coverage",
      icon: <Shield className="w-5 h-5" />,
      color: "bg-red-500",
      questions: [
        {
          question: "Are you Insured?",
          answer: "We are fully insured and bonded with a $2,000,000 umbrella coverage and responsible for vehicles in our possession and any incident our staff were involved in. Additional coverage may be added per request."
        }
      ]
    },
    {
      title: "Gratuity & Service Extensions",
      icon: <CreditCard className="w-5 h-5" />,
      color: "bg-purple-500",
      questions: [
        {
          question: "Do we Tip the Valet staff or is Gratuity included?",
          answer: "It is completely your choice if you would like to add a customary 15-20% gratuity to your invoice. If you were pleased with your valet team you may give them a tip at the end of the event."
        },
        {
          question: "If we need to extend Service due to Event going past the schedule, how do we arrange that?",
          answer: "To extend service you would have to message our company support or you may inform your lead staff member."
        },
        {
          question: "If our Event ends earlier than the scheduled time, what happens then?",
          answer: "Once you have reserved the block of time scheduled our staff is ready to remain for duration of the schedule."
        }
      ]
    },
    {
      title: "Cancellations & Refunds",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-orange-500",
      questions: [
        {
          question: "If our event is Cancelled do we receive a refund or do we forfeit our deposit?",
          answer: "Deposits are non-refundable because once submitted our admin team begins preparation and a certain amount of work has already been allocated. You can receive a refund if event is cancelled however the deposit will be deducted. To avoid loss of funds for cancelling your event you may notify our company to reschedule or postpone event for a later date in this case you will not lose your deposit."
        }
      ]
    },
    {
      title: "Customer Satisfaction",
      icon: <Star className="w-5 h-5" />,
      color: "bg-yellow-500",
      questions: [
        {
          question: "If we were unsatisfied with service or encountered an issue, how does it get resolved?",
          answer: (
            <>
              Our Company offers a 100% Satisfaction Guarantee and take all complaints and concerns very seriously as we value our reputation. 
              Please request a claim form from your lead attendant or contact our office on the following business day. 
              You can also{" "}
              <a href="/file-claim" className="text-primary hover:underline font-medium">
                file a claim online at our claim portal
              </a>
              . Upon receiving your feedback please allow our management team to investigate the matter. 
              Our admin team will assign your claim to one of our upper managers to personally investigate the matter and will be in touch with you upon completion of investigation.
            </>
          )
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