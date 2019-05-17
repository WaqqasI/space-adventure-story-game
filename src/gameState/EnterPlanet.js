import getTexture from "../Util/getTexture";
import { Sprite } from "pixi.js";
import enabler from "../Interface/Interfaces/TextBox/enabler";

class EnterPlanet {
  constructor(app, cache) {
    this.app = app;
    this.cache = cache;
    const sprites = Object.values(cache.sprites);
    for (const i in sprites) {
      const sprite = sprites[i];
      console.log(sprite);
      sprite.visible = true;
    }
    const textBoxTex = getTexture("text-box");
    this.textBox = new Sprite(textBoxTex);
    this.options = [
      {
        value: "OK",
        onClick: (menu) => {
          menu.terminate();
        }
      },
      {
        value: "CANCEL",
        onClick: (menu) => {
          menu.terminate();
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
        description: "Do you want to enter the ghost planet? Work in progress so nothing will work exclamation mark"
      };
    });
  }

  loop(delta) {
  }

  terminate() {
    const sprites = Object.values(this.cache.sprites);
    for (const i in sprites) {
      const sprite = sprites[i];
      sprite.visible = false;
    }
    clearInterval(this.interval);
    this.cache.textBox = this.textBox;
    this.textBox.visible = false;
    return this.cache;
  }
}

export default EnterPlanet;
