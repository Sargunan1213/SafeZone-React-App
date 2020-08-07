import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';
import { removeHome, addInterestedHome } from "../../actions/action";

class Post extends React.Component {
    state = {};
  
    render() {
        const {home, comp, type} = this.props;

        let button = "";
        if (type === "admin"){
            button=<button className='del' onClick={() => removeHome(comp, home._id)}>Delete</button>;
        }
        else if(type === "frontliner"){
            button=<button className='select' onClick={() => addInterestedHome(comp, home._id)}>Select</button>;
        }
        else if(type === "homeowner"){
            button=<Link className='select' to={{pathname: "/EditPostPage"}}>Edit</Link>;
        }

        return (
            <div className="post">
                
                <h2>{home.address}</h2>

                <h3>{home.zip}</h3>
                <img className="pic" src={require("./static/" + home.pic)} alt="house.jpg" />
                <div className="desc">
                    <h3>Description:</h3>
                    <p>{home.description}</p>
                    <p><span className="bold">Price: </span>{home.price}</p>
                    <br></br>
                    <p><span className="bold">Poster: </span>{home.user}</p>
                    <p><span className="bold">Contact: </span>{home.tel}</p>
                    <p><span className="bold">Email: </span>{home.email}</p>
                    
                </div>
                {button}
            </div>
        );
    }
  }
  
  export default Post;