// public/config/supabase.js

const SUPABASE_URL =
    "https://ohoswsnsnudyofkzsfve.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_LVBwYWJLcYuk81blriY8iA_MbORiygv";


if (!window.supabase) {
    throw new Error(
        "Supabase SDK was not loaded."
    );
}


export const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false
            }
        }
    );