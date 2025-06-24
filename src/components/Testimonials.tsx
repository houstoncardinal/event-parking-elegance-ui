
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah & Michael Thompson',
      role: 'Wedding Couple',
      event: 'Garden Wedding - 150 Guests',
      content: 'Event Parking Services made our wedding day absolutely perfect. Their team was professional, courteous, and handled our guests\' vehicles with such care. We couldn\'t have asked for better service!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'David Chen',
      role: 'Corporate Event Manager',
      event: 'Annual Gala - 300 Attendees',
      content: 'Outstanding service from start to finish. The team coordinated seamlessly with our venue and ensured VIP guests received the white-glove treatment they deserved. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Event Planner',
      event: 'Luxury Private Party',
      content: 'I\'ve worked with many valet services, but Event Parking Services stands out. Their attention to detail and professional presentation elevated our entire event experience.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b6e4e8b2?auto=format&fit=crop&w=150&h=150'
    },
    {
      name: 'Robert & Linda Wilson',
      role: 'Anniversary Celebration',
      event: '50th Anniversary - 80 Guests',
      content: 'The valet team was punctual, well-dressed, and incredibly respectful. They made our golden anniversary celebration feel truly special. Thank you for the exceptional service!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150'
    }
  ];

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 luxury-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-champagne-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-champagne-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what event hosts and planners say about our premium valet services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-champagne-400 opacity-50" />
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-champagne-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed font-light">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-champagne-400"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-champagne-400 text-sm">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-white/60 text-xs">
                    {testimonials[currentTestimonial].event}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="text-white hover:bg-white/10 rounded-full p-3"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-champagne-400' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="text-white hover:bg-white/10 rounded-full p-3"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-champagne-400 mb-2">4.9/5</div>
            <div className="text-white/80 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-champagne-400 mb-2">500+</div>
            <div className="text-white/80 text-sm">Events Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-champagne-400 mb-2">98%</div>
            <div className="text-white/80 text-sm">Return Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-champagne-400 mb-2">24/7</div>
            <div className="text-white/80 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
