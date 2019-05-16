import React, { Component } from "react";
import "../../main.css";
import TextBoxDescription from "./TextBoxDescription";
import TextBoxOptions from "./TextBoxOptions";

class TextBox extends Component {
  render() {
    return (
      <div style={{ display: this.props.visible ? "block" : "none" }}>
        <TextBoxDescription/>
        <TextBoxOptions/>
      </div>
    );
  }
}

export default TextBox;