import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        setIsLoading(false);
        setCountry(response.data[0]);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    if (country === null) {
      return <div>{error && "Something went wrong :("}</div>;
    }
  }

  if (country) {
    return (
      <div className="p-10">
        <h1>{country.name}</h1>
        <p>capital: {country.capital}</p>
        <p>population: {country.population}</p>
        <h3>language(s):</h3>
        <div>
          {country.languages.map(({ name, iso639_1 }) => {
            return <li key={iso639_1}>{name}</li>;
          })}
        </div>
        <img alt={country.name} src={country.flag} className="w-1/4" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2"
          // key={name}
        >
          <Link className="no-underline" to={"/"}>
            Back
          </Link>{" "}
        </button>
      </div>
    );
  }
};
export default CountryPage;
