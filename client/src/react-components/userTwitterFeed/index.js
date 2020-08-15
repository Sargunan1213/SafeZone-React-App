import React from "react";
import { uid } from "react-uid";
import Msg from "../Msg";
import "./styles.css";

import safeZone from "./static/safeZoneLogo.png";
import { getTweets } from "../../actions/action";

class UserTwitterFeed extends React.Component {
  state = {
    twitterMsgs: [
    ],
  };

  componentDidMount() {
    getTweets(this);
  }

  render() {
    return (
      <div>
        <div className="userTwitterFeed">
          Tweets
        </div>
        <div id="timeline">
          <div className="tweets">
            <div className="tweet">
              <div className="iconContainer">
                <img className="icon" src={safeZone} alt="logo" />
              </div>

              <div className="content">
                <h3>SAFEZONE @SF</h3>
                <span>Hope you have great day at SF!</span>
                <span>#SF #GreatDay</span>
              </div>
            </div>
            {this.state.twitterMsgs.map((msg, i) => (
              <div key={i} className="tweet">
                <div className="iconContainer">
                  <img className="icon" src={safeZone} alt="logo" />
                </div>

                <div className="content">
                  <h3>SAFEZONE @SF</h3>

                  <Msg key={uid(msg)} msg={msg.twitterMsgs} />

                  <img
                    className="contentPicture"
                    src={msg.image}
                    alt="house"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default UserTwitterFeed;
