import React from "react";
import "./styles.css";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import profileImg from "./static/favicon.ico";
import { update } from "../../actions/action";

class FrontlinerProfilePage extends React.Component {
  state = {
    // Information about particular user will be obtained from server

    fronlinerName: "user2",
    frontlinerAge: 49,
    password: "user2",
    frontlinerTel: "514-123-9030",
    frontlinerEmail: "user2@user.com",
    interest: [],
    profilepic: profileImg,

    type: "frontliner",
  };

  render() {
    return (
      <div>
        <div>
          <NavBar type={this.state.type} />
          <div className="frontlinerBasicInfo">
            <img
              className="frontlinerProfilePicture"
              src={this.state.profilepic}
              alt="frontlinerProfilePicture.jpg"
            ></img>
            <input
              type="file"
              className="homeOwnerProfile-btn"
              onChange={(e) => update(e, this)}
              accept="image/*"
            />
            <div className="frontline_general_info">
              <h2>Name: {this.state.fronlinerName}</h2>
              <h2>Age: {this.state.frontlinerAge}</h2>
              <h2>Contact: {this.state.frontlinerTel}</h2>
              <h2>Email: {this.state.frontlinerEmail}</h2>
              <h2>s Interested homes ids: {this.state.interest}</h2>
            </div>
            <Link to="/EditProfileFrontliner">
              <button className="homeOwnerViewOwnPost-btn">Edit Profile</button>
            </Link>
            E
          </div>
        </div>
      </div>
    );
  }
}

export default FrontlinerProfilePage;
