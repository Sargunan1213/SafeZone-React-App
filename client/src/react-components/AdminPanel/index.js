import React from "react";

import Post from "../Post";
import { uid } from "react-uid";
import AdminSendMsg from "../AdminSendMsg";
import "./styles.css";
import { removeUser } from "../../actions/action";


class AdminPanel extends React.Component {
  state = {
    // Information about users and home details will get obtained from server
    homeowners: {
      user: {
        name: "user",
        age: 34,
        password: "user",
        postId: [0, 1],
        tel: "416-432-1431",
        email: "user@user.com",
      },
    },
    frontliners: {
      user2: {
        fronlinerName: "user2",
        frontlinerAge: 49,
        password: "user2",
        frontlinerTel: "514-123-9030",
        frontlinerEmail: "user2@user.com",
        interest: [],
      },
    },
    homes: [
      {
        id: 0,
        address: "4130 George Street",
        city: "Peterborough",
        province: "Ontario",
        country: "Canada",
        zip: "K9H 2L1",
        pic: "home1.jpg",
        description:
          "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        price: "$1570 per month",
        homeowner: "user",
      },
      {
        id: 1,
        address: "2350 Bridgeport Rd",
        city: "Milton",
        province: "Ontario",
        country: "Canada",
        zip: "L9T 2Y1",
        pic: "home2.jpg",
        description:
          "10 min walk to subway, fully furnished, no pets, no smoking",
        price: "$1300 per month",
        homeowner: "user",
      },
    ],
    type: "admin"
  }


  render() {
    const owner = this.state.homeowners.user;
    const frontlineOwner = this.state.frontliners.user2;

    return (
      <div>
          <div className="AdminPanel">
          <h1>Users</h1>
          <div className="Users">
            <h2>Homeowners</h2>
            {Object.entries(this.state.homeowners).map((user, value) => (
              <div key={value} className="profile">
                <h3>Name: {owner["name"]}</h3>
                <h3>Age: {owner["age"]}</h3>
                <h3>Contact: {owner["tel"]}</h3>
                <h3>Email: {owner["email"]}</h3>
                <button className='delete' onClick={() => removeUser(this, this.state.homeowners, "user")}>Delete</button>
              </div>
            ))}
            <br></br>
            <h2>Frontliners</h2>
            {Object.entries(this.state.frontliners).map((user, value) => (
              <div key={value} className="profile">
                <h3>Name: {frontlineOwner["fronlinerName"]}</h3>
                <h3>Age: {frontlineOwner["frontlinerAge"]}</h3>
                <h3>Contact: {frontlineOwner["frontlinerTel"]}</h3>
                <h3>Email: {frontlineOwner["frontlinerEmail"]}</h3>
                <h3>Interested homes ids: {frontlineOwner["interest"]}</h3>
                <button className='delete' onClick={() => removeUser(this, this.state.frontliners, "user2")}>Delete</button>
              </div>))
            }
          </div>
          <h1>Post</h1>
          <div className="homePost">
            {this.state.homes.map((home) => (
              <Post
                key={uid(home)}
                homes={this.state.homes}
                home={home}
                owners={this.state.homeowners}
                type={"admin"}
                comp={this}
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
