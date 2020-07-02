import React from "react";
import "./index.css";

import { signIn } from "../../actions/action";
// import { FaUserSecret } from "react-icons/fa";
import logo from "./static/safeZoneLogo.png";
import NavBar from "../NavBar";

class Login extends React.Component {
  state = {
    type: "",
    username: "",
    password: "",
  };

  handleInputchange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="back1">
        <NavBar type={this.state.type}/>
        <form className="box1">
          <p className="head1"> Welcome BACK! </p>
          <div className="icondiv">
            {/* <FaUserSecret className="icon1" size="90%" color="midnightblue" /> */}
            <img className="signin-img" src={logo} alt="./static/logo.png" />
          </div>
          <div className="details">
            <input
              type="text"
              placeholder="Username"
              className="input1"
              name="username"
              onChange={this.handleInputchange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input1"
              name="password"
              onChange={this.handleInputchange}
            />
            <button
              type="button"
              className="submit1"
              onClick={() => signIn(
                this,
                this.state.username,
                this.state.password
              )}
            >
              {" "}
              Login{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
