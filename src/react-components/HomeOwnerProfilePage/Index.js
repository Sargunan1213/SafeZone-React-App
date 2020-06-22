import React from 'react';
import React, { Component } from 'react';
import './styles.css';


/*Name, email, age, profile pic
Homeowner, Contact info
View own posts
*/



class HomeOwnerProfilePage extends Component {
    state = {
        
    };
  
    render() {
        {
        const {home, owners} = this.props;
        const homeowner = home.homeowner;
        }


            return (
                <div className="homeOwnerBasicInfo">

                    <img className="homeOwnerProfilePicture" src="favicon.jpg"></img>
                    <button>Change profile picture</button>

                    <p>Name: {owners[homeowner]["name"]}</p>
                    <p>Age: {owners[homeowner]["age"]}</p>
                    <p>Contact: {owners[homeowner]["tel"]}</p>                   
                    <p>Email: {owners[homeowner]["email"]}</p>
                    {/* need to add age and name in the app.js */}
                    <button className="homeOwnerViewOwnPost">View your own posts</button>
                     
                </div>

        );
    }
  }
  
  export default HomeOwnerProfilePage;