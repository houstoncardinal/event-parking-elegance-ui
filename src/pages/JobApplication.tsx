import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Upload, User, Phone, Mail, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JobApplication = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'TX',
    zipCode: '',
    
    // Position Information
    position: jobTitle || '',
    availability: '',
    desiredSalary: '',
    startDate: '',
    
    // Experience
    previousExperience: '',
    drivingExperience: '',
    manualTransmission: false,
    
    // Background
    backgroundCheck: false,
    drugTest: false,
    workAuthorization: false,
    
    // Additional Information
    whyInterested: '',
    additionalInfo: '',
    
    // References
    reference1Name: '',
    reference1Phone: '',
    reference1Relationship: '',
    reference2Name: '',
    reference2Phone: '',
    reference2Relationship: ''
  });

  const jobDetails = {
    'valet-parking-attendant': {
      title: 'Valet Parking Attendant',
      description: 'Join our team of professional valet attendants providing exceptional parking services.',
      requirements: [
        'Valid driver\'s license with clean driving record',
        'Ability to drive manual transmission vehicles',
        'Professional appearance and excellent customer service skills'
      ]
    },
    'lead-valet-supervisor': {
      title: 'Lead Valet Supervisor',
      description: 'Lead a team of valet attendants and ensure smooth operations at high-end events.',
      requirements: [
        '2+ years valet or hospitality management experience',
        'Strong leadership and communication skills',
        'Valid driver\'s license with clean driving record'
      ]
    },
    'event-coordinator': {
      title: 'Event Coordinator',
      description: 'Coordinate valet parking operations for corporate events, weddings, and special occasions.',
      requirements: [
        'Bachelor\'s degree preferred',
        '2+ years event planning or coordination experience',
        'Excellent organizational and communication skills'
      ]
    }
  };

  const currentJob = jobDetails[jobTitle as keyof typeof jobDetails];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.backgroundCheck || !formData.drugTest || !formData.workAuthorization) {
      toast({
        title: "Required Agreements",
        description: "Please agree to all required background checks and authorizations.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Since user has Netlify form detection, we'll submit as a regular form
      const form = document.createElement('form');
      form.setAttribute('netlify', '');
      form.setAttribute('name', 'job-application');
      form.style.display = 'none';

      // Add all form data as hidden inputs
      Object.entries(formData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value.toString();
        form.appendChild(input);
      });

      document.body.appendChild(form);
      
      const formDataObj = new FormData(form);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      document.body.removeChild(form);

      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you soon.",
        variant: "default"
      });

      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: 'TX', zipCode: '',
        position: jobTitle || '', availability: '', desiredSalary: '', startDate: '',
        previousExperience: '', drivingExperience: '', manualTransmission: false,
        backgroundCheck: false, drugTest: false, workAuthorization: false,
        whyInterested: '', additionalInfo: '',
        reference1Name: '', reference1Phone: '', reference1Relationship: '',
        reference2Name: '', reference2Phone: '', reference2Relationship: ''
      });

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (!currentJob) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Position Not Found</h1>
          <Button onClick={() => navigate('/careers')} className="bg-blue-600 hover:bg-blue-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`Apply for ${currentJob.title} - Cardinal Valet`}
        description={`Apply for the ${currentJob.title} position at Cardinal Valet. Join Houston's premier valet parking service team.`}
        keywords={[`${currentJob.title.toLowerCase()} application`, "valet jobs Houston", "cardinal valet careers"]}
      />
      
      <Navigation />
      
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Button 
                onClick={() => navigate('/careers')} 
                variant="outline" 
                className="mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
              
              <Card className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Apply for {currentJob.title}</h1>
                <p className="text-blue-100 text-lg mb-6">{currentJob.description}</p>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Key Requirements:</h3>
                  <ul className="space-y-1">
                    {currentJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-100">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>

            {/* Application Form */}
            <Card className="p-8">
              <form onSubmit={handleSubmit} name="job-application" data-netlify="true">
                <input type="hidden" name="form-name" value="job-application" />
                
                {/* Personal Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <User className="w-6 h-6 mr-2 text-blue-600" />
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Select name="state" value={formData.state} onValueChange={(value) => handleSelectChange('state', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="LA">Louisiana</SelectItem>
                          <SelectItem value="OK">Oklahoma</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Position Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <DollarSign className="w-6 h-6 mr-2 text-blue-600" />
                    Position Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="position">Position Applied For</Label>
                      <Input
                        id="position"
                        name="position"
                        value={currentJob.title}
                        readOnly
                        className="bg-gray-50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Select name="availability" value={formData.availability} onValueChange={(value) => handleSelectChange('availability', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                          <SelectItem value="evenings-weekends">Evenings & Weekends</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="desiredSalary">Desired Salary/Hourly Rate</Label>
                      <Input
                        id="desiredSalary"
                        name="desiredSalary"
                        value={formData.desiredSalary}
                        onChange={handleInputChange}
                        placeholder="e.g., $18/hour or $50,000/year"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="startDate">Available Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience & Skills</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="previousExperience">Previous Work Experience</Label>
                      <Textarea
                        id="previousExperience"
                        name="previousExperience"
                        value={formData.previousExperience}
                        onChange={handleInputChange}
                        placeholder="Describe your relevant work experience, including customer service, hospitality, or valet experience..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="drivingExperience">Driving Experience</Label>
                      <Textarea
                        id="drivingExperience"
                        name="drivingExperience"
                        value={formData.drivingExperience}
                        onChange={handleInputChange}
                        placeholder="Years of driving experience, types of vehicles driven, any special certifications..."
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="manualTransmission"
                        checked={formData.manualTransmission}
                        onCheckedChange={(checked) => handleCheckboxChange('manualTransmission', checked as boolean)}
                      />
                      <Label htmlFor="manualTransmission">I can drive manual transmission vehicles</Label>
                    </div>
                  </div>
                </div>

                {/* Background & Authorization */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Background & Authorization</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="backgroundCheck"
                        checked={formData.backgroundCheck}
                        onCheckedChange={(checked) => handleCheckboxChange('backgroundCheck', checked as boolean)}
                        required
                      />
                      <Label htmlFor="backgroundCheck">I consent to a background check *</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="drugTest"
                        checked={formData.drugTest}
                        onCheckedChange={(checked) => handleCheckboxChange('drugTest', checked as boolean)}
                        required
                      />
                      <Label htmlFor="drugTest">I consent to drug testing as required *</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="workAuthorization"
                        checked={formData.workAuthorization}
                        onCheckedChange={(checked) => handleCheckboxChange('workAuthorization', checked as boolean)}
                        required
                      />
                      <Label htmlFor="workAuthorization">I am authorized to work in the United States *</Label>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="whyInterested">Why are you interested in this position?</Label>
                      <Textarea
                        id="whyInterested"
                        name="whyInterested"
                        value={formData.whyInterested}
                        onChange={handleInputChange}
                        placeholder="Tell us what interests you about working with Cardinal Valet..."
                        rows={4}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        placeholder="Any additional information you'd like us to know..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* References */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">References</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Reference 1</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reference1Name">Name</Label>
                          <Input
                            id="reference1Name"
                            name="reference1Name"
                            value={formData.reference1Name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="reference1Phone">Phone Number</Label>
                          <Input
                            id="reference1Phone"
                            name="reference1Phone"
                            type="tel"
                            value={formData.reference1Phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="reference1Relationship">Relationship</Label>
                          <Input
                            id="reference1Relationship"
                            name="reference1Relationship"
                            value={formData.reference1Relationship}
                            onChange={handleInputChange}
                            placeholder="e.g., Former Supervisor, Colleague"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Reference 2</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="reference2Name">Name</Label>
                          <Input
                            id="reference2Name"
                            name="reference2Name"
                            value={formData.reference2Name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="reference2Phone">Phone Number</Label>
                          <Input
                            id="reference2Phone"
                            name="reference2Phone"
                            type="tel"
                            value={formData.reference2Phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <Label htmlFor="reference2Relationship">Relationship</Label>
                          <Input
                            id="reference2Relationship"
                            name="reference2Relationship"
                            value={formData.reference2Relationship}
                            onChange={handleInputChange}
                            placeholder="e.g., Former Supervisor, Colleague"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-xl"
                  >
                    Submit Application
                  </Button>
                  
                  <p className="text-gray-600 text-sm mt-4">
                    * Required fields. By submitting this application, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default JobApplication;