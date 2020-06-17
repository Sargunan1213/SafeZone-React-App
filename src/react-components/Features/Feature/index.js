import React from "react";

import "./style.css";

class Feature extends React.Component {
  state = {};

  render() {
    return (
      <div className="feature-box">
        <img class="feature-img" src={this.props.img_src} alt="image.png" />

        <h3>{this.props.name}</h3>
        <p>{this.props.body}</p>
        <button className="btn">Check Out!</button>
      </div>
    );
  }
}

export default Feature;
