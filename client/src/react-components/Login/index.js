import React from "react";
import "./index.css";

import { signIn } from "../../actions/action";
import logo from "./static/safeZoneLogo.png";
import { withRouter } from "react-router";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.props.history.push("/login");
  }
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
    const { app } = this.props;
    return (
      <div className="back1">
        <form className="box1">
          <p className="head1"> Welcome BACK! </p>
          <div className="icondiv">
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
              onClick={() => signIn(this, app)}
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

export default withRouter(Login);
