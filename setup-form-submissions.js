import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://lwpgqrmcubxgmbzsrdbl.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cGdxcm1jdWJ4Z21ienNyZGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MjIzNzMsImV4cCI6MjA2NzQ5ODM3M30.WhJ5B3XcLMYlbZZgzUDH35gp4rmPYb2AByV5GWxC1l4";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function setupFormSubmissions() {
  try {
    console.log('Setting up form_submissions table...');
    
    // First, let's check if the table exists by trying to query it
    const { data: existingData, error: checkError } = await supabase
      .from('form_submissions')
      .select('id')
      .limit(1);
    
    if (checkError && checkError.code === 'PGRST116') {
      console.log('Table does not exist. Creating it...');
      
      // Since we can't create tables via the client, we'll need to do this manually
      console.log('\n⚠️  Please run the following SQL in your Supabase dashboard:');
      console.log('\n1. Go to your Supabase project dashboard');
      console.log('2. Navigate to SQL Editor');
      console.log('3. Copy and paste the SQL from: supabase/migrations/20250707220012-form-submissions.sql');
      console.log('4. Run the SQL script');
      console.log('\nAfter creating the table, run this script again to add demo data.');
      return;
    }
    
    console.log('Table exists! Adding demo data...');
    
    // Demo form submissions
    const demoSubmissions = [
      {
        form_type: 'booking',
        status: 'new',
        priority: 'high',
        first_name: 'Sarah',
        last_name: 'Johnson',
        email: 'sarah.j@example.com',
        phone: '(555) 123-4567',
        event_type: 'wedding',
        event_date: '2024-08-15',
        event_location: 'Houston Country Club',
        guest_count: 150,
        start_time: '16:00',
        end_time: '23:00',
        attendants_needed: 3,
        special_requests: 'Need valet service for our wedding ceremony and reception. VIP parking for bride and groom.',
        message: 'Booking request for wedding event on 2024-08-15',
        source_page: '/booking',
        admin_notes: 'High priority - wedding client. Contact within 2 hours.'
      },
      {
        form_type: 'quote',
        status: 'reviewed',
        priority: 'normal',
        first_name: 'Michael',
        last_name: 'Chen',
        email: 'mchen@techcorp.com',
        phone: '(555) 987-6543',
        event_type: 'corporate',
        event_date: '2024-09-20',
        event_location: 'Downtown Convention Center',
        guest_count: 200,
        start_time: '08:00',
        end_time: '18:00',
        attendants_needed: 4,
        special_requests: 'Annual tech conference with VIP parking needs. Reserved spots for executives.',
        message: 'Annual tech conference with VIP parking needs',
        source_page: '/',
        admin_notes: 'Corporate client - good potential for recurring business.'
      },
      {
        form_type: 'contact',
        status: 'contacted',
        priority: 'low',
        first_name: 'Emily',
        last_name: 'Rodriguez',
        email: 'emily.r@events.com',
        phone: '(555) 456-7890',
        event_type: 'private',
        event_date: '2024-10-05',
        event_location: 'Private Residence - River Oaks',
        guest_count: 50,
        start_time: '19:00',
        end_time: '01:00',
        attendants_needed: 2,
        special_requests: 'Birthday party valet service inquiry. Upscale neighborhood.',
        message: 'Birthday party valet service inquiry',
        source_page: '/contact',
        admin_notes: 'Contacted on 2024-01-15. Client interested in premium service.'
      },
      {
        form_type: 'booking',
        status: 'booked',
        priority: 'urgent',
        first_name: 'David',
        last_name: 'Thompson',
        email: 'david.t@lawfirm.com',
        phone: '(555) 321-0987',
        event_type: 'corporate',
        event_date: '2024-07-30',
        event_location: 'Four Seasons Hotel',
        guest_count: 75,
        start_time: '17:00',
        end_time: '22:00',
        attendants_needed: 3,
        special_requests: 'Legal conference with partner parking requirements. High-end vehicles expected.',
        message: 'Legal conference with partner parking requirements',
        source_page: '/booking',
        admin_notes: 'CONFIRMED BOOKING - Contract signed. High-value client.'
      },
      {
        form_type: 'quote',
        status: 'new',
        priority: 'high',
        first_name: 'Jennifer',
        last_name: 'Williams',
        email: 'jennifer.w@weddings.com',
        phone: '(555) 654-3210',
        event_type: 'wedding',
        event_date: '2024-11-12',
        event_location: 'The Houstonian',
        guest_count: 120,
        start_time: '15:00',
        end_time: '00:00',
        attendants_needed: 3,
        special_requests: 'Luxury wedding with vintage car collection. Need special handling for classic vehicles.',
        message: 'Luxury wedding with vintage car collection',
        source_page: '/',
        admin_notes: 'High-end wedding client. Vintage cars require special attention.'
      },
      {
        form_type: 'contact',
        status: 'new',
        priority: 'normal',
        first_name: 'Robert',
        last_name: 'Anderson',
        email: 'robert.a@charity.org',
        phone: '(555) 789-0123',
        event_type: 'gala',
        event_date: '2024-12-01',
        event_location: 'Museum of Fine Arts',
        guest_count: 300,
        start_time: '18:00',
        end_time: '23:00',
        attendants_needed: 5,
        special_requests: 'Annual charity gala. VIP parking for donors and board members.',
        message: 'Annual charity gala inquiry',
        source_page: '/contact',
        admin_notes: 'Charity organization - potential for community exposure.'
      },
      {
        form_type: 'booking',
        status: 'reviewed',
        priority: 'normal',
        first_name: 'Lisa',
        last_name: 'Martinez',
        email: 'lisa.m@restaurant.com',
        phone: '(555) 234-5678',
        event_type: 'corporate',
        event_date: '2024-08-25',
        event_location: 'Pappas Bros. Steakhouse',
        guest_count: 40,
        start_time: '19:00',
        end_time: '23:00',
        attendants_needed: 2,
        special_requests: 'Restaurant opening celebration. Staff parking coordination needed.',
        message: 'Restaurant opening celebration',
        source_page: '/booking',
        admin_notes: 'Restaurant industry client. Good for future events.'
      },
      {
        form_type: 'quote',
        status: 'contacted',
        priority: 'high',
        first_name: 'James',
        last_name: 'Wilson',
        email: 'james.w@consulting.com',
        phone: '(555) 345-6789',
        event_type: 'corporate',
        event_date: '2024-09-10',
        event_location: 'Houston Marriott Medical Center',
        guest_count: 150,
        start_time: '08:00',
        end_time: '17:00',
        attendants_needed: 4,
        special_requests: 'Healthcare conference. ADA parking requirements.',
        message: 'Healthcare conference with ADA requirements',
        source_page: '/',
        admin_notes: 'Healthcare industry - ADA compliance important. Follow up scheduled.'
      }
    ];

    // Insert demo data
    const { data, error } = await supabase
      .from('form_submissions')
      .insert(demoSubmissions);

    if (error) {
      console.error('Error inserting demo data:', error);
      return;
    }

    console.log('✅ Demo data added successfully!');
    console.log(`Added ${demoSubmissions.length} form submissions`);
    
    // Verify the data was inserted
    const { data: countData, error: countError } = await supabase
      .from('form_submissions')
      .select('id', { count: 'exact' });

    if (countError) {
      console.error('Error counting submissions:', countError);
    } else {
      console.log(`Total submissions in database: ${countData.length}`);
    }

  } catch (error) {
    console.error('Setup failed:', error);
  }
}

setupFormSubmissions(); 