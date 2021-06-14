import React from "react";
import useFavorites from "../../custom-hooks/useFavorites";
import UnlikeButton from "../UnlikeButton";
export default function BasketDrawer() {
  const { favoriteCountries } = useFavorites();
  return (
    <div>
      {favoriteCountries.length} Favorite countries
      {favoriteCountries.map((favorite) => (
        <div key={favorite.name}>
          <p>
            <UnlikeButton favorite={favorite} />
            {favorite.name}
          </p>
        </div>
      ))}
    </div>
  );
}
