import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Star, Award, Shield, Car } from 'lucide-react';

const Careers = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no contact section on current page, scroll to footer
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApplyClick = (jobTitle: string) => {
    const jobSlug = jobTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/job-application/${jobSlug}`);
  };

  const jobOpenings = [
    {
      title: "Valet Parking Attendant",
      slug: "valet-parking-attendant",
      type: "Part-Time / Full-Time",
      location: "Houston, TX",
      salary: "$15-20/hour + Tips",
      description: "Join our team of professional valet attendants providing exceptional parking services at Houston's premier events and venues.",
      requirements: [
        "Valid driver's license with clean driving record",
        "Ability to drive manual transmission vehicles",
        "Professional appearance and excellent customer service skills",
        "Ability to work evenings, weekends, and holidays",
        "Physical ability to walk, run, and stand for extended periods"
      ],
      benefits: [
        "Competitive hourly wage plus tips",
        "Flexible scheduling",
        "Professional uniform provided",
        "Opportunity for advancement"
      ]
    },
    {
      title: "Lead Valet Supervisor",
      slug: "lead-valet-supervisor",
      type: "Full-Time",
      location: "Houston, TX", 
      salary: "$22-28/hour",
      description: "Lead a team of valet attendants and ensure smooth operations at high-end events and venues throughout Houston.",
      requirements: [
        "2+ years valet or hospitality management experience",
        "Strong leadership and communication skills",
        "Valid driver's license with clean driving record",
        "Ability to handle high-pressure situations",
        "Availability for evenings, weekends, and holidays"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance options",
        "Paid time off",
        "Career development opportunities",
        "Performance bonuses"
      ]
    },
    {
      title: "Event Coordinator",
      slug: "event-coordinator",
      type: "Full-Time",
      location: "Houston, TX",
      salary: "$45,000-55,000/year",
      description: "Coordinate valet parking operations for corporate events, weddings, and special occasions. Work directly with clients to ensure exceptional service delivery.",
      requirements: [
        "Bachelor's degree preferred",
        "2+ years event planning or coordination experience",
        "Excellent organizational and communication skills",
        "Proficiency in Microsoft Office and project management tools",
        "Valid driver's license"
      ],
      benefits: [
        "Competitive salary",
        "Health, dental, and vision insurance",
        "401(k) with company match",
        "Paid vacation and holidays",
        "Professional development opportunities"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Careers - Join Event Parking Services by Cardinal Team | Houston Valet Jobs"
        description="Join Event Parking Services by Cardinal's professional team in Houston. We're hiring valet attendants, supervisors, and event coordinators. Competitive pay, flexible schedules, growth opportunities."
        keywords={["valet jobs Houston", "parking attendant careers", "event coordinator jobs", "hospitality careers Houston"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                Join Our <span className="text-yellow-400">Team</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Build your career with Houston's premier valet parking service
              </p>
              <div className="flex items-center justify-center space-x-2 bg-green-500/20 border border-green-400/30 rounded-lg px-6 py-3 inline-flex">
                <Star className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Now Hiring - Competitive Pay & Benefits</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose Event Parking Services by Cardinal?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Pay</h3>
                  <p className="text-gray-600">Above-market wages plus tips and performance bonuses for top performers.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Scheduling</h3>
                  <p className="text-gray-600">Part-time and full-time positions available with evening and weekend opportunities.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
                  <p className="text-gray-600">Clear advancement paths from attendant to supervisor to management positions.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Great Team</h3>
                  <p className="text-gray-600">Join a supportive team of professionals who take pride in exceptional service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Current Openings</h2>
              
              <div className="space-y-8">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {job.type}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            {job.salary}
                          </Badge>
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
                      >
                        Apply Now
                      </Button>
                    </div>
                    
                    <p className="text-gray-700 mb-6 text-lg">{job.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Apply Online</h3>
                  <p className="text-gray-600">Submit your application and resume through our contact form or email.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview</h3>
                  <p className="text-gray-600">Meet with our hiring team to discuss your experience and career goals.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Training</h3>
                  <p className="text-gray-600">Complete our comprehensive training program and join the team!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 lg:px-6 xl:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Join Our Team?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your career with Houston's premier valet parking service. We're looking for dedicated professionals who take pride in exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/job-application/valet-parking-attendant')}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-gray-900 px-8 py-4 text-lg font-bold rounded-xl shadow-lg"
                >
                  Apply Today
                </Button>
                <Button 
                  onClick={scrollToContact}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                >
                  Ask Questions
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

export default Careers;