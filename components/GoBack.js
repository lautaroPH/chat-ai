import ArrowSvg from './Svg/ArrowSvg';
import Link from 'next/link';

const GoBack = ({ styles, url }) => {
  return (
    <Link className={`${styles} cursor-pointer`} href={url}>
      <ArrowSvg />
    </Link>
  );
};

export default GoBack;
