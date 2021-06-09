import React from "react";

import Table from "../components/Table";
import useCountries from "../custom-hooks/useCountries";

export default function Home() {
  const [isLoading, error, countries] = useCountries();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    if (countries === null) {
      return <div>{error && "Something went wrong :("}</div>;
    }
  }

  if (countries) {
    return (
      <div className="container mx-auto">
        <Table countries={countries} />
      </div>
    );
  }
}
