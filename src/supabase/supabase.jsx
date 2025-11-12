import {createClient} from '@supabase/supabase-js';

const SUPABASE_URL = "https://mqkyosfsndodrzkgvjsp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3lvc2ZzbmRvZHJ6a2d2anNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MzY1NTEsImV4cCI6MjA3ODQxMjU1MX0.TgL-CsoAVNx-HcOeL4xFuuZ6DHFKYtf1GK6NjfdXaag";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

