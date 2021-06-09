export const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";

export const getAllCountries = (payload) => {
  return {
    type: GET_ALL_COUNTRIES,
    payload,
  };
};

export const getCountryByName = (payload) => {
  return {
    type: GET_COUNTRY_BY_NAME,
    payload,
  };
};
