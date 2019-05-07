import getTexture from "../Util/getTexture";
import Keyboard from "../Util/Keyboard";
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
    const planetsTex = getTexture("planets");
    this.sprites["spaceship"] = new PIXI.Sprite(spaceshipTex);
    this.sprites["planets"] = new PIXI.Sprite(planetsTex);
    this.previousDelta = 0;
    this.vx = 0;
    this.vy = 0;
    this.terminated = false;
    this.afterEffectX = 0;
    this.afterEffectY = 0;
    this.keyboard = {
      left: new Keyboard(
        "ArrowLeft",
        this.leftPress.bind(this),
        this.leftRelease.bind(this)
      ),
      right: new Keyboard(
        "ArrowRight",
        this.rightPress.bind(this),
        this.rightRelease.bind(this)
      ),
      up: new Keyboard(
        "ArrowUp",
        this.upPress.bind(this),
        this.upRelease.bind(this)
      ),
      down: new Keyboard(
        "ArrowDown",
        this.downPress.bind(this),
        this.downRelease.bind(this)
      )
    };
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

    spaceship.scale.set(0.2, 0.2);

    this.sprites["planets"].scale.set(0.5, 0.5);

    app.stage.addChild(this.sprites["planets"]);
    app.stage.addChild(spaceship);

    this.keyboard.left.subscribe();
    this.keyboard.right.subscribe();
    this.keyboard.up.subscribe();
    this.keyboard.down.subscribe();

    console.log("added to stage");
  }

  /**
   * Recursive function as a loop which moves the spaceship.
   * @param {Number} [delta] Seconds since the loop started, originally stays as undefined but given a value by requestAnimationFrame
   */
  loop(delta) {
    this.game(delta);
    if (!this.terminated) requestAnimationFrame(this.loop.bind(this));
  }

  game(delta) {
    const spaceship = this.sprites["spaceship"];
    const app = this.app;
    const newDelta = delta - (this.previousDelta ? this.previousDelta : 0);
    this.previousDelta = delta;
    if (newDelta > 1000) return;

    spaceship.x += this.vx * newDelta;
    spaceship.y += this.vy * newDelta;
    Play.wallDetection(
      spaceship.x,
      spaceship.y,
      spaceship.width,
      spaceship.height,
      app.renderer.width,
      app.renderer.height,
      spaceship
    );
  }

  /**
   * Detects if sprite is hitting walls.
   * @param {number} x Sprite x coordinate
   * @param {number} y sprite y coordinate
   * @param {number} width sprite width
   * @param {number} height sprite height
   * @param {number} appWidth renderer width
   * @param {number} appHeight renderer height
   * @param {object} sprite
   */
  static wallDetection(x, y, width, height, appWidth, appHeight, sprite) {
    // Side Walls
    if (x + width / 2 >= appWidth) {
      sprite.x = appWidth - width / 2;
    }
    if (x - width / 2 <= 0) {
      sprite.x = width / 2;
    }

    // up and down walls
    if (y + height / 2 >= appHeight) {
      sprite.y = appHeight - height / 2;
    }
    if (y - height / 2 <= 0) {
      sprite.y = height / 2;
    }
  }

  leftPress() {
    this.vx = -0.2;
  }
  leftRelease() {
    this.vx = 0;
  }

  rightPress() {
    this.vx = 0.2;
  }
  rightRelease() {
    this.vx = 0;
  }

  upPress() {
    this.vy = -0.2;
  }
  upRelease() {
    this.vy = 0;
  }

  downPress() {
    this.vy = 0.2;
  }
  downRelease() {
    this.vy = 0;
  }

  terminate() {
    this.terminated = true;
    let sprites = Object.values(this.sprites);
    for (let i in sprites) {
      sprites[i].visible = false;
    }
  }
}

export default Play;
