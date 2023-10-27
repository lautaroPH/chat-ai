import LoginForm from '@/components/LoginForm';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs/dist';

export const getServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);

  const { data } = await supabase.auth.getUser();

  if (!data.user)
    return {
      props: {
        initialSession: data.user,
        user: data.user,
      },
    };

  return {
    redirect: {
      destination: '/welcome',
      permanent: false,
    },
  };
};

export default function Login() {
  return (
    <>
      <LoginForm />
    </>
  );
}
