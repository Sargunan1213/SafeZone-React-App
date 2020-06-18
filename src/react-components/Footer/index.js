import React from "react";

import "./styles.css";
// Used the Font-Awesome library for facebook and gmail fonts.
// https://fontawesome.com/
import "/Users/kartiksangwan/Desktop/summer/team07/node_modules/font-awesome/css/font-awesome.min.css";

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
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google"></i>
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
