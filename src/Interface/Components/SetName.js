import React, {Component} from "react";
import "../../main.css";

class SetName extends Component {
    constructor(props) {
        super(props);
      console.log(this.props.onclick)
    }

    render() {
        return (
            <div className="centered">
                <button onclick={this.props.onclick}>Start</button>
            </div>
        );
    }
}

export default SetName;
