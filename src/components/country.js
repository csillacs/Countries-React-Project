import React from "react";
import { Link } from "react-router-dom";

export default function Country({
  capital,
  name,
  population,
  languages,
  flag,
}) {
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
        <Link className="no-underline" to={`/countries/${name.toLowerCase()}`}>
          show
        </Link>{" "}
      </button>
    </div>
  );
}
