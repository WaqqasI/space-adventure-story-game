import React from "react";
import * as ReactDOM from "react-dom";
import App from "../Interface/App";

class SettingUserName {
    constructor(app, cache) {
        this.cache = cache || {};
    }

    setup() {
        ReactDOM.render(<App/>, document.getElementById('root'))
    }

    static loop(delta) {
        return undefined;
    }

    terminate() {
        return this.cache
    }
}

export default SettingUserName