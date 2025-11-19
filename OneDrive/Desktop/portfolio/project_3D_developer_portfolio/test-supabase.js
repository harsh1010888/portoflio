import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://apsvdcpcjjorvyivfymn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwc3ZkY3BjampvcnZ5aXZmeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDY2MjAsImV4cCI6MjA3NzA4MjYyMH0.poJHv-t2kr6RGgzT4EdTyJN6HkMmhxx4ewfT_J62vLo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

(async () => {
  console.log('Testing Supabase connection...');
  
  try {
    // Test 1: Try to read from views table
    const { data, error } = await supabase
      .from('views')
      .select('*')
      .limit(1)
      .maybeSingle();
    
    if (error) {
      console.log('❌ Query error:', error.message);
    } else {
      console.log('✅ Supabase connection successful!');
      console.log('Current row:', data);
    }
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
})();
