import React from "react";

import "./styles.css";

import AddPostForm from "../AddPostForm";

// will link it up with signed in user later
class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      address: "",
      description: "",
      price: "",
      username: "",
      phone: "",
      email: "",
      img: "",
    };
  }
  // state =
  //  CANT PASS A ARROW FUNCTION AS IT IS DEFINED TO THIS SCOPE
  // WILL CLEAR IT LATER
  // handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = event.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value,
  //   });
  //   console.log("typing");
  // };

  handleInputChange(event) {
    const target = event.target;
    const value = event.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("typing");
  }

  submitForm(event) {
    // Server call to enter this form data into the database.
    alert("Details of the house were submitted: ");
    event.preventDefault();
  }
  render() {
    return (
      <div className="addPost">
        <h1>Add a new home Post:</h1>
        <AddPostForm
          address={this.address}
          description={this.description}
          price={this.price}
          username={this.username}
          phone={this.phone}
          email={this.email}
          img={this.img}
          handle={this.handleInputChange}
          submit={this.submitForm}
        />
      </div>
    );
  }
}

export default AddPost;
