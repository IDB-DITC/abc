const { log, error } = require("console");
var fileSystem = require("fs");
fileSystem.readFile("tesght.txt", "ascii", FileProcessor);

function FileProcessor(err, data) {
  if (err) {
    error(err);
  }
  log(data);
}
