import React from "react";

import "./styles.css";

class SendEmail extends React.Component {
  state = {
    review: "",
  };
  submitForm = (event) => {
    // Server call to enter this form data about feedback into the server.
    alert("Email sent! ");
    event.preventDefault();
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = event.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("typing");
  };
  render() {
    return (
      <div className="email">
        <h1>Send our team an email: </h1>
        <form action="" onSubmit={this.submitForm}>
          <textarea
            name="review"
            id=""
            cols="50"
            rows="10"
            placeholder="Enter review here."
            onChange={this.handleInputChange}
          ></textarea>
          <br />
          <a href="mailto:temp@gmail.com">
            <button type="submit" className="btn">
              Send Email
            </button>
          </a>

          <br />
        </form>
      </div>
    );
  }
}

export default SendEmail;
