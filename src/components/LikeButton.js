import React from "react";
import useFavorites from "../custom-hooks/useFavorites";

export default function LikeButton({ country }) {
  const { addFavorite } = useFavorites();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-gray-400 rounded shadow "
      type="button"
      onClick={() => addFavorite(country)}
    >
      Like
    </button>
  );
}
