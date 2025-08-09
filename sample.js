var ht = require("http");

var server = ht.createServer((rq, rs) => {
  rs.write("<h1>IDB Round 65</h1>");
});

server.listen(7890);

console.log("app is running at localhost:7890");
