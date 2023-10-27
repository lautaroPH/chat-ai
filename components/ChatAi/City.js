/* eslint-disable @next/next/no-img-element */

const City = ({ image, city, message }) => {
  return (
    <li className="flex items-center justify-between w-full px-5 mb-5">
      <a
        href={`/chat-ai/${city}${message ? `?message=${message}` : ''}`}
        className="flex items-center w-full gap-2"
      >
        <img
          className="object-cover w-10 h-5"
          src={image}
          alt={`Flag of ${city}`}
        />
        <h4 className="text-lg font-semibold font-poppins text-chenkster-gray">
          {city}
        </h4>
      </a>
    </li>
  );
};

export default City;
