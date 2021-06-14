const FAVORITES = "favorites";

export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const getCountriesThunk = (countries) => {
  return {
    type: GET_ALL_COUNTRIES,
    payload: countries,
  };
};

export const getAllCountries = (url) => {
  return async (dispatch, getState) => {
    const response = await fetch(url);
    const countriesData = await response.json();
    dispatch(getCountriesThunk(countriesData));
  };
};

export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const getCountryByName = (url) => {
  return async (dispatch, getState) => {
    const response = await fetch(url);
    const countryData = await response.json();
    dispatch(CountryByNameThunk(countryData));
  };
};

export const CountryByNameThunk = (country) => {
  return {
    type: "GET_COUNTRY_BY_NAME",
    payload: country,
  };
};

export const SEARCH = "SEARCH";
export const search = (input) => {
  return {
    type: SEARCH,
    payload: input,
  };
};

export const LIKE = "LIKE";
export const likeThunk = (likedCountry) => {
  return {
    type: LIKE,
    payload: likedCountry,
  };
};
export const like = (likedCountry) => {
  return (dispatch, getState) => {
    const state = getState();
    const favoriteCountries = [
      ...state.favorites.favoriteCountries,
      likedCountry,
    ];
    const uniqueCountries = [...new Set(favoriteCountries)];

    try {
      window.localStorage.setItem(FAVORITES, JSON.stringify(uniqueCountries));
    } catch (error) {
      console.log(error);
    }

    const foo = window.localStorage.getItem(FAVORITES);
    console.log("foo", JSON.parse(foo));

    dispatch(likeThunk(likedCountry));
  };
};

export const UNLIKE = "UNLIKE";
export const unlikeThunk = (unlikedCountry) => {
  return {
    type: UNLIKE,
    payload: unlikedCountry,
  };
};
export const unlike = (unlikedCountry) => {
  return (dispatch, getState) => {
    const state = getState();
    const saveableCountries = state.favorites.favoriteCountries.filter(
      (country) => country.name !== unlikedCountry.name
    );

    try {
      window.localStorage.setItem(FAVORITES, JSON.stringify(saveableCountries));
    } catch (error) {
      console.log(error);
    }
    dispatch(unlikeThunk(unlikedCountry));
  };
};

export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const getAllFavoritesThunk = (countries) => {
  return {
    type: GET_ALL_FAVORITES,
    payload: countries,
  };
};

export const getAllFavorites = () => {
  return (dispatch) => {
    let favoritesData;
    try {
      const item = window.localStorage.getItem(FAVORITES);
      favoritesData = item ? JSON.parse(item) : [];
    } catch (error) {
      console.log(error);
      favoritesData = [];
    }
    dispatch(getAllFavoritesThunk(favoritesData));
  };
};
