/**
 * @file Patches together the description and options of a textbox interface, making it visible and invisible according to need.
 */

import React, { Component } from "react";
import "../../main.css";
import TextBoxDescription from "./TextBoxDescription";
import TextBoxOptions from "./TextBoxOptions";

class TextBox extends Component {
  render() {
    return (
      <div style={{ display: this.props.visible ? "block" : "none" }}>
        <TextBoxDescription content={this.props.description}/>
        <TextBoxOptions buttons={this.props.options}/>
      </div>
    );
  }
}

export default TextBox;
