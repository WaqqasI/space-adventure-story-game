import getTexture from "../Util/Graphics/getTexture";
import * as PIXI from "pixi.js";
import wallDetection from "../Util/Algorithms/wallDetection";
import createSpaceship from "../Util/Graphics/createSpaceship";
import stateManager from "./stateManager";
import hitTestRectangle from "../Util/Algorithms/collisionDetection";
import MovementManager from "../Util/Bases/ArrowKeyMovement";

/**
 * Starts the play state, constructor sets up all the sprites.
 */
class PlayState {
  /**
   * Adds all the this object variables and creates the spaceship sprite.
   * @param {Object} app
   * @param {Object} cache
   */
  constructor(app, cache) {
    this.app = app;
    this.sprites = {};
    const cachedSprites = cache.PlayState ? cache.PlayState.sprites : undefined;
    if (!cachedSprites) {
      const spaceshipTex = getTexture("spaceship");
      const planetsTex = getTexture("planets");
      this.sprites["spaceship"] = createSpaceship(
        cache.SettingUserName.username
      );
      this.sprites["planets"] = new PIXI.Sprite(planetsTex);
    } else {
      this.sprites["spaceship"] = cachedSprites["spaceship"];
      this.sprites["planets"] = cachedSprites["planets"];
      this.sprites["spaceship"].visible = true;
      this.sprites["planets"].visible = true;
    }
    this.previousDelta = 0;
    this.velocityManager = new MovementManager(0, 0);
    this.terminated = false;
    this.keyboard = this.velocityManager.keyboard;
    this.cache = cache || {};
  }

  /**
   * Puts the sprites in the stage after giving them a location, size and scale.
   */
  setup() {
    const spaceship = this.sprites["spaceship"];
    const app = this.app;
    spaceship.x = app.renderer.width / 1.7;
    spaceship.y = app.renderer.height / 2;

    this.sprites["planets"].scale.set(0.5, 0.5);

    app.stage.addChild(this.sprites["planets"]);
    app.stage.addChild(spaceship);

    this.loopThroughKeyboard(key => key.subscribe());
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
    const getArguments = () => [
      spaceship.x,
      spaceship.y,
      spaceship.width,
      spaceship.height,
      app.renderer.width,
      app.renderer.height,
      spaceship
    ];

    this.previousDelta = delta;
    if (newDelta > 1000) return;
    spaceship.x += this.velocityManager.vx * newDelta;
    spaceship.y += this.velocityManager.vy * newDelta;

    wallDetection(...getArguments());
    if (hitTestRectangle(spaceship, { x: 476, y: 169, width: 64, height: 64 }))
      stateManager.changeState(2);
  }

  loopThroughKeyboard(execution) {
    for (const value of Object.keys(this.keyboard)) {
      execution(this.keyboard[value]);
    }
  }

  terminate() {
    this.terminated = true;
    let sprites = Object.values(this.sprites);
    for (let i in sprites) {
      sprites[i].visible = false;
    }
    this.loopThroughKeyboard(key => key.unsubscribe());
    this.cache.PlayState = { sprites: this.sprites };
    return this.cache;
  }
}

export default PlayState;
