/**
 * The state when the text box appears on whether you want to enter the ghost planet
 */

import getTexture from "../Util/Graphics/getTexture";
import { Sprite } from "pixi.js";
import enabler from "../Interface/Interfaces/TextBox/enabler";
import stateManager from "./stateManager";

class EnterPlanet {
  constructor(app, cache) {
    this.app = app;
    this.cache = cache;
    const sprites = Object.values(this.cache.PlayState.sprites);
    for (const i in sprites) {
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

  loop(delta) {}

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
