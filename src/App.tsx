import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./Pages/Details/Details";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Layout from "./Component/HOC/Layout";

//HOC High Order Component
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/details">
            <Layout>
              <Details />
            </Layout>
          </Route>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
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
