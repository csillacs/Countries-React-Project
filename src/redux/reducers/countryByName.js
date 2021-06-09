import { GET_COUNTRY_BY_NAME } from "../actions";

const initState = {
  country: {},
};

const countryByName = (state = initState, action) => {
  switch (action.type) {
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default countryByName;
