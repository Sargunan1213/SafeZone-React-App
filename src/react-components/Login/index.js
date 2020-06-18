import React from 'react';
import './index.css'

class Login extends React.Component{

    state={
        username:"",
        password:""
    };

    handleInputchange = event =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    };

    render(){
        return(
            <div>
                <form className = "box">
                    <p className = "head"> Welcome BACK! </p>
                    <input type="text" placeholder="    Username" className="input" name="username" onChange={this.handleInputchange}/>
                    <input type="text" placeholder="    Password" className="input" name="password" onChange={this.handleInputchange}/>                   
 		            <button className="submit"> Login </button>
                </form>
            </div>

        );
    }
}

export default Login;