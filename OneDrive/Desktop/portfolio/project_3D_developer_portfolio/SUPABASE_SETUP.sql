-- Supabase SQL Setup for View Counter
-- Run these queries in your Supabase project's SQL Editor

-- Step 1: Create the views table with id primary key and view column
CREATE TABLE IF NOT EXISTS public.views (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  view INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (id)
);

-- Step 2: Enable RLS (Row Level Security) 
ALTER TABLE public.views ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policies to allow anonymous access
-- Allow SELECT for anonymous users
CREATE POLICY "Allow anonymous select on views"
ON public.views
FOR SELECT
USING (true);

-- Allow INSERT for anonymous users
CREATE POLICY "Allow anonymous insert on views"
ON public.views
FOR INSERT
WITH CHECK (true);

-- Allow UPDATE for anonymous users
CREATE POLICY "Allow anonymous update on views"
ON public.views
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Step 4: (Optional) Create an atomic increment RPC function
CREATE OR REPLACE FUNCTION public.increment_view_count()
RETURNS INTEGER AS $$
  UPDATE views 
  SET view = view + 1 
  RETURNING view;
$$ LANGUAGE sql VOLATILE;

-- Step 5: Insert initial dummy data (1000 views)
INSERT INTO public.views (view) 
VALUES (1000)
ON CONFLICT DO NOTHING;

-- Done! Your table is ready.
-- Test data will be inserted on first visit to your portfolio.
