import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../redux/actions";

export default function useCountries(url) {
  // const [countries, setCountries] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.allCountries.countries);

  // let country = useSelector(state => state.allCountries.country);

  useEffect(() => {
    // const fetchCountries = async () => {
    //   try {
    //     const response = await fetch(url);
    //     const countries = await response.json();
    //     setIsLoading(false);
    //     setCountries(countries);
    //   } catch (error) {
    //     setIsLoading(false);
    //     setError(error);
    //   }
    // };

    // fetchCountries();
    dispatch(getAllCountries(url));
  }, [dispatch, url]);

  // return [isLoading, error, countries];
  return countries;
}
