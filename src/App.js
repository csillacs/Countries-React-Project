import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./pages/countryPage";
import Home from "./pages/home";
import useLocalStorage from "./custom-hooks/useLocalStorage";
import { ThemeContext, THEMES } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", THEMES.light);

  const switchTheme = () => {
    const newTheme = theme === THEMES.light ? THEMES.dark : THEMES.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/countries/:name">
            <CountryPage />
          </Route>
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}
