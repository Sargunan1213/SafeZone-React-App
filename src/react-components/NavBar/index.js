import React from "react";
import { Link } from "react-router-dom";
import {uid} from "react-uid";


import './styles.css';

class NavBar extends React.Component {
    state = {};
  
    render() {
        const {navOptions, signIn, profileImg} = this.props;

        return (
            <div id='bar'>
                <h1 className='title'>TITLE</h1>
                <img className="profile-img" src={profileImg} alt="profile.png" />
                <div id='navOptions'>
                    {navOptions.map (opt => (
                        <Link key={uid(opt)} to={'/'}>{opt}</Link>
                    ))}
                </div>
                <button onClick={signIn}> temp signin </button>
            </div>
        );
    }
  }
  
  export default NavBar;