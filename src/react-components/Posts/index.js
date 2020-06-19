import React from 'react';

import Post from "../Post";
import { uid } from 'react-uid';

import './styles.css';

class Posts extends React.Component {
    state = {

    };
  
    render() {
        const {homes, owners} = this.props;

        return (
            <div className="posts">
                <h1>Avaliable Homes</h1>
                { homes.map(home => (<Post key={uid(home)} home={home} owners={owners}/>)) }
            </div>
        );
    }
  }
  
  export default Posts;