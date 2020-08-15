import React from "react";

import "./style.css";
import Feature from "./Feature";
import feature1 from "./static/feature1.png";
import feature2 from "./static/feature2.jpg";
import feature3 from "./static/feature3.png";
import feature4 from "./static/feature4.jpg";
import feature5 from "./static/feature5.png";

class Features extends React.Component {
  state = {};

  render() {
    return (
      <div className="features">
        <Feature
          img_src={feature1}
          name="Available Rooms"
          body="Check out avaliable rooms to rent near you!"
          link="/Posts"
        />
        <Feature
          img_src={feature2}
          name="Make A Donation"
          body="Help frontline workers afford rooms by donating!"
          link="/Donation"
        />
        <Feature
          img_src={feature3}
          name="Live Cases"
          body="Check out number of patients effected by covid!"
          link="/Live"
        />
        <Feature
          img_src={feature4}
          name="Twitter Feed"
          body="View News Of patients and success stories of many recovered!"
          link="/userTwitterFeed"
        />
        <Feature
          img_src={feature5}
          name="Give Feedback"
          body="Give your thoughts on improving our website"
          link="/Feedback"
        />
      </div>
    );
  }
}

export default Features;
