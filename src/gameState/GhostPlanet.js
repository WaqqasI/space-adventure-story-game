import getTexture from "../Util/getTexture";
import * as PIXI from "pixi.js";

class GhostPlanet {
  constructor(app, cache) {
    this.app = app;
    this.cache = cache;
    this.sprites = cache.sprites;
    this.cache.textBox.visible = true;
    this.bg = new PIXI.Sprite(getTexture("ghost-planet"));
    this.ghosts = [];
    for (let i = 0; i < 5; i++) {
      const ghostText = getTexture("ghost");
      this.ghosts.push(new PIXI.Sprite(ghostText));
    }
  }

  setup() {
    const amountToEnlarge = this.app.renderer.width / this.bg.width;
    this.bg.width *= amountToEnlarge;
    this.bg.height *= amountToEnlarge;
    this.app.stage.removeChild(this.cache.textBox);
    //this.app.stage.addChild(this.bg)
    this.app.stage.addChild(this.cache.textBox);
    for (const i in this.ghosts) {
      this.ghosts[i].x = Math.random() * this.app.renderer.width;
      this.ghosts[i].y = Math.random() * this.bg;
      this.app.stage.addChild(this.ghosts[i]);
    }
  }

  loop() {

  }

  terminate() {
    this.bg.visible = false;
    this.cache.textBox.visible = false;
    return this.cache;
  }
}

export default GhostPlanet;