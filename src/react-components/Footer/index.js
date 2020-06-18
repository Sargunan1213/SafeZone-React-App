import React from "react";

import "./styles.css";
// Used the Font-Awesome library for facebook and gmail fonts.
// https://fontawesome.com/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div>
          <span className="element">About Us</span>
          <span className="element">Contact Us</span>
          <span className="social-media-icons">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            <a href="#">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </span>
        </div>

        <div className="copy-right">
          <hr />
          <h5>&copy; TITLE HERE</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
