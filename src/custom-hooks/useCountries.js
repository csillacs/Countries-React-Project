import { useEffect, useState } from "react";

export default function useCountries(name) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const url = `https://restcountries.eu/rest/v2/${
    name ? `name/${name}` : "all"
  }`;

  const fetchCountries = async () => {
    try {
      const response = await fetch(url).then((response) => response.json());
      //   console.log(response);
      setCountries(response);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, [url]);

  return [error, countries];
}
