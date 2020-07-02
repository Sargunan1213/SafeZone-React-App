import React from "react";
import { Link } from "react-router-dom";
import { uid } from "react-uid";
import logo from "./static/safeZoneLogo.png";
import "./styles.css";
import profileImg1 from './static/profile.png';


class NavBar extends React.Component {
    state = {
      type: this.props.type
    };

   opts = (type) => {
    let nav = {
      Home: "",
      Posts: "Posts",
      "Live Cases": "Live",
      "Sign Up": "Signup",
      "Sign In": "Login",
    }

    if (type === "homeowner") {
      nav = {
        Home: "",
        Posts: "Posts",
        "Live Cases": "Live",
        "My Posts": "HomeOwnerPosts",
        "Add Post": "AddPost",
        "user": "HomeOwnerProfilePage"
      }
    }
    else if (type === "frontliner"){
      nav = {
        Home: "",
        Posts: "SelectPosts",
        "Live Cases": "Live",
        "user2": "FrontlinerProfilePage"
      }
    }
    else if (type === "admin"){
      nav = {
        Home: "",
        Posts: "Posts",
        "Live Cases": "Live",
        "Admin Panel": "AdminPanel",
        "admin": ""
      }
    }
    return nav
  }

  render() {
    let link = "";
    let img = "";
    let profile = "/";
    
    const nav = this.opts(this.props.type);

    if (!("Sign In" in nav)) {
      link = (
        <Link className="signout" to={'/'}>
          Sign out
        </Link>
      );
      img = (
        <Link to={profile}>
          <img className="profile-img" src={profileImg1} alt="profile.png" />
        </Link>
      );
    }

    return (
      <div id="bar">
        <img className="logo" src={logo} alt="Logo.png" />

        {link}
        {img}
        <div id="navOptions">
          {Object.keys(nav).map((opt) => (
            <Link key={uid(opt)} to={ "/" + nav[opt] }>
              {opt}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default NavBar;
