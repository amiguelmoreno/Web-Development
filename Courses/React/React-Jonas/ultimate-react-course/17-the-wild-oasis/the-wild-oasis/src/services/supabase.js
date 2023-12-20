import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ofdkcjleosrpqnbphplm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mZGtjamxlb3NycHFuYnBocGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzOTU4MjMsImV4cCI6MjAxNzk3MTgyM30.Da72bo0GFrlofUWmQ8pu_4_MXdHS0z2rHWyj-vcYkyw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
