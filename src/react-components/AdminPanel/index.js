import React from "react";

import Post from "../Post";
import HomeOwnerProfilePage from "../HomeOwnerProfilePage";
import FrontlinerProfilePage from "../FrontlinerProfilePage";
import { uid } from "react-uid";
import AdminSendMsg from "../AdminSendMsg";
import "./styles.css";
import NavBar from "../NavBar";


class AdminPanel extends React.Component {
  state = {
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
    return (
      <div>
        <NavBar type={this.state.type}/>
        <div className="AdminPanel">
        <h1>Users</h1>
        <div className="Users">
          <h2>Homeowners</h2>
          {Object.keys(this.state.homeowners).map((homeowner, index) => (
            <HomeOwnerProfilePage
              key={uid(homeowner)}
              owner={this.state.homeowners[homeowner]}
            />
          ))}
          <br></br>
          <h2>Frontliners</h2>
          {Object.keys(this.state.frontliners).map((frontliner, index) => (
            <FrontlinerProfilePage
              key={uid(frontliner)}
              frontlineOwner={this.state.frontliners[frontliner]}
            />
          ))}
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
