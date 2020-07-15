import React, { useState } from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.id);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserId(""));
  };

  return (
    <BrowserRouter>
      <div className="conatiner">
        <NavBar
          onLogin={handleLogin}
          userId={userId}
          onLogout={handleLogout}
        ></NavBar>

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userId={userId} />}
          ></Route>
          <Route exact path="/add-property" component={AddProperty}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
