-- Create form_submissions table
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    form_type TEXT NOT NULL CHECK (form_type IN ('booking', 'quote', 'contact', 'review')),
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'booked', 'rejected', 'archived')),
    priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    
    -- Contact Information
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    phone TEXT,
    company TEXT,
    
    -- Event Details
    event_type TEXT,
    event_date DATE,
    event_location TEXT,
    guest_count INTEGER,
    start_time TIME,
    end_time TIME,
    
    -- Service Details
    attendants_needed INTEGER,
    special_requests TEXT,
    budget_range TEXT,
    
    -- Additional Information
    message TEXT,
    source_page TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    
    -- Internal Notes
    admin_notes TEXT,
    assigned_to UUID REFERENCES public.team_members(id),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    contacted_at TIMESTAMP WITH TIME ZONE,
    responded_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON public.form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON public.form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_priority ON public.form_submissions(priority);
CREATE INDEX IF NOT EXISTS idx_form_submissions_created_at ON public.form_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_email ON public.form_submissions(email);
CREATE INDEX IF NOT EXISTS idx_form_submissions_event_date ON public.form_submissions(event_date);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin can view all form submissions" ON public.form_submissions
    FOR SELECT USING (true);

CREATE POLICY "Admin can insert form submissions" ON public.form_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can update form submissions" ON public.form_submissions
    FOR UPDATE USING (true);

CREATE POLICY "Admin can delete form submissions" ON public.form_submissions
    FOR DELETE USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_form_submissions_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_form_submissions_updated_at
    BEFORE UPDATE ON public.form_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_form_submissions_updated_at();

-- Insert some sample data for testing
INSERT INTO public.form_submissions (
    form_type, status, priority, first_name, last_name, email, phone, 
    event_type, event_date, event_location, guest_count, message, source_page
) VALUES 
    ('booking', 'new', 'high', 'Sarah', 'Johnson', 'sarah.j@example.com', '(555) 123-4567', 
     'wedding', '2024-08-15', 'Houston Country Club', 150, 'Need valet service for our wedding ceremony and reception', '/booking'),
    
    ('quote', 'reviewed', 'normal', 'Michael', 'Chen', 'mchen@techcorp.com', '(555) 987-6543', 
     'corporate', '2024-09-20', 'Downtown Convention Center', 200, 'Annual tech conference with VIP parking needs', '/'),
    
    ('contact', 'contacted', 'low', 'Emily', 'Rodriguez', 'emily.r@events.com', '(555) 456-7890', 
     'private', '2024-10-05', 'Private Residence - River Oaks', 50, 'Birthday party valet service inquiry', '/contact'),
    
    ('booking', 'booked', 'urgent', 'David', 'Thompson', 'david.t@lawfirm.com', '(555) 321-0987', 
     'corporate', '2024-07-30', 'Four Seasons Hotel', 75, 'Legal conference with partner parking requirements', '/booking'),
    
    ('quote', 'new', 'high', 'Jennifer', 'Williams', 'jennifer.w@weddings.com', '(555) 654-3210', 
     'wedding', '2024-11-12', 'The Houstonian', 120, 'Luxury wedding with vintage car collection', '/'); 