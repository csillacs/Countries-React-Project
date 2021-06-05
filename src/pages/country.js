import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CountryPage = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`)
      .then((response) => {
        setCountry(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  if (country === null) {
    return <></>;
  }

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
      <img alt={country.name} src={country.flag} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2"
        key={name}
      >
        <Link className="no-underline" to={"/"}>
          Back
        </Link>{" "}
      </button>
    </div>
  );
};

export default CountryPage;
