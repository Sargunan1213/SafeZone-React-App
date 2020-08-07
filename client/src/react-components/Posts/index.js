import React from 'react';

import Post from "../Post";
import { uid } from 'react-uid';
import NavBar from "../NavBar";

import './styles.css';

class Posts extends React.Component {
    
    state = {
      // Information about users and home details will be obtained from server
        // owners: {
        //     user: {
        //       name: "user",
        //       age: 34,
        //       password: "user",
        //       postId: [0, 1],
        //       tel: "416-432-1431",
        //       email: "user@user.com",
        //     },
        //   },
        //   frontliners: {
        //       user2: {
        //         fronlinerName: "user2",
        //         frontlinerAge: 49,
        //         password: "user2",
        //         frontlinerTel: "514-123-9030",
        //         frontlinerEmail: "user2@user.com",
        //         interest: [],
        //       },
        //     },
        // homess: [
        //     {
        //       id: 0,
        //       address: "4130 George Street, Peterborough, Ontario",
        //       zip: "K9H 2L1",
        //       city: "Peterborough",
        //       province: "Ontario",
        //       country: "Canada",
        //       zip: "K9H 2L1",
        //       pic: "home1.jpg",
        //       description:
        //         "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
        //       price: "$1570 per month",
        //       homeowner: "user",
        //     },
        //     {
        //       id: 1,
        //       address: "2350 Bridgeport Rd, Milton, Ontario",
        //       city: "Milton",
        //       province: "Ontario",
        //       country: "Canada",
        //       zip: "L9T 2Y1",
        //       pic: "home2.jpg",
        //       description:
        //         "10 min walk to subway, fully furnished, no pets, no smoking",
        //       price: "$1300 per month",
        //       homeowner: "user",
        //     },
        //   ],
    }
    
    render() {
        const { type, app } = this.props;
        let title = <h1>Avaliable Homes</h1>

        if (type === "homeowner") {
              title = <h1>Your Posts</h1>
        }

        return (
            <div id="homes">
                {title}
                <div className="posts">
                    { app.homes.map(home => (<Post key={uid(home)}  home={home} comp={this} type={type}/>)) }
                </div>
                {/* Retrieve google map data of addresses. Requires external server call. */}
                <img className="standinMap" src={require("./static/standinMap.png")} alt="map.png" />
            </div>

        );
    }
  }
  
  export default Posts;