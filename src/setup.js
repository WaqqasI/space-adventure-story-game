import * as PIXI from "pixi.js";
import play from "./play.js";
import getTexture from "./getTexture.js";

const state = play;
const sprites = {};

/**
 *
 * @param {Object} app app object from pixi
 */
const setup = app => {
  const spaceshipTex = getTexture("spaceship");
  sprites["spaceship"] = new PIXI.Sprite(spaceshipTex);

  state(app, sprites);
};

export default setup;
