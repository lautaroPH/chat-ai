import { uploadDocumentsChat } from '@/services/upload/uploadDocumentsChat';
import { supabase } from '@/supabaseClient';

export default async function handler(req, res) {
  const { data, error } = await supabase
    .from('itineraries')
    .select(
      'id,title,budget,map_url,description,front_image,detail_image,social_media,visit_period,city(title),categories,sub_categories',
    )
    .eq('city', '42f44596-316d-4c4f-b7f3-130cc6d68b67');

  const okPromises = data.map(async (itinerary) => {
    await uploadDocumentsChat({ data: itinerary, supabase });

    return true;
  });

  const ok = await Promise.all(okPromises);

  res.status(200).json({ ok });
}
