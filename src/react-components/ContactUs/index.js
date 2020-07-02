import React from 'react';
import "./styles.css";

import NavBar from "../NavBar";

class ContactUs extends React.Component {
  state = {
  };

  render() {

    return (
      <div>
        <NavBar />
        <div className="contact-section">
          <h1>Contact Us</h1>
          <form className="contact-form">
            <input type="text" className="contact-form-text" placeholder="Your name"></input>
            <input type="email" className="contact-form-text" placeholder="Your email"></input>
            <input type="text" className="contact-form-text" placeholder="Your phone"></input>
            <input type="text" className="contact-form-text" placeholder="Subject"></input>
            <textarea type="text" className="contact-form-text" placeholder="Your message"></textarea>
            <input type="submit" className="contact-form-btn" value="Send"></input>
          </form>

          <div className="address">
            <h1>General Support:</h1>
            <h1>user@user.com</h1>
            <hr></hr>
            <h1>Lets Talk:</h1>
            <h1>+ 1 (800) 959-8281</h1>
            <hr></hr>
            <h1>Address</h1>
            <h1>224 Richmond St W, Toronto, ON M5V 1V6</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;