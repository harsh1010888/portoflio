import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://apsvdcpcjjorvyivfymn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwc3ZkY3BjampvcnZ5aXZmeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDY2MjAsImV4cCI6MjA3NzA4MjYyMH0.poJHv-t2kr6RGgzT4EdTyJN6HkMmhxx4ewfT_J62vLo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('🧪 SUPABASE CONNECTION TEST SUITE\n');
console.log('=' .repeat(50));

let testsPassed = 0;
let testsFailed = 0;

// Helper function for test logging
const logTest = (name, passed, message) => {
  const icon = passed ? '✅' : '❌';
  const status = passed ? 'PASS' : 'FAIL';
  console.log(`\n${icon} TEST: ${name}`);
  console.log(`   Status: ${status}`);
  console.log(`   Message: ${message}`);
  if (passed) testsPassed++;
  else testsFailed++;
};

(async () => {
  try {
    // TEST 1: Connection Test
    console.log('\n📡 TEST 1: Supabase Connection');
    try {
      const { error } = await supabase.from('portfoliovc').select('count(*)').limit(1);
      if (!error || error.code === 'PGRST116') {
        // PGRST116 is a valid response (table exists but we just check connection)
        logTest('Supabase Connected', true, 'Successfully connected to Supabase');
      } else {
        logTest('Supabase Connected', false, `Connection error: ${error.message}`);
      }
    } catch (err) {
      logTest('Supabase Connected', false, err.message);
    }

    // TEST 2: Table Exists Test
    console.log('\n📊 TEST 2: Check views Table Exists');
    try {
      const { data, error } = await supabase
        .from('views')
        .select('*')
        .limit(1)
        .maybeSingle();

      if (!error) {
        logTest('Table Exists', true, 'views table found and accessible');
      } else if (error.message.includes('Could not find the table')) {
        logTest('Table Exists', false, 'Table does not exist. Run SUPABASE_SETUP.sql first.');
      } else {
        logTest('Table Exists', false, error.message);
      }
    } catch (err) {
      logTest('Table Exists', false, err.message);
    }

    // TEST 3: Read Current Count
    console.log('\n📖 TEST 3: Read Current View Count');
    try {
      const { data, error } = await supabase
        .from('views')
        .select('id, view')
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        logTest('Read Count', true, `Current count: ${data.view} (ID: ${data.id})`);
      } else if (error?.message.includes('Could not find the table')) {
        logTest('Read Count', false, 'Table not found. Please create it.');
      } else {
        logTest('Read Count', false, error?.message || 'No data found');
      }
    } catch (err) {
      logTest('Read Count', false, err.message);
    }

    // TEST 4: Increment View Count (Dummy)
    console.log('\n📝 TEST 4: Increment View Count (Test)');
    try {
      const { data: existing, error: selectErr } = await supabase
        .from('views')
        .select('id, view')
        .limit(1)
        .maybeSingle();

      if (selectErr) throw selectErr;

      if (existing) {
        const newCount = (existing.view || 0) + 1;
        const { data: updated, error: updErr } = await supabase
          .from('views')
          .update({ view: newCount })
          .eq('id', existing.id)
          .select()
          .maybeSingle();

        if (!updErr) {
          logTest('Increment Count', true, `Count incremented from ${existing.view} to ${updated?.view}`);
        } else {
          logTest('Increment Count', false, updErr.message);
        }
      } else {
        logTest('Increment Count', false, 'No existing row to increment');
      }
    } catch (err) {
      logTest('Increment Count', false, err.message);
    }

    // TEST 5: RPC Function Test
    console.log('\n⚡ TEST 5: RPC increment_view_count Function');
    try {
      const { data, error } = await supabase.rpc('increment_view_count');

      if (!error) {
        logTest('RPC Function', true, `RPC call successful. New count: ${data}`);
      } else if (error.message.includes('not found')) {
        logTest('RPC Function', false, 'RPC function does not exist (optional - fallback mode will be used)');
      } else {
        logTest('RPC Function', false, error.message);
      }
    } catch (err) {
      logTest('RPC Function', false, err.message);
    }

    // TEST 6: Insert New Row Test
    console.log('\n➕ TEST 6: Insert New Row (Dummy Insert)');
    try {
      const testData = { view: 999 };
      const { data, error } = await supabase
        .from('views')
        .insert([testData])
        .select()
        .maybeSingle();

      if (!error) {
        logTest('Insert Row', true, `Successfully inserted test row with view count: ${data?.view}`);
        
        // Clean up: delete the test row
        console.log('   (Cleaning up test row...)');
        await supabase.from('views').delete().eq('id', data.id);
      } else {
        logTest('Insert Row', false, error.message);
      }
    } catch (err) {
      logTest('Insert Row', false, err.message);
    }

    // TEST 7: RLS Policies Test
    console.log('\n🔐 TEST 7: Row Level Security (RLS) Policies');
    try {
      // Try a simple read operation (tests SELECT policy)
      const { data, error } = await supabase
        .from('views')
        .select('id, view')
        .limit(1);

      if (!error) {
        logTest('RLS Policies', true, 'RLS policies allow anonymous SELECT access');
      } else if (error.message.includes('permission')) {
        logTest('RLS Policies', false, 'RLS policies blocking access. Check your policies.');
      } else {
        logTest('RLS Policies', false, error.message);
      }
    } catch (err) {
      logTest('RLS Policies', false, err.message);
    }

    // TEST 8: Final Count Verification
    console.log('\n🎯 TEST 8: Final View Count');
    try {
      const { data, error } = await supabase
        .from('views')
        .select('view')
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        logTest('Final Count', true, `Final view count: ${data.view}`);
      } else {
        logTest('Final Count', false, error?.message || 'Could not retrieve count');
      }
    } catch (err) {
      logTest('Final Count', false, err.message);
    }

  } catch (err) {
    console.error('Fatal error:', err);
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`\n📊 TEST SUMMARY`);
  console.log(`   ✅ Passed: ${testsPassed}`);
  console.log(`   ❌ Failed: ${testsFailed}`);
  console.log(`   📈 Total: ${testsPassed + testsFailed}`);

  if (testsFailed === 0) {
    console.log('\n🎉 ALL TESTS PASSED! Supabase is ready to go!\n');
  } else {
    console.log('\n⚠️  Some tests failed. Check the output above and verify:\n');
    console.log('   1. Table "portfoliovc" exists in Supabase');
    console.log('   2. RLS policies allow anonymous SELECT, INSERT, UPDATE');
    console.log('   3. Environment variables are correct');
    console.log('   4. Run SUPABASE_SETUP.sql if table does not exist\n');
  }

  process.exit(testsFailed > 0 ? 1 : 0);
})();
