import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { profileChange } from "../../actions/action";

class HomeOwnerProfilePage extends React.Component {
  state = {
    name: this.props.user.name,
    age: this.props.user.age,
    password: this.props.user.password,
    postId: [],
    tel: this.props.user.tel,
    email: this.props.user.email,

    profilepic: this.props.user.profilepic,
    type: "Homeowner",
  };

  render() {
    const { user, app } = this.props;
    const feed = "/userTwitterFeed";
    return (
      <div>
        <div name="pic" className="homeOwnerBasicInfo">
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
              className="homeOwnerProfile-btn"
            >
              Upload
            </button>
          </form>

          <div className="general_info">
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Contact: {user.tel}</h2>
            <h2>Email: {user.email}</h2>
          </div>

          <Link to="/Posts">
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
