/**
 * @file a utility function that creates a spaceship sprite in a container with it's name
 */

import * as PIXI from "pixi.js";
import getTexture from "./getTexture";

/**
 * Creates a spaceship with a name
 * @param {string} name - username
 * @returns {PIXI.Container} spaceship a spaceship with the name
 */
const createSpaceship = name => {
  const container = new PIXI.Container();
  const spaceshipTex = getTexture("spaceship");
  const spaceship = new PIXI.Sprite(spaceshipTex);
  const textStyle = new PIXI.TextStyle({
    fill: "white",
    fontSize: 30,
    wordWrap: true,
    wordWrapWidth: 100,
    align: "center",
    fontFamily: "VT323"
  });
  const usernameSprite = new PIXI.Text(name, textStyle);

  spaceship.anchor.x = 0.5;
  spaceship.anchor.y = 0.5;

  spaceship.scale.set(0.2, 0.2);
  container.addChild(spaceship);

  usernameSprite.y = spaceship.height / 2;
  usernameSprite.x = 0 - spaceship.width / 2;

  container.addChild(spaceship);
  container.addChild(usernameSprite);

  return container;
};

export default createSpaceship;
