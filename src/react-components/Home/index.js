import React from 'react';

import NavBar from "../NavBar";
import Features from "../Features";
import Header from '../Header';
import { signIn } from "../../actions/nav";
import blankImg from './static/blank.png';

class Home extends React.Component{
    state = {navOptions:['Home', 'Posts', 'Sign Up', 'Sign In'],
    currentUser: "",
    profileImg: blankImg};

    render(){
        return(
            <div>
                <NavBar navOptions={this.state.navOptions} signIn={() => signIn(this)} profileImg={this.state.profileImg}/>
                <Header />
                <Features />
            </div>
        );
    }
}

export default Home;