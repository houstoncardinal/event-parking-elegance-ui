-- Create support_tickets table
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_number VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'waiting_for_customer', 'resolved', 'closed')),
    priority VARCHAR(50) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent', 'critical')),
    category VARCHAR(100) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    assigned_to UUID REFERENCES auth.users(id),
    assigned_to_name VARCHAR(255),
    created_by UUID REFERENCES auth.users(id),
    created_by_name VARCHAR(255),
    source VARCHAR(100) DEFAULT 'web' CHECK (source IN ('web', 'email', 'phone', 'chat', 'social')),
    tags TEXT[] DEFAULT '{}',
    estimated_resolution_time TIMESTAMP WITH TIME ZONE,
    actual_resolution_time TIMESTAMP WITH TIME ZONE,
    customer_satisfaction_rating INTEGER CHECK (customer_satisfaction_rating >= 1 AND customer_satisfaction_rating <= 5),
    internal_notes TEXT,
    public_notes TEXT,
    attachments JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE,
    closed_at TIMESTAMP WITH TIME ZONE
);

-- Create ticket_comments table for communication history
CREATE TABLE IF NOT EXISTS ticket_comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_id UUID REFERENCES support_tickets(id) ON DELETE CASCADE,
    author_id UUID REFERENCES auth.users(id),
    author_name VARCHAR(255) NOT NULL,
    author_type VARCHAR(50) DEFAULT 'agent' CHECK (author_type IN ('agent', 'customer', 'system')),
    content TEXT NOT NULL,
    is_internal BOOLEAN DEFAULT false,
    attachments JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ticket_activities table for audit trail
CREATE TABLE IF NOT EXISTS ticket_activities (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_id UUID REFERENCES support_tickets(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id),
    user_name VARCHAR(255),
    action VARCHAR(100) NOT NULL,
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_support_tickets_priority ON support_tickets(priority);
CREATE INDEX IF NOT EXISTS idx_support_tickets_category ON support_tickets(category);
CREATE INDEX IF NOT EXISTS idx_support_tickets_assigned_to ON support_tickets(assigned_to);
CREATE INDEX IF NOT EXISTS idx_support_tickets_created_at ON support_tickets(created_at);
CREATE INDEX IF NOT EXISTS idx_support_tickets_customer_email ON support_tickets(customer_email);
CREATE INDEX IF NOT EXISTS idx_support_tickets_ticket_number ON support_tickets(ticket_number);
CREATE INDEX IF NOT EXISTS idx_support_tickets_tags ON support_tickets USING GIN(tags);

CREATE INDEX IF NOT EXISTS idx_ticket_comments_ticket_id ON ticket_comments(ticket_id);
CREATE INDEX IF NOT EXISTS idx_ticket_comments_created_at ON ticket_comments(created_at);
CREATE INDEX IF NOT EXISTS idx_ticket_comments_author_id ON ticket_comments(author_id);

CREATE INDEX IF NOT EXISTS idx_ticket_activities_ticket_id ON ticket_activities(ticket_id);
CREATE INDEX IF NOT EXISTS idx_ticket_activities_created_at ON ticket_activities(created_at);

-- Create function to generate ticket numbers
CREATE OR REPLACE FUNCTION generate_ticket_number()
RETURNS VARCHAR(20) AS $$
DECLARE
    ticket_num VARCHAR(20);
    counter INTEGER;
BEGIN
    -- Get the current year
    ticket_num := 'TKT-' || EXTRACT(YEAR FROM NOW()) || '-';
    
    -- Get the count of tickets for this year
    SELECT COALESCE(COUNT(*), 0) + 1
    INTO counter
    FROM support_tickets
    WHERE ticket_number LIKE 'TKT-' || EXTRACT(YEAR FROM NOW()) || '-%';
    
    -- Format with leading zeros
    ticket_num := ticket_num || LPAD(counter::TEXT, 6, '0');
    
    RETURN ticket_num;
END;
$$ LANGUAGE plpgsql;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_support_tickets_updated_at
    BEFORE UPDATE ON support_tickets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ticket_comments_updated_at
    BEFORE UPDATE ON ticket_comments
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create function to log ticket activities
CREATE OR REPLACE FUNCTION log_ticket_activity()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO ticket_activities (ticket_id, user_id, user_name, action, details)
        VALUES (
            NEW.id,
            NEW.created_by,
            NEW.created_by_name,
            'ticket_created',
            jsonb_build_object(
                'ticket_number', NEW.ticket_number,
                'title', NEW.title,
                'category', NEW.category,
                'priority', NEW.priority
            )
        );
        RETURN NEW;
    ELSIF TG_OP = 'UPDATE' THEN
        -- Log status changes
        IF OLD.status != NEW.status THEN
            INSERT INTO ticket_activities (ticket_id, user_id, user_name, action, details)
            VALUES (
                NEW.id,
                NEW.assigned_to,
                NEW.assigned_to_name,
                'status_changed',
                jsonb_build_object(
                    'old_status', OLD.status,
                    'new_status', NEW.status
                )
            );
        END IF;
        
        -- Log priority changes
        IF OLD.priority != NEW.priority THEN
            INSERT INTO ticket_activities (ticket_id, user_id, user_name, action, details)
            VALUES (
                NEW.id,
                NEW.assigned_to,
                NEW.assigned_to_name,
                'priority_changed',
                jsonb_build_object(
                    'old_priority', OLD.priority,
                    'new_priority', NEW.priority
                )
            );
        END IF;
        
        -- Log assignment changes
        IF OLD.assigned_to != NEW.assigned_to THEN
            INSERT INTO ticket_activities (ticket_id, user_id, user_name, action, details)
            VALUES (
                NEW.id,
                NEW.assigned_to,
                NEW.assigned_to_name,
                'assigned',
                jsonb_build_object(
                    'old_assigned_to', OLD.assigned_to_name,
                    'new_assigned_to', NEW.assigned_to_name
                )
            );
        END IF;
        
        -- Log resolution
        IF NEW.status IN ('resolved', 'closed') AND OLD.status NOT IN ('resolved', 'closed') THEN
            UPDATE support_tickets 
            SET resolved_at = NOW()
            WHERE id = NEW.id;
        END IF;
        
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for activity logging
CREATE TRIGGER log_support_ticket_activities
    AFTER INSERT OR UPDATE ON support_tickets
    FOR EACH ROW
    EXECUTE FUNCTION log_ticket_activity();

-- Create function to log comment activities
CREATE OR REPLACE FUNCTION log_comment_activity()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO ticket_activities (ticket_id, user_id, user_name, action, details)
        VALUES (
            NEW.ticket_id,
            NEW.author_id,
            NEW.author_name,
            'comment_added',
            jsonb_build_object(
                'comment_id', NEW.id,
                'is_internal', NEW.is_internal
            )
        );
        
        -- Update ticket updated_at when comment is added
        UPDATE support_tickets 
        SET updated_at = NOW()
        WHERE id = NEW.ticket_id;
        
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for comment activity logging
CREATE TRIGGER log_ticket_comment_activities
    AFTER INSERT ON ticket_comments
    FOR EACH ROW
    EXECUTE FUNCTION log_comment_activity();

-- Enable Row Level Security
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE ticket_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE ticket_activities ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for support_tickets
CREATE POLICY "Enable read access for authenticated users" ON support_tickets
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert access for authenticated users" ON support_tickets
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update access for authenticated users" ON support_tickets
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete access for authenticated users" ON support_tickets
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create RLS policies for ticket_comments
CREATE POLICY "Enable read access for authenticated users" ON ticket_comments
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert access for authenticated users" ON ticket_comments
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update access for authenticated users" ON ticket_comments
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Enable delete access for authenticated users" ON ticket_comments
    FOR DELETE USING (auth.role() = 'authenticated');

-- Create RLS policies for ticket_activities
CREATE POLICY "Enable read access for authenticated users" ON ticket_activities
    FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable insert access for authenticated users" ON ticket_activities
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Insert demo data
INSERT INTO support_tickets (
    ticket_number,
    title,
    description,
    status,
    priority,
    category,
    customer_name,
    customer_email,
    customer_phone,
    assigned_to_name,
    created_by_name,
    source,
    tags,
    internal_notes,
    created_at
) VALUES 
(
    generate_ticket_number(),
    'Website Booking Form Not Working',
    'The booking form on the homepage is not submitting properly. When users try to submit, they get an error message. This is affecting our ability to receive new bookings.',
    'in_progress',
    'high',
    'Technical Issue',
    'Sarah Johnson',
    'sarah.johnson@email.com',
    '+1-555-0123',
    'John Smith',
    'Admin User',
    'web',
    ARRAY['urgent', 'website', 'booking'],
    'Customer reported this issue affecting their wedding planning. Need to prioritize.',
    NOW() - INTERVAL '2 days'
),
(
    generate_ticket_number(),
    'Valet Service Request for Corporate Event',
    'Need valet parking services for a corporate event on December 15th. Event will have 200+ attendees and requires premium service.',
    'open',
    'normal',
    'Service Request',
    'Michael Chen',
    'michael.chen@corporate.com',
    '+1-555-0456',
    'Emily Davis',
    'Admin User',
    'email',
    ARRAY['corporate', 'valet', 'large-event'],
    'Corporate client with high budget. Good opportunity for long-term partnership.',
    NOW() - INTERVAL '1 day'
),
(
    generate_ticket_number(),
    'Payment Processing Error',
    'Customer reports that their payment was charged twice for the same service. Need to investigate and process refund.',
    'waiting_for_customer',
    'urgent',
    'Billing Issue',
    'Lisa Rodriguez',
    'lisa.rodriguez@email.com',
    '+1-555-0789',
    'John Smith',
    'Admin User',
    'phone',
    ARRAY['billing', 'refund', 'urgent'],
    'Customer is very upset. Need to resolve quickly to maintain reputation.',
    NOW() - INTERVAL '6 hours'
),
(
    generate_ticket_number(),
    'Parking Lot Maintenance Request',
    'The parking lot at our venue needs maintenance. Several potholes and poor lighting in the evening.',
    'open',
    'low',
    'Maintenance',
    'David Wilson',
    'david.wilson@venue.com',
    '+1-555-0321',
    'Emily Davis',
    'Admin User',
    'web',
    ARRAY['maintenance', 'venue', 'safety'],
    'Regular maintenance request. Schedule for next week.',
    NOW() - INTERVAL '12 hours'
),
(
    generate_ticket_number(),
    'Staff Scheduling Issue',
    'Need to adjust staff schedule for upcoming weekend event. Additional valet staff required.',
    'resolved',
    'normal',
    'Staffing',
    'Jennifer Brown',
    'jennifer.brown@events.com',
    '+1-555-0654',
    'John Smith',
    'Admin User',
    'chat',
    ARRAY['staffing', 'schedule', 'weekend'],
    'Resolved by adding 3 additional staff members.',
    NOW() - INTERVAL '3 days'
),
(
    generate_ticket_number(),
    'Customer Complaint - Late Arrival',
    'Customer is complaining that valet staff arrived 30 minutes late to their event. This caused significant disruption.',
    'open',
    'critical',
    'Customer Service',
    'Robert Taylor',
    'robert.taylor@email.com',
    '+1-555-0987',
    'Emily Davis',
    'Admin User',
    'email',
    ARRAY['complaint', 'late', 'critical'],
    'This is a serious issue that could affect our reputation. Need immediate attention.',
    NOW() - INTERVAL '4 hours'
),
(
    generate_ticket_number(),
    'Website Performance Issues',
    'Website is loading very slowly, especially the contact form. Users are reporting timeouts.',
    'in_progress',
    'high',
    'Technical Issue',
    'Amanda White',
    'amanda.white@email.com',
    '+1-555-0124',
    'John Smith',
    'Admin User',
    'web',
    ARRAY['performance', 'website', 'technical'],
    'Investigating server performance and database queries.',
    NOW() - INTERVAL '1 day'
),
(
    generate_ticket_number(),
    'Insurance Documentation Request',
    'Need updated insurance certificates for upcoming venue contracts.',
    'open',
    'normal',
    'Administrative',
    'Thomas Anderson',
    'thomas.anderson@venue.com',
    '+1-555-0457',
    'Emily Davis',
    'Admin User',
    'email',
    ARRAY['insurance', 'documentation', 'venue'],
    'Standard request. Send updated certificates.',
    NOW() - INTERVAL '8 hours'
);

-- Insert demo comments
INSERT INTO ticket_comments (
    ticket_id,
    author_name,
    author_type,
    content,
    is_internal,
    created_at
) VALUES 
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'John Smith',
    'agent',
    'I have investigated the booking form issue. It appears to be a JavaScript error in the form validation. Working on a fix now.',
    false,
    NOW() - INTERVAL '1 day'
),
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'John Smith',
    'agent',
    'Fixed the JavaScript validation issue. The form should now work properly. Please test and let me know if there are any other issues.',
    false,
    NOW() - INTERVAL '12 hours'
),
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'Sarah Johnson',
    'customer',
    'Thank you for the quick fix! The form is working perfectly now.',
    false,
    NOW() - INTERVAL '6 hours'
),
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'John Smith',
    'agent',
    'Great! I am closing this ticket as resolved. If you need any further assistance, please don''t hesitate to contact us.',
    false,
    NOW() - INTERVAL '2 hours'
);

-- Insert demo activities
INSERT INTO ticket_activities (
    ticket_id,
    user_name,
    action,
    details,
    created_at
) VALUES 
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'Admin User',
    'ticket_created',
    '{"ticket_number": "TKT-2024-000001", "title": "Website Booking Form Not Working", "category": "Technical Issue", "priority": "high"}',
    NOW() - INTERVAL '2 days'
),
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'John Smith',
    'assigned',
    '{"old_assigned_to": null, "new_assigned_to": "John Smith"}',
    NOW() - INTERVAL '2 days'
),
(
    (SELECT id FROM support_tickets WHERE ticket_number LIKE 'TKT-2024-%' LIMIT 1),
    'John Smith',
    'status_changed',
    '{"old_status": "open", "new_status": "in_progress"}',
    NOW() - INTERVAL '1 day'
); 