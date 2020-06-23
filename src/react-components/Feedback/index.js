import React from "react";

import "./styles.css";
import TenantFeedback from "../TenantFeedback";
import WebsiteFeedback from "../WebsiteFeedback";
import SendEmail from "../SendEmail";

class Feeback extends React.Component {
  render() {
    return (
      <div className="parent">
        <TenantFeedback />
        <WebsiteFeedback />
        <SendEmail />
      </div>
    );
  }
}

export default Feeback;
