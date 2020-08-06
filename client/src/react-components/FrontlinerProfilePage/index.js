import React from "react";
import "./styles.css";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import profileImg from "./static/favicon.ico";
// import { update } from "../../actions/action";

class FrontlinerProfilePage extends React.Component {
  state = {
    name: "user",
    age: 34,
    password: "user",
    postId: [0, 1],
    tel: "416-432-1431",
    email: "user@user.com",

    profilepic: profileImg,
    type: "homeowner",
  };

  render() {
    const { user } = this.props;
    this.state.name = user.name;
    this.state.age = user.age;
    this.state.password = user.password;
    this.state.postId = user.postId;
    this.state.tel = user.tel;
    this.state.email = user.email;
    this.state.profilepic = user.profilepic;
    this.state.type = user.type;
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
              // onChange={(e) => update(e, this)}
              accept="image/*"
            />
            <div className="frontline_general_info">
              <h2>Name: {this.state.name}</h2>
              <h2>Age: {this.state.age}</h2>
              <h2>Contact: {this.state.tel}</h2>
              <h2>Email: {this.state.email}</h2>
            </div>
            <Link to="/EditProfileFrontliner">
              <button className="homeOwnerViewOwnPost-btn">Edit Profile</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontlinerProfilePage;
