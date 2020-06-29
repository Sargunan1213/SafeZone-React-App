import React from 'react';
import "./styles.css";

class ContactUs extends React.Component {
    state = {        
    };
  
    render() {
                
        return (
            <body>
              <div class="contact-section">
                <h1>Contact Us</h1>
                <form class="contact-form">
                  <input type="text" class="contact-form-text" placeholder="Your name"></input>
                  <input type="email" class="contact-form-text" placeholder="Your email"></input>
                  <input type="text" class="contact-form-text" placeholder="Your phone"></input>
                  <input type="text" class="contact-form-text" placeholder="subject"></input>
                  <textarea type = "text" class="contact-form-text" placeholder="Your message"></textarea>
                  <input type="submit" class="contact-form-text" value="Send"></input>
                </form>

                <div class="address">
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
              
                
            </body>
        );
    }
  }
  
  export default ContactUs;