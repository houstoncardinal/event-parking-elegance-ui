import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Cardinal Valet Services"
        description="Privacy policy for Cardinal Valet Services. Learn how we collect, use, and protect your personal information."
        keywords={["privacy policy", "data protection", "personal information", "cardinal valet privacy"]}
        url="https://cardinalvalet.com/privacy-policy"
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul>
                <li>Fill out our contact forms</li>
                <li>Request quotes for our services</li>
                <li>Book our valet services</li>
                <li>Contact us for support</li>
              </ul>

              <h2>Types of Information</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, business name</li>
                <li><strong>Event Information:</strong> Event date, location, guest count, service requirements</li>
                <li><strong>Payment Information:</strong> Billing details (processed securely through our payment partners)</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and improve our valet services</li>
                <li>Process bookings and payments</li>
                <li>Communicate with you about your events</li>
                <li>Send you service updates and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties except:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To service providers who assist us in operating our business</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with relevant authorities</li>
              </ul>

              <h2>Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to improve your experience on our website. You can control cookie settings through your browser preferences.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Email:</strong> info@eventsparkingservices.com</p>
                <p><strong>Phone:</strong> (346) 764-9163</p>
                <p><strong>Address:</strong> Houston, TX</p>
              </div>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy; 