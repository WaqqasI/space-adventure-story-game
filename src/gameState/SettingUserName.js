import React from "react";
import * as ReactDOM from "react-dom";
import App from "../Interface/App";
import getTexture from "../Util/getTexture";
import * as PIXI from "pixi.js";

class SettingUserName {
    constructor(app, cache) {
        this.cache = cache || {};
        const bgTex = getTexture("planets");
        const bg = new PIXI.Sprite(bgTex);
        bg.scale.set(0.5, 0.5);
        app.stage.addChild(bg);
    }

    setup() {
        ReactDOM.render(<App/>, document.getElementById("root"));
    }

    static loop(delta) {
        return undefined;
    }

    terminate() {
        return this.cache;
    }
}

export default SettingUserName;
