import React from "react";
import TableRow from "./TableRow";

export default function TableBody({ countries }) {
  return (
    <>
      {countries.map((c) => (
        <TableRow key={c.name} country={c} />
      ))}
    </>
  );
}
