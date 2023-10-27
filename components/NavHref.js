import Link from 'next/link';
import { useRouter } from 'next/router';

const NavHref = ({ href, Icon, iconStyles, name, title }) => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center justify-center"
    >
      <Icon
        styles={iconStyles}
        url={name.includes(pathname) ? 'url(#a)' : 'url(#gradient)'}
      />
      <p
        className={`${
          name.includes(pathname)
            ? 'from-chenkster-blue-light to-chenkster-green'
            : 'from-chenkster-blue to-[#184a8ba2]'
        } text-transparent bg-clip-text bg-gradient-to-br text-xs font-semibold font-lato`}
      >
        {title}
      </p>
    </Link>
  );
};

export default NavHref;
