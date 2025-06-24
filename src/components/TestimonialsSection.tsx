
import React from 'react';
import { Star, Quote, Award, TrendingUp } from 'lucide-react';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { TestimonialsColumn } from './testimonials-columns-1';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Absolutely exceptional service. Their attention to detail and professionalism exceeded all expectations for our corporate gala.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "Michael Chen",
      role: "CEO, TechCorp"
    },
    {
      text: "The valet team made our wedding day perfect. Every guest was impressed by their courteous and efficient service.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      name: "Sarah Johnson",
      role: "Bride"
    },
    {
      text: "Professional, reliable, and trustworthy. We've used their services for multiple events and they consistently deliver excellence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      name: "David Rodriguez",
      role: "Event Planner"
    },
    {
      text: "Houston's finest valet service. They handle our luxury vehicles with the care and respect they deserve.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      name: "Amanda Foster",
      role: "River Oaks Resident"
    },
    {
      text: "From setup to cleanup, their team was flawless. Our guests are still talking about the impeccable service.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      name: "James Mitchell",
      role: "Corporate Executive"
    }
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(2, 5);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gold-50/30 to-slate-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold-200/15 via-gold-300/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-slate-200/10 via-slate-300/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gold-200/50 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Quote className="w-4 h-4 text-gold-600" />
            <span className="text-slate-700 font-medium text-sm">Client Testimonials</span>
            <div className="flex items-center gap-1 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            <span className="block text-slate-900 mb-2">Trusted by Houston's</span>
            <span className="block bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Most Distinguished
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            From Fortune 500 executives to discerning homeowners, our clients consistently 
            choose us for our unmatched professionalism and attention to detail.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-slate-600">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium">98% Retention Rate</span>
            </div>
          </div>
        </AnimatedGroup>

        {/* Testimonials Columns */}
        <div className="relative">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
              <TestimonialsColumn
                testimonials={firstColumn}
                className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]"
                duration={15}
              />
              <TestimonialsColumn
                testimonials={secondColumn}
                className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] hidden md:block"
                duration={20}
              />
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-gold-50/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 via-gold-50/30 to-transparent pointer-events-none" />
        </div>

        {/* Stats Section */}
        <AnimatedGroup preset="fade" className="mt-16 pt-12 border-t border-slate-200/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-slate-900 mb-2">1,500+</div>
              <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold-600 mb-2">4.9/5</div>
              <div className="text-sm text-slate-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-slate-900 mb-2">98%</div>
              <div className="text-sm text-slate-600 font-medium">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default TestimonialsSection;
