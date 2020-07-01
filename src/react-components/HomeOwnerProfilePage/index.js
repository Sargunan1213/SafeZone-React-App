import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class HomeOwnerProfilePage extends React.Component {
  state = {
    owner: {
      name: "user",
      age: 34,
      password: "user",
      postId: [0, 1],
      tel: "416-432-1431",
      email: "user@user.com",
    },
    profilepic:
      "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
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
      <div name="pic" className="homeOwnerBasicInfo">
        <img
          className="homeOwnerProfilePicture"
          src={this.state.profilepic}
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

        <button className="homeOwnerViewOwnPost-btn">
          View your own posts
        </button>

        <button className="homeOwnerViewOwnPost-btn">
          <Link to={feed}>Check Your Twitter Feed</Link>
        </button>
      </div>
    );
  }
}

export default HomeOwnerProfilePage;
