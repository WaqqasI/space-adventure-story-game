const e = require("./storyEngine");
const db = require("./DB.json");

const b = new e(db, f => {
  console.log("clicked");
  console.log("cc", b.currentContext);
  console.log("context", b.context);
  f();
});

const s = b.currentContext;
console.log(s.options[0].onClick());
const d = b.currentContext;
console.log(d.options[0].onClick());
const n = b.currentContext;
console.log(n.options[0].onClick());
const z = b.currentContext;
console.log("hmm", z);
console.log(z.options[0].onClick());
console.log(b.currentContext.options[0].onClick());
console.log(b.currentContext.options[0].onClick());
console.log(b.currentContext.options[0].onClick());
