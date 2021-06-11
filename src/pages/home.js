import React from "react";
import Nav from "../components/nav/Nav";

import Table from "../components/table/Table";
import useCountries from "../custom-hooks/useCountries";
import Layout from "../components/Layout";

export default function Home() {
  // const [isLoading, error, countries] = useCountries();

  const countries = useCountries("https://restcountries.eu/rest/v2/all");

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (!isLoading) {
  //   if (countries === null) {
  //     return <div>{error && "Something went wrong :("}</div>;
  //   }
  // }

  if (countries) {
    return (
      <Layout>
        <Nav />
        <Table countries={countries} />
      </Layout>
    );
  }
}
