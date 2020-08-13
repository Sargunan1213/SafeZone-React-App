import React from "react";
import { Link } from "react-router-dom";
import { uid } from "react-uid";
import logo from "./static/safeZoneLogo.png";
import "./styles.css";
import profileImg1 from './static/profile.png';
import {logout} from '../../actions/action'


class NavBar extends React.Component {
    state = {
      type: this.props.type,
      user: this.props.user
    };

   opts = (type, user) => {
    let nav = {
      Home: "",
      Posts: "Posts",
      "Live Cases": "Live",
      "Sign Up": "Signup",
      "Sign In": "Login",
    }

    if (type === "Homeowner") {
      nav = {
        Home: "",
        "Live Cases": "Live",
        "My Posts": "Posts",
        "Add Post": "AddPost",
        [user.name]: "HomeOwnerProfilePage"
      }
    }
    else if (type === "Customer"){
      nav = {
        Home: "",
        Posts: "Posts",
        "Live Cases": "Live",
        [user.name]: "FrontlinerProfilePage"
      }
    }
    else if (type === "Admin"){
      nav = {
        Home: "",
        Posts: "Posts",
        "Live Cases": "Live",
        "Admin Panel": "AdminPanel",
        [user.name]: ""
      }
    }

    let link = "";
    let img = "";
    
    if (!("Sign In" in nav)) {
      link = (
        <Link className="signout" onClick={() => logout(this.props.app)} to={'/'}>
          Sign out
        </Link>
      );
      img = (
        <Link to={((this.props.type === "frontliner") ? "frontlinerProfilePage" : "/HomeOwnerProfilePage")}>
          {/* <img className="profile-img" src={require(user.profilePic)} alt="profile.png" /> */}
          {/* {user.profilePic.includes('http') ? <img className="profile-img" src={user.profilePic} alt="profile.png" /> : <img className="profile-img" src={require(user.profilePic)} alt="profile.png" />} */}
        </Link>
      );
    }

    return [nav, link, img]
  }

  render() {
    const [nav, link, img] = this.opts(this.props.type, this.props.user);

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
