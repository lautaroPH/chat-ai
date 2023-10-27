import { loginWithEmail } from '@/services/auth/loginWithEmail';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ButtonShowPassword from './ButtonShowPassword';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs/dist';

const LoginForm = () => {
  const [showFirstPassword, setShowFirstPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const supabase = createPagesBrowserClient();
  const router = useRouter();

  const callbackUrl = router.query.callbackUrl || '/welcome';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    if (!email.trim() || !password.trim()) {
      setLoading(false);
      setError({ submit: 'Please fill in all fields' });
      return;
    }

    const { data, error } = await loginWithEmail(
      email.trim(),
      password.trim(),
      supabase,
    );
    setLoading(false);
    if (error) {
      setError({ submit: error.message });
      return;
    }

    const actualYear = new Date().getFullYear();
    const birthYear = data.user.user_metadata?.year
      ? actualYear - data.user.user_metadata?.year
      : null;

    router.push(callbackUrl);
  };

  const handleShowPassword = () => {
    setShowFirstPassword(!showFirstPassword);
  };

  return (
    <form
      id="loginform"
      onSubmit={handleSubmit}
      className="relative flex flex-col items-center justify-center w-11/12 mt-12 sm:w-96 max-w-96"
    >
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-4 py-3 mb-3 text-base text-gray-700 border rounded-lg border-opacity-60 placeholder-chenkster-blue placeholder:opacity-70 border-chenkster-blue focus:shadow-outline font-lato"
        required
      />
      <fieldset className="relative w-full">
        <input
          type={showFirstPassword ? 'text' : 'password'}
          name="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose your password"
          className="w-full px-4 py-3 mb-3 text-base text-gray-700 border rounded-lg border-opacity-60 placeholder-chenkster-blue placeholder:opacity-70 border-chenkster-blue focus:shadow-outline font-lato"
          required
        />
        <ButtonShowPassword
          show={showFirstPassword}
          handleClick={handleShowPassword}
        />
      </fieldset>
      <button
        disabled={loading || !email || !password}
        type="submit"
        className="w-full py-3 my-3 text-xl font-semibold text-center text-transparent bg-white rounded-lg shadow-md bg-clip-text bg-gradient-to-r from-chenkster-blue-light to-chenkster-green disabled:opacity-60 disabled:cursor-not-allowed drop-shadow-lg font-poppins"
      >
        {loading ? 'Loading...' : 'Login'}
      </button>
      <Link
        href={'/recover'}
        className="mt-2 text-lg font-semibold font-lato text-chenkster-blue"
      >
        Forgot Password?
      </Link>
      <p className="mb-3 text-red-600">{error?.submit}</p>
      <p className="mb-4 text-center w-72 font-poppins text-chenkster-gray">
        Don’t have an account?{' '}
        <Link
          href={`/register?callbackUrl=${
            router.query.callbackUrl || '/edit/profile'
          }`}
          className="font-semibold font-poppins text-chenkster-blue"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
