function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function inc(n) {
  n++
  return n
}

function dec(n) {
  n--
  return n
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  var num = parseFloat(n).toFixed(3);
  var newNum = Number(num);
  return newNum;
}
