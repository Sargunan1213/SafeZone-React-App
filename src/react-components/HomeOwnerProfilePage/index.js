import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class HomeOwnerProfilePage extends React.Component {
  state = {
    msgs: ["This is msg1", "This is msg2"],
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
    const { owner } = this.props;
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
          <h2>Name: {owner["name"]}</h2>
          <h2>Age: {owner["age"]}</h2>
          <h2>Contact: {owner["tel"]}</h2>
          <h2>Email: {owner["email"]}</h2>
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
