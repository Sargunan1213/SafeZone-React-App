import React from "react";

import './styles.css';

class DonationPage extends React.Component {
    state = {
        donationAmount: 0,
        cardNumber: "",
        cardExpiry: "",
        cvc: "",
        donationType: "oneTime",
        donateTo: "General"
    }

    submitForm = (event) => {
        // Server call to send this donation data from form into the database.
        alert("Thanks you for your donation of $" + this.state.donationAmount);
        event.preventDefault();
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="donation">
                <h1>Donate to help support frontline workers to afford a safe home</h1>

                <form className="donationForm" onSubmit={this.submitForm}>
                    <div className="donationType">
                        <h2>Donation Type</h2>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio"
                                    name="donationType"
                                    value="oneTime"
                                    checked={this.state.donationType === "oneTime"}
                                    onChange={this.handleInputChange}
                                />
                    One Time
                </label>
                            <label>
                                <input
                                    type="radio"
                                    name="donationType"
                                    value="monthly"
                                    checked={this.state.donationType === "monthly"}
                                    onChange={this.handleInputChange}
                                />
                    Monthy
                </label>
                        </div>
                        <h3>Donate To:</h3>
                        <select className="drop" name="donateTo" onChange={this.handleInputChange}>
                            <option value="General">General</option>
                            <option value="user2">user2</option>
                        </select>

                    </div>
                    <div className="payment">
                        <h2>Payment</h2>

                        <h3>Donation Amount</h3>
                        <input
                            className="inputBox"
                            name="donationAmount"
                            value={this.state.donationAmount}
                            onChange={this.handleInputChange}
                            label="Amount"
                        />

                        <h3>Credit Card #</h3>
                        <input
                            className="inputBox"
                            name="cardNumber"
                            value={this.state.cardNumber}
                            onChange={this.handleInputChange}
                            label="Card Number"
                        />

                        <h3>cardExpiry</h3>
                        <input
                            className="inputBox"
                            name="cardExpiry"
                            value={this.state.cardExpiry}
                            onChange={this.handleInputChange}
                            label="Card Expiry"
                        />

                        <h3>CVC</h3>
                        <input
                            className="inputBox"
                            name="cvc"
                            value={this.state.cvc}
                            onChange={this.handleInputChange}
                            label="CVC"
                        />
                    </div>

                    <button type="submit" className="submitBtn">Submit</button>

                </form>
            </div>
        );
    }
}

export default DonationPage;
