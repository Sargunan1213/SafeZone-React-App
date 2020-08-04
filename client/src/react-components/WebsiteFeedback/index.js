import React from "react";

import "./styles.css";
import Question from "../Question";

class WebsiteFeedback extends React.Component {
  submitForm = (event) => {
    // Server call to enter this form data of each question into the database.
    alert("Thanks you for your review! ");
    event.preventDefault();
  };
  render() {
    return (
      <div className="review">
        <h1>Please review your experience with the website:</h1>
        <form action="" className="form" onSubmit={this.submitForm}>
          <Question question="Did you like the user inteface?" />
          <Question question="Was the login and log-out functionality good?" />
          <Question question="Did you enjoy the images?" />
          <Question question="Were you able to find a home suitable?" />
          <Question question="Were there any difficulties you faced?" />
          <Question question="Would you reccomend our website to your friend?" />
          <Question question="We hope you found the platform useful!" />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default WebsiteFeedback;
