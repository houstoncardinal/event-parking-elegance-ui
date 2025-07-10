import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Phone, Mail, Calendar, FileText, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface SubmissionSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'contact' | 'booking' | 'quote';
  customerInfo?: {
    name?: string;
    email?: string;
    eventType?: string;
    eventDate?: string;
    guestCount?: number;
    startTime?: string;
    endTime?: string;
  };
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({
  isOpen,
  onClose,
  formType,
  customerInfo
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  // Calculate quote details for quote submissions
  const calculateQuote = () => {
    const guestCount = customerInfo?.guestCount || 75;
    const driverFee = Math.ceil(guestCount / 25) * 4 * 34.99; // drivers needed * 4 hours * $34.99/hr
    const equipmentFee = 99.99;
    const total = driverFee + equipmentFee;
    
    return {
      guestCount,
      driversNeeded: Math.ceil(guestCount / 25),
      driverFee,
      equipmentFee,
      total
    };
  };

  const getFormTypeInfo = () => {
    switch (formType) {
      case 'contact':
        return {
          title: 'Message Sent Successfully!',
          responseTime: '2 hours',
          steps: [
            { icon: CheckCircle, title: 'Submission Confirmed', description: 'Your message has been received and logged in our system' },
            { icon: FileText, title: 'Request Review', description: 'Our team is reviewing your inquiry and requirements' },
            { icon: Phone, title: 'Personal Response', description: 'A Cardinal Valet representative will contact you directly' },
            { icon: Calendar, title: 'Next Steps', description: 'We\'ll discuss your needs and provide detailed information' }
          ]
        };
      case 'booking':
        return {
          title: 'Booking Request Received!',
          responseTime: '24 hours',
          steps: [
            { icon: CheckCircle, title: 'Request Confirmed', description: 'Your booking request has been successfully submitted' },
            { icon: FileText, title: 'Availability Check', description: 'We\'re verifying attendant availability for your event date' },
            { icon: Phone, title: 'Consultation Call', description: 'Our team will call to finalize service details and logistics' },
            { icon: Calendar, title: 'Service Confirmation', description: 'You\'ll receive a detailed service agreement and timeline' }
          ]
        };
      case 'quote':
        return {
          title: 'Quote Request Submitted!',
          responseTime: '30 minutes',
          steps: [
            { icon: CheckCircle, title: 'Quote Processing', description: 'Our pricing team is preparing your custom quote' },
            { icon: FileText, title: 'Service Analysis', description: 'We\'re analyzing your specific requirements and event details' },
            { icon: Phone, title: 'Premium Consultation', description: 'A valet specialist will present your personalized quote' },
            { icon: Calendar, title: 'Service Booking', description: 'Upon approval, we\'ll schedule and confirm your valet service' }
          ]
        };
    }
  };

  const info = getFormTypeInfo();

  useEffect(() => {
    if (!isOpen || !autoAdvance) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= info.steps.length - 1) {
          setAutoAdvance(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4000); // Slower progression for better readability

    return () => clearInterval(timer);
  }, [isOpen, autoAdvance, info.steps.length]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setAutoAdvance(true);
      // Auto close after 20 seconds for longer display
      const autoCloseTimer = setTimeout(() => {
        onClose();
      }, 20000);
      return () => clearTimeout(autoCloseTimer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render the professional quote details format for quote submissions
  if (formType === 'quote') {
    const quote = calculateQuote();
    const eventDateTime = customerInfo?.eventDate && customerInfo?.startTime && customerInfo?.endTime 
      ? `${customerInfo.eventDate}, ${customerInfo.startTime} to ${customerInfo.endTime}`
      : customerInfo?.eventDate || 'TBD';

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-slate-800 text-cyan-400 font-mono text-sm rounded-lg overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-slate-700 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-xs">Custom Quote Details</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-slate-600 p-1 h-6 w-6"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-cyan-400 mb-4">
                  Hello {customerInfo?.name?.split(' ')[0] || 'Client'},
                </p>
                
                <p className="text-cyan-400 mb-6">
                  Your quote from Cardinal Valet Services has arrived:
                </p>

                {/* Quote Table */}
                <div className="bg-slate-900 border border-slate-600 rounded">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="text-left p-3 text-gray-300">EVENT DATE</th>
                        <th className="text-center p-3 text-gray-300">GUEST COUNT</th>
                        <th className="text-center p-3 text-gray-300">PRICE</th>
                        <th className="text-right p-3 text-gray-300">TOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-r border-slate-600 text-gray-300">
                          {eventDateTime}
                        </td>
                        <td className="p-3 border-r border-slate-600 text-center text-gray-300">
                          {quote.guestCount}
                        </td>
                        <td className="p-3 border-r border-slate-600">
                          <div className="space-y-2">
                            <div>
                              <div className="text-gray-300 font-semibold">Drivers Fee</div>
                              <div className="text-xs text-gray-400">
                                ( {quote.driversNeeded} drivers for 4<br />
                                hours @<br />
                                $34.99 each /<br />
                                hr )<br />
                                <span className="text-red-400">minimum<br />
                                charge is 4<br />
                                hours</span>
                              </div>
                            </div>
                            <div className="border-t border-slate-600 pt-2">
                              <div className="text-gray-300 font-semibold">Equipment Setup Fee</div>
                              <div className="text-xs text-gray-400">
                                ( Valet Box,<br />
                                Signage,<br />
                                Cones, Valet<br />
                                Tickets/Lights<br />
                                etc )
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-right">
                          <div className="space-y-4">
                            <div className="text-gray-300">${quote.driverFee.toFixed(2)}</div>
                            <div className="text-gray-300 pt-8">${quote.equipmentFee.toFixed(2)}</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-slate-600 bg-slate-700">
                        <td colSpan={3} className="p-3 text-right font-semibold text-gray-300">
                          Grand Total
                        </td>
                        <td className="p-3 text-right font-bold text-gray-300">
                          ${quote.total.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 space-y-4 text-cyan-400">
                  <p>
                    To book this event or for any other questions simply reply to this email. Our parking specialists are on standby 24/7.
                  </p>
                  <p>
                    You can also call us at{' '}
                    <span className="text-blue-400 underline">(832) 875-8743</span>{' '}
                    Monday-Friday 10am-6pm and Saturday 11am-3pm.
                  </p>
                  <p>
                    We look forward to serving you at your event. Thank You
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Original format for contact and booking submissions
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl"
        >
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <div className="relative bg-gradient-to-r from-gold-500 to-gold-600 p-6 text-white">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:bg-white/20 p-2"
              >
                <X className="w-4 h-4" />
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{info.title}</h2>
                  <div className="flex items-center space-x-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Expected response within {info.responseTime}</span>
                  </div>
                </div>
              </div>

              {customerInfo && (
                <div className="mt-4 p-4 bg-white/10 rounded-lg">
                  <h3 className="font-semibold mb-2">Submission Details:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {customerInfo.name && <div>Name: {customerInfo.name}</div>}
                    {customerInfo.email && <div>Email: {customerInfo.email}</div>}
                    {customerInfo.eventType && <div>Event: {customerInfo.eventType}</div>}
                    {customerInfo.eventDate && <div>Date: {customerInfo.eventDate}</div>}
                  </div>
                </div>
              )}
            </div>

            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next:</h3>
                
                {info.steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, x: -20 }}
                    animate={{ 
                      opacity: index <= currentStep ? 1 : 0.3,
                      x: index <= currentStep ? 0 : -20 
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                      index <= currentStep 
                        ? 'bg-gold-50 border border-gold-200' 
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      index <= currentStep 
                        ? 'bg-gold-500 text-white' 
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-1 transition-colors duration-300 ${
                        index <= currentStep ? 'text-gold-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        index <= currentStep ? 'text-gold-700' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Need immediate assistance?</h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Call us at <strong>(832) 555-CARDINAL</strong> or email <strong>info@eventsparkingservices.com</strong>
                    </p>
                    <p className="text-xs text-blue-600">
                      Reference ID: {Date.now().toString().slice(-6)} • Available 24/7 for emergencies
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={onClose}
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8"
                >
                  Continue Browsing
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SubmissionSuccess;