import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { uid } from "react-uid";
import { profileChange, getInterestedHome } from "../../actions/action";
import Post from "../Post";

class FrontlinerProfilePage extends React.Component {
  state = {
    name: this.props.user.name,
    age: this.props.user.age,
    password: this.props.user.password,
    tel: this.props.user.tel,
    email: this.props.user.email,
    profilepic: this.props.user.profilePic,
    type: "homeowner",
    homes: []
  };

  componentDidMount() {
    getInterestedHome(this);
  }
  render() {
    const { user, app } = this.props;
    return (
      <div>
        <div>
          <div className="frontlinerBasicInfo">
              <img
                className="homeOwnerProfilePicture"
                src={user.profilePic}
                alt="profilePic"
              ></img> 
            <form
              onSubmit={(e) => {
                e.preventDefault();
                profileChange(e.target, this, app);
              }}
            >
              <div className="chooseImg">
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
              <h2>Name: {user.name}</h2>
              <h2>Age: {user.age}</h2>
              <h2>Contact: {user.tel}</h2>
              <h2>Email: {user.email}</h2>
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
