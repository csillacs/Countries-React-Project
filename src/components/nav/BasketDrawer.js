import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BasketDrawer() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => ({ favorites: state.basket }));
  return (
    <div>
      {favorites.length} in shopping basket
      {favorites.map((favorite) => (
        <div>
          <label> {favorite.name}</label>
          <button
            type="button"
            onClick={() => dispatch(removeFavorite(favorite))}
          >
            Remove{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
