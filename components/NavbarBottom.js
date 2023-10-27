import Link from 'next/link';
import { useRouter } from 'next/router';
import NavHref from './NavHref';
import HomeSvg from './Svg/HomeSvg';
import ItenarySvg from './Svg/ItenarySvg';
import MapPointSvg from './Svg/MapPointSvg';
import MessageSvg from './Svg/MessageSvg';
import PersonSvg from './Svg/PersonSvg';
import HeartNavSvg from './Svg/HeartNavSvg';
import { roles } from '@/utils/roles';
import useCityFromLocalStorage from '@/hooks/useCityFromLocalStorage';
import { getChatUrl } from '@/utils/getChatUrl';

const NavbarBottom = ({ username, role }) => {
  const { admin, chenkster } = roles;
  const router = useRouter();
  const { pathname } = router;
  const city = useCityFromLocalStorage();
  const chatUrl = getChatUrl({
    city,
    cityId: router.query.cityId,
  });

  return (
    <nav className="fixed bottom-0 z-30 flex items-center justify-between w-full px-2 pt-3 pb-2 bg-white rounded-t-lg shadow-sm xs:px-10 sm:w-96 shadow-black drop-shadow-2xl">
      <NavHref
        href={city ? `/${city}/categories` : '/welcome'}
        name={[
          '/welcome',
          '/[cityId]',
          '/[cityId]/categories',
          '/[cityId]/categories/[category]',
          '/[cityId]/categories/[category]/itineraries',
          '/[cityId]/categories/[category]/itineraries/[itinerary]',
        ]}
        Icon={MapPointSvg}
        iconStyles={'w-5 h-7'}
        title="Explore"
      />
      <NavHref
        href={
          role === admin || role === chenkster
            ? '/itineraries/uploaded'
            : '/itinerary'
        }
        name={
          role === admin || role === chenkster
            ? ['/itineraries/uploaded']
            : ['/itinerary']
        }
        Icon={role === admin || role === chenkster ? ItenarySvg : HeartNavSvg}
        iconStyles={role === admin || role === chenkster ? '' : 'w-7 h-7'}
        title={
          role === admin || role === chenkster ? 'Itineraries' : 'Favorites'
        }
      />
      <Link
        className="flex flex-col items-center justify-center text-chenkster-blue"
        href={'/'}
      >
        <div
          className={`${
            pathname === '/' ? 'bg-chenkster-green' : 'home-bg'
          } p-[6px] -mt-2 pb-2 rounded-full`}
        >
          <HomeSvg />
        </div>
        <p className="text-transparent bg-clip-text bg-gradient-to-br text-xs -mb-[2px] font-semibold font-lato from-chenkster-blue to-[#184a8ba2]">
          Home
        </p>
      </Link>
      <NavHref
        href={chatUrl}
        name={['chat', '/chat-ai/[city]']}
        Icon={MessageSvg}
        title="Messages"
      />
      <NavHref
        href={username ? `/profile/${username}` : `/login`}
        name={[
          '/profile/[username]',
          '/edit/profile',
          '/profile/options/settings',
        ]}
        Icon={PersonSvg}
        title="Profile"
      />
    </nav>
  );
};

export default NavbarBottom;
