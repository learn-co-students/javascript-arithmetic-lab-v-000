function add(a, b) {
  var sum = a + b;
  return sum;
}

function subtract(a, b) {
  var sum = a - b
  return sum
}

function multiply(a, b) {
  var product = a * b
  return product
}

function divide(a, b) {
  var product = a / b
  return product
}

function inc(n) {
  return (n += 1)

}

function dec(n) {
  return (n -= 1)

}

function makeInt(n) {
  var outcome = parseInt(n, 10)
  return outcome
}

function preserveDecimal(n) {
  var outcome = parseFloat(n)
  return outcome;
}
