function Add(...numbers) {
  var total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
function Multiply(...numbers) {
  var total = 1;
  for (let n of numbers) {
    total *= n;
  }
  return total;
}
module.exports = { Add, B: Multiply };
