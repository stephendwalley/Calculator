// Base Calculation Functions

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

//Button Functionality

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "btnEqual") {
			operate();
		} else {
			modifyDisplay(button.textContent);
			console.log(button.id);
		}
	});
});

// Display functionality
let display = document.querySelector("#display");

function modifyDisplay(input) {
	if (display.textContent === "0.00") {
		console.log("it is 0!");
		display.textContent = input;
		storeNumber(input);
	} else {
		console.log("it is not 0!");
		display.textContent += input;
		storeNumber(input);
	}
}

// Operation of calculator to call functions when equal is pressed
let firstNumber = 0;
let secondNumber = 0;
let choiceOperator = "";

function storeNumber(input) {
	if (Number.isInteger(parseFloat(input))) {
		firstNumber += input;
		console.log("It is a number!");
	} else {
		console.log("It is not a number!");
	}
}

function operate(a, b, operator) {
	if (operator === "add") {
		add(a, b);
	} else if (operator === "subtract") {
		subtract(a, b);
	} else if (operator === "multiply") {
		multiply(a, b);
	} else if (operator === "divide") {
		divide(a, b);
	}
}
