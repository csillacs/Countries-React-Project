import React from "react";
import { useSelector } from "react-redux";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ countries }) {
  const foundCountries = useSelector(
    (state) => state.allCountries.foundCountries
  );
  const input = useSelector((state) => state.allCountries.input);
  const displayableCountries = input ? foundCountries : countries;

  return (
    <div className="py-4">
      <table className="min-w-full divide-y divide-gray-200 table-fixed shadow overflow-hidden border-b border-gray-200  sm:rounded-lg">
        <TableHeader />
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
          <TableBody countries={displayableCountries} />
        </tbody>
      </table>
    </div>
  );
}
