import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers/index";

const storeInitState = {
  allCountries: { countries: [], input: "" },
  countryByName: { country: {} },
};

const makeStore = () => {
  const middlewares = [thunk];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
      });
    }
  }
  const store = createStore(
    reducers,
    storeInitState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default makeStore;
