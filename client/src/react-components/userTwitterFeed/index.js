import React from "react";
import { uid } from "react-uid";
import Msg from "../Msg";
import "./styles.css";

import safeZone from "./static/safeZoneLogo.png";
import tweet_img from "./static/tweet_img.png";

import { getTweets } from "../../actions/action";

class UserTwitterFeed extends React.Component {
  state = {
    // Messages will be obtained from server
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

                  <Msg key={uid(msg)} msg={msg} />

                  <img
                    className="contentPicture"
                    src={tweet_img}
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
