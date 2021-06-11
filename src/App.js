import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CountryPage from "./pages/countryPage";
import Home from "./pages/home";

import { ThemeContext, THEMES } from "./context/ThemeContext";

export default function App() {
  const [context, setContext] = useState({
    theme: THEMES.light,
    setTheme: () => {
      setContext((current) => ({
        ...current,
        theme: current.theme === THEMES.light ? THEMES.dark : THEMES.light,
      }));
    },
  });

  return (
    <ThemeContext.Provider value={context}>
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
