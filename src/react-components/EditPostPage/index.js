import React from "react";

import AddPostForm from "../AddPostForm";
import {editPost} from "../../actions/action"
import NavBar from "../NavBar";

import { handleInputChange} from "../../actions/action";

class EditPostPage extends React.Component {
  state = {
    
        address: "4130 George Street, Peterborough, Ontario K9H 2L1",
        description: "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        price: "1570",
        username: "user",
        phone: "416-432-1431",
        email: "user@user.com",
        img: ""

  };

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
