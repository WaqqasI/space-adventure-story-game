import React, {Component} from "react";
import "../../main.css";

class SetNameForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        return (
            <div
                className="centered"
                style={{display: this.props.visible ? "block" : "none"}}
            >
                <h1>Set Your Username </h1>
                <form onSubmit={this.props.onSubmit} className={"usernameform"}>
                    <label>
                        Name:
                        <input
                            type={"text"}
                            name={"username"}
                            onChange={this.props.onChange}
                            className={"usernameText"}
                            maxLength={10}
                            ref={input => (this.nameInput = input)}
                        />
                    </label>
                    <br/>
                    <div style={{textAlign: "center"}}>
                        <input type={"submit"} className={"submitButton"}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SetNameForm;
