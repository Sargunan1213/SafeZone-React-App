import React from "react";
import "./index.css";

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
    console.log(this.username);
  };

  render() {
    return (
      <div>
        {/* <img src={require("./background.jpg")} className="img" /> */}
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
          <input
            type="password"
            placeholder="   Password"
            className="input"
            name="password"
            onChange={this.handleInputchange}
          ></input>
          <input
            type="name"
            placeholder="    Name"
            className="input"
            name="name"
            onChange={this.handleInputchange}
          ></input>

          <input
            type="number"
            placeholder="    Age"
            className="input"
            name="age"
            onChange={this.handleInputchange}
          ></input>

          <input
            type="tel"
            placeholder="    Telephone Number"
            className="input"
            name="contactNumber"
            onChange={this.handleInputchange}
          ></input>

          <button className="submit"> SIGN UP </button>
        </form>
      </div>
    );
  }
}

export default Signup;
