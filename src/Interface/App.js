import React, {Component} from "react";
import stateManager from "../gameState/stateManager";
import Interface from "./Interface";

class App extends Component {
    constructor(props) {
        super(props);
    }

    startPlaying() {
        stateManager.changeState(1);
    }

    render() {
        return <Interface onclick={this.startPlaying.bind(this)}/>;
    }
}

export default App;
