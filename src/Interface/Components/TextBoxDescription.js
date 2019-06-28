/**
 * @file The description component for the text box.
 */
import React, { Component } from "react";

class TextBoxDescription extends Component {
  render() {
    return (
      <div className={"information"}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default TextBoxDescription;
