import React from "react";

import "./styles.css";

import AddPostForm from "../AddPostForm";

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
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("typing");
  };

  submitForm = (event) => {
    // Server call to enter this form data into the database.
    alert("Details of the house were submitted: ");
    event.preventDefault();
  };
  render() {
    return (
      <div className="addPost">
        <h1>Add a new home Post:</h1>
        <AddPostForm
          address={this.state.address}
          description={this.state.description}
          price={this.state.price}
          username={this.state.username}
          phone={this.state.phone}
          email={this.state.email}
          img={this.state.img}
          handle={this.handleInputChange}
          submit={this.submitForm}
        />
      </div>
    );
  }
}

export default AddPost;
