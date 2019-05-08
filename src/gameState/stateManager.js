import Play from "./play.js";
import SetUserName from './setUserName.js'

let state, app;

/**
 *
 * @param {Object} application app object from lib
 */
const setup = application => {
  app = application;
    state = new SetUserName(app);
  state.setup();
    SetUserName.loop(1);
};

/**
 * Changes the current game state
 * @param {Number} stateNo 1 is Play state
 */
const changeState = stateNo => {
    let cache = state.terminate();
  if (stateNo === 1) {
      state = new Play(app, cache);
    state.setup();
      state.loop(1);
  }
  // TODO: More states
};

const stateManager = { setup: setup, changeState: changeState };

export default stateManager;
