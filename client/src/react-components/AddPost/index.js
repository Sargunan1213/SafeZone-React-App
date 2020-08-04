import React from "react";

import "./styles.css";

import AddPostForm from "../AddPostForm";

import { handleInputChange } from "../../actions/action";
import { submitForm } from "../../actions/action";
import NavBar from "../NavBar";

// will link it up with signed in user later
class AddPost extends React.Component {
  state = {
    address: "",
    description: "",
    price: "",
    username: "",
    phone: "",
    email: "",
    img: "",
    type: "homeowner",
  };

  render() {
    return (
      <div className="addPost">
        <NavBar type={this.state.type} />
        <h1>Add a new home Post:</h1>
        <AddPostForm
          address={this.state.address}
          description={this.state.description}
          price={this.state.price}
          username={this.state.username}
          phone={this.state.phone}
          email={this.state.email}
          img={this.state.img}
          handle={(e) => handleInputChange(e, this)}
          submit={submitForm}
        />
      </div>
    );
  }
}

export default AddPost;
