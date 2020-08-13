import React from "react";

import Post from "../Post";
import { uid } from "react-uid";
import AdminSendMsg from "../AdminSendMsg";
import "./styles.css";
import { removeUser } from "../../actions/action";
import { getHomeowners, getFrontliners } from "../../actions/action.js";


class AdminPanel extends React.Component {
  state = {
    // Information about users and home details will get obtained from server
    homeowners: [],
    frontliners: [],
    homes: [],
    type: "admin"
  }

  componentDidMount() {
    // getHomes(this)
    getHomeowners(this)
    getFrontliners(this)
    console.log(this.state.homeowners)
  }
  render() {
    const {app} = this.props;
    return (
      <div>
          <div className="AdminPanel">
          <h1>Users</h1>
          <div className="Users">
            <h2>Homeowners</h2>
            {this.state.homeowners.map((user, value) => (
              <div key={value} className="profile">
                <h3>Name: {user.name}</h3>
                <h3>Age: {user["age"]}</h3>
                <h3>Contact: {user["tel"]}</h3>
                <h3>Email: {user["email"]}</h3>
                <button className='delete' onClick={() => removeUser(user._id, this)}>Delete</button>
              </div>
            ))}
            <br></br>
            <h2>Frontliners</h2>
            {this.state.frontliners.map((user, value) => (
              <div key={value} className="profile">
                <h3>Name: {user.name}</h3>
                <h3>Age: {user["age"]}</h3>
                <h3>Contact: {user["tel"]}</h3>
                <h3>Email: {user["email"]}</h3>
                {/* <h3>Interested homes ids: {user["homes"].address}</h3> */}
                <button className='delete' onClick={() => removeUser(user._id, this)}>Delete</button>
              </div>))
            }
          </div>
          <h1>Post</h1>
          <div className="homePost">
            {app.state.homes.map((home) => (
              <Post
                key={uid(home)}
                homes={this.state.homes}
                home={home}
                owners={this.state.homeowners}
                type={"admin"}
                comp={this}
                app={app}
              />
            ))}
          </div>

          <AdminSendMsg />
        </div>
      </div>
    );
  }
}

export default AdminPanel;
