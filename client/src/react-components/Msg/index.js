import React from "react";
import "./styles.css";
class Msg extends React.Component {
  render() {
    return <h4 className="msg">{this.props.msg}</h4>;
  }
}
export default Msg;
