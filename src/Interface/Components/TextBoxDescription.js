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
