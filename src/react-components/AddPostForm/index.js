import React from "react";

import "./styles.css";

class AddPostForm extends React.Component {
  render() {
    const {
      address,
      description,
      price,
      username,
      phone,
      email,
      img,
      handleInput,
    } = this.props;

    console.log(handleInput);

    return (
      <div className="form">
        <form action="">
          <label className="lab" htmlFor="address">
            Enter your address with postal code:
          </label>
          <input
            className="inp"
            type="text"
            name="address"
            value={address}
            label="address"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="description">
            Enter a description:
          </label>
          <input
            className="inp"
            type="text"
            name="description"
            value={description}
            label="description"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="price">
            Enter the monthly price you expect:
          </label>
          <input
            className="inp"
            type="text"
            name="address"
            value={price}
            label="price"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="username">
            Enter your username :
          </label>
          <input
            className="inp"
            type="text"
            name="username"
            value={username}
            label="username"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="phone">
            Enter your phone number :
          </label>
          <input
            className="inp"
            type="text"
            name="phone"
            value={phone}
            label="phone"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="email">
            Enter your email address:
          </label>
          <input
            className="inp"
            type="text"
            name="email"
            value={email}
            label="email"
            onChange={handleInput}
          />
          <br />
          <label className="lab" htmlFor="img">
            Upload a image of your house:
          </label>
          <input
            className="inp"
            type="file"
            name="img"
            value={img}
            label="img"
            onChange={handleInput}
          />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddPostForm;
