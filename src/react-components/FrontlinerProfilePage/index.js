import React from 'react';
// import React, { Component } from 'react';
// import './styles.css';


/*
Name, email, age, profile pic
Contact info
*/



class FrontlinerProfilePage extends React.Component {
    state = {
        
    };
  
    render() {
        
        const {frontlineOwner} = this.props;     

            return (
                <div className="frontlinerBasicInfo">

                    <img className="frontlinerProfilePicture" src="favicon.ico" alt="frontlinerProfilePicture.jpg" ></img>
                    <button>Change profile picture</button>

                    <p>Name: {frontlineOwner["fronlinerName"]}</p>
                    <p>Age: {frontlineOwner["frontlinerAge"]}</p>
                    <p>Contact: {frontlineOwner["frontlinerTel"]}</p>                   
                    <p>Email: {frontlineOwner["frontlinerEmail"]}</p> 
                    <p>Interested homes ids: {frontlineOwner["interest"]}</p>                   
                     
                </div>

        );
    }
  }
  
  export default FrontlinerProfilePage;