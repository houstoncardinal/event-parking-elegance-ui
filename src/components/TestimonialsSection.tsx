
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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(203,213,225,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <AnimatedGroup preset="fade" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Quote className="w-4 h-4 text-gold-600" />
            <span className="text-slate-700 font-medium text-sm">Client Testimonials</span>
            <div className="flex items-center gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-gold-500 fill-gold-500" />
              ))}
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            <span className="text-slate-900 block mb-1">Trusted by Houston's</span>
            <span className="bg-gradient-to-r from-gold-600 to-gold-500 bg-clip-text text-transparent">
              Most Distinguished
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From Fortune 500 executives to discerning homeowners, our clients consistently 
            choose us for our unmatched professionalism.
          </p>
        </AnimatedGroup>

        {/* Testimonials Grid */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialsColumn
              testimonials={firstColumn}
              className="[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
              duration={20}
            />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] hidden md:block"
              duration={25}
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Trust Indicators */}
        <AnimatedGroup preset="scale" className="mt-16 pt-12 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors duration-300">1,500+</div>
              <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-gold-600 mb-1 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
              <div className="text-sm text-slate-600 font-medium">Average Rating</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors duration-300">98%</div>
              <div className="text-sm text-slate-600 font-medium">Client Retention</div>
            </div>
            <div className="group">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors duration-300">15+</div>
              <div className="text-sm text-slate-600 font-medium">Years Excellence</div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default TestimonialsSection;
