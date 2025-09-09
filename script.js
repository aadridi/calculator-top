// 1. Basic math operations

// Addition
const add = function (a, b) {
	return a + b;
};

// Soustraction
const substract = function (a, b) {
	return a - b;
};

// Multiplication
const multiply = function (a, b) {
	return a * b;
};

// Division
const divide = function (a, b) {
	return a / b;
};

// 2. Function operate(operator, number1, number2)
const operate = function (operator, number1, number2) {
	switch (operator) {
		case '+':
			return add(number1, number2);
			break;
		case '-':
			return substract(number1, number2);
			break;
		case '*':
			return multiply(number1, number2);
			break;
		case '÷':
			return divide(number1, number2);
			break;
		default:
			console.log('Unknown operator');
	}
};
