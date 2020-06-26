import React from 'react';

import './styles.css';
import { removeHome, addInterestedHome } from "../../actions/nav";

class Post extends React.Component {
    state = {};
  
    render() {
        const {homes, home, owners, edit, app, type} = this.props;
        const homeowner = home.homeowner;

        let button = "";
        if (edit){
            button=<button className='del' onClick={() => removeHome(app, homes, home)}>Delete</button>;
        }
        else if(type === "frontliner"){
            button=<button className='select' onClick={() => addInterestedHome(app, home["id"])}>Select</button>;
        }

        return (
            <div className="post">
                
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
                {button}
            </div>
        );
    }
  }
  
  export default Post;