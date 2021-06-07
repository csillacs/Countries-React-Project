import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

export default function Table({ countries }) {
  return (
    <div className="py-2 sm:px-8 lg:px-10">
      <table className="min-w-full divide-y divide-gray-200 table-fixed shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <TableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          <TableBody countries={countries} />
        </tbody>
      </table>
    </div>
  );
}
