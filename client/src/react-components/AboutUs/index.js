import React from "react";
import "./styles.css";

import NavBar from "../NavBar";

class AboutUs extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <div className="AboutUsBody">
          <div className="container">
            <h2 className="container-h2">Purpose of the website</h2>
            <p className="aboutUs-para">
              The overall purpose of this website is to provide a platform for
              COVID-19 frontline workers to have access to quarantined rooms
              during the pandemic. This will help in reducing both the spread of
              the virus and the commuting time. Frontline workers will be able to
              view and request housing posts made by homeowners.
          </p>

            <h2 className="container-h2">For the frontline workers</h2>
            <p className="aboutUs-para">
              If you are a frontline worker and looking for a quarantined room,
              you have come to the right place! Our home owners provide highly
              cleaned and higenic rooms for your staying. The rooms are cleaned
              regularly. All you need to do is to sign up and contact the
              homeowner from our available home list.
          </p>

            <h2 className="container-h2">For the home owners</h2>
            <p className="aboutUs-para">
              If you have a room to rent and want to show your support to our
              front line workers during this pandemic, our website provides a
              great platform for you. Simply sign up and post your room for rent
              and you can make a difference in someone's life.
          </p>

          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
