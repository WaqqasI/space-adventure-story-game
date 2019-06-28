/**
 * @file Main interface ReactJS file that sews all the interfaces together
 */

import React, { Component } from "react";
import Interface from "./Interfaces/Username/SettingAUsername";
import TextBoxMenu from "./Interfaces/TextBox/TextBoxMenu";

const InterfaceView = Interface.view;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InterfaceView />
        <TextBoxMenu />
      </div>
    );
  }
}

export default App;
