/**
 * @file Major file for managing all the game state. Everything gets imported and the state variable can be changed according to the need.
 * All the other state files in this folder will need to export a class that has a constructor and set, loop and terminate methods
 */

import PlayState from "./PlayState.js";
import SettingUserName from "./SettingUserName.js";
import EnterPlanet from "./EnterPlanet";
import GhostPlanet from "./GhostPlanet";

let state, app;

/**
 * Only executed once before everything to set up default state.
 * @param {Object} application app object from lib
 */
const setup = application => {
  app = application;
  state = new SettingUserName(app);
  state.setup();
  SettingUserName.loop(1);
};

/**
 * Changes the current game state
 * @param {Number} stateNo 1 is PlayState state
 * @param {Object=} extraCache optionally add more cache values that will be combined
 * @example
 *
 *      changeState(1, {username: 'test'}) // change to game state and add the extra cache of the username.
 *
 */
const changeState = (stateNo, extraCache) => {
  let cache = Object.assign(state.terminate(), extraCache || {});
  if (stateNo === 1) {
    state = new PlayState(app, cache);
    state.setup();
    state.loop(1);
  } else if (stateNo === 2) {
    state = new EnterPlanet(app, cache);
    state.setup();
    state.loop(1);
  } else if (stateNo === 3) {
    state = new GhostPlanet(app, cache);
    state.setup();
    state.loop(1);
  }
  // TODO: More states
};

const stateManager = { setup: setup, changeState: changeState };

export default stateManager;
