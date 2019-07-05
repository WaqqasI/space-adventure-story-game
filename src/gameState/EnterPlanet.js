/**
 * @file The state when the text box appears on whether you want to enter the ghost planet
 */

import getTexture from "../Util/Graphics/getTexture";
import { Sprite } from "pixi.js";
import enabler from "../Interface/Interfaces/TextBox/enabler";
import stateManager from "./stateManager";

/**
 * The class for the entering planet scene
 */
class EnterPlanet {
  /**
   * Usual state constructor. It also creates the options for a text box that asks whether you should enter the planet or not. Also makes the sprites all visible
   * but doesn't let them move.
   * @param app
   * @param cache
   */
  constructor(app, cache) {
    this.app = app;
    this.cache = cache;
    /**
     * @const sprites
     * @default
     */
    const sprites = Object.values(this.cache.PlayState.sprites);
    for (const i in sprites) {
      /**
       * @const sprite current sprite in loop
       * @default
       */
      const sprite = sprites[i];
      sprite.visible = true;
    }
    const textBoxTex = getTexture("text-box");
    this.textBox = new Sprite(textBoxTex);
    this.options = [
      {
        value: "OK",
        onClick: () => {
          stateManager.changeState(3);
        }
      },
      {
        value: "CANCEL",
        onClick: () => {
          stateManager.changeState(1);
        }
      }
    ];
  }
  /**
   * Creates a textbox sprite if it doesn't already exist. 
   * Also asks if you want to enter.
   */
  setup() {
    const textBox = this.textBox;
    textBox.x = 185;
    textBox.y = this.app.renderer.height - 30 - textBox.height;
    textBox.scale.set(1.05);
    this.app.stage.addChild(textBox);
    enabler.resolve((state, props) => {
      return {
        visible: true,
        options: this.options,
        description: "Do you want to enter the ghost planet?"
      };
    });
  }
  /**
   * @deprecated
   * @param {*} delta 
   */
  loop(delta) {}

  /**
   * Terminator method that makes all the stuff invisible and adds the textbox to cache.
   */
  terminate() {
    enabler.resolve(() => {
      return { visible: false };
    });

    const sprites = Object.values(this.cache.PlayState.sprites);
    for (const i in sprites) {
      const sprite = sprites[i];
      sprite.visible = false;
      console.log(sprite);
    }

    for (const i in this.app.stage.children) {
      this.app.stage.children[i].visible = false;
    }

    this.cache.EnterPlanet = { textBox: this.textBox };
    this.textBox.visible = false;
    return this.cache;
  }
}

export default EnterPlanet;
