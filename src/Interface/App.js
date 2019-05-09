import React, {Component} from "react";
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


export default App;
