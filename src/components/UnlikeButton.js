import React from "react";
import useFavorites from "../custom-hooks/useFavorites";

export default function UnlikeButton({ favorite }) {
  const { removeFavorite } = useFavorites();

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-gray-400 rounded shadow inline-block"
        type="button"
        onClick={() => removeFavorite(favorite)}
      >
        Unlike{" "}
      </button>
    </div>
  );
}
