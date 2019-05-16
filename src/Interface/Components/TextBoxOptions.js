import React, { Component } from "react";
import TextBoxButton from "./TextBoxButton";

class TextBoxOptions extends Component {
  render() {
    return (
      <div className={"optionsContainer center"}>
        <TextBoxButton content={"hello my friend"}/>
        <TextBoxButton content={"hello my friend"}/>
        <TextBoxButton content={"hello my friend"}/>
      </div>
    );
  }
}

export default TextBoxOptions;