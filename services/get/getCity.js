import { supabase } from '@/supabaseClient';

export const getCity = async (city) => {
  const { data, error } = await supabase
    .from('cities')
    .select('id,title,flag,created_at,country')
    .ilike('title', city)
    .single();

  return { city: data, err: error };
};
