# ✅ Supabase View Counter Checklist

## Pre-Setup Verification
- [x] Supabase account created
- [x] Project ID: `apsvdcpcjjorvyivfymn`
- [x] Anon key: `eyJhbGc...` (saved in .env)
- [x] React component created: `ViewCounterModule.jsx`
- [x] Component integrated in `App.jsx`
- [x] Env vars set in `.env`
- [x] @supabase/supabase-js installed

## Database Setup (YOU NEED TO DO THIS)
- [ ] **STEP 1: Open Supabase SQL Editor**
  - Go to: https://app.supabase.com/project/apsvdcpcjjorvyivfymn/sql/new
  - You should see a blank SQL editor

- [ ] **STEP 2: Paste SQL from SUPABASE_SETUP.sql**
  - Copy ALL the SQL code
  - Paste into the editor

- [ ] **STEP 3: Click RUN**
  - Press Ctrl+Enter or click blue "Run" button
  - Wait for completion
  - Should see green checkmarks

- [ ] **STEP 4: Verify Table Created**
  - Go to Table Editor in Supabase
  - Look for table: `portfoliovc`
  - Should have columns: `id`, `view`, `created_at`

## Testing
- [ ] **STEP 5: Run Test Script**
  ```powershell
  cd "c:\Users\omarh\OneDrive\Desktop\portfolio\project_3D_developer_portfolio"
  node test-supabase-full.js
  ```
  - Should see: ✅ All 8 tests PASS

- [ ] **STEP 6: Start Dev Server**
  ```powershell
  npm run dev
  ```
  - Should see: `VITE ready in XXX ms`
  - Should show: `➜  Local:   http://localhost:5173/`

- [ ] **STEP 7: Open in Browser**
  - Go to: `http://localhost:5173`
  - Look at **bottom-right corner**
  - Should see: 👁️ Views **1001** (or higher)

- [ ] **STEP 8: Refresh Page**
  - Press F5 or Ctrl+R
  - Counter should increase to **1002**

## Deployment Checklist
- [ ] Push to GitHub
- [ ] Connect to Netlify
- [ ] Add Netlify environment variables:
  - `VITE_SUPABASE_URL` = `https://apsvdcpcjjorvyivfymn.supabase.co`
  - `VITE_SUPABASE_ANON_KEY` = (your anon key)
- [ ] Deploy
- [ ] Check live site - counter should be working globally

## Files Modified/Created
- ✅ `src/components/ViewCounterModule.jsx` - Created
- ✅ `src/App.jsx` - Updated (added import and component)
- ✅ `.env` - Updated (Supabase credentials)
- ✅ `SUPABASE_SETUP.sql` - Created
- ✅ `SUPABASE_SETUP_README.md` - Created
- ✅ `test-supabase.js` - Created
- ✅ `test-supabase-full.js` - Created (comprehensive tests)
- ✅ `SETUP_INSTRUCTIONS.md` - Created (this file)
- ✅ `README.md` - Updated with Supabase notes

## Success Criteria
✅ All criteria met = View counter is working!

1. [x] Component renders without errors
2. [x] Supabase connection established
3. [ ] Table created in database (YOU DO THIS)
4. [ ] Tests pass
5. [ ] Counter displays on page
6. [ ] Counter increments on refresh
7. [ ] Count persists in Supabase

---

## Quick Reference

### SQL to Run (Copy All):
File: `SUPABASE_SETUP.sql` in your project root

### Test Command:
```powershell
node test-supabase-full.js
```

### Start Dev Server:
```powershell
npm run dev
```

### View Site:
```
http://localhost:5173
```

### Check Live Database:
1. Supabase Dashboard
2. Table Editor
3. Select `portfoliovc`
4. See count increase with each test/visit

---

## 📞 Support Info

If something doesn't work:
1. Check browser console (F12) for errors
2. Run `node test-supabase-full.js` for diagnostic info
3. Verify SQL ran successfully in Supabase
4. Verify `.env` has correct values
5. Clear browser cache and refresh
