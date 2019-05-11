import React, {Component} from "react";
import "../../main.css";
import {stateValues} from "../../Util/setComponentState";
import TextAndOptions from "../Components/TextAndOptions";

class TextBoxOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState(stateValues));
    }

    render() {
        return (
            <div
                className={"testThing"}
            >
                <TextAndOptions visible={this.state.visible}/>
            </div>
        );
    }
}

export default TextBoxOptions;
