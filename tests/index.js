const e = require("./storyEngine");
const db = require("./DB.json");

let i = 0;
const d = new e(db, f => {
  i = i++;
  f();
  console.log(i + " cc ", d.currentContext);
  console.log(i + " context ", d.context);
});
