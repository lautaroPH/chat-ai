import { roles } from '@/utils/roles';

export const loginWithEmail = async (email, password, supabase) => {
  const firstName = email.split('@')[0];

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
    options: {
      data: {
        role: roles.user,
        avatar:
          'https://res.cloudinary.com/dv1ksnrvk/image/upload/v1677080765/samples/userImg_oiynrs.png',
        first_name: firstName,
        last_name: '',
      },
    },
  });

  if (error) return { data, error };

  return { data, error };
};
