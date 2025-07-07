-- Create team_members table with comprehensive fields
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  employee_id TEXT UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE,
  phone TEXT,
  position TEXT NOT NULL,
  department TEXT,
  employment_status TEXT DEFAULT 'active' CHECK (employment_status IN ('active', 'inactive', 'on_leave', 'terminated')),
  employment_type TEXT DEFAULT 'full_time' CHECK (employment_type IN ('full_time', 'part_time', 'contractor', 'intern')),
  hire_date DATE,
  termination_date DATE,
  salary DECIMAL(10, 2),
  hourly_rate DECIMAL(8, 2),
  location TEXT,
  manager_id UUID REFERENCES public.team_members(id) ON DELETE SET NULL,
  skills TEXT[],
  certifications TEXT[],
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  address TEXT,
  date_of_birth DATE,
  notes TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Allow all operations for now" 
ON public.team_members 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_team_members_updated_at
  BEFORE UPDATE ON public.team_members
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.team_members (
  employee_id, first_name, last_name, email, phone, position, department, 
  employment_status, employment_type, hire_date, salary, location, 
  skills, certifications, notes
) VALUES
('EMP001', 'John', 'Manager', 'john.manager@cardinalparking.com', '(555) 101-1001', 'Operations Manager', 'Operations', 'active', 'full_time', '2022-01-15', 75000.00, 'Downtown Office', ARRAY['Team Leadership', 'Project Management', 'Customer Service'], ARRAY['PMP Certified', 'Safety Training'], 'Experienced operations manager with excellent leadership skills'),
('EMP002', 'Sarah', 'Coordinator', 'sarah.coordinator@cardinalparking.com', '(555) 102-1002', 'Event Coordinator', 'Events', 'active', 'full_time', '2022-06-01', 58000.00, 'Downtown Office', ARRAY['Event Planning', 'Client Relations', 'Logistics'], ARRAY['Event Management Certified'], 'Detail-oriented coordinator specializing in large-scale events'),
('EMP003', 'Mike', 'Valet', 'mike.valet@cardinalparking.com', '(555) 103-1003', 'Senior Valet Attendant', 'Valet Services', 'active', 'full_time', '2021-03-20', 42000.00, 'Field Operations', ARRAY['Customer Service', 'Vehicle Handling', 'Conflict Resolution'], ARRAY['Defensive Driving', 'First Aid'], 'Reliable senior valet with exceptional customer service record'),
('EMP004', 'Emma', 'Lead', 'emma.lead@cardinalparking.com', '(555) 104-1004', 'Team Lead', 'Security', 'active', 'full_time', '2020-09-10', 52000.00, 'Field Operations', ARRAY['Security Operations', 'Team Leadership', 'Emergency Response'], ARRAY['Security License', 'CPR Certified'], 'Experienced security team lead with strong crisis management skills'),
('EMP005', 'Carlos', 'Assistant', 'carlos.assistant@cardinalparking.com', '(555) 105-1005', 'Operations Assistant', 'Operations', 'active', 'part_time', '2023-02-14', NULL, 'Downtown Office', ARRAY['Administrative Support', 'Data Entry', 'Customer Service'], ARRAY[], 'Recent hire showing great potential in operations support'),
('EMP006', 'Lisa', 'Planner', 'lisa.planner@cardinalparking.com', '(555) 106-1006', 'Logistics Planner', 'Planning', 'on_leave', 'full_time', '2021-11-05', 62000.00, 'Downtown Office', ARRAY['Logistics Planning', 'Route Optimization', 'Strategic Planning'], ARRAY['Supply Chain Management'], 'Currently on maternity leave, expected return in 2 months'),
('EMP007', 'David', 'Coordinator', 'david.coordinator@cardinalparking.com', '(555) 107-1007', 'Site Coordinator', 'Field Operations', 'active', 'full_time', '2022-08-22', 48000.00, 'Field Operations', ARRAY['Site Management', 'Equipment Maintenance', 'Staff Coordination'], ARRAY['Equipment Safety', 'Site Management'], 'Reliable field coordinator with strong technical background'),
('EMP008', 'Rachel', 'Manager', 'rachel.manager@cardinalparking.com', '(555) 108-1008', 'Regional Manager', 'Management', 'active', 'full_time', '2019-12-01', 85000.00, 'Regional Office', ARRAY['Regional Management', 'Business Development', 'Strategic Planning'], ARRAY['MBA', 'Leadership Development'], 'Senior regional manager overseeing multiple locations');

-- Update manager relationships
UPDATE public.team_members SET manager_id = (SELECT id FROM public.team_members WHERE employee_id = 'EMP001') WHERE employee_id IN ('EMP002', 'EMP005');
UPDATE public.team_members SET manager_id = (SELECT id FROM public.team_members WHERE employee_id = 'EMP004') WHERE employee_id = 'EMP003';
UPDATE public.team_members SET manager_id = (SELECT id FROM public.team_members WHERE employee_id = 'EMP008') WHERE employee_id IN ('EMP001', 'EMP006', 'EMP007');