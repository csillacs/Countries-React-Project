import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryPage from "./pages/countryPage";
import Home from "./pages/home";

export default function App() {
  return (
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
  );
}
