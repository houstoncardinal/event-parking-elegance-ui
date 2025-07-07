-- Create team_members table
CREATE TABLE public.team_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  employee_id TEXT NOT NULL UNIQUE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  position TEXT NOT NULL,
  department TEXT,
  employment_status TEXT NOT NULL DEFAULT 'active',
  employment_type TEXT NOT NULL DEFAULT 'full_time',
  hire_date DATE,
  termination_date DATE,
  salary DECIMAL(10,2),
  hourly_rate DECIMAL(8,2),
  location TEXT,
  skills TEXT[],
  certifications TEXT[],
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  address TEXT,
  date_of_birth DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for now
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

-- Insert demo team members
INSERT INTO public.team_members (
  employee_id, first_name, last_name, email, phone, position, department, 
  employment_status, employment_type, hire_date, salary, location, 
  skills, certifications, emergency_contact_name, emergency_contact_phone, 
  address, notes
) VALUES 
(
  'EMP001', 'Sarah', 'Johnson', 'sarah.johnson@company.com', '(555) 123-4567',
  'Operations Manager', 'Operations', 'active', 'full_time', '2022-01-15',
  75000.00, 'Downtown Office', 
  ARRAY['Team Leadership', 'Project Management', 'Customer Service'],
  ARRAY['PMP Certified', 'Safety Training'],
  'Mike Johnson', '(555) 987-6543',
  '123 Maple St, City, State 12345',
  'Excellent leadership skills and customer relations.'
),
(
  'EMP002', 'Michael', 'Chen', 'michael.chen@company.com', '(555) 234-5678',
  'Senior Technician', 'Maintenance', 'active', 'full_time', '2021-05-20',
  65000.00, 'Field Services', 
  ARRAY['Equipment Repair', 'Electrical Systems', 'HVAC'],
  ARRAY['HVAC Certified', 'Electrical License'],
  'Lisa Chen', '(555) 876-5432',
  '456 Oak Ave, City, State 12346',
  'Highly skilled technician with 8 years experience.'
),
(
  'EMP003', 'Emily', 'Rodriguez', 'emily.rodriguez@company.com', '(555) 345-6789',
  'Customer Service Rep', 'Customer Service', 'active', 'part_time', '2023-03-10',
  NULL, 22.50, 'Remote',
  ARRAY['Customer Support', 'Communication', 'Problem Solving'],
  ARRAY['Customer Service Excellence'],
  'Carlos Rodriguez', '(555) 765-4321',
  '789 Pine Rd, City, State 12347',
  'Excellent communication skills and customer focus.'
),
(
  'EMP004', 'David', 'Thompson', 'david.thompson@company.com', '(555) 456-7890',
  'Project Coordinator', 'Operations', 'active', 'full_time', '2022-08-01',
  58000.00, 'Downtown Office',
  ARRAY['Project Planning', 'Scheduling', 'Quality Control'],
  ARRAY['Project Management Certification'],
  'Susan Thompson', '(555) 654-3210',
  '321 Elm St, City, State 12348',
  'Detail-oriented coordinator with excellent organizational skills.'
),
(
  'EMP005', 'Jessica', 'Williams', 'jessica.williams@company.com', '(555) 567-8901',
  'Field Supervisor', 'Operations', 'on_leave', 'full_time', '2020-11-15',
  68000.00, 'Field Services',
  ARRAY['Team Management', 'Quality Assurance', 'Safety Protocols'],
  ARRAY['Safety Supervisor Certification', 'First Aid'],
  'Robert Williams', '(555) 543-2109',
  '654 Birch Ln, City, State 12349',
  'Currently on maternity leave. Expected return: March 2024.'
),
(
  'EMP006', 'Robert', 'Garcia', 'robert.garcia@company.com', '(555) 678-9012',
  'Sales Representative', 'Sales', 'active', 'full_time', '2023-01-20',
  52000.00, 'Downtown Office',
  ARRAY['Sales', 'Client Relations', 'Market Analysis'],
  ARRAY['Sales Excellence Award'],
  'Maria Garcia', '(555) 432-1098',
  '987 Cedar Dr, City, State 12350',
  'Top performer in Q3 2023. Excellent client relationship skills.'
),
(
  'EMP007', 'Amanda', 'Brown', 'amanda.brown@company.com', '(555) 789-0123',
  'Junior Technician', 'Maintenance', 'active', 'full_time', '2023-09-05',
  42000.00, 'Field Services',
  ARRAY['Basic Repairs', 'Equipment Maintenance', 'Learning'],
  ARRAY['Safety Training Completed'],
  'James Brown', '(555) 321-0987',
  '147 Spruce St, City, State 12351',
  'New hire showing great potential and eagerness to learn.'
),
(
  'EMP008', 'Kevin', 'Lee', 'kevin.lee@company.com', '(555) 890-1234',
  'Administrative Assistant', 'Administration', 'active', 'part_time', '2022-06-12',
  NULL, 18.00, 'Downtown Office',
  ARRAY['Data Entry', 'Filing', 'Phone Support'],
  ARRAY['Office Administration Certificate'],
  'Jenny Lee', '(555) 210-9876',
  '258 Willow Way, City, State 12352',
  'Reliable part-time employee handling administrative tasks.'
)