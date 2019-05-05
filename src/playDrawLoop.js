let vx = -1;

/**
 *
 * @param {Object} sprites an object with all the sprites
 * @param {number} delta milliseconds before the last tick
 * @param {Object} app pixi.js object
 */
let playDrawLoop = (sprites, delta, app) => {
  console.log(sprites.spaceship.x);
  if (sprites.spaceship.x >= app.renderer.width) {
    vx = -1;
    console.log("it's -2");
  }
  if (sprites.spaceship.x <= 0) {
    vx = 1;
    console.log("not 2");
  }
  sprites.spaceship.x += vx * delta;

  sprites.spaceship.rotation += 0.01;
};

export default playDrawLoop;
