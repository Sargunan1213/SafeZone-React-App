import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import profileImg from "./static/favicon.ico";
import { update } from "../../actions/action";

class HomeOwnerProfilePage extends React.Component {
  state = {
    // Information about particular user will be obtained from server

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
    const feed = "/userTwitterFeed";
    return (
      <div>
        <NavBar type={this.state.type} />
        <div name="pic" className="homeOwnerBasicInfo">
          <img
            className="homeOwnerProfilePicture"
            src={this.state.profilepic}
            alt="profilePic"
          ></img>
          <input
            type="file"
            className="homeOwnerProfile-btn"
            onChange={(e) => update(e, this)}
            accept="image/*"
          />

          <div className="general_info">
            <h2>Name: {this.state.name}</h2>
            <h2>Age: {this.state.age}</h2>
            <h2>Contact: {this.state.tel}</h2>
            <h2>Email: {this.state.email}</h2>
          </div>

          <Link to="/HomeOwnerPosts">
            <button className="homeOwnerViewOwnPost-btn">
              View your own posts
            </button>
          </Link>

          <Link to={feed}>
            {" "}
            <button className="homeOwnerViewOwnPost-btn">
              Check Your twitter Feed
            </button>
          </Link>

          <Link to="/EditProfileHomeowner">
            {" "}
            <button className="homeOwnerViewOwnPost-btn">Edit Profile</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeOwnerProfilePage;
