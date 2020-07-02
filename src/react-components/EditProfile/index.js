import React from 'react';
import './styles.css';
import NavBar from "../NavBar";

import { handleInputChange, profileChange } from "../../actions/action";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "user2",
            age: 49,
            tel: "514-123-9030",
            email: "user2@user.com",
            password: "",
            type: this.props.type
        };

        if (props.type === "homeowner") {
            this.state = {
                name: "user",
                age: 34,
                tel: "416-432-1431",
                email: "user@user.com",
                password: "",
                type: this.props.type
            };
        }
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar type={this.state.type} />
                    <div className="editInfo">
                        <h1>Edit Profile</h1>
                        <img className="profilePicture" src="favicon.ico" alt="frontlinerProfilePicture.jpg" ></img>
                        <div className="editData">
                            <form>
                                <label >Name:
                                    <input className="profileInput" name="name" type="text" value={this.state.name} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Age:
                                    <input className="profileInput" name="age" type="text" value={this.state.age} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Contact:
                                    <input className="profileInput" name="tel" type="text" value={this.state.tel} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <br></br>
                                <label>Email:
                                    <input className="profileInput" name="email" type="text" value={this.state.email} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Password:
                                    <input className="profileInput" name="password" type="text" value={this.state.password} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                            </form>
                        </div>
                        <button className="frontlinerProfile-btn" onClick={profileChange}>Submit Change</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditProfile;