import React from "react";

import "./styles.css";

class TenantFeedback extends React.Component {
  handleInputChange = (event) => {
    const target = event.target;
    const value = event.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (event) => {
    alert("Tenant review was submitted!");
    event.preventDefault();
  };
  render() {
    return (
      <div className="review">
        <h1>Enter review for a tenant:</h1>
        <form action="" className="form" onSubmit={this.submitForm}>
          <label className="lab" htmlFor="name">
            Enter tenant name:
          </label>
          <input
            className="inp"
            type="text"
            name="name"
            value={this.name}
            label="name"
            onChange={this.handleInputChange}
          />
          <label className="lab" htmlFor="address">
            Enter property Address:
          </label>
          <input
            className="inp"
            type="text"
            name="address"
            value={this.address}
            label="address"
            onChange={this.handleInputChange}
          />
          <br />
          <textarea
            name="review"
            id=""
            cols="50"
            rows="10"
            placeholder="Enter review here."
            onChange={this.handleInputChange}
          ></textarea>
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TenantFeedback;
