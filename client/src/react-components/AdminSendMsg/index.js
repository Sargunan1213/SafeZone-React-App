import React from "react";
import "./styles.css";

import {msg}  from "../../actions/action.js";

class AdminSendMsg extends React.Component {
  state = {
    msg: "",
  };
  submitForm = (event) => {
    // Server call to broadcast this data to all the users that are using this platform.
    alert("Messge sent to all users!");
    event.preventDefault();
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = event.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };
  render() {
    const {app} = this.props
    return (
      <div className="msg">
        <h1>Send a message to all the users:</h1>
        <form action="" onSubmit={(e) => msg(e, app)}>
          <textarea
            name="msg"
            id=""
            cols="50"
            rows="10"
            placeholder="Enter msg to send."
            onChange={this.handleInputChange}
          ></textarea>
          <br />

          <div className="chooseImg">
            <label>Image:</label>
            <input name="image" type="file" />
          </div>

          <button type="submit" className="btn">
            Broadcast Message!
          </button>

          <br />
        </form>
      </div>
    );
  }
}

export default AdminSendMsg;
