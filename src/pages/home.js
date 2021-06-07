import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import Countries from "../components/countries";

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
    <div>
      <Countries countries={countries} />
    </div>
  );
}
