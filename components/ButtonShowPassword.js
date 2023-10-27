import EyeSlashSvg from './Svg/EyeSlashSvg';
import EyeSvg from './Svg/EyeSvg';

const ButtonShowPassword = ({ show, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="absolute top-[14px] right-4 text-gray-500"
      type="button"
    >
      {show ? <EyeSvg /> : <EyeSlashSvg />}
    </button>
  );
};

export default ButtonShowPassword;
