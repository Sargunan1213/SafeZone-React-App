import React from "react";

import "./styles.css";

class Question extends React.Component {
  state = {
    checked: false,
  };

  handleInputChange = (event) => {
    this.setState(({ isChecked }) => {
      this.state.checked = !isChecked;
    });
  };
  render() {
    return (
      <div className="question-div">
        <label className="question" htmlFor="question">
          {this.props.question}
        </label>
        <input
          type="checkbox"
          label="question"
          value={this.props.question}
          checked={this.checked}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default Question;
