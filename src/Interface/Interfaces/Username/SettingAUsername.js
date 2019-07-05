/**
 * @file ReactJS interface component for the interface where you set your username.
 */

import React, { Component } from "react";
import SetNameForm from "../../Components/SetNameForm.js";
import stateManager from "../../../gameState/stateManager";

class SettingAUsername extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: true, value: "" };
  }

  /**
   * The event listener when you press submit and give in your name, which makes the interface invisible and changes to the playing game state.
   * @param {Event} e   A HTML5 form event 
   */
  submitName(e) {
    e.preventDefault();
    this.setState({ visible: false });
    stateManager.changeState(1, {
      SettingUserName: { username: this.state.value }
    });
  }

  /**
   * When something is typed into the text input, this fires.
   * @param {Event} e   HTML form even for text inputs 
   */
  nameValueChanged(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <SetNameForm
        visible={this.state.visible}
        onSubmit={this.submitName.bind(this)}
        onChange={this.nameValueChanged.bind(this)}
      />
    );
  }
}

export default { view: SettingAUsername };
