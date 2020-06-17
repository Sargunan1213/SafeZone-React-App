import React from 'react';

//import './styles.css';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.state.currentUser}</h1>
            </div>
        );
    }
}

export default Home;