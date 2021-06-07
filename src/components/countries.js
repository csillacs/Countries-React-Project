import React from "react";
import Country from "./country";

export default function Countries({ countries }) {
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
}
