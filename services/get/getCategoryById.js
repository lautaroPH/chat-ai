import { supabase } from '@/supabaseClient';

export const getCategoryById = async (id) => {
  const { data, error } = await supabase
    .from('categories')
    .select('title')
    .eq('id', id)
    .single();

  return { categoryTitle: data.title, err: error };
};
