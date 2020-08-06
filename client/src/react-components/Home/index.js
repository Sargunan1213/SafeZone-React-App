import React from "react";

import Features from "../Features";
import Header from "../Header";
import NavBar from "../NavBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
      </div>
    );
  }
}

export default Home;
