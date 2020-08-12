import React from "react";

import Post from "../Post";
import { uid } from "react-uid";
import { withRouter } from "react-router";
import { getHomes } from "../../actions/action.js";
import GMap from "../GMap";

import "./styles.css";

class Posts extends React.Component {
  state = {};

  componentDidMount() {
    getHomes(this.props.app);
  }

  render() {
    const { app } = this.props;

    let title = <h1>Avaliable Homes</h1>;
    const type = !app.state.currentUser ? "" : app.state.currentUser.type;

    if (type === "Homeowner") {
      title = <h1>Your Posts</h1>;
    }

    return (
      <div id="homes">
        {title}
        <div class="map"><GMap houses={app.state.homes} /></div>
        
        <div className="posts">
          {app.state.homes.map((home) => (
            <Post
              key={uid(home)}
              home={home}
              comp={this}
              type={type}
              app={app}
            />
          ))}
        </div>

        {/* Retrieve google map data of addresses. Requires external server call. */}

        
        {/* <GMap
          houses={[
            {
              lat: 43.6532,
              lng: -79.3832,
              description: "absbdfklsadlfbsfklasdnf fnklsad nflaksdn f",
            },
            {
              lat: 43.6832,
              lng: -79.3332,
              description: "absbdfklsadlfbsfklasdnf fnklsad nflaksdn f",
            },
            {
              lat: 43.5932,
              lng: -79.3532,
              description: "absbdfklsadlfbsfklasdnf fnklsad nflaksdn f",
            },
          ]}
        /> */}
      </div>
    );
  }
}

export default withRouter(Posts);
