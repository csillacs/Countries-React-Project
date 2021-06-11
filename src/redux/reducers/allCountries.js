import { GET_ALL_COUNTRIES, SEARCH } from "../actions";

const initState = {
  countries: [],
  foundCountries: [],
  input: "",
};

const allCountries = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case SEARCH:
      const input = action.payload;

      const searchResults = state.countries.filter(
        (country) =>
          country.name.slice(0, input.length).toLowerCase() ===
          input.toLowerCase()
      );

      return { ...state, foundCountries: searchResults, input: input };

    default:
      return state;
  }
};

export default allCountries;
