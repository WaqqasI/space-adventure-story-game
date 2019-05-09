import React, {Component} from "react";
import "../../main.css";

class SetName extends Component {
    constructor(props) {
        super(props);
      console.log(this.props.onclick);
      this.display = this.props.visible ? 'block' : 'none';
    }

    render() {
        return (
            <div className="centered">
                <button onClick={this.props.onclick} style={{display: this.display}}>Start</button>
            </div>
        );
    }
}

export default SetName;
