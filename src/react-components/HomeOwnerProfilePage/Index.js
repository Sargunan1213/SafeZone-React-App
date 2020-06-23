import React from 'react';
// import React, { Component } from 'react';
// import './styles.css';


/*Name, email, age, profile pic
Homeowner, Contact info
View own posts
*/



class HomeOwnerProfilePage extends React.Component {
    state = {
        
    };
  
    render() {
        
        const {owner} = this.props;
        


            return (
                <div className="homeOwnerBasicInfo">

                    <img className="homeOwnerProfilePicture" src="favicon.ico"></img>
                    <button>Change profile picture</button>

                    <p>Name: {owner["name"]}</p>
                    <p>Age: {owner["age"]}</p>
                    <p>Contact: {owner["tel"]}</p>                   
                    <p>Email: {owner["email"]}</p>
                    <button className="homeOwnerViewOwnPost">View your own posts</button>
                     
                </div>

        );
    }
  }
  
  export default HomeOwnerProfilePage;