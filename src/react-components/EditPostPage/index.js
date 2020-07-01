import React from "react";

// import "./styles.css";

import AddPostForm from "../AddPostForm";
import {editPost} from "../../actions/action"

class AddPost extends React.Component {
  state = {
    
        address: "4130 George Street, Peterborough, Ontario K9H 2L1",
        description: "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        price: "1570",
        username: "user",
        phone: "416-432-1431",
        email: "user@user.com",
        img: ""

  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("typing");
  }

  render() {
    return (
      <div className="addPost">
        <h1>Edit your home Post:</h1>
        <AddPostForm
          address={this.state.address}
          description={this.state.description}
          price={this.state.price}
          username={this.state.username}
          phone={this.state.phone}
          email={this.state.email}
          img={this.state.img}
          handle={this.handleInputChange}
          submit={editPost}
        />
      </div>
    );
  }
}

export default AddPost;
