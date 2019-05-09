import React, {Component} from "react";
import stateManager from "../gameState/stateManager";
import Interface from "./Interface";

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <Interface />;
    }
}

export default App;
