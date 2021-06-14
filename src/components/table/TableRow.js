import React from "react";
import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import UnlikeButton from "../UnlikeButton";
import useFavorites from "../../custom-hooks/useFavorites";

export default function TableRow({ country }) {
  const { favoriteCountries } = useFavorites();

  const { name, region, population, languages, flag } = country;
  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-0">
        <img alt={name} src={flag} className="w-full" />
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900 dark:text-white">
          <Link
            className="no-underline"
            to={`/countries/${name.toLowerCase()}`}
          >
            {name}
          </Link>{" "}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900 dark:text-white">
          {population}{" "}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900 dark:text-white">
          {" "}
          {region}{" "}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900 dark:text-white">
          {languages.map(({ name, iso639_1 }) => {
            return <div key={iso639_1}>{name}</div>;
          })}
        </div>
      </td>

      <td className="px-6 py-4 ">
        <LikeButton country={country} />
      </td>
    </tr>
  );
}
