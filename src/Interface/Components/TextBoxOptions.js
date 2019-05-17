import React, { Component } from "react";
import TextBoxButton from "./TextBoxButton";

class TextBoxOptions extends Component {
  constructor(props) {
    super(props);
    this.optionLetters = ["A. ", "B. ", "C. ", "D. "];
  }

  createButtons() {
    const buttons = [];
    if (!this.props.buttons) throw new Error("No buttons specified");
    if (this.props.buttons.length > 4)
      throw new Error("Too many buttons given");
    for (const i in this.props.buttons) {
      const letter = this.optionLetters[i];
      const element = (
        <TextBoxButton content={letter + this.props.buttons[i].value}
                       onClick={() => this.props.buttons[i].onClick(this.props.clickFunctions)} key={letter}/>
      );
      buttons.push(element);
    }
    return buttons;
  }
  render() {
    return (
      <div className={"optionsContainer center"}>{this.createButtons()}</div>
    );
  }
}

export default TextBoxOptions;
