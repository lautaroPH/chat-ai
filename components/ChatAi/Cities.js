import City from './City';

const Cities = ({ cities, message }) => {
  return (
    <ul className="w-full mt-5 overflow-y-auto">
      {cities.length === 0 && (
        <p className="mb-3 text-lg font-semibold font-poppins text-chenkster-gray">
          No results
        </p>
      )}
      {cities.map((city) => (
        <City
          key={city.id}
          image={city.flag}
          city={city.title}
          message={message}
        />
      ))}
    </ul>
  );
};

export default Cities;
