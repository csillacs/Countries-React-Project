import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton() {
  const { switchTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={switchTheme}
        className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-2 border border-gray-400 rounded shadow "
      >
        Change theme
      </button>{" "}
    </div>
  );
}
