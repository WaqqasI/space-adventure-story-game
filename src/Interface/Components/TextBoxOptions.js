/**
 * @file Component that uses the button component and generates a set of up to 4 buttons for the textbox.
 */

import React, { Component } from "react";
import TextBoxButton from "./TextBoxButton";

class TextBoxOptions extends Component {
  constructor(props) {
    super(props);
    this.optionLetters = ["A. ", "B. ", "C. ", "D. "];
  }

  /**
   * Creates a set of up to four buttons according to the props given by the parent component. 
   * @implements TextBoxButton
   * @example
   *    
   *    this.createButtons()
   */
  createButtons() {
    const buttons = [];
    if (!this.props.buttons) throw new Error("No buttons specified");
    if (this.props.buttons.length > 4)
      throw new Error("Too many buttons given");
    for (const i in this.props.buttons) {
      const letter = this.optionLetters[i];
      const element = (
        <TextBoxButton
          content={letter + this.props.buttons[i].value}
          onClick={() => this.props.buttons[i].onClick()}
          key={letter}
        />
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
