import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { uid } from "react-uid";
import profileImg from "./static/favicon.ico";
import { profileChange, getInterestedHome } from "../../actions/action";
import Post from "../Post";

class FrontlinerProfilePage extends React.Component {
  state = {
    name: "",
    age: 0,
    password: "r",
    homes: [],
    tel: "",
    email: "",

    profilepic: profileImg,
    type: "homeowner",
  };

  componentDidMount() {
    getInterestedHome(this);
  }
  render() {
    const { user, app } = this.props;
    this.state.name = user.name;
    this.state.age = user.age;
    this.state.password = user.password;
    this.state.postId = this.state.homes;
    this.state.tel = user.tel;
    this.state.email = user.email;
    this.state.profilepic = user.profilePic;
    this.state.type = user.type;
    return (
      <div>
        <div>
          <div className="frontlinerBasicInfo">
            <img
              className="frontlinerProfilePicture"
              src={this.state.profilepic}
              alt="frontlinerProfilePicture.jpg"
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
                className="frontlinerProfile-btn"
              >
                Upload
            </button>
            </form>
            <div className="frontline_general_info">
              <h2>Name: {this.state.name}</h2>
              <h2>Age: {this.state.age}</h2>
              <h2>Contact: {this.state.tel}</h2>
              <h2>Email: {this.state.email}</h2>
            </div>
            <Link to="/EditProfileFrontliner">
              <button className="homeOwnerViewOwnPost-btn">Edit Profile</button>
            </Link>

            {this.state.homes.map((home) => (
            <Post
              key={uid(home)}
              home={home}
              comp={this}
              app={app}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default FrontlinerProfilePage;
