import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import ThemeButton from "../context/ThemeButton";
import useCountries from "../custom-hooks/useCountries";

const CountryPage = () => {
  const { name } = useParams();

  const countries = useCountries(
    `https://restcountries.eu/rest/v2/name/${name}`
  );

  const country = countries[0];

  if (country) {
    return (
      <Layout>
        <ThemeButton />
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2">
          <Link className="no-underline" to={"/"}>
            Back
          </Link>{" "}
        </button>
      </Layout>
    );
  }

  return <div>Loading...</div>;
};
export default CountryPage;
