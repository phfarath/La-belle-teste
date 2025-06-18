import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

// As variáveis de ambiente devem estar configuradas no arquivo .env.local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('As variáveis de ambiente VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY são necessárias.');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
