-- ============================================
-- SUPABASE VIEW COUNTER SETUP
-- Copy and paste everything below into Supabase SQL Editor
-- Then click RUN (Ctrl+Enter)
-- ============================================

-- Step 1: Create table
CREATE TABLE IF NOT EXISTS public.views (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  view INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (id)
);

-- Step 2: Enable Row Level Security
ALTER TABLE public.views ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy - Allow SELECT for all
CREATE POLICY "Allow anonymous select on views"
ON public.views
FOR SELECT
USING (true);

-- Step 4: Create policy - Allow INSERT for all
CREATE POLICY "Allow anonymous insert on views"
ON public.views
FOR INSERT
WITH CHECK (true);

-- Step 5: Create policy - Allow UPDATE for all
CREATE POLICY "Allow anonymous update on views"
ON public.views
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Step 6: Create RPC function for atomic increment
CREATE OR REPLACE FUNCTION public.increment_view_count()
RETURNS INTEGER AS $$
  UPDATE views 
  SET view = view + 1 
  RETURNING view;
$$ LANGUAGE sql VOLATILE;

-- Step 7: Insert initial data
INSERT INTO public.views (view) 
VALUES (1000)
ON CONFLICT DO NOTHING;

-- ============================================
-- All done! Your database is ready.
-- Run this in PowerShell to test:
-- node test-supabase-full.js
-- ============================================
