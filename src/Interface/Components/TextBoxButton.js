/**
 * @file Component that makes a options button in a text box. Is given an onclick and content
 */

import React, { Component } from "react";

class TextBoxButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={"optionButton"} onClick={this.props.onClick}>
        {this.props.content}
      </button>
    );
  }
}

export default TextBoxButton;
