import React from 'react';

import Post from "../Post";
import HomeOwnerProfilePage from "../HomeOwnerProfilePage";
import FrontlinerProfilePage from "../FrontlinerProfilePage";
import { uid } from 'react-uid';

import './styles.css';

class AdminPanel extends React.Component {
  
    render() {

        const {homes, homeowners, frontliners, app} = this.props;
        
        return (
            <div className="AdminPanel">
                <h1>Users</h1>
                <h2>Homeowners</h2>
                { Object.keys(homeowners).map((homeowner, index)=> (<HomeOwnerProfilePage key={uid(homeowner)} owner={homeowners[homeowner]}/>))}
                <h2>Frontliners</h2>
                { Object.keys(frontliners).map((frontliner, index)=> (<FrontlinerProfilePage key={uid(frontliner)} frontlineOwner={frontliners[frontliner]}/>))}
                <h1>Post</h1>
                { homes.map(home => (<Post key={uid(home)} homes={homes} home={home} owners={homeowners} edit={true} app={app}/>)) }
            </div>
        );
    }
  }
  
  export default AdminPanel;