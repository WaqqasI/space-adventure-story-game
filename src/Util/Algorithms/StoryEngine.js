/**
 * How a story object should look
 * @typedef {Object} Story
 * @property {string} [value] This exists if the context is a button
 * @property {string} description - the description of this scene
 * @property {boolean} jump - whether to jump back to the previous scene
 * @property {boolean} finished - whether the story is finished
 * @property {Story[]} options - More of this object as options
 */

/**
 * Class that uses context and a specific Object to give you values to use.
 */
class StoryEngine {
  /**
   *
   * @param {Story} originalContext - The original story scene
   * @param {Function} beforeChoice - Function to execute before changing storyline
   */
  constructor(originalContext, beforeChoice) {
    if (!originalContext || !beforeChoice)
      throw new Error("no context or choice function given");
    this.context = originalContext;
    this.beforeChoice = beforeChoice;
  }

  get currentContext() {
    const beginningObject = {
      description: this.context.description,
      options: this.options
    };
    const isThereAButton = {};
    if (this.context.value) isThereAButton.value = this.context.value;
    if (this.context.willJump) isThereAButton.willJump = true;
    return Object.assign(beginningObject, isThereAButton);
  }

  get options() {
    const arr = [];
    for (const i in this.context.options) {
      arr.push({
        onClick: this.createOption(i).bind(this),
        value: this.context.options[i].value,
        description: this.context.options[i].description
      });
    }
    return arr;
  }

  createOption(i) {
    return () => {
      this.beforeChoice(
        this.context.options[i].onClick ||
          this.setContext(i, this.context).bind(this),
        this.context.options[i].finished || false
      );
    };
  }

  setContext(i, context) {
    return () => {
      if (this.context.willJump) {
        this.context = this.previousContext;
      } else if (this.context.options[i].jump) {
        this.previousContext = this.context;
        this.context.options[i].willJump = true;
        this.context.options[i] = {
          ...this.context.options[i],
          options: [{ onClick: this.setContext(0, this.context), value: "OK" }]
        };
        this.context = this.context.options[i];
      } else this.context = this.context.options[i];
    };
  }
}

export default StoryEngine;
