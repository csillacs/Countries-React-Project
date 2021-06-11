export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const getAllCountries = (url) => {
  return async (dispatch, getState) => {
    const response = await fetch(url);
    const countriesData = await response.json();
    dispatch(getCountriesThunk(countriesData));
  };
};

export const getCountriesThunk = (countries) => {
  return {
    type: "GET_ALL_COUNTRIES",
    payload: countries,
  };
};

export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const getCountryByName = (url) => {
  return async (dispatch, getState) => {
    console.log(getState());
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
