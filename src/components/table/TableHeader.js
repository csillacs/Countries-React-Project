import React from "react";

export default function TableHeader({ requestSort, getClassNamesFor }) {
  return (
    <thead className="bg-gray-50 dark:bg-gray-900">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6 dark:text-white"
        >
          Flag{" "}
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white w-1/6"
        >
          {" "}
          <button
            type="button"
            onClick={() => requestSort("name")}
            className={getClassNamesFor("name")}
          >
            Name
          </button>
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white w-1/6"
        >
          <button
            type="button"
            onClick={() => requestSort("population")}
            className={getClassNamesFor("population")}
          >
            Population
          </button>
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white w-1/6"
        >
          <button
            type="button"
            onClick={() => requestSort("region")}
            className={getClassNamesFor("region")}
          >
            Region
          </button>
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-white w-1/6"
        >
          Languages
        </th>

        <th scope="col" className=" px-6 py-3 w-1/6">
          <span className="sr-only">Show details</span>
        </th>
      </tr>
    </thead>
  );
}
