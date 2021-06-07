import React from "react";
import { Link } from "react-router-dom";

export default function TableRow({
  name,
  region,
  population,
  languages,
  flag,
}) {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4">
        <img alt={name} src={flag} className="w-max	" />
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900">{name} </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900">{population} </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900"> {region} </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-base text-gray-900">
          {languages.map(({ name, iso639_1 }) => {
            return <div key={iso639_1}>{name}</div>;
          })}
        </div>
      </td>

      <td className="px-6 py-4 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-gray-400 rounded shadow "
          key={name}
        >
          <Link
            className="no-underline"
            to={`/countries/${name.toLowerCase()}`}
          >
            show
          </Link>{" "}
        </button>
      </td>
    </tr>
  );
}
