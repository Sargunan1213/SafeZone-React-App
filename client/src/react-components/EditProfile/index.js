import React from 'react';
import './styles.css';

import { handleInputChange, profileInfoChange } from "../../actions/action";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            tel: this.props.user.tel,
            email: this.props.user.email,
            password: "",
            type: this.props.type
        };
    }

    render() {
        return (
            <div>
                <div>
                    <div className="editInfo">
                        <h1>Edit Profile</h1>
                        <img className="profilePicture" src="favicon.ico" alt="frontlinerProfilePicture.jpg" ></img>
                        <div className="editData">
                            <form>
                                <label >Name:
                                    <input className="profileInput" name="name" type="text" value={this.state.name} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Age:
                                    <input className="profileInput" name="age" type="number" value={this.state.age} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Contact:
                                    <input className="profileInput" name="tel" type="text" value={this.state.tel} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <br></br>
                                <label>Email:
                                    <input className="profileInput" name="email" type="email" value={this.state.email} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                                <label>Password:
                                    <input className="profileInput" name="password" type="password" value={this.state.password} onChange={(e) => handleInputChange(e, this)} />
                                </label>
                            </form>
                        </div>
                        <button className="frontlinerProfile-btn" onClick={(e) => profileInfoChange(e, this, this.props.user._id, this.props.app)}>Submit Change</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default EditProfile;