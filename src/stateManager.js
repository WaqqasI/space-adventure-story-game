import Play from "./play.js";

let state,app;

/**
 *
 * @param {Object} application app object from lib
 */
const setup = application => {
  app = application;
  state = new Play(app);
  state.setup();
  state.loop();
};

/**
 * Changes the current game state
 * @param {Number} stateNo 1 is Play state
 */
const changeState = (stateNo) => {
  state.terminate()
  if (stateNo === 1) {
    state = new Play(app);
    state.setup();
    state.loop();
  }
  // TODO: More states
}

const stateManager = { setup: setup, changeState: changeState };

export default stateManager;
