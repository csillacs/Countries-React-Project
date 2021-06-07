import React from "react";
import TableRow from "./tableRow";

export default function TableBody({ countries }) {
  return (
    <>
      {countries.map((c) => (
        <TableRow
          flag={c.flag}
          key={c.name}
          name={c.name}
          region={c.region}
          languages={c.languages}
          population={c.population}
        />
      ))}
    </>
  );
}
