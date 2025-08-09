const { log } = require("console");
var read = require("readline");

var rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your name?", (ans) => {
  log("user entered data is :" + ans);
  rl.close();
});
