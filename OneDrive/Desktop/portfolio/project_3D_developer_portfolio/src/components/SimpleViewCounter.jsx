import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SimpleViewCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementViewCount = async () => {
      // Debug localStorage state
      console.log('💾 LocalStorage Debug:', {
        'portfolio-views': localStorage.getItem('portfolio-views'),
        'portfolio-views-max': localStorage.getItem('portfolio-views-max')
      });
      
      try {
        // Try Supabase first (if available)
        const SUPABASE_URL = 'https://apsvdcpcjjorvyivfymn.supabase.co';
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwc3ZkY3BjampvcnZ5aXZmeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDY2MjAsImV4cCI6MjA3NzA4MjYyMH0.poJHv-t2kr6RGgzT4EdTyJN6HkMmhxx4ewfT_J62vLo';
        
        console.log('🔄 Attempting Supabase connection...');
        
        const response = await fetch(`${SUPABASE_URL}/rpc/increment_view_count`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Supabase view count:', data);
          // Also save to localStorage as backup
          localStorage.setItem('portfolio-views', data.toString());
          localStorage.setItem('portfolio-views-max', Math.max(data, parseInt(localStorage.getItem('portfolio-views-max')) || 0).toString());
          setCount(data);
        } else {
          console.log('❌ Supabase response not OK:', response.status, response.statusText);
          throw new Error(`Supabase error: ${response.status}`);
        }
      } catch (error) {
        console.log('Using offline counter:', error.message);
        // Fallback to localStorage with better persistence
        const savedCount = localStorage.getItem('portfolio-views');
        const savedMax = localStorage.getItem('portfolio-views-max');
        
        // If we have a saved count, increment it
        if (savedCount) {
          const currentCount = parseInt(savedCount) + 1;
          localStorage.setItem('portfolio-views', currentCount.toString());
          // Track the maximum count we've seen
          const maxCount = Math.max(currentCount, parseInt(savedMax) || 0);
          localStorage.setItem('portfolio-views-max', maxCount.toString());
          setCount(currentCount);
        } else if (savedMax) {
          // If no current count but we have a max, start from there
          const currentCount = parseInt(savedMax) + 1;
          localStorage.setItem('portfolio-views', currentCount.toString());
          localStorage.setItem('portfolio-views-max', currentCount.toString());
          setCount(currentCount);
        } else {
          // First time visitor fallback
          const currentCount = 1046; // Start from your last known count
          localStorage.setItem('portfolio-views', currentCount.toString());
          localStorage.setItem('portfolio-views-max', currentCount.toString());
          setCount(currentCount);
        }
      } finally {
        setLoading(false);
      }
    };

    incrementViewCount();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600/80 to-blue-600/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 flex items-center gap-3 text-sm shadow-2xl border border-white/10"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
        <span className="text-lg animate-pulse">👁️</span>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs opacity-80 font-medium">Total Views</span>
        {loading ? (
          <span className="text-sm font-bold animate-pulse">Loading...</span>
        ) : (
          <span className="text-lg font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            {count?.toLocaleString() || '—'}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default SimpleViewCounter;