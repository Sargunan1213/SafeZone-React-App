import React from 'react';

import './styles.css';

class Post extends React.Component {
    state = {};

    removeHome = (homes, home) => {
        delete homes[homes.indexOf(home)];
    
        this.props.app.setState({
            homes: homes
        })
    }
  
    render() {
        const {homes, home, owners, edit, app} = this.props;
        const homeowner = home.homeowner;

        let button = <div></div>;
        if (edit){
            button=<button className='del' onClick={() => this.removeHome(homes, home)}>Delete</button>;
        }

        return (
            <div className="post">
                {button}
                <h2>{home.address}, {home.city}, {home.province} </h2>
                <h3>{home.zip}</h3>

                <img className="pic" src={require("./static/" + home.pic)} alt="house.jpg" />
                <div className="desc">
                    <h3>Description:</h3>
                    <p>{home.description}</p>
                    <p><span className="bold">Price: </span>{home.price}</p>
                    <br></br>
                    <p><span className="bold">Poster: </span>{home.homeowner}</p>
                    <p><span className="bold">Contact: </span>{owners[homeowner]["tel"]}</p>
                    <p><span className="bold">Email: </span>{owners[homeowner]["email"]}</p>
                    
                </div>
                
            </div>
        );
    }
  }
  
  export default Post;