import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import allCountries from "./reducers/allCountries";
import countryByName from "./reducers/countryByName";

const reducers = combineReducers({
  countries: allCountries,
  country: countryByName,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
