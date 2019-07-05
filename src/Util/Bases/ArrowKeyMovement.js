/**
 * @file A class base that uses the Keyboard class and sets up movement with arrow keys.
 */


import Keyboard from "./Keyboard";
/**
 * A keyboard object
 * @typedef {Object} keyboard - a Keyboard
 * @property {Keyboard} left
 * @property {Keyboard} right
 * @property {Keyboard} up
 * @property {Keyboard} down
 */

/**
 * @class controls movement with arrow keys
 */
class ArrowKeyMovement {
  /**
   * Creates velocities and whether stuff is up or down
   * @param {number} vx - x axis velocity
   * @param {number} vy - y axis velocity
   */
  constructor(vx, vy) {
    const falsyObject = () =>
      new Object({ left: false, right: false, up: false, down: false });

    this.vx = vx;
    this.vy = vy;
    this.isDown = falsyObject();
    this.isUp = falsyObject();
  }

  /**
   * Getter function that gives an object for each arrow key/direction
   * @returns {keyboard} A Keyboard
   */
  get keyboard() {
    const b = func => func.bind(this);
    return {
      left: new Keyboard(
        ["ArrowLeft", "A"],
        b(this.leftPress),
        b(this.leftRelease)
      ),
      right: new Keyboard(
        ["ArrowRight", "D"],
        b(this.rightPress),
        b(this.rightRelease)
      ),
      up: new Keyboard(["ArrowUp", "W"], b(this.upPress), b(this.upRelease)),
      down: new Keyboard(
        ["ArrowDown", "S"],
        b(this.downPress),
        b(this.downRelease)
      )
    };
  }

  /**
   * A setter function that sets velocity
   */
  set velocity(v) {
    this.vx = v[0];
    this.vy = v[1];
  }

  /**
   * When the left button is pressed
   */
  leftPress() {
    this.vx = -0.2;
    this.isDown.left = true;
  }
  /**
   * When the left button is released
   */
  leftRelease() {
    if (this.isDown.right && this.vy === 0) return;
    this.vx = 0;
    this.isDown.left = false;
  }
  /**
   * When the right button is pressed
   */
  rightPress() {
    this.vx = 0.2;
    this.isDown.right = true;
  }
  /**
   * When the left button is released
   */
  rightRelease() {
    if (this.isDown.left && this.vy === 0) return;
    this.vx = 0;
    this.isDown.right = false;
  }
  /**
   * When the up button is pressed
   */
  upPress() {
    this.vy = -0.2;
    this.isDown.up = true;
  }
  /**
   * When the up button is released
   */
  upRelease() {
    if (this.isDown.down && this.vx === 0) return;
    this.vy = 0;
    this.isDown.up = false;
  }
  /**
   * When the down button is pressed
   */
  downPress() {
    this.vy = 0.2;
    this.isDown.down = true;
  }
  /**
   * When the down button is released
   */
  downRelease() {
    if (this.isDown.up && this.vx === 0) return;
    this.vy = 0;
    this.isDown.down = false;
  }
}

export default ArrowKeyMovement;
