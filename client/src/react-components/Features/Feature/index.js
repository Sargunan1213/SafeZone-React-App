import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Feature extends React.Component {
  state = {};

  render() {
    return (
      <div className="feature-box">
        <img className="feature-img" src={this.props.img_src} alt="feature.png" />

        <h3>{this.props.name}</h3>
        <p>{this.props.body}</p>
        <button className="btn">
          <Link to={this.props.link}>Check Out!</Link>
        </button>
      </div>
    );
  }
}

export default Feature;
