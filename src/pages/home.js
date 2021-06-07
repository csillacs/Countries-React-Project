import React, { useEffect, useState } from "react";
import axios from "axios";

import Table from "../components/table";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Table countries={countries} />
    </div>
  );
}
