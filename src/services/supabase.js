import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zwkrunlqjbxeoflitmxt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3a3J1bmxxamJ4ZW9mbGl0bXh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzQ4ODcsImV4cCI6MjAwNTcxMDg4N30.kz9wXjbpxeJCJ3np21qN0AqdF15-vw4CScjrVbM0rpM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
