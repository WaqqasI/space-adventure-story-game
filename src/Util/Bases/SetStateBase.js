/**
 * @callback stateCallback
 * @param {*} state Current state
 * @param {*} props Current props
 * @returns {Object} state
 */

class ComponentStateManager {
  constructor() {
  }

  /**
   *  Used in the seState function of a React Component to give state values from the outside;
   * @param state
   * @param props
   * @returns {Object}    state   A state values usable by a component
   */
  stateValues() {
    throw new Error("No state Values specified");
  }

  listenForResolve() {
    throw new Error("No setup specified");
  }

  resolve() {
    return new Error("no resolver specified");
  }

  reject() {
    return new Error("No rejecter specified");
  }

  createPromise() {
    return new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejecter = reject;
    });
  }
}

export default ComponentStateManager;
