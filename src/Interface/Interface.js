import React, {Component} from "react";
import SetName from "./Components/SetName.js";
import stateManager from "../gameState/stateManager";


class Interface extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: true, value: '',};

    }

    submitName(e) {
        e.preventDefault();
        this.setState({visible: false})
        stateManager.changeState(1, {username: this.state.value});
    }

    nameValueChanged(e) {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <SetName visible={this.state.visible} onSubmit={this.submitName.bind(this)}
                     onChange={this.nameValueChanged.bind(this)}/>
        );
    }
}

export default {view: Interface};
