import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Expect these in your Vite env (.env): VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
// This component targets your existing Supabase table `views` with integer column `view`.
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://apsvdcpcjjorvyivfymn.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwc3ZkY3BjampvcnZ5aXZmeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDY2MjAsImV4cCI6MjA3NzA4MjYyMH0.poJHv-t2kr6RGgzT4EdTyJN6HkMmhxx4ewfT_J62vLo';

const supabase = SUPABASE_URL && SUPABASE_ANON_KEY ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Debug logging
console.log('ViewCounter Debug:', {
  SUPABASE_URL: SUPABASE_URL ? 'Present' : 'Missing',
  SUPABASE_ANON_KEY: SUPABASE_ANON_KEY ? 'Present' : 'Missing',
  supabase: supabase ? 'Initialized' : 'Failed'
});

const ViewCounterModule = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    let mounted = true;

    const incrementAndFetch = async () => {
      if (!supabase) {
        if (mounted) {
          setError('Supabase not configured (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY)');
          setLoading(false);
        }
        return;
      }

      setLoading(true);

      try {
        // Use RPC function to increment view count atomically (only increments ONCE)
        const { data: rpcData, error: rpcErr } = await supabase.rpc('increment_view_count');
        
        if (rpcErr) {
          throw rpcErr;
        }

        // Set the count from RPC response
        const newCount = rpcData;
        if (mounted) setCount(newCount ?? null);
        if (mounted) setError(null);
      } catch (err) {
        console.error('Supabase view counter error:', err);
        if (mounted) setError(err.message || String(err));
      } finally {
        if (mounted) setLoading(false);
      }
    };

    incrementAndFetch();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-black/60 text-white rounded-full px-3 py-2 flex items-center gap-2 text-sm shadow-lg backdrop-blur"
      role="status"
      aria-live="polite"
    >
         <span className="text-lg leading-none">👁️</span>
         <div className="flex flex-col items-start">
           <span className="text-xs opacity-80">Views</span>
           {loading ?
            (
          <span className="text-sm">...</span>
        ) : error ? (
          <span className="text-red-400 text-sm">Err</span>
        ) : (
          <span className="text-sm font-semibold">{count ?? '—'}</span>
        )}
      </div>
    </div>
  );
};

export default ViewCounterModule;
