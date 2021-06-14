import { useDispatch, useSelector } from "react-redux";
import { like, unlike, getAllFavorites } from "../redux/actions";
import { useEffect } from "react";

export default function useFavorites() {
  const dispatch = useDispatch();
  const addFavorite = (country) => dispatch(like(country));
  const removeFavorite = (country) => dispatch(unlike(country));

  useEffect(() => {
    dispatch(getAllFavorites());
  }, [dispatch]);

  const favoriteCountries = useSelector(
    (state) => state.favorites.favoriteCountries
  );

  return { favoriteCountries, addFavorite, removeFavorite };
}
