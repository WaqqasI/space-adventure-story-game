/**
 * @file A keyboard object which can set functions for key presses.
 */
class Keyboard {
  /**
   * Creates all the values
   * @param {String[]} value Code value for the keypress like ArrowLeft or ArrowRight
   * @param {function} press The function that fires whenever the button is pressed down
   * @param {function} release function whe button is released
   */
  constructor(value, press, release) {
    if (typeof value !== "object") value = [value];
    this.value = value;
    this.isDown = false;
    this.isUp = true;
    this.press = press;
    this.release = release;
    this.downListener = undefined;
    this.upListener = undefined;
  }

  /**
   * Handler when the button is down
   * @param {Event} e - A button keypress event
   */
  downHandler(e) {
    if (!this.value.includes(e.key)) return;
    if (this.isUp && this.press) {
      console.log("down");
      this.press();
      this.isDown = true;
      this.isUp = false;
      e.preventDefault();
    }
  }

  /**
   * Handler when button is up
   * @param {Event} e - A button keypress event
   */
  upHandler(e) {
    if (!this.value.includes(e.key)) return;
    if (this.isDown && this.release) {
      console.log("up");
      this.release();
      this.isDown = false;
      this.isUp = true;
      e.preventDefault();
    }
  }

  /**
   * Add the event listeners with the args
   */
  subscribe() {
    this.downListener = this.downHandler.bind(this);
    this.upListener = this.upHandler.bind(this);

    window.addEventListener("keydown", this.downListener, false);
    window.addEventListener("keyup", this.upListener, false);
  }

  /**
   * remove the event listeners
   */
  unsubscribe() {
    window.removeEventListener("keydown", this.downListener);
    window.removeEventListener("keyup", this.downListener);
  }
}

export default Keyboard;
