import React from 'react';
import './styles.css';



class HomeOwnerProfilePage extends React.Component {
    state = {        
    };
  
    render() {        
        const {owner} = this.props;        

            return (
                <div className="homeOwnerBasicInfo">

                    <img className="homeOwnerProfilePicture" src="favicon.ico" alt="profile.jpg"></img>
                    <button className="homeOwnerProfile-btn">Change profile picture</button>
                    
                    <div className="general_info">
                        <h2>Name: {owner["name"]}</h2>
                        <h2>Age: {owner["age"]}</h2>
                        <h2>Contact: {owner["tel"]}</h2>                   
                        <h2>Email: {owner["email"]}</h2>
                    </div>

                    <button className="homeOwnerViewOwnPost-btn">View your own posts</button>

                </div>
        );
    }
  }
  
  export default HomeOwnerProfilePage;