const e = require("./storyEngine");
const db = require("./DB.json");

let i = 0;
const d = new e(db, f => {
  i = i + 1;
  f();
  console.log(i + " cc ", d.currentContext);
  console.log(i + " context ", d.context);
});

console.log(d.currentContext);
i = i + 1;
const f = d.currentContext.options[0].onClick;
f();
f();
f();
f();
f();
