import React from "react";

import Features from "../Features";
import Header from "../Header";
import AddPost from "../AddPost";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Features />
        {/* TESTING */}
        <AddPost />
      </div>
    );
  }
}

export default Home;
