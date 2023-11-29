import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ucpdghenhezuknlavciz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjcGRnaGVuaGV6dWtubGF2Y2l6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5Mzg5ODcsImV4cCI6MjAxNjUxNDk4N30.Gp6Kv9rxCjlJG-udseCUCx2SFB_9KdM-NRIXbtcAfr8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
