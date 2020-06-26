import React from 'react';

import Post from "../Post";
import { uid } from 'react-uid';

import './styles.css';

class Posts extends React.Component {
    state = {

    };
  
    render() {
        const {homes, owners, edit, app, type} = this.props;

        return (
            <div className="posts">
                <h1>Avaliable Homes</h1>
                { homes.map(home => (<Post key={uid(home)} homes={homes} home={home} owners={owners} edit={edit} app={app} type={type}/>)) }
            </div>
        );
    }
  }
  
  export default Posts;