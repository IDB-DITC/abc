var fs = require("fs");

setTimeout(() => {
  var a = 33;
  var b = 22;
  var total = a - b;

  var msg = `\nTime: ${new Date().toLocaleTimeString()}\n${a} - ${b} = ${total}`;

  fs.appendFile("log.txt", msg, (err) => {
    console.error(err);
  });
}, 5000);
console.log(`Task completed at ${new Date().toLocaleTimeString()}`);
