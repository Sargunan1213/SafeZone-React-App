import React from "react";
import "./index.css";

class Signup extends React.Component {
  state = {
    username: "",
    usertype: "",
    email: "",
  };

  handleInputchange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
    });
    console.log(this.username);
  };

  render() {
    return (
      <div>
        <img src={require("./background.jpg")} className="img" />
        <form className="box">
          <p className="head"> SIGN UP </p>
          <input
            type="text"
            placeholder="    Username"
            className="input"
            name="username"
            onChange={this.handleInputchange}
          />
          {/* <input type="text" placeholder="    User Type" className="input" name="usertype" onChange={this.handleInputchange}/> */}
          <select name="usertype" className="input">
            <option value="Homeowner">Homeowner</option>
            <option value="Admin">Admin</option>
            <option selected value="Customer">
              Customer
            </option>
          </select>
          <input
            type="text"
            placeholder="    Email"
            className="input"
            name="email"
            onChange={this.handleInputchange}
          />
          <button className="submit"> SIGN UP </button>
        </form>
      </div>
    );
  }
}

export default Signup;
