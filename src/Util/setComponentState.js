let callBack;

/**
 * @callback stateCallback
 * @param {*} state Current state
 * @param {*} props Current props
 * @returns {Object} state
 */

/**
 *  Sets the function for the setSate of something
 * @param {stateCallback} cb for setting state values when a component updates
 */
export const valuesFromCallBack = cb => {
    callBack = cb;
};

/**
 *  Used in the seState function of a React Component to give state values from the outside;
 * @param state
 * @param props
 * @returns {Object}    state   A state values usable by a component
 */
export const stateValues = (state, props) => {
    return callBack ? callBack(state, props) : {};
};

export default {stateValues, valuesFromCallBack};
