import React, { Component } from "react";
import "../../../main.css";
import enabler from "./enabler";
import TextBox from "../../Components/TextBox";
import stateManager from "../../../gameState/stateManager";

class TextBoxMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    this.listener();
  }

  listener() {
    enabler.listenForResolve().then(values => {
      this.setState(values);
      setTimeout(() => {
        console.log("setting state");
        this.setState({
          visible: false
        });
        console.log("set sate and now changing");
        stateManager.changeState(1);
        this.listener();
      }, 10000);
    });
  }

  render() {
    return (
      <div className={"textBox"}>
        <TextBox visible={this.state.visible}/>
      </div>
    );
  }
}

export default TextBoxMenu;
