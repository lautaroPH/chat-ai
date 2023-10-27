import { supabase } from '@/supabaseClient';

export const getCities = async () => {
  const { data, error } = await supabase
    .from('cities')
    .select('id,title,flag,country')
    .order('country', { ascending: true })
    .order('title', { ascending: true });

  return { cities: data, err: error };
};
