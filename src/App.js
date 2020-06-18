import React from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./react-components/Home";
// import Features from "./react-components/Features";


class App extends React.Component {
  state = {
    // May move later
    homeowners: [{ userName: "user", password: "user" }],
    frontliners: [{ userName: "user2", password: "user2" }],
    admins: [{ userName: "admin", password: "admin" }],
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home state={this.state}  />} />
          </Switch>
        </BrowserRouter>

        {/* FEATURES SECTION */}
        {/* Will add browser routing in next commit */}
        {/* Moved features to home page   <Features />*/}
      </div>
    );
  }
}

export default App;
