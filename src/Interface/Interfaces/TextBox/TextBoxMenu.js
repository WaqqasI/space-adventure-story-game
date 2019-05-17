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
    });
  }

  terminate() {
    this.setState({ visible: false, options: undefined });
    stateManager.changeState(1);
    this.listener();
  }

  render() {
    return (
      <div className={"textBox"}>
        <TextBox visible={this.state.visible} options={this.state.options || []}
                 clickFunctions={{ terminate: this.terminate.bind(this) }} description={this.state.description}/>
      </div>
    );
  }
}

export default TextBoxMenu;
