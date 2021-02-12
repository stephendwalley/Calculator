// Base Calculation Functions

function add(a, b) {
	inputArray = [a + b];
}

function subtract(a, b) {
	console.log(a - b);
	inputArray = [a - b];
} 

function multiply(a, b) {
	console.log(a * b);
	inputArray = [a * b];
}

function divide(a, b) {
	console.log(a / b);
	inputArray = [a / b];
}

//Button Functionality

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.id === "btnEqual") {
			saveInput();
			refreshDisplay(...inputArray);
		} else if (button.id === "btnClear") {
			inputArray = []
			display.textContent = "0.00";
		} else {
			modifyDisplay(button.textContent);
			if (inputArray.length < 3) {
				console.log("less than 3");
				inputArray.push(button.textContent);
			} else {
				console.log("greater than 3");
				saveInput();
				inputArray.push(button.textContent);
				refreshDisplay(inputArray.join("").toString());
			}
		}
	});
});

// Display functionality
let display = document.querySelector("#display");

function refreshDisplay(input) {
	display.textContent = input;
}

function modifyDisplay(input) {
	if (display.textContent === "0.00") {
		display.textContent = input;
	} else {
		display.textContent += input;
	}
}

// Using an array to save all the inputed values from the calculator. Then split the array into specific parts based on where the operator comes. When equals is pressed array is cleared and replaced with the solution.

let inputArray = [];

function saveInput() {
	let numberString = inputArray
		.toString()
		.replace("+", " + ")
		.replace("−", " − ")
		.replace("×", " × ")
		.replace("÷", " ÷ ")
		.replaceAll(",", "");
	let adjustedString = numberString.split(" ");
	console.log(adjustedString);
	operate.apply(this, adjustedString);
}

function operate(a, operator, b) {
	if (operator === "+") {
		add(parseFloat(a), parseFloat(b));
		console.log("It is adding!");
	} else if (operator === "−") {
		subtract(a, b);
		console.log("It is subtracting!");
	} else if (operator === "×") {
		multiply(a, b);
		console.log("It is multiplying");
	} else if (operator === "÷") {
		divide(a, b);
		console.log("It is dividing!");
	} else {
		console.log("error");
	}
}

// OPERATORS − × ÷ +
