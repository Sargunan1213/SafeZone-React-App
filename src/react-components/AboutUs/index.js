<<<<<<< HEAD
import React from "react";

class AboutUs extends React.Component {
  state = {};

  render() {
    return (
      <body>
        <div class="container">
          <h2>Purpose of the website</h2>
          <p class="aboutUs-para">
            The overall purpose of this website is to provide a platform for
            COVID-19 frontline workers to have access to quarantined rooms
            during the pandemic. This will help in reducing both the spread of
            the virus and the commuting time. Frontline workers will be able to
            view and request housing posts made by homeowners.
          </p>
=======
import React from 'react';
import "./styles.css";

class AboutUs extends React.Component {
    state = {        
    };
  
    render() {
                
        return (
            <body class="AboutUsBody">
                <div class="container">	 
	                <h2 class="container-h2">Purpose of the website</h2>
	                <p class="aboutUs-para">
	                The overall purpose of this website is to provide a platform for COVID-19 frontline workers to have access to quarantined rooms during the pandemic. This will help in reducing both the spread of the virus and the commuting time. Frontline workers will be able to view and request housing posts made by homeowners.
	                </p>
    
	                <h2 class="container-h2">For the frontline workers</h2>
	                <p class="aboutUs-para">
                    If you are a frontline worker and looking for a quarantined room, you have come to the right place! Our home owners provide highly cleaned and higenic rooms for your staying. The rooms are cleaned regularly. All you need to do is to sign up and contact the homeowner from our available home list.
                    </p>    

                    <h2 class="container-h2">For the home owners</h2>
                    <p class="aboutUs-para">
                    If you have a room to rent and want to show your support to our front line workers during
                    this pandemic, our website provides a great platform for you. Simply sign up and post your room for rent and you can make a difference in someone's life.
                    </p>
>>>>>>> 9e8e9540ace405a648d0d7c4398f4988357ff697

          <h2>For the frontline workers</h2>
          <p class="aboutUs-para">
            If you are a frontline worker and looking for a quarantined room,
            you have come to the right place! Our home owners provide highly
            cleaned and higenic rooms for your staying. The rooms are cleaned
            regularly. All you need to do is to sign up and contact the
            homeowner from our available home list.
          </p>

          <h2>For the home owners</h2>
          <p class="aboutUs-para">
            If you have a room to rent and want to show your support to our
            front line workers during this pandemic, our website provides a
            great platform for you. Simply sign up and post your room for rent
            and you can make a difference in someone's life.
          </p>
        </div>
      </body>
    );
  }
}

export default AboutUs;
