import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
// Used the Font-Awesome library for facebook and gmail fonts.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  state = {};

  render() {
    return (
      <footer className="footer">
        <div>
          <span className="element">
            <Link to="/AboutUs">About Us</Link>
          </span>
          <span className="element">
            {" "}
            <Link to="/ContactUs">Contact Us</Link>
          </span>
          <span className="social-media-icons">
            <a href="/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>

            <a href="/">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </span>
        </div>

        <div className="copy-right">
          <hr />
          <h5>&copy; SafeZone</h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
