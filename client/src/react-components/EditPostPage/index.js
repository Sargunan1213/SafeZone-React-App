import React from "react";

import AddPostForm from "../AddPostForm";
import { editPost } from "../../actions/action"

import { handleInputChange, handleInputChangeHome } from "../../actions/action";

class EditPostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { app } = this.props;
    return (
      <div className="addPost">
        <h1>Edit your home Post:</h1>

        <AddPostForm
          address={app.state.home.address}
          description={app.state.home.description}
          zip={app.state.home.zip}
          username={app.state.home.user}
          phone={app.state.home.tel}
          price={app.state.home.price}
          lat={app.state.home.lat}
          lng={app.state.home.lng}
          email={app.state.home.email}
          img={app.state.home.img}
          handle={(e) => handleInputChangeHome(e, app)}
          submit={(e) => editPost(e, app, app.state.home._id)}
        />
      </div>
    );
  }
}

export default EditPostPage;
