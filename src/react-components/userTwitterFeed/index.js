import React from "react";
import { uid } from "react-uid";
import Msg from "../Msg";
import "./styles.css";

class UserTwitterFeed extends React.Component {
  render() {
    const msgs = this.props.msgs;

    return (
      <div className="feed">
        <h1 className="heading">This is your twitter feed.</h1>
        {msgs.map((msg) => (
          <Msg key={uid(msg)} msg={msg} />
        ))}
      </div>
    );
  }
}
export default UserTwitterFeed;
