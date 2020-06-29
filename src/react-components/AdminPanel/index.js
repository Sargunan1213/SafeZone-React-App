import React from "react";

import Post from "../Post";
import HomeOwnerProfilePage from "../HomeOwnerProfilePage";
import FrontlinerProfilePage from "../FrontlinerProfilePage";
import { uid } from "react-uid";
import AdminSendMsg from "../AdminSendMsg";
import "./styles.css";

class AdminPanel extends React.Component {
  render() {
    const { homes, homeowners, frontliners, app } = this.props;

    return (
      <div className="AdminPanel">
        <h1>Users</h1>
        <div className="Users">
          <h2>Homeowners</h2>
          {Object.keys(homeowners).map((homeowner, index) => (
            <HomeOwnerProfilePage
              key={uid(homeowner)}
              owner={homeowners[homeowner]}
            />
          ))}
          <br></br>
          <h2>Frontliners</h2>
          {Object.keys(frontliners).map((frontliner, index) => (
            <FrontlinerProfilePage
              key={uid(frontliner)}
              frontlineOwner={frontliners[frontliner]}
            />
          ))}
        </div>
        <h1>Post</h1>
        <div className="homePost">
          {homes.map((home) => (
            <Post
              key={uid(home)}
              homes={homes}
              home={home}
              owners={homeowners}
              edit={true}
              app={app}
            />
          ))}
        </div>

        <AdminSendMsg />
      </div>
    );
  }
}

export default AdminPanel;
