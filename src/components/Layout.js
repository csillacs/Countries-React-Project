import React from "react";
import { ThemeContext, THEMES } from "../context/ThemeContext";

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {(state) => (
        <div className={`${state.theme === THEMES.dark ? "dark" : ""}`}>
          <div className=" text-gray-900 dark:text-white dark:text-white dark:bg-gray-900">
            <div className="container mx-auto sm:px-8 lg:px-10 dark:bg-gray-900 dark:text-white">
              {children}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
