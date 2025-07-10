import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { 
  FileText, 
  Shield, 
  Clock, 
  Phone, 
  AlertTriangle, 
  CheckCircle,
  Upload,
  Calendar as CalendarIcon,
  Car,
  User,
  MapPin,
  Camera,
  DollarSign,
  AlertCircle,
  Info,
  FileCheck
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const FileClaim = () => {
  const { toast } = useToast();
  const [incidentDate, setIncidentDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    
    // Incident Details
    incidentType: '',
    incidentDate: '',
    incidentTime: '',
    eventName: '',
    eventLocation: '',
    eventVenue: '',
    
    // Vehicle Information
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleColor: '',
    vehicleLicense: '',
    vehicleVin: '',
    
    // Damage/Loss Details
    damageDescription: '',
    damageLocation: '',
    estimatedValue: '',
    priorDamage: false,
    priorDamageDescription: '',
    
    // Incident Circumstances
    circumstances: '',
    witnessName: '',
    witnessPhone: '',
    witnessEmail: '',
    policeReport: false,
    policeReportNumber: '',
    
    // Insurance Information
    hasInsurance: '',
    insuranceCompany: '',
    insurancePolicyNumber: '',
    insuranceClaimFiled: '',
    
    // Additional Information
    additionalComments: '',
    urgencyLevel: 'normal',
    
    // Consent
    consentToInvestigate: false,
    consentToContact: false,
    acknowledgeTruth: false
  });

  const incidentTypes = [
    { value: 'vehicle_damage', label: 'Vehicle Damage' },
    { value: 'vehicle_theft', label: 'Vehicle Theft' },
    { value: 'personal_property', label: 'Personal Property Damage/Loss' },
    { value: 'personal_injury', label: 'Personal Injury' },
    { value: 'service_issue', label: 'Service Quality Issue' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Claim Submitted Successfully",
        description: "Your claim has been submitted. You will receive a confirmation email with your claim number shortly.",
      });
      
      // Reset form or redirect
      setStep(5); // Success step
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your claim. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getStepTitle = (stepNumber: number) => {
    const titles = {
      1: "Personal & Incident Information",
      2: "Vehicle & Damage Details", 
      3: "Circumstances & Insurance",
      4: "Review & Submit",
      5: "Claim Submitted"
    };
    return titles[stepNumber as keyof typeof titles];
  };

  return (
    <>
      <SEO 
        title="File a Claim - Event Parking Services by Cardinal"
        description="File an insurance claim for vehicle damage, theft, or other incidents during our valet parking services. Secure, fast, and comprehensive claim filing process."
        keywords={["file valet claim", "vehicle damage claim", "Houston valet insurance", "parking incident report", "insurance claim form"]}
        url="https://cardinalvalet.com/file-claim"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Insurance Claim Filing",
            "description": "Comprehensive claim filing service for valet parking incidents",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Event Parking Services by Cardinal"
            }
          })}
        </script>
      </Helmet>

      <Navigation />
      
      <div className="pt-16 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Insurance Claim Filing
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              File Your Claim
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We're here to help you through any incident. Our comprehensive claim filing process 
              ensures your case is handled professionally and efficiently.
            </p>

            {/* Important Notice */}
            <Alert className="max-w-4xl mx-auto mb-8">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="text-left">
                <strong>Important:</strong> Please file your claim as soon as possible after the incident. 
                For emergencies or immediate assistance, call us at <strong>(832) 555-CARDINAL</strong>.
              </AlertDescription>
            </Alert>
          </div>

          {step !== 5 && (
            <>
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                  {[1, 2, 3, 4].map((stepNumber) => (
                    <div key={stepNumber} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all ${
                        step >= stepNumber 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'bg-muted text-muted-foreground border-muted'
                      }`}>
                        {step > stepNumber ? <CheckCircle className="w-5 h-5" /> : stepNumber}
                      </div>
                      {stepNumber < 4 && (
                        <div className={`w-16 h-1 mx-2 transition-all ${
                          step > stepNumber ? 'bg-primary' : 'bg-muted'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-center mt-4 text-muted-foreground font-medium">
                  Step {step} of 4: {getStepTitle(step)}
                </p>
              </div>

              {/* Quick Contact Card */}
              <Card className="mb-8 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Emergency Line</h3>
                      <a href="tel:(832)555-CARDINAL" className="text-primary font-medium hover:underline">
                        (832) 555-CARDINAL
                      </a>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="font-semibold">Response Time</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Within 24 Hours
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <Shield className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="font-semibold">Fully Insured</h3>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        Protected Coverage
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {/* Form Steps */}
          <form onSubmit={handleSubmit}>
            
            {/* Step 1: Personal & Incident Information */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Personal & Incident Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => updateFormData('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => updateFormData('lastName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input 
                          id="address"
                          value={formData.address}
                          onChange={(e) => updateFormData('address', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Incident Type */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Incident Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="incidentType">Type of Incident *</Label>
                        <Select value={formData.incidentType} onValueChange={(value) => updateFormData('incidentType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select incident type" />
                          </SelectTrigger>
                          <SelectContent>
                            {incidentTypes.map(type => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label>Incident Date *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !incidentDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {incidentDate ? format(incidentDate, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={incidentDate}
                              onSelect={setIncidentDate}
                              disabled={(date) => date > new Date()}
                              initialFocus
                              className="pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div>
                        <Label htmlFor="incidentTime">Approximate Time</Label>
                        <Input 
                          id="incidentTime"
                          type="time"
                          value={formData.incidentTime}
                          onChange={(e) => updateFormData('incidentTime', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="eventName">Event Name</Label>
                        <Input 
                          id="eventName"
                          value={formData.eventName}
                          onChange={(e) => updateFormData('eventName', e.target.value)}
                          placeholder="Wedding, Corporate Event, etc."
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="eventLocation">Event Location/Venue *</Label>
                        <Input 
                          id="eventLocation"
                          value={formData.eventLocation}
                          onChange={(e) => updateFormData('eventLocation', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={nextStep} className="px-8">
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Vehicle & Damage Details */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Vehicle & Damage Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Vehicle Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Car className="w-4 h-4" />
                      Vehicle Information
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="vehicleMake">Make *</Label>
                        <Input 
                          id="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={(e) => updateFormData('vehicleMake', e.target.value)}
                          placeholder="Honda, Toyota, etc."
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleModel">Model *</Label>
                        <Input 
                          id="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={(e) => updateFormData('vehicleModel', e.target.value)}
                          placeholder="Accord, Camry, etc."
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleYear">Year *</Label>
                        <Input 
                          id="vehicleYear"
                          value={formData.vehicleYear}
                          onChange={(e) => updateFormData('vehicleYear', e.target.value)}
                          placeholder="2020"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleColor">Color *</Label>
                        <Input 
                          id="vehicleColor"
                          value={formData.vehicleColor}
                          onChange={(e) => updateFormData('vehicleColor', e.target.value)}
                          placeholder="White, Black, etc."
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleLicense">License Plate *</Label>
                        <Input 
                          id="vehicleLicense"
                          value={formData.vehicleLicense}
                          onChange={(e) => updateFormData('vehicleLicense', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleVin">VIN (Optional)</Label>
                        <Input 
                          id="vehicleVin"
                          value={formData.vehicleVin}
                          onChange={(e) => updateFormData('vehicleVin', e.target.value)}
                          placeholder="17-character VIN"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Damage Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Damage/Loss Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="damageDescription">Detailed Description of Damage/Loss *</Label>
                        <Textarea 
                          id="damageDescription"
                          value={formData.damageDescription}
                          onChange={(e) => updateFormData('damageDescription', e.target.value)}
                          placeholder="Please describe the damage or loss in detail..."
                          rows={4}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="damageLocation">Location of Damage on Vehicle</Label>
                        <Input 
                          id="damageLocation"
                          value={formData.damageLocation}
                          onChange={(e) => updateFormData('damageLocation', e.target.value)}
                          placeholder="Front bumper, rear door, etc."
                        />
                      </div>
                      <div>
                        <Label htmlFor="estimatedValue">Estimated Repair Cost (if known)</Label>
                        <Input 
                          id="estimatedValue"
                          type="number"
                          value={formData.estimatedValue}
                          onChange={(e) => updateFormData('estimatedValue', e.target.value)}
                          placeholder="0.00"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="priorDamage"
                          checked={formData.priorDamage}
                          onCheckedChange={(checked) => updateFormData('priorDamage', checked)}
                        />
                        <Label htmlFor="priorDamage">
                          Vehicle had prior damage in this area
                        </Label>
                      </div>
                      {formData.priorDamage && (
                        <div>
                          <Label htmlFor="priorDamageDescription">Description of Prior Damage</Label>
                          <Textarea 
                            id="priorDamageDescription"
                            value={formData.priorDamageDescription}
                            onChange={(e) => updateFormData('priorDamageDescription', e.target.value)}
                            placeholder="Describe any existing damage..."
                            rows={3}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                    <Button onClick={nextStep} className="px-8">
                      Next Step
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Circumstances & Insurance */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Circumstances & Insurance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Incident Circumstances */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      Incident Circumstances
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="circumstances">How did the incident occur? *</Label>
                        <Textarea 
                          id="circumstances"
                          value={formData.circumstances}
                          onChange={(e) => updateFormData('circumstances', e.target.value)}
                          placeholder="Please provide a detailed account of what happened..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Witness Information (if available)</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="witnessName">Witness Name</Label>
                            <Input 
                              id="witnessName"
                              value={formData.witnessName}
                              onChange={(e) => updateFormData('witnessName', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="witnessPhone">Witness Phone</Label>
                            <Input 
                              id="witnessPhone"
                              type="tel"
                              value={formData.witnessPhone}
                              onChange={(e) => updateFormData('witnessPhone', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="witnessEmail">Witness Email</Label>
                            <Input 
                              id="witnessEmail"
                              type="email"
                              value={formData.witnessEmail}
                              onChange={(e) => updateFormData('witnessEmail', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="policeReport"
                            checked={formData.policeReport}
                            onCheckedChange={(checked) => updateFormData('policeReport', checked)}
                          />
                          <Label htmlFor="policeReport">
                            Police report was filed
                          </Label>
                        </div>
                        {formData.policeReport && (
                          <div>
                            <Label htmlFor="policeReportNumber">Police Report Number</Label>
                            <Input 
                              id="policeReportNumber"
                              value={formData.policeReportNumber}
                              onChange={(e) => updateFormData('policeReportNumber', e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Insurance Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Insurance Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label>Do you have auto insurance? *</Label>
                        <RadioGroup 
                          value={formData.hasInsurance} 
                          onValueChange={(value) => updateFormData('hasInsurance', value)}
                          className="mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="insurance-yes" />
                            <Label htmlFor="insurance-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="insurance-no" />
                            <Label htmlFor="insurance-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {formData.hasInsurance === 'yes' && (
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="insuranceCompany">Insurance Company</Label>
                            <Input 
                              id="insuranceCompany"
                              value={formData.insuranceCompany}
                              onChange={(e) => updateFormData('insuranceCompany', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="insurancePolicyNumber">Policy Number</Label>
                            <Input 
                              id="insurancePolicyNumber"
                              value={formData.insurancePolicyNumber}
                              onChange={(e) => updateFormData('insurancePolicyNumber', e.target.value)}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label>Have you filed a claim with your insurance?</Label>
                            <RadioGroup 
                              value={formData.insuranceClaimFiled} 
                              onValueChange={(value) => updateFormData('insuranceClaimFiled', value)}
                              className="mt-2"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id="claim-yes" />
                                <Label htmlFor="claim-yes">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id="claim-no" />
                                <Label htmlFor="claim-no">No</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="planning" id="claim-planning" />
                                <Label htmlFor="claim-planning">Planning to file</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="urgencyLevel">Urgency Level</Label>
                        <Select value={formData.urgencyLevel} onValueChange={(value) => updateFormData('urgencyLevel', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - No immediate action needed</SelectItem>
                            <SelectItem value="normal">Normal - Standard processing</SelectItem>
                            <SelectItem value="high">High - Urgent attention required</SelectItem>
                            <SelectItem value="emergency">Emergency - Immediate response needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="additionalComments">Additional Comments</Label>
                        <Textarea 
                          id="additionalComments"
                          value={formData.additionalComments}
                          onChange={(e) => updateFormData('additionalComments', e.target.value)}
                          placeholder="Any additional information you'd like to provide..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                    <Button onClick={nextStep} className="px-8">
                      Review & Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    Review & Submit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Consent & Acknowledgment */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Consent & Acknowledgment</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="consentToInvestigate"
                          checked={formData.consentToInvestigate}
                          onCheckedChange={(checked) => updateFormData('consentToInvestigate', checked)}
                          required
                        />
                        <Label htmlFor="consentToInvestigate" className="text-sm leading-relaxed">
                          I authorize Event Parking Services by Cardinal to investigate this claim and contact relevant parties as necessary.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="consentToContact"
                          checked={formData.consentToContact}
                          onCheckedChange={(checked) => updateFormData('consentToContact', checked)}
                          required
                        />
                        <Label htmlFor="consentToContact" className="text-sm leading-relaxed">
                          I consent to being contacted via phone, email, or mail regarding this claim.
                        </Label>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Checkbox 
                          id="acknowledgeTruth"
                          checked={formData.acknowledgeTruth}
                          onCheckedChange={(checked) => updateFormData('acknowledgeTruth', checked)}
                          required
                        />
                        <Label htmlFor="acknowledgeTruth" className="text-sm leading-relaxed">
                          I acknowledge that all information provided is true and accurate to the best of my knowledge. I understand that providing false information may result in claim denial.
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Summary Information */}
                  <div className="bg-muted/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Claim Summary</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Claimant:</strong> {formData.firstName} {formData.lastName}
                      </div>
                      <div>
                        <strong>Incident Type:</strong> {incidentTypes.find(t => t.value === formData.incidentType)?.label || 'Not specified'}
                      </div>
                      <div>
                        <strong>Vehicle:</strong> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                      </div>
                      <div>
                        <strong>Event Location:</strong> {formData.eventLocation}
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      After submitting, you will receive a confirmation email with your claim number and next steps. 
                      Our claims team will contact you within 24 hours to begin the investigation process.
                    </AlertDescription>
                  </Alert>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={!formData.consentToInvestigate || !formData.consentToContact || !formData.acknowledgeTruth || isSubmitting}
                      className="px-8"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Claim'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <Card className="text-center">
                <CardContent className="p-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Claim Submitted Successfully
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Your claim has been submitted and assigned reference number <strong>CL-{Date.now().toString().slice(-6)}</strong>. 
                    You will receive a confirmation email shortly with your claim details and next steps.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-1">Next 24 Hours</h3>
                      <p className="text-sm text-muted-foreground">Initial review and contact</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h3 className="font-semibold mb-1">2-3 Days</h3>
                      <p className="text-sm text-muted-foreground">Investigation begins</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-1">5-10 Days</h3>
                      <p className="text-sm text-muted-foreground">Resolution update</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/">Return Home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default FileClaim;