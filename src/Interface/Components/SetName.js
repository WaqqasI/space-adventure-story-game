import React, {Component} from "react";
import "../../main.css";

class SetName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="centered">
                <button onClick={this.props.onclick}>Start</button>
            </div>
        );
    }
}

export default SetName;
