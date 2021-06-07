import React from "react";

export default function TableHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
        >
          Flag{" "}
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
        >
          Name
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
        >
          Population
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
        >
          Region
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6"
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
