import React from "react";

import "./styles.css";
import NavBar from "../NavBar";

class Live extends React.Component {
  render() {
    return (
      <div>
        {/* Retrieve live data of covid-19 cases from external server. Requires server call. */}
        <NavBar />
        <img className="tracker" src={require("./static/standin-tracker.png")} alt="standin-tracker"/>
        {/* <iframe
          src="https://public.domo.com/cards/aKg4r"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe> */}
      </div>
    );
  }
}

export default Live;