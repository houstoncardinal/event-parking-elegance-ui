-- Create clients table with comprehensive fields
CREATE TABLE public.clients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT,
  contact_person TEXT,
  email TEXT,
  phone TEXT,
  monthly_value DECIMAL(10, 2),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'pending', 'inactive')),
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  next_service DATE,
  services TEXT[],
  address TEXT,
  contract_start_date DATE,
  contract_end_date DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (for now, allow all operations)
-- In production, you'd want to restrict this to authenticated admin users
CREATE POLICY "Allow all operations for now" 
ON public.clients 
FOR ALL 
USING (true) 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON public.clients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.clients (name, location, contact_person, email, phone, monthly_value, status, rating, next_service, services, address, contract_start_date, notes) VALUES
('Downtown Plaza', 'Downtown District', 'John Smith', 'john@downtownplaza.com', '(555) 123-4567', 2500.00, 'active', 5, '2024-12-28', ARRAY['Valet Parking', 'Security'], '123 Main St, Downtown', '2024-01-01', 'Premier client with excellent relationship'),
('Metro Shopping Center', 'Westside', 'Sarah Johnson', 'sarah@metroshop.com', '(555) 234-5678', 3200.00, 'active', 5, '2024-12-30', ARRAY['Event Parking', 'Traffic Management'], '456 West Ave, Westside', '2024-02-15', 'Large venue requiring comprehensive services'),
('City Center Complex', 'Central Business District', 'Mike Wilson', 'mike@citycenter.com', '(555) 345-6789', 1800.00, 'pending', 4, '2025-01-02', ARRAY['Valet Parking'], '789 Central Blvd, CBD', '2024-11-01', 'New client, contract pending final approval'),
('Riverside Mall', 'East Side', 'Lisa Brown', 'lisa@riverside.com', '(555) 456-7890', 2100.00, 'active', 5, '2025-01-05', ARRAY['Security', 'Traffic Management'], '321 River Road, East Side', '2024-03-01', 'Reliable client with seasonal event needs');