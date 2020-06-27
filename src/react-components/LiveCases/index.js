import React from "react";

import "./styles.css";

class Live extends React.Component {
  render() {
    return (
      <div>
        {/* Retrieve live data of covid-19 cases from external server. Requires server call. */}
        <img className="tracker" src={require("./standin-tracker.png")} />
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
