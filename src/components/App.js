import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="conatiner">
        <NavBar></NavBar>

        <Switch>
          <Route exact path="/" component={Properties}></Route>
          <Route exact path="/add-property" component={AddProperty}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
