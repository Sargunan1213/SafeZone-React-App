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
    img: "you",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = event.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("typing");
  };

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
        />
      </div>
    );
  }
}

export default AddPost;
