// 1. Basic math operations

// Addition
const add = function (a, b) {
	return a + b;
};

// Soustraction
const subtract = function (a, b) {
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
		case '-':
			return subtract(number1, number2);
		case '*':
			return multiply(number1, number2);
		case '÷':
			return divide(number1, number2);
		default:
			throw new Error('Unknown operation.');
	}
};

// 2bis. Create 3 variables to always hold three elements : firstNumber, secondNumber and currentOperator

let firstNumber;
let secondNumber;
let currentOperator;

// 3. Programming basic interactions with buttons

// Function for displaying anything
const displayEle = document.querySelector('#display');

const display = function (element) {
	displayEle.value += element;
};

// EventListeners for class ".digits"
const digits = document.querySelectorAll('.digits');
digits.forEach((button) => button.addEventListener('click', (e) => display(e.target.value)));

// EventListeners for class ".operators"
const operators = document.querySelectorAll('.operator');
operators.forEach((button) =>
	button.addEventListener('click', (e) => {
		firstNumber = displayEle.value;
		currentOperator = e.target.value;
		displayEle.value = '';
		console.log(firstNumber, currentOperator);
	})
);

// EventListener for class "equal-operator"
const equalOperator = document.querySelector('.equal-operator');
equalOperator.addEventListener('click', (e) => {
	secondNumber = displayEle.value;
	displayEle.value = operate(currentOperator, parseInt(firstNumber), parseInt(secondNumber));
});

// EventListeners for class ".buttonAC"
const buttonAC = document.querySelector('.buttonAC');
buttonAC.addEventListener('click', (e) => {
	displayEle.value = '';
	console.log('Erase everything!');
});

// EventListeners for class ".buttonClear"
const buttonClear = document.querySelector('.buttonClear');
buttonClear.addEventListener('click', (e) => console.log('Erase last input!'));


