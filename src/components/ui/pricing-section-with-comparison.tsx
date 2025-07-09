import { Check, PhoneCall, Calendar, Star, Users, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Pricing() {
  const pricingTiers = [
    { guestRange: "0-50", drivers: 2, rate: 44.99 },
    { guestRange: "51-100", drivers: 3, rate: 39.99 },
    { guestRange: "101-150", drivers: 4, rate: 34.99 },
    { guestRange: "151-175", drivers: 5, rate: 34.99 },
    { guestRange: "176-200", drivers: 6, rate: 34.99 },
    { guestRange: "201-250", drivers: 8, rate: 32.99 },
    { guestRange: "251-300", drivers: 10, rate: 29.99 },
  ];

  const setupFeeIncludes = [
    "Valet Station",
    "Professional Signage", 
    "Traffic Cones",
    "Valet Tickets & Lighting",
    "Other Operational Supplies"
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
            <Star className="w-4 h-4 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-xs sm:text-sm">TRANSPARENT PRICING</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Valet Service Pricing
          </h2>
          
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Professional valet service with transparent pricing based on guest count. 
            Minimum 4 hours of service. All rates include professional staff and full insurance coverage.
          </p>
        </div>

        {/* Mobile-Optimized Pricing Tiers */}
        <div className="mb-12 sm:mb-16">
          <Card className="overflow-hidden">
            <CardHeader className="bg-yellow-50 border-b px-4 sm:px-6">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 text-center">Pricing Tiers by Guest Count</h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">Professional valet attendants with full equipment setup</p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Mobile Cards for Small Screens */}
              <div className="block sm:hidden">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-gray-900">{tier.guestRange} guests</div>
                        <div className="text-sm text-gray-600">{tier.drivers} drivers</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">${tier.rate}/hr</div>
                        <div className="text-sm font-semibold text-gray-700">${(tier.rate * tier.drivers * 4).toFixed(2)} total</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">4-hour minimum service</div>
                  </div>
                ))}
                <div className="p-4 bg-yellow-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-gray-900">300+ guests</div>
                      <div className="text-sm text-gray-600 italic">Custom solution</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">Contact Us</div>
                      <div className="text-sm text-gray-600">Custom quote</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Table for Larger Screens */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-gray-900">Guest Count</th>
                      <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-gray-900">Drivers Required</th>
                      <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-gray-900">Rate per Attendant</th>
                      <th className="px-4 lg:px-6 py-4 text-left text-sm font-semibold text-gray-900">4-Hour Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {pricingTiers.map((tier, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 font-medium">{tier.guestRange} guests</td>
                        <td className="px-4 lg:px-6 py-4 text-sm text-gray-600">{tier.drivers} drivers</td>
                        <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 font-semibold">${tier.rate}/hr</td>
                        <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 font-bold">${(tier.rate * tier.drivers * 4).toFixed(2)}</td>
                      </tr>
                    ))}
                    <tr className="bg-yellow-50">
                      <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 font-bold">300+ guests</td>
                      <td className="px-4 lg:px-6 py-4 text-sm text-gray-600 italic">Custom</td>
                      <td className="px-4 lg:px-6 py-4 text-sm text-gray-600 italic">Custom Quote</td>
                      <td className="px-4 lg:px-6 py-4 text-sm text-gray-900 font-bold">Contact Us</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Setup Fee Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Equipment Setup Fee
              </h3>
              <div className="text-3xl font-bold text-yellow-600">$99.99</div>
              <p className="text-gray-600 text-sm">One-time fee per event</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-900 mb-3">Setup Fee Includes:</div>
                {setupFeeIncludes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Service Requirements
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Minimum 4 hours of service</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Team arrives 10-15 minutes early for setup</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Professional attendants & full insurance</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">Start time and end time required</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Important Information
          </h3>
          <div className="space-y-3 text-sm text-amber-800">
            <p>
              <strong>Distance Considerations:</strong> Distance between valet station and parking facilities is not calculated in online quotes. 
              This may affect the number of attendants required for your event.
            </p>
            <p>
              <strong>Estimate Basis:</strong> Your estimate is determined based on guest count and average attendant requirements.
            </p>
            <p>
              <strong>Setup Time:</strong> Our valet team arrives 10-15 minutes before event start time. 
              Make a special request if you prefer 30+ minutes early arrival.
            </p>
            <p>
              <strong>Free Site Survey:</strong> Schedule a free survey of your site if needed for accurate planning.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Your Quote?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get an instant estimate based on your guest count and event details. 
            Our team will provide final pricing after reviewing your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Get Instant Quote
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3">
              <PhoneCall className="w-5 h-5 mr-2" />
              Call (713) 555-VALET
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
              <span className="text-sm">Professional Service</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-sm">Fully Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Pricing };