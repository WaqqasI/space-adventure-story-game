/**
 * @file A menu that is a text box. Mainly used for the story.
 */

import React, { Component } from "react";
import "../../../main.css";
import enabler from "./enabler";
import TextBox from "../../Components/TextBox";

class TextBoxMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    this.listener();
  }
  /**
   * A recursive function that listens for a function call in another file
   */
  listener() {
    enabler.listenForResolve(this.listener.bind(this)).then(values => {
      this.setState(values);
    });
  }

  render() {
    return (
      <div className={"textBox"}>
        <TextBox
          visible={this.state.visible}
          options={this.state.options || []}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default TextBoxMenu;
