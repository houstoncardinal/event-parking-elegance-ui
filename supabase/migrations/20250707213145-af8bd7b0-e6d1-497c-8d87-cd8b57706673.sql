-- Create projects table with comprehensive fields
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  client_name TEXT, -- Denormalized for easier queries
  description TEXT,
  status TEXT DEFAULT 'planning' CHECK (status IN ('planning', 'active', 'on_hold', 'completed', 'cancelled')),
  priority TEXT DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
  project_value DECIMAL(10, 2),
  start_date DATE,
  end_date DATE,
  estimated_completion DATE,
  progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  project_type TEXT,
  location TEXT,
  team_members TEXT[],
  services_required TEXT[],
  notes TEXT,
  attachments JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Allow all operations for now" 
ON public.projects 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.projects (name, client_name, description, status, priority, project_value, start_date, end_date, estimated_completion, progress, project_type, location, team_members, services_required, notes) VALUES
('Downtown Plaza Holiday Event', 'Downtown Plaza', 'Large-scale holiday event parking management with valet services', 'active', 'high', 15000.00, '2024-12-15', '2025-01-15', '2025-01-15', 75, 'Event Parking', 'Downtown District', ARRAY['John Manager', 'Sarah Coordinator', 'Mike Valet'], ARRAY['Valet Parking', 'Security', 'Traffic Management'], 'Peak holiday season event requiring 24/7 coverage'),
('Metro Shopping Center Renovation', 'Metro Shopping Center', 'Temporary parking solutions during mall renovation phase', 'planning', 'medium', 8500.00, '2025-01-20', '2025-03-30', '2025-03-30', 15, 'Temporary Parking', 'Westside', ARRAY['Lisa Planner', 'Tom Supervisor'], ARRAY['Traffic Management', 'Shuttle Service'], 'Complex logistics due to ongoing construction'),
('City Center Corporate Summit', 'City Center Complex', 'Executive parking services for quarterly business summit', 'active', 'urgent', 5200.00, '2024-12-20', '2024-12-22', '2024-12-22', 90, 'Corporate Event', 'Central Business District', ARRAY['Emma Lead', 'Carlos Assistant'], ARRAY['Valet Parking', 'Security'], 'High-profile executives requiring premium service'),
('Riverside Mall Spring Festival', 'Riverside Mall', 'Annual spring festival parking coordination and management', 'planning', 'medium', 6800.00, '2025-03-15', '2025-03-17', '2025-03-17', 5, 'Event Parking', 'East Side', ARRAY['David Coordinator'], ARRAY['Event Parking', 'Security'], 'Family-friendly event with high foot traffic expected'),
('University Campus Graduation', 'Cardinal University', 'Graduation ceremony parking management for 3-day event', 'completed', 'high', 12000.00, '2024-05-15', '2024-05-17', '2024-05-17', 100, 'Event Parking', 'University District', ARRAY['Rachel Manager', 'Kevin Assistant', 'Amy Traffic'], ARRAY['Traffic Management', 'Shuttle Service', 'Security'], 'Successfully completed large-scale graduation event');

-- Update client_id references for existing client names where possible
UPDATE public.projects 
SET client_id = c.id 
FROM public.clients c 
WHERE projects.client_name = c.name;