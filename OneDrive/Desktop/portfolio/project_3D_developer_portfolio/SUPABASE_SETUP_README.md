# Quick Setup Instructions for Supabase View Counter

## Step 1: Create the Database Table & Policies
1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **SQL Editor** in the left sidebar
3. Open a new query window (click **New Query**)
4. Copy and paste the contents of `SUPABASE_SETUP.sql` from this repo
5. Click **Run** (or press Ctrl+Enter)
6. Confirm the queries execute successfully (you should see green checkmarks)

## Step 2: Verify the Table was Created
1. In Supabase dashboard, go to **Table Editor** (left sidebar)
2. You should see a new table named `portfoliovc`
3. Click it and verify it has:
   - `id` (UUID, Primary Key)
   - `view` (Integer, Default: 0)
   - `created_at` (Timestamp, optional)

## Step 3: Start Your Portfolio
```powershell
cd c:\Users\omarh\OneDrive\Desktop\portfolio\project_3D_developer_portfolio
npm run dev
```

## Step 4: Test the View Counter
1. Open `http://localhost:5173` (or the URL shown in terminal)
2. Look at the **bottom-right corner** of the page
3. You should see an eye emoji (👁️) with **"Views"** label and the count
4. First visit: count should be **1**
5. Refresh the page: count should increment to **2**, then **3**, etc.
6. Check Supabase Table Editor → `porrtfoliovc` to see the count update live

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Could not find table 'public.portfoliovc'" | Run the SQL setup from SUPABASE_SETUP.sql in SQL Editor |
| View counter shows "Err" on page | Check browser console (F12) for error details. Likely RLS policy not set. |
| Count not incrementing | Verify RLS policies were created (public SELECT, INSERT, UPDATE allowed) |
| RPC not found (falls back to normal flow) | This is OK — the component will still work without the RPC |
| Env vars not loading | Make sure `.env` file exists and `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` are set |

## Done!
Once you see the count increment, your view counter is live and working. Every visitor increments the global count permanently stored in Supabase.
