import React, { Component } from "react";

class TextBoxButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={"optionButton"} onClick={this.props.onClick}>{this.props.content}</button>
    );
  }
}

export default TextBoxButton;