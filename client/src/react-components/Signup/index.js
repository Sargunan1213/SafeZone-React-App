import React from "react";
import "./index.css";
import { signUpUser } from "../../actions/action";
import { withRouter } from "react-router";

class Signup extends React.Component {
  state = {
    username: "",
    usertype: "",
    email: "",
    contactNumber: "",
    password: "",
    name: "",
    age: "",
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
    const {app} = this.props
    return (
      <div>
        <div className="back">
          <form className="box">
            <p className="head"> SIGN UP </p>
            <div className="box2">
              <div className="item1">
                <input
                  type="text"
                  placeholder="Username"
                  className="input"
                  name="username"
                  onChange={this.handleInputchange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  onChange={this.handleInputchange}
                ></input>
                <select
                  name="usertype"
                  className="input"
                  onChange={this.handleInputchange}
                >
                  <option value=""></option>
                  <option value="Homeowner">Homeowner</option>
                  <option value="Customer">Customer</option>
                </select>
                <input
                  type="tel"
                  placeholder="    Telephone Number"
                  className="input"
                  name="contactNumber"
                  onChange={this.handleInputchange}
                ></input>
              </div>
              <div className="item2">
                <input
                  type="name"
                  placeholder="Name"
                  className="input"
                  name="name"
                  onChange={this.handleInputchange}
                ></input>
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  name="email"
                  onChange={this.handleInputchange}
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="input"
                  name="age"
                  onChange={this.handleInputchange}
                ></input>
              </div>
            </div>
            <button
              type="button"
              className="submitSignup"
              onClick={() => signUpUser(this, app)}
            >
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
