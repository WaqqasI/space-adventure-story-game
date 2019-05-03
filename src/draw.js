import getTexture from "./getTexture.js";
import * as PIXI from "pixi.js";
const draw = (app) => {
  const spaceshipTex = getTexture("spaceship");
  // This creates a texture from a 'bunny.png' image
  const spaceship = new PIXI.Sprite(spaceshipTex);

  // Setup the position of the bunny
  spaceship.x = app.renderer.width / 2;
  spaceship.y = app.renderer.height / 2;

  // Rotate around the center
  spaceship.anchor.x = 0.5;
  spaceship.anchor.y = 0.5;

  // Add the bunny to the scene we are building
  spaceship.stage.addChild(spaceship);

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    spaceship.rotation += 0.01;
  });
}

export default draw