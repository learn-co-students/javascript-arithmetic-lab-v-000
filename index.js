// var a, b

// beforeEach(function() {
//   a = Math.floor(Math.random() * 1000)
//   b = Math.floor(Math.random() * 1000)
// })

// it('add(a, b) adds two numbers and returns the result', function() {
//   expect(add(a, b)).toEqual(a + b)
// })

function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function inc(n) {
	// assign the argument to variable
	var number = n; 
	// increment the value
	number ++ 
	// return incremented value Aha! moment :)
	return number;
}

function dec(n) {
	var number = n ;
	number --;
	return number;
}

function makeInt(n) {
	// take n and turn it nto interger 
	// grab the argument 
	var number = n;
	var parse = parseInt(number, 10);
	return parse;
}

function preserveDecimal(n) {
	var number = n;
	var parse = parseFloat(number);
	return parse;
}