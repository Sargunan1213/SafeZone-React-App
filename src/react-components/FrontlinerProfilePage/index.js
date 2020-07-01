import React from 'react';
import './styles.css';


class FrontlinerProfilePage extends React.Component {
    state = {
        frontlineOwner: {
            fronlinerName: "user2",
            frontlinerAge: 49,
            password: "user2",
            frontlinerTel: "514-123-9030",
            frontlinerEmail: "user2@user.com",
            interest: [],
        },
    };

    render() {
        return (
            <div className="frontlinerBasicInfo">

                <img className="frontlinerProfilePicture" src="favicon.ico" alt="frontlinerProfilePicture.jpg" ></img>
                <button className="frontlinerProfile-btn">Change profile picture</button>

                <div className="frontline_general_info">
                    <h2>Name: {this.state.frontlineOwner["fronlinerName"]}</h2>
                    <h2>Age: {this.state.frontlineOwner["frontlinerAge"]}</h2>
                    <h2>Contact: {this.state.frontlineOwner["frontlinerTel"]}</h2>
                    <h2>Email: {this.state.frontlineOwner["frontlinerEmail"]}</h2>
                    <h2>Interested homes ids: {this.state.frontlineOwner["interest"]}</h2>
                </div>

            </div>

        );
    }
}

export default FrontlinerProfilePage;