import React from 'react';
import './styles.css';


class FrontlinerProfilePage extends React.Component {
    state = {        
    };
  
    render() {
        
        const {frontlineOwner} = this.props;     

            return (
                <div className="frontlinerBasicInfo">

                    <img className="frontlinerProfilePicture" src="favicon.ico" alt="frontlinerProfilePicture.jpg" ></img>
                    <button className="frontlinerProfile-btn">Change profile picture</button>

                    <div className="frontline_general_info">
                        <h2>Name: {frontlineOwner["fronlinerName"]}</h2>
                        <h2>Age: {frontlineOwner["frontlinerAge"]}</h2>
                        <h2>Contact: {frontlineOwner["frontlinerTel"]}</h2>                   
                        <h2>Email: {frontlineOwner["frontlinerEmail"]}</h2> 
                        <h2>Interested homes ids: {frontlineOwner["interest"]}</h2>
                    </div>                                       
                     
                </div>

        );
    }
  }
  
  export default FrontlinerProfilePage;