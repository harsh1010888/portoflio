console.log("=== Environment Variables Debug ===");
console.log("VITE_SUPABASE_URL:", process.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_ANON_KEY:", process.env.VITE_SUPABASE_ANON_KEY);
console.log("VITE_RAZORPAY_KEY_ID:", process.env.VITE_RAZORPAY_KEY_ID);

// Test direct values
const SUPABASE_URL = "https://apsvdcpcjjorvyivfymn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwc3ZkY3BjampvcnZ5aXZmeW1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1MDY2MjAsImV4cCI6MjA3NzA4MjYyMH0.poJHv-t2kr6RGgzT4EdTyJN6HkMmhxx4ewfT_J62vLo";

console.log("Direct SUPABASE_URL:", SUPABASE_URL);
console.log(
  "Direct SUPABASE_ANON_KEY:",
  SUPABASE_ANON_KEY ? "Present" : "Missing"
);

// Test simple fetch
fetch(`${SUPABASE_URL}/rest/v1/views?select=*&limit=1`, {
  headers: {
    apikey: SUPABASE_ANON_KEY,
    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  },
})
  .then((response) => {
    console.log("Direct fetch status:", response.status);
    return response.text();
  })
  .then((data) => {
    console.log("Direct fetch data:", data);
  })
  .catch((error) => {
    console.error("Direct fetch error:", error);
  });
