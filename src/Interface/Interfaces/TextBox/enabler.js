/**
 * @file The enabler which is an event based class I created which uses promises to listen for resolution and makes changes to the TextBoxMenu interface.
 * This is slightly too complicated for this.
 */

import SetState from "../../../Util/Bases/SetStateBase";

/**
 * The enabler class for the Text Box menu
 * @class TextBoxEnabler
 * @extends SetState
 */
class TextBoxEnabler extends SetState {
  constructor() {
    super();
  }

  /**
   * Creates a promise that can be returned with .then
   * @returns {Promise<any>}
   * @example 
   *      
   *          enabler.listenForResolve(this.listener.bind(this)).then(values => {
   *            this.setState(values);
   *          });
   */
  listenForResolve(recursive) {
    this.recursive = recursive;
    return this.createPromise();
  }

  /**
   * Resolves the most recent created promise from listenForResolve
   * @param {stateCallback} state   A state function to set interface state
   */
  resolve(state) {
    this.resolver(state);
    this.recursive();
  }

  /**
   * Rejects the promise
   * @param {string}  ERROR Error message
   */
  reject(ERROR) {
    this.rejecter(ERROR);
  }
}

export default new TextBoxEnabler();
