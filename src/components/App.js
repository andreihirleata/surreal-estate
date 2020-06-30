import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Properties}></Route>
        <Route exact path="/add-property" component={AddProperty}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
