import getTexture from "./getTexture";
import * as PIXI from "pixi.js";

/**
 * Starts the play state, constructor sets up all the sprites.
 */
class Play {
  /**
   * Adds all the this object variables and creates the spaceship sprite.
   * @param {Object} app
   */
  constructor(app) {
    this.app = app;
    this.sprites = {};
    const spaceshipTex = getTexture("spaceship");
    this.sprites["spaceship"] = new PIXI.Sprite(spaceshipTex);
    this.previousDelta = 0;
    this.vx = -1;
    this.terminated = false;
  }

  /**
   * Puts the sprites in the stage after giving them a location, size and scale.
   */
  setup() {
    const spaceship = this.sprites["spaceship"];
    const app = this.app;
    spaceship.x = app.renderer.width / 2;
    spaceship.y = app.renderer.height / 2;

    spaceship.anchor.x = 0.5;
    spaceship.anchor.y = 0.5;

    spaceship.scale.set(0.5, 0.5);

    app.stage.addChild(spaceship);
    console.log("added to stage");
  }

  /**
   * Recursive function as a loop which moves the spaceship.
   * @param {Number} [delta] Seconds since the loop started, originally stays as undefined but given a value by requestAnimationFrame
   */
  loop(delta) {
    const spaceship = this.sprites["spaceship"];
    const app = this.app;
    this.previousDelta = delta ? delta : 1;
    const newDelta = delta - this.previousDelta;

    if (spaceship.x + spaceship.width / 2 >= app.renderer.width) {
      this.vx = -1;
    }
    if (spaceship.x - spaceship.width / 2 <= 0) {
      this.vx = 1;
    }
    spaceship.x += this.vx * (newDelta ? newDelta : 1);
    if (!this.terminated) requestAnimationFrame(this.loop.bind(this));
  }
  terminate() {
    this.terminated = true;
    this.sprites["spaceship"].visible = false;
    // TODO: Loop through sprites object to do this
  }
}

export default Play;
