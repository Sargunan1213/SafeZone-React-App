import React from 'react';
import './index.css'

class Signup extends React.Component{

    render(){
        return(
            <div>
                <img src={require("./box.jpg")} class="img"/>
                <form className = "box">
                    <p className = "head"> SIGN UP </p>
                    <input type="text" placeholder="    Username" className="input"/>
                    <input type="text" placeholder="    User Type" className="input"/>
                    <input type="text" placeholder="    Email" className="input"/>                    
 		            <button className="submit"> SIGN UP </button>
                </form>
            </div>

        );
    }
}

export default Signup;