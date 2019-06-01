class StoryEngine {
  constructor(originalContext, beforeChoice) {
    if (!originalContext || !beforeChoice) throw new Error("no context or choice function given");
    this.context = originalContext;
    this.beforeChoice = beforeChoice;
  }

  get currentContext() {
    return {
      value: this.context.value,
      options: this.options
    };
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
      this.beforeChoice(this.setContext(i).bind(this), this.context.finished || false);
    };
  }

  setContext(i) {
    return () => {
      if (this.context.jump) {
        const previousContext = this.context;
        const tempContext = {
          value: this.context.value,
          options: [{ value: "OK", onClick: (() => this.context = previousContext).bind(this) }]
        };
        this.context = tempContext;
      }
      ;
      this.context = this.context.options[i];
    };
  }
}

module.exports = StoryEngine;