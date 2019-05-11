import React, {Component} from "react";
import Interface from "./Interfaces/SettingAUsername";
import TextBoxOptions from "./Interfaces/TextBoxOptions";

const InterfaceView = Interface.view;
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <InterfaceView/>
                <TextBoxOptions/>
            </div>
        );
    }
}

export default App;
