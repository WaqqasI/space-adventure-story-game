import React, {Component} from "react";
import stateManager from "../gameState/stateManager";
import Interface from "./Interface";
const InterfaceView = Interface.view
class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <InterfaceView />;
    }
}

//console.log(Interface.control())

export default App;
