import { useState, useEffect } from 'react';

const useCityFromLocalStorage = () => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const getCityFromLocalStorage = () => {
      try {
        const cityFromLocalStorage = localStorage.getItem('city');
        if (cityFromLocalStorage) {
          setCity(cityFromLocalStorage);
        }
      } catch (error) {
        console.error('Error retrieving city from localStorage:', error);
      }
    };

    getCityFromLocalStorage();
  }, []);

  return city;
};

export default useCityFromLocalStorage;
