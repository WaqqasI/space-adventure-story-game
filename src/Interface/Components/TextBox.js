import React, { Component } from "react";
import "../../main.css";
import TextBoxDescription from "./TextBoxDescription";
import TextBoxOptions from "./TextBoxOptions";

class TextBox extends Component {
  render() {
    return (
      <div style={{ display: this.props.visible ? "block" : "none" }}>
        <TextBoxDescription content={this.props.description}/>
        <TextBoxOptions
          buttons={this.props.options}
          clickFunctions={this.props.clickFunctions}
        />
      </div>
    );
  }
}

export default TextBox;
