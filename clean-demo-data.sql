-- Clean up demo form submissions from your database
-- Run this in your Supabase SQL Editor

-- Remove all demo/test data from form_submissions table

-- 1. Remove submissions with demo email addresses
DELETE FROM public.form_submissions 
WHERE email IN (
    'sarah.j@example.com',
    'mchen@techcorp.com', 
    'emily.r@events.com',
    'david.t@lawfirm.com',
    'jennifer.w@weddings.com'
);

-- 2. Remove submissions with demo names and phone patterns
DELETE FROM public.form_submissions 
WHERE first_name IN ('Sarah', 'Michael', 'Emily', 'David', 'Jennifer')
AND last_name IN ('Johnson', 'Chen', 'Rodriguez', 'Thompson', 'Williams')
AND phone LIKE '(555)%';

-- 3. Remove submissions with demo event locations
DELETE FROM public.form_submissions 
WHERE event_location IN (
    'Houston Country Club',
    'Downtown Convention Center', 
    'Private Residence - River Oaks',
    'Four Seasons Hotel',
    'The Houstonian'
);

-- 4. Remove any submissions with demo phone numbers (555 area code)
DELETE FROM public.form_submissions 
WHERE phone LIKE '(555)%';

-- 5. Remove any submissions with demo email domains
DELETE FROM public.form_submissions 
WHERE email LIKE '%@example.com'
OR email LIKE '%@demo.com'
OR email LIKE '%@test.com';

-- 6. Clean up any remaining obvious demo data
DELETE FROM public.form_submissions 
WHERE message LIKE '%demo%'
OR message LIKE '%test%'
OR message LIKE '%sample%'
OR message LIKE '%example%';

-- 7. Show remaining submissions (real data)
SELECT 
    id,
    form_type,
    status,
    first_name,
    last_name,
    email,
    phone,
    event_type,
    event_date,
    created_at
FROM public.form_submissions 
ORDER BY created_at DESC; 