-- Create a comprehensive table for all contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  website TEXT,
  
  -- Contact Type & Subject
  contact_type TEXT NOT NULL DEFAULT 'general', -- 'general', 'support', 'inquiry', 'complaint'
  subject TEXT NOT NULL,
  priority TEXT DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
  
  -- Message Details
  message TEXT NOT NULL,
  preferred_contact_method TEXT DEFAULT 'email', -- 'email', 'phone', 'both'
  best_time_to_contact TEXT, -- morning, afternoon, evening
  
  -- Internal Management
  status TEXT DEFAULT 'new', -- 'new', 'in_progress', 'responded', 'resolved', 'closed'
  assigned_to UUID, -- for admin assignment
  assigned_to_name TEXT,
  admin_notes TEXT,
  response_sent_at TIMESTAMP WITH TIME ZONE,
  resolved_at TIMESTAMP WITH TIME ZONE,
  
  -- Tracking
  source_page TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact submissions
CREATE POLICY "Allow public to insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin can view all contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);

CREATE POLICY "Admin can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (true);

CREATE POLICY "Admin can delete contact submissions" 
ON public.contact_submissions 
FOR DELETE 
USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_contact_submissions_contact_type ON public.contact_submissions(contact_type);

-- Update the existing form_submissions table to be more comprehensive for quotes/bookings
ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS company TEXT;
ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS contact_method TEXT DEFAULT 'email';
ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS best_time_to_contact TEXT;
ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS ip_address TEXT;
ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS user_agent TEXT;

-- Create a comprehensive table for insurance claims
CREATE TABLE IF NOT EXISTS public.insurance_claims (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  claim_number TEXT NOT NULL UNIQUE DEFAULT 'CL-' || EXTRACT(YEAR FROM NOW()) || '-' || LPAD((EXTRACT(DOY FROM NOW()) * 1000 + EXTRACT(HOUR FROM NOW()) * 10 + EXTRACT(MINUTE FROM NOW()))::TEXT, 6, '0'),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Personal Information
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  
  -- Incident Details
  incident_type TEXT NOT NULL, -- 'vehicle_damage', 'vehicle_theft', 'personal_property', 'personal_injury', 'service_issue', 'other'
  incident_date DATE NOT NULL,
  incident_time TIME,
  event_name TEXT,
  event_location TEXT NOT NULL,
  event_venue TEXT,
  
  -- Vehicle Information
  vehicle_make TEXT,
  vehicle_model TEXT,
  vehicle_year TEXT,
  vehicle_color TEXT,
  vehicle_license TEXT,
  vehicle_vin TEXT,
  
  -- Damage/Loss Details
  damage_description TEXT NOT NULL,
  damage_location TEXT,
  estimated_value DECIMAL(10,2),
  prior_damage BOOLEAN DEFAULT false,
  prior_damage_description TEXT,
  
  -- Incident Circumstances
  circumstances TEXT NOT NULL,
  witness_name TEXT,
  witness_phone TEXT,
  witness_email TEXT,
  police_report BOOLEAN DEFAULT false,
  police_report_number TEXT,
  
  -- Insurance Information
  has_insurance TEXT, -- 'yes', 'no'
  insurance_company TEXT,
  insurance_policy_number TEXT,
  insurance_claim_filed TEXT, -- 'yes', 'no', 'planning'
  
  -- Additional Information
  additional_comments TEXT,
  urgency_level TEXT DEFAULT 'normal', -- 'low', 'normal', 'high', 'emergency'
  
  -- Consent
  consent_to_investigate BOOLEAN DEFAULT false,
  consent_to_contact BOOLEAN DEFAULT false,
  acknowledge_truth BOOLEAN DEFAULT false,
  
  -- Internal Management
  status TEXT DEFAULT 'new', -- 'new', 'under_review', 'investigating', 'approved', 'denied', 'closed'
  assigned_to UUID,
  assigned_to_name TEXT,
  admin_notes TEXT,
  resolution_notes TEXT,
  resolved_at TIMESTAMP WITH TIME ZONE,
  
  -- Tracking
  source_page TEXT,
  ip_address TEXT,
  user_agent TEXT
);

-- Enable Row Level Security for claims
ALTER TABLE public.insurance_claims ENABLE ROW LEVEL SECURITY;

-- Create policies for insurance claims
CREATE POLICY "Allow public to insert insurance claims" 
ON public.insurance_claims 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admin can view all insurance claims" 
ON public.insurance_claims 
FOR SELECT 
USING (true);

CREATE POLICY "Admin can update insurance claims" 
ON public.insurance_claims 
FOR UPDATE 
USING (true);

CREATE POLICY "Admin can delete insurance claims" 
ON public.insurance_claims 
FOR DELETE 
USING (true);

-- Create updated_at trigger for claims
CREATE TRIGGER update_insurance_claims_updated_at
BEFORE UPDATE ON public.insurance_claims
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_insurance_claims_created_at ON public.insurance_claims(created_at DESC);
CREATE INDEX idx_insurance_claims_status ON public.insurance_claims(status);
CREATE INDEX idx_insurance_claims_incident_type ON public.insurance_claims(incident_type);
CREATE INDEX idx_insurance_claims_claim_number ON public.insurance_claims(claim_number);