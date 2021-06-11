import React from "react";
import ThemeButton from "../../context/ThemeButton";
import SearchField from "./SearchField";

export default function Nav() {
  return (
    <div className=" py-10">
      <div className="w-1/3 inline-flex	">
        <ThemeButton />
      </div>
      <div className="w-1/3 inline-flex		">
        <SearchField />
      </div>
      <div className="w-1/3 inline-flex		">Favorites</div>
    </div>
  );
}
