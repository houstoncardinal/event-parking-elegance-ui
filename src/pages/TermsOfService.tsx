import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Cardinal Valet Services"
        description="Terms of service for Cardinal Valet Services. Read our terms and conditions for using our valet parking services."
        keywords={["terms of service", "terms and conditions", "valet service terms", "cardinal valet terms"]}
        url="https://cardinalvalet.com/terms-of-service"
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Cardinal Valet Services ("we," "us," or "our"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>2. Services</h2>
              <p>
                We provide professional valet parking services for events including but not limited to:
              </p>
              <ul>
                <li>Weddings and special events</li>
                <li>Corporate events and conferences</li>
                <li>Private parties and celebrations</li>
                <li>Commercial and residential events</li>
              </ul>

              <h2>3. Booking and Payment</h2>
              <ul>
                <li>All bookings must be confirmed in writing</li>
                <li>A deposit may be required to secure your booking</li>
                <li>Full payment is due before or on the day of service</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Cancellations must be made at least 48 hours in advance</li>
              </ul>

              <h2>4. Service Requirements</h2>
              <p>To ensure quality service, we require:</p>
              <ul>
                <li>Access to designated parking areas</li>
                <li>Proper lighting for evening events</li>
                <li>Clear signage for valet service</li>
                <li>Adequate space for vehicle staging</li>
                <li>Contact person available during service</li>
              </ul>

              <h2>5. Liability and Insurance</h2>
              <ul>
                <li>We carry $2 million in liability insurance</li>
                <li>All attendants are bonded and insured</li>
                <li>We are not responsible for pre-existing vehicle damage</li>
                <li>Vehicle owners should remove valuables from their vehicles</li>
                <li>We will report any incidents immediately</li>
              </ul>

              <h2>6. Attendant Conduct</h2>
              <p>Our attendants are:</p>
              <ul>
                <li>Professionally trained and uniformed</li>
                <li>Background checked and drug tested</li>
                <li>Licensed drivers with clean records</li>
                <li>Required to follow all traffic laws</li>
                <li>Trained in customer service excellence</li>
              </ul>

              <h2>7. Weather and Force Majeure</h2>
              <p>
                We reserve the right to modify or cancel services due to severe weather conditions, natural disasters, or other circumstances beyond our control. We will provide reasonable notice when possible.
              </p>

              <h2>8. Client Responsibilities</h2>
              <ul>
                <li>Provide accurate event information</li>
                <li>Ensure proper access to parking areas</li>
                <li>Notify us of any special requirements</li>
                <li>Provide contact information for emergencies</li>
                <li>Follow all local parking regulations</li>
              </ul>

              <h2>9. Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.
              </p>

              <h2>10. Privacy</h2>
              <p>
                We respect your privacy and will not share your personal information except as required by law or with your consent. See our Privacy Policy for details.
              </p>

              <h2>11. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
              </p>

              <h2>12. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Cardinal Valet Services</strong></p>
                <p><strong>Email:</strong> info@eventsparkingservices.com</p>
                <p><strong>Phone:</strong> (346) 764-9163</p>
                <p><strong>Address:</strong> Houston, TX</p>
              </div>

              <h2>13. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Texas. Any disputes will be resolved in the courts of Harris County, Texas.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService; 