# Complete Supabase View Counter Setup Guide

## What You Have
- ✅ Supabase project: `apsvdcpcjjorvyivfymn`
- ✅ Anon key configured
- ✅ React component ready: `ViewCounterModule.jsx`
- ✅ Env vars in `.env`
- ✅ Test scripts ready

## What You Need to Do (Only 2 Steps!)

### STEP 1: Create Database Table in Supabase (5 minutes)

**Open this URL in your browser:**
```
https://app.supabase.com/project/apsvdcpcjjorvyivfymn/sql/new
```

**Copy and paste this entire SQL block:**
```sql
-- Create the views table
CREATE TABLE IF NOT EXISTS public.views (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  view INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.views ENABLE ROW LEVEL SECURITY;

-- Allow anonymous SELECT
CREATE POLICY "Allow anonymous select on views"
ON public.views
FOR SELECT
USING (true);

-- Allow anonymous INSERT
CREATE POLICY "Allow anonymous insert on views"
ON public.views
FOR INSERT
WITH CHECK (true);

-- Allow anonymous UPDATE
CREATE POLICY "Allow anonymous update on views"
ON public.views
FOR UPDATE
USING (true)
WITH CHECK (true);

-- Create RPC function for atomic increment
CREATE OR REPLACE FUNCTION public.increment_view_count()
RETURNS INTEGER AS $$
  UPDATE views 
  SET view = view + 1 
  RETURNING view;
$$ LANGUAGE sql VOLATILE;

-- Insert initial data (1000 views)
INSERT INTO public.views (view) 
VALUES (1000)
ON CONFLICT DO NOTHING;
```

**Click the blue "Run" button or press Ctrl+Enter**

Wait for it to complete. You should see green checkmarks ✅ for each statement.

---

### STEP 2: Verify Setup Works

**In PowerShell terminal, run:**
```powershell
cd "c:\Users\omarh\OneDrive\Desktop\portfolio\project_3D_developer_portfolio"
node test-supabase-full.js
```

**Expected output:** All tests should show ✅ PASS

---

### STEP 3: Start Your Portfolio

**In PowerShell, run:**
```powershell
cd "c:\Users\omarh\OneDrive\Desktop\portfolio\project_3D_developer_portfolio"
npm run dev
```

**Expected output:**
```
  VITE v4.5.14  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Open:** `http://localhost:5173` in your browser

**Look for:** Bottom-right corner - you should see 👁️ **Views 1001** (or higher if you refresh)

---

## What Each Part Does

| Component | Purpose |
|-----------|---------|
| `ViewCounterModule.jsx` | React component that displays and increments count |
| `.env` | Stores your Supabase credentials |
| `COPY_PASTE_SQL.sql` | SQL to create table and policies |
| `test-supabase-full.js` | Tests if everything works |

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Tests still fail after SQL | Refresh Supabase page, then run test again |
| Counter shows "Err" on page | Check browser console (F12) for error details |
| Port 5173 already in use | Try `npm run dev -- --port 5174` |
| Still not working | Share the test output and browser console error |

---

## What I Need From You

Just confirm:
1. ✅ Did you run the SQL in Supabase?
2. ✅ Did the tests pass?
3. ✅ Can you see the counter on the page?

Or share any error messages you see!
