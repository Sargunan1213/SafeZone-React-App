import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import profileImg from "./static/favicon.ico";
import { profileChange } from "../../actions/action";

class HomeOwnerProfilePage extends React.Component {
  state = {
    name: "",
    age: 0,
    password: "",
    postId: [],
    tel: "",
    email: "",

    profilepic: profileImg,
    type: "homeowner",
  };

  render() {
    const { user, app } = this.props;
    this.state.name = user.name;
    this.state.age = user.age;
    this.state.password = user.password;
    this.state.postId = user.postId;
    this.state.tel = user.tel;
    this.state.email = user.email;
    this.state.profilepic = user.profilePic;
    this.state.type = user.type;
    const feed = "/userTwitterFeed";
    return (
      <div>
        <div name="pic" className="homeOwnerBasicInfo">
          <img
            className="homeOwnerProfilePicture"
            src={this.state.profilepic}
            alt="profilePic"
          ></img>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              profileChange(e.target, this, app);
            }}
          >
            <div>
              <label>Image:</label>
              <input name="image" type="file" />
            </div>
            <button
              variant="contained"
              color="primary"
              type="submit"
              className="homeOwnerProfile-btn"
            >
              Upload
            </button>
          </form>
          {/* <input
            type="file"
            className="homeOwnerProfile-btn"
            onChange={(e) => profileChange(e.target, this)}
            accept="image/*"
          /> */}

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
