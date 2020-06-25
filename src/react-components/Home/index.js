import React from "react";

import Features from "../Features";
import Header from "../Header";
import Feedback from "../Feedback";
import WebsiteFeedback from "../WebsiteFeedback";
import SendEmail from "../SendEmail";

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
