import React from 'react';

import Post from "../Post";
import { uid } from 'react-uid';

import './styles.css';

class Posts extends React.Component {
    // state = {
    //     homes: [
    //         {
    //           id: 0,
    //           address: "4130 George Street",
    //           city: "Peterborough",
    //           province: "Ontario",
    //           country: "Canada",
    //           zip: "K9H 2L1",
    //           pic: "home1.jpg",
    //           description:
    //             "1 bedroom, all inclusive (hear, hydro, water), renovated, pets ok",
    //           price: "$1570 per month",
    //           homeowner: "user",
    //         },
    //         {
    //           id: 1,
    //           address: "2350 Bridgeport Rd",
    //           city: "Milton",
    //           province: "Ontario",
    //           country: "Canada",
    //           zip: "L9T 2Y1",
    //           pic: "home2.jpg",
    //           description:
    //             "10 min walk to subway, fully furnished, no pets, no smoking",
    //           price: "$1300 per month",
    //           homeowner: "user",
    //         },
    //       ],
    // }
    render() {
        const { homes, owners, edit, app, type} = this.props;

        return (
            <div id="homes">
                <h1>Avaliable Homes</h1>
                <div className="posts">
                    { this.state.homes.map(home => (<Post key={uid(home)} homes={homes} home={home} owners={owners} edit={edit} app={app} type={type}/>)) }
                </div>
                {/* Retrieve map data of addresses. Requires external server call. */}
                <img className="standinMap" src={require("./static/standinMap.png")} alt="map.png" />
            </div>

        );
    }
  }
  
  export default Posts;