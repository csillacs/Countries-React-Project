import { combineReducers } from "redux";

import allCountries from "./allCountries";
import countryByName from "./countryByName";
import favorites from "./favorites";

const reducers = combineReducers({
  allCountries,
  countryByName,
  favorites,
});

export default reducers;
