import React from "react";

import AddPostForm from "../AddPostForm";
import { editPost } from "../../actions/action"
import NavBar from "../NavBar";

import { handleInputChange } from "../../actions/action";

class EditPostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "user2",
      age: 49,
      tel: "514-123-9030",
      email: "user2@user.com",
      password: "",
      type: this.props.type
    };

    if (props.id === 0) {
      this.state = {
        address: "4130 George Street, Peterborough, Ontario K9H 2L1",
        description: "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        price: "1570",
        username: "user",
        phone: "416-432-1431",
        email: "user@user.com",
        img: ""
      };
    }
    else {
      this.state = {
        address: "2350 Bridgeport Rd, Milton, Ontario L9T 2Y1",
        description: "10 min walk to subway, fully furnished, no pets, no smoking",
        price: "1300",
        username: "user",
        phone: "416-432-1431",
        email: "user@user.com",
        img: ""
      };
    }
  }

  render() {
    return (
      <div className="addPost">
        <NavBar type="homeowner" />
        <h1>Edit your home Post:</h1>
        <AddPostForm
          address={this.state.address}
          description={this.state.description}
          price={this.state.price}
          username={this.state.username}
          phone={this.state.phone}
          email={this.state.email}
          img={this.state.img}
          handle={(e) => handleInputChange(e, this)}
          submit={editPost}
        />
      </div>
    );
  }
}

export default EditPostPage;
