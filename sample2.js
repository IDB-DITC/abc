var ht = require("http");
var url = require("url");

var server = ht.createServer((rq, rs) => {
  const { query } = url.parse(rq.url, true);
  var op = query.operation;
  var n1 = Number(query.first);
  var n2 = Number(query.second);
  if (op == "add") {
    rs.write(`<h1>${n1} + ${n2} = ${n1 + n2}</h1>`);
  } else if (op == "sub") {
    rs.write(`<h1>${n1} - ${n2} = ${n1 - n2}</h1>`);
  } else if (op == "mul") {
    rs.write(`<h1>${n1} x ${n2} = ${n1 * n2}</h1>`);
  } else if (op == "div") {
    rs.write(`<h1>${n1} / ${n2} = ${n1 / n2}</h1>`);
  } else {
    rs.write(`<h1>invalid operation [${op}]</h1>`);
  }
  rs.end();
});

server.listen(7890);

console.log("app is running at localhost:7890");
