import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Country = ({ capital, name, population, languages, flag }) => {
    return (
      <div className="py-4">
        <p className="text-2xl"> {name}</p>
        <p className="text-base">capital: {capital}</p>
        <p className="text-base">population: {population}</p>
        <h3>language(s):</h3>
        <div>
          {languages.map(({ name, iso639_1 }) => {
            return (
              <li key={iso639_1} className="text-base">
                {name}
              </li>
            );
          })}
        </div>
        <img alt={name} src={flag} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow my-2	"
          key={name}
        >
          <Link
            className="no-underline"
            to={`/countries/${name.toLowerCase()}`}
          >
            show
          </Link>{" "}
        </button>
      </div>
    );
  };

  const Countries = () => {
    if (countries) {
      return (
        <div className="md:container md:mx-auto">
          {countries.map((c) => (
            <Country
              key={c.name}
              name={c.name}
              capital={c.capital}
              languages={c.languages}
              population={c.population}
              flag={c.flag}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        {countries.map((c) => (
          <Country key={c.name} name={c.name} />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Countries countries={countries} />
    </div>
  );
}
