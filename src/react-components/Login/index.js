import React from "react";
import "./index.css";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  check = () => {
    if (this.state.username === "user" && this.state.password === "user") {
      alert(" User Sucessfull");
    }
    if (this.state.username === "admin" && this.state.password === "admin") {
      alert(" Admin Sucessfull");
    }
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
      <div>
        <form className="box1">
          <p className="head1"> Welcome BACK! </p>
          <input
            type="text"
            placeholder="    Username"
            className="input1"
            name="username"
            onChange={this.handleInputchange}
          />
          <input
            type="text"
            placeholder="    Password"
            className="input1"
            name="password"
            onChange={this.handleInputchange}
          />
          <button className="submit1" onClick={this.check}>
            {" "}
            Login{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
