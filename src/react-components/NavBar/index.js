import React from "react";
import { Link } from "react-router-dom";
import { uid } from "react-uid";

import "./styles.css";


class NavBar extends React.Component {
  state = {};

  render() {
    const { signout, navOptions, profileImg, type } = this.props;

    let button = "";
    let img = "";
    let profile = "/";
    if (type === "frontliner"){
      profile = "FrontlinerProfilePage";
    }
    else if (type === "homeowner"){
      profile = "HomeOwnerProfilePage";
    }
    if (!("Sign In" in navOptions)){
      button = <button onClick={signout}>Sign out</button>
      img = <Link to={profile}>
              <img className="profile-img" src={profileImg} alt="profile.png" />
            </Link>
    }

    return (
      <div id="bar">
        <h1 className="title">TITLE</h1>
        {img}
        <div id="navOptions">
          {Object.keys(navOptions).map((opt) => (
            <Link key={uid(opt)} to={"/" + navOptions[opt]}>
              {opt}
            </Link>
          ))}
          {button}
        </div>
      </div>
    );
  }
}

export default NavBar;
