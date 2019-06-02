class StoryEngine {
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
    return Object.assign(beginningObject, isThereAButton);
  }

  get options() {
    const arr = [];
    for (const i in this.context.options) {
      arr.push({
        onClick: this.createOption(i).bind(this),
        value: this.context.options[i].value
      });
    }
    return arr;
  }

  createOption(i) {
    return () => {
      this.beforeChoice(
        this.context.options[i].onClick ||
        this.setContext(i, this.context).bind(this),
        this.context.finished || false
      );
    };
  }

  setContext(i, context) {
    return () => {
      if (context.options[i].jump) {
        const previousContext = context;
        const tempContext = {
          value: context.value,
          description: context.options[i].description,
          options: [
            { value: "OK", onClick: () => (this.context = previousContext) }
          ]
        };
        this.context = tempContext;
      } else this.context = context.options[i];
    };
  }
}

module.exports = StoryEngine;
