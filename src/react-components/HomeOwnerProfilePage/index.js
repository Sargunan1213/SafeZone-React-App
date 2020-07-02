import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import profileImg from './static/favicon.ico'

class HomeOwnerProfilePage extends React.Component {
  state = {
    // Information about particular user will be obtained from server
    owner: {
      name: "user",
      age: 34,
      password: "user",
      postId: [0, 1],
      tel: "416-432-1431",
      email: "user@user.com",
    },
    profilepic: profileImg,
    type: "homeowner",
  };

  update = (event) => {
    const read = new FileReader();
    read.onload = () => {
      if (read.readyState === 2) {
        this.setState({
          profilepic: read.result,
        });
      }
    };
    read.readAsDataURL(event.target.files[0]);
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
            onChange={this.update}
            accept="image/*"
          />
          {/* <button className="homeOwnerProfile-btn">Change profile picture</button> */}

          <div className="general_info">
            <h2>Name: {this.state.owner["name"]}</h2>
            <h2>Age: {this.state.owner["age"]}</h2>
            <h2>Contact: {this.state.owner["tel"]}</h2>
            <h2>Email: {this.state.owner["email"]}</h2>
          </div>

          <Link to="/HomeOwnerPosts">
            <button className="homeOwnerViewOwnPost-btn">
              View your own posts
            </button>
          </Link>

          <button className="homeOwnerViewOwnPost-btn">
            <Link to={feed}>Check Your Twitter Feed</Link>
          </button>
          <button className="homeOwnerViewOwnPost-btn">
            <Link to="/EditProfileHomeowner">Edit Profile</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HomeOwnerProfilePage;
