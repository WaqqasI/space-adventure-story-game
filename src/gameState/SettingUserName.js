/**
 * The first default state when you're choosing a username. Uses React to render the interface
 */

import React from "react";
import * as ReactDOM from "react-dom";
import App from "../Interface/App";
import getTexture from "../Util/Graphics/getTexture";
import * as PIXI from "pixi.js";

class SettingUserName {
  /**
   *
   * @param app
   * @param cache
   */
  constructor(app, cache) {
    this.cache = cache || {};
    const bgTex = getTexture("planets");
    const bg = new PIXI.Sprite(bgTex);
    bg.scale.set(0.5, 0.5);
    app.stage.addChild(bg);
  }

  /**
   * Renders interface
   */
  setup() {
    ReactDOM.render(<App />, document.getElementById("root"));
  }

  loop(delta) {
    return undefined;
  }

  terminate() {
    return this.cache;
  }
}

export default SettingUserName;
