import Keyboard from "./Keyboard";

class ArrowKeyMovement {
  constructor(vx, vy) {
    const falsyObject = () =>
      new Object({ left: false, right: false, up: false, down: false });

    this.vx = vx;
    this.vy = vy;
    this.isDown = falsyObject();
    this.isUp = falsyObject();
  }

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
      up: new Keyboard(
        ["ArrowUp", "W"],
        b(this.upPress),
        b(this.upRelease)
      ),
      down: new Keyboard(
        ["ArrowDown", "S"],
        b(this.downPress),
        b(this.downRelease)
      )
    };
  }

  set velocity(v) {
    this.vx = v[0];
    this.vy = v[1];
  }

  leftPress() {
    this.vx = -0.2;
    this.isDown.left = true;
  }

  leftRelease() {
    if (this.isDown.right && this.vy === 0) return;
    this.vx = 0;
    this.isDown.left = false;
  }

  rightPress() {
    this.vx = 0.2;
    this.isDown.right = true;
  }

  rightRelease() {
    if (this.isDown.left && this.vy === 0) return;
    this.vx = 0;
    this.isDown.right = false;
  }

  upPress() {
    this.vy = -0.2;
    this.isDown.up = true;
  }

  upRelease() {
    if (this.isDown.down && this.vx === 0) return;
    this.vy = 0;
    this.isDown.up = false;
  }

  downPress() {
    this.vy = 0.2;
    this.isDown.down = true;
  }

  downRelease() {
    if (this.isDown.up && this.vx === 0) return;
    this.vy = 0;
    this.isDown.down = false;
  }
}

export default ArrowKeyMovement;
