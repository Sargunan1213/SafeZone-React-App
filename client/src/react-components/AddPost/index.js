import React from "react";

import "./styles.css";

import AddPostForm from "../AddPostForm";

import {
  handleInputChange,
  handleInputChangeHome,
  handleInputChangeHomePic,
} from "../../actions/action";
import { submitForm } from "../../actions/action";

class AddPost extends React.Component {
  state = {
    _id: "",
    address: "",
    description: "",
    price: "",
    username: "",
    phone: "",
    email: "",
    img: "",
    zip: "",
    lat: "",
    lng: "",
  };
  componentDidMount() {
    this.props.app.setState({ home: this.state });
  }
  render() {
    const { app } = this.props;

    return (
      <div className="addPost">
        <h1>Add a new home Post:</h1>
        <AddPostForm
          address={app.state.home.address}
          description={app.state.home.description}
          price={app.state.home.price}
          username={app.state.home.username}
          phone={app.state.home.phone}
          email={app.state.home.email}
          img={app.state.home.img}
          zip={app.state.home.zip}
          lat={app.state.home.lat}
          lng={app.state.home.lng}
          handle={(e) => handleInputChangeHome(e, app)}
          submit={(e) => submitForm(e, this, app)}
          handle2={(e) => handleInputChangeHomePic(e, app)}
        />
      </div>
    );
  }
}

export default AddPost;
