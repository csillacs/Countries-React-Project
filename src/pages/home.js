import React from "react";

import Table from "../components/Table";
import useCountries from "../custom-hooks/useCountries";

export default function Home() {
  const [error, countries] = useCountries();

  // const [countries, setCountries] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://restcountries.eu/rest/v2/all")
  //     .then((response) => {
  //       setCountries(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="container mx-auto">
      <Table countries={countries} />
    </div>
  );
}
