import { useEffect, useState } from "react";

export default function useCountries(name) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://restcountries.eu/rest/v2/${
    name ? `name/${name}` : "all"
  }`;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(url);
        const countries = await response.json();
        setIsLoading(false);
        setCountries(countries);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchCountries();
  }, [url, name]);

  return [isLoading, error, countries];
}
