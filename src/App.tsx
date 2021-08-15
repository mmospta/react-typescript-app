import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
