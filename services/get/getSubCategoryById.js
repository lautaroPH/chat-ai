import { supabase } from '@/supabaseClient';

export const getSubCategoryById = async (id) => {
  const { data, error } = await supabase
    .from('sub_categories')
    .select('title')
    .eq('id', id)
    .single();

  return {
    data,
    error,
  };
};
