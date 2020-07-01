import React from "react";
import { uid } from "react-uid";
import Msg from "../Msg";
import "./styles.css";

import safeZone from "./static/safeZoneLogo.png";
import tweet_img from "./static/tweet_img.png";

class UserTwitterFeed extends React.Component {
  render() {
    const msgs = this.props.msgs;

    return (
      <div id="timeline">
        <div class="timelineHeader">
          <ul>
            <li>Tweets</li>
          </ul>
        </div>
        <div class="tweet">
          <div class="tweetIconContainer">
            <img class="tweetIcon" src={safeZone} alt="logo" />
          </div>

          <div class="tweetContent">
            <h3>
              <span>SAFEZONE</span>
              <span class="grey"> @SF</span>
            </h3>

            <span>Hope you have great day at SF!</span>
            <span class="hashtag">#SF #GreatDay</span>
          </div>
        </div>
        {msgs.map((msg) => (
          <div class="tweet">
            <div class="tweetIconContainer">
              <img class="tweetIcon" src={safeZone} alt="logo" />
            </div>

            <div class="tweetContent">
              <h3>
                <span>SAFEZONE</span>
                <span class="grey"> @SF</span>
              </h3>

              <Msg key={uid(msg)} msg={msg} />

              <img class="tweetContentPicture" src={tweet_img} alt="robarts" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default UserTwitterFeed;
