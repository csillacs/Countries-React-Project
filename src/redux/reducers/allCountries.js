import { GET_ALL_COUNTRIES } from "../actions";

const initState = {
  countries: [],
};

const allCountries = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default allCountries;
