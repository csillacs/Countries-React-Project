import { combineReducers } from "redux";

import allCountries from "./allCountries";
import countryByName from "./countryByName";

const reducers = combineReducers({
  allCountries,
  countryByName,
});

export default reducers;
