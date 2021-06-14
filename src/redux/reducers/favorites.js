import { LIKE, UNLIKE, GET_ALL_FAVORITES } from "../actions";

const initState = {
  favoriteCountries: [],
};

const favorites = (state = initState, action) => {
  switch (action.type) {
    case LIKE:
      const favoriteCountries = [...state.favoriteCountries, action.payload];
      const uniqueCountries = [...new Set(favoriteCountries)];

      return {
        ...state,
        favoriteCountries: uniqueCountries,
      };
    case UNLIKE:
      return {
        ...state,
        favoriteCountries: state.favoriteCountries.filter(
          (country) => country.name !== action.payload.name
        ),
      };
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favoriteCountries: action.payload,
      };
    default:
      return state;
  }
};

export default favorites;
