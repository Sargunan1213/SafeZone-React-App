import React from "react";

import "./styles.css";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  handleInputChange,
  submitDonationForm,
  getFrontliners,
} from "../../actions/action";

class DonationPage extends React.Component {
  state = {
    donationAmount: 0,
    cardNumber: "",
    cardExpiry: "",
    cvc: "",
    donationType: "oneTime",
    donateTo: "General",
    frontliners: [],
  };
  componentDidMount() {
    getFrontliners(this);
  }

  render() {
    const { app, homes } = this.props;
    return (
      <div id="donation">
        <h1>Donate to help support frontline workers to afford a safe home</h1>
        <div className="bar">
          <ProgressBar animated now={this.state.donationAmount / 100} />
        </div>

        <form
          className="donationForm"
          onSubmit={(e) => submitDonationForm(app, e, this)}
        >
          <div className="donationType">
            <h2>Donation Type</h2>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="donationType"
                  value="oneTime"
                  checked={this.state.donationType === "oneTime"}
                  onChange={(e) => handleInputChange(e, this)}
                />
                One Time
              </label>
              <label>
                <input
                  type="radio"
                  name="donationType"
                  value="monthly"
                  checked={this.state.donationType === "monthly"}
                  onChange={(e) => handleInputChange(e, this)}
                />
                Monthy
              </label>
            </div>
            <h3>Donate To:</h3>
            <select
              className="drop"
              name="donateTo"
              onChange={(e) => handleInputChange(e, this)}
            >
              <option value="General">General</option>
              {homes.map((home) => (
                <option value={home._id}>
                  {home.address} - by {home.user}
                </option>
              ))}
              {this.state.frontliners.map((user) => (
                <option value={user._id}>{user.name}</option>
              ))}
            </select>
            <p>
              Donate to a specific user or home posting, or donate to the
              general fund.
            </p>
          </div>
          <div className="payment">
            <h2>Payment</h2>

            <h3>Donation Amount</h3>
            <input
              className="inputBox"
              name="donationAmount"
              value={this.state.donationAmount}
              onChange={(e) => handleInputChange(e, this)}
              label="Amount"
            />

            <h3>Credit Card #</h3>
            <input
              className="inputBox"
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={(e) => handleInputChange(e, this)}
              label="Card Number"
            />

            <h3>Card Expiry</h3>
            <input
              className="inputBox"
              name="cardExpiry"
              value={this.state.cardExpiry}
              onChange={(e) => handleInputChange(e, this)}
              label="Card Expiry"
            />

            <h3>CVC</h3>
            <input
              className="inputBox"
              name="cvc"
              value={this.state.cvc}
              onChange={(e) => handleInputChange(e, this)}
              label="CVC"
            />
          </div>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default DonationPage;
