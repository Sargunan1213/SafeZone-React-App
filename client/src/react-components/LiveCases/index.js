import React from "react";

import "./styles.css";

class Live extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="https://public.domo.com/cards/aKg4r"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
          title="live"
        ></iframe>
      </div>
    );
  }
}

export default Live;
