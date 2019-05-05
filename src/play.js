import playDrawLoop from "./playDrawLoop";

/**
 *  The loop for playing
 * @param app app object from pixi
 * @param {Object} sprites object with sprites
 */

const play = (app, sprites) => {
  // This creates a texture from a 'bunny.png' image
  const spaceship = sprites["spaceship"];

  // Setup the position of the bunny
  spaceship.x = app.renderer.width / 2;
  spaceship.y = app.renderer.height / 2;

  // Rotate around the center
  spaceship.anchor.x = 0.5;
  spaceship.anchor.y = 0.5;

  spaceship.scale.set(0.5, 0.5);
  // Add the bunny to the scene we are building
  app.stage.addChild(spaceship);

  // Listen for frame updates
  app.ticker.add(delta => {
    playDrawLoop({ spaceship: spaceship }, delta, app);
  });
};

export default play;
