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
      zip
    } = this.props;

    return (
      <div className="form">
        <form action="" onSubmit={this.props.submit}>
          <label className="lab" htmlFor="address">
            Enter your address:
          </label>
          <input
            className="inp"
            type="text"
            name="address"
            value={address || ''}
            label="address"
            onChange={this.props.handle}
          />
          <label className="lab" htmlFor="zip">
            Enter your postal code:
          </label>
          <input
            className="inp"
            type="text"
            name="zip"
            value={zip || ''}
            label="zip"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="description">
            Enter a description:
          </label>
          <input
            className="inp"
            type="text"
            name="description"
            value={description || ''}
            label="description"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="price">
            Enter the monthly price you expect:
          </label>
          <input
            className="inp"
            type="text"
            name="price"
            value={price || ''}
            label="price"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="username">
            Enter your username :
          </label>
          <input
            className="inp"
            type="text"
            name="username"
            value={username || ''}
            label="username"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="phone">
            Enter your phone number :
          </label>
          <input
            className="inp"
            type="text"
            name="phone"
            value={phone || ''}
            label="phone"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="email">
            Enter your email address:
          </label>
          <input
            className="inp"
            type="text"
            name="email"
            value={email || ''}
            label="email"
            onChange={this.props.handle}
          />
          <br />
          <label className="lab" htmlFor="img">
            Upload a image of your house:
          </label>
          <input
            className="inp"
            type="file"
            name="img"
            label="img"
            onChange={this.props.handle2}
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
